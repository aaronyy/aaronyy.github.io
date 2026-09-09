/* ---------------------------------------------------------------------------
   portrait.js — the point cloud that assembles into a portrait at the bottom.

   An image is rasterised offscreen and sampled on a grid. Each surviving pixel
   becomes a particle, kept with a probability built from a solid base plus the
   local tone and contrast, so the silhouette always reads while hair, brows
   and the line of the mouth thicken up. Density carries the likeness; the dots
   stay a fairly even brightness, the way a stipple drawing works.

   Finding the subject takes one of two routes:
     - a cut-out PNG arrives with its background already transparent, so its
       alpha channel *is* the mask and nothing needs guessing
     - otherwise the frame edge is averaged to work out whether the subject is
       the dark pixels or the bright ones, and the background is flooded inward
       from the border

   Every particle holds a scattered origin and a target on the portrait. Scroll
   progress drives the trip between them, with a per-particle delay so the
   likeness gathers rather than snapping into place.

   Public API
     Portrait.setProgress(0..1)
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var canvas = document.getElementById('portrait');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');

  var W = 0, H = 0, dpr = 1;
  var cx = 0, cy = 0, scale = 0;
  var progress = 0;
  var running = true;
  var t = 0, last = 0;

  var points = [];
  var SAMPLE_H = 300;          // sampling resolution, in px of the offscreen buffer
  var BUST_ASPECT = 0.86;      // only used by the drawn stand-in
  var MAX_POINTS = 5200;
  var STEP = 2;                // grid stride when sampling

  /* ------------------------------------------------------------- helpers */

  function rand(a, b) { return a + Math.random() * (b - a); }

  function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

  /* -------------------------------------------------- procedural fallback */

  /* A head, neck and shoulders, then a radial gradient so the cloud thins out
     toward the edges the way a lit photo would. */
  function drawBust(c, w, h) {
    c.fillStyle = '#fff';

    /* hair mass, slightly larger and higher than the skull */
    c.beginPath();
    c.ellipse(w * 0.50, h * 0.265, w * 0.183, h * 0.207, 0, 0, Math.PI * 2);
    c.fill();

    /* head */
    c.beginPath();
    c.ellipse(w * 0.50, h * 0.305, w * 0.157, h * 0.196, 0, 0, Math.PI * 2);
    c.fill();

    /* neck */
    c.beginPath();
    c.moveTo(w * 0.435, h * 0.44);
    c.lineTo(w * 0.565, h * 0.44);
    c.lineTo(w * 0.575, h * 0.57);
    c.lineTo(w * 0.425, h * 0.57);
    c.closePath();
    c.fill();

    /* shoulders and chest */
    c.beginPath();
    c.moveTo(w * 0.06, h);
    c.bezierCurveTo(w * 0.13, h * 0.70, w * 0.30, h * 0.585, w * 0.44, h * 0.55);
    c.lineTo(w * 0.56, h * 0.55);
    c.bezierCurveTo(w * 0.70, h * 0.585, w * 0.87, h * 0.70, w * 0.94, h);
    c.closePath();
    c.fill();

    /* Light falling from the upper left. source-atop keeps the gradient inside
       the silhouette; a blend mode like multiply would still composite its
       alpha source-over and flood the whole box. */
    c.globalCompositeOperation = 'source-atop';
    var g = c.createRadialGradient(
      w * 0.40, h * 0.25, h * 0.02,
      w * 0.50, h * 0.48, h * 0.92
    );
    g.addColorStop(0.00, '#ffffff');
    g.addColorStop(0.45, '#a8a8a8');
    g.addColorStop(0.80, '#565656');
    g.addColorStop(1.00, '#1e1e1e');
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    c.globalCompositeOperation = 'source-over';
  }

  /* ------------------------------------------------------- subject masking */

  /* Grow the background inward from the frame. Thresholding the whole image
     instead would cut bright highlights out of the middle of a face. */
  function floodBackground(lum, alpha, bw, bh, darkIsDense) {
    var bg = new Uint8Array(bw * bh);
    var stack = [];

    function seed(sx, sy) {
      if (sx < 0 || sy < 0 || sx >= bw || sy >= bh) return;
      var k = sy * bw + sx;
      if (bg[k]) return;
      var isBg = alpha[k] < 24 || (darkIsDense ? lum[k] > 0.80 : lum[k] < 0.12);
      if (!isBg) return;
      bg[k] = 1;
      stack.push(k);
    }

    for (var x = 0; x < bw; x++) { seed(x, 0); seed(x, bh - 1); }
    for (var y = 0; y < bh; y++) { seed(0, y); seed(bw - 1, y); }

    while (stack.length) {
      var p = stack.pop();
      var px = p % bw;
      var py = (p - px) / bw;
      seed(px + 1, py); seed(px - 1, py); seed(px, py + 1); seed(px, py - 1);
    }
    return bg;
  }

  /* ------------------------------------------------------------ sampling */

  function samplePixels(buffer, bw, bh) {
    var data = buffer.getImageData(0, 0, bw, bh).data;
    var n = bw * bh;
    var i, x, y;

    var lum = new Float32Array(n);
    var alpha = new Uint8Array(n);
    var clear = 0;

    for (i = 0; i < n; i++) {
      var o = i * 4;
      alpha[i] = data[o + 3];
      if (data[o + 3] < 24) { clear++; continue; }
      lum[i] = (data[o] * 0.2126 + data[o + 1] * 0.7152 + data[o + 2] * 0.0722) / 255;
    }

    var subject = new Uint8Array(n);

    if (clear / n > 0.04) {
      /* Already cut out: alpha is the mask. 128 rather than 0 keeps the
         antialiased rim from becoming a halo of stray particles. */
      for (i = 0; i < n; i++) subject[i] = alpha[i] >= 128 ? 1 : 0;
    } else {
      var edge = 0, edgeN = 0;
      for (x = 0; x < bw; x++) { edge += lum[x] + lum[(bh - 1) * bw + x]; edgeN += 2; }
      for (y = 0; y < bh; y++) { edge += lum[y * bw] + lum[y * bw + bw - 1]; edgeN += 2; }
      var darkIsDense = (edge / edgeN) > 0.55;

      var bg = floodBackground(lum, alpha, bw, bh, darkIsDense);
      for (i = 0; i < n; i++) subject[i] = (!bg[i] && alpha[i] >= 24) ? 1 : 0;

      /* A dark subject on a light ground wants its tones read the other way
         up, so the emphasis still lands on hair and brows. */
      if (darkIsDense) {
        for (i = 0; i < n; i++) if (subject[i]) lum[i] = 1 - lum[i];
      }
    }

    var found = [];
    for (y = 0; y < bh; y += STEP) {
      for (x = 0; x < bw; x += STEP) {
        i = y * bw + x;
        if (!subject[i]) continue;

        /* local contrast, which is what keeps features legible once colour is
           thrown away and only dot density is left to carry them */
        var gx = (x > 0 && x < bw - 1) ? lum[i + 1] - lum[i - 1] : 0;
        var gy = (y > 0 && y < bh - 1) ? lum[i + bw] - lum[i - bw] : 0;
        var grad = Math.min(1, Math.sqrt(gx * gx + gy * gy) * 3.2);
        var tone = lum[i];

        /* The base keeps flat areas from hollowing out entirely, which on a
           dark shirt would lose the whole torso. Tone carries most of the
           weight on top of it, so a lit face separates from dark clothing
           instead of everything landing at the same density. */
        var density = Math.min(1, 0.42 + tone * 0.45 + grad * 0.34);

        /* dissolve the last stretch so the shoulders trail off into nothing */
        var fy = y / bh;
        if (fy > 0.74) density *= 1 - (fy - 0.74) / 0.26;

        if (Math.random() > density) continue;
        found.push({ x: x, y: y, tone: tone, grad: grad });
      }
    }

    /* shuffle before truncating, so trimming to budget thins evenly instead of
       lopping off the bottom of the image */
    for (i = found.length - 1; i > 0; i--) {
      var j = (Math.random() * (i + 1)) | 0;
      var tmp = found[i]; found[i] = found[j]; found[j] = tmp;
    }
    if (found.length > MAX_POINTS) found.length = MAX_POINTS;

    points = found.map(function (q) {
      var a = rand(0, Math.PI * 2);
      var r = rand(0.55, 1.9);
      return {
        /* both axes divided by height, so the image's aspect is preserved */
        tx: (q.x - bw / 2) / bh,
        ty: (q.y - bh / 2) / bh,
        /* scattered origin, flung outward from the portrait's centre */
        sx: Math.cos(a) * r,
        sy: Math.sin(a) * r * 0.75,
        delay: Math.random() * 0.55,
        alpha: Math.min(0.95, 0.22 + q.tone * 0.62 + q.grad * 0.22),
        size: (q.tone > 0.6 || q.grad > 0.5) ? 1.7 : 1.2,
        phase: rand(0, Math.PI * 2),
        drift: rand(0.004, 0.013)
      };
    });
  }

  function buildFrom(image) {
    var bh = SAMPLE_H;
    var bw = Math.round(bh * (image ? image.width / image.height : BUST_ASPECT));

    var off = document.createElement('canvas');
    off.width = bw;
    off.height = bh;
    var c = off.getContext('2d', { willReadFrequently: true });

    if (image) c.drawImage(image, 0, 0, bw, bh);
    else drawBust(c, bw, bh);

    samplePixels(c, bw, bh);
  }

  /* Try the image named on the canvas; fall back to the drawn bust. */
  function load() {
    var src = canvas.dataset.src;
    if (!src) { buildFrom(null); return; }

    var img = new Image();
    img.decoding = 'async';
    img.onload = function () { buildFrom(img); };
    img.onerror = function () { buildFrom(null); };
    img.src = src;
  }

  /* ------------------------------------------------------------- drawing */

  function draw(dt) {
    t += dt;

    ctx.clearRect(0, 0, W, H);
    if (progress <= 0.001 || !points.length) return;

    var p = progress;

    /* Smaller dots on a phone-sized cloud, so the detail survives the scale
       down without the points blurring into each other. Thinning the set
       instead loses too much of a dark subject. */
    var dot = scale < 340 ? 0.7 : 1;

    for (var i = 0; i < points.length; i++) {
      var q = points[i];

      /* stagger: each particle starts its trip a little later than the last */
      var span = 1 - q.delay * 0.5;
      var local = (p - q.delay * 0.5) / span;
      if (local < 0) local = 0; else if (local > 1) local = 1;
      var e = easeOutCubic(local);

      /* settled particles breathe very slightly so the cloud stays alive */
      var shimmer = e > 0.98 ? Math.sin(t * q.drift * 8 + q.phase) * 0.9 : 0;

      var nx = q.sx + (q.tx - q.sx) * e;
      var ny = q.sy + (q.ty - q.sy) * e;

      var x = cx + nx * scale + shimmer;
      var y = cy + ny * scale + shimmer * 0.6;

      ctx.globalAlpha = q.alpha * p * (0.35 + e * 0.65);
      ctx.fillStyle = i % 11 === 0 ? '#e8e4dc' : '#b8b2a4';
      ctx.fillRect(x, y, q.size * dot, q.size * dot);
    }
    ctx.globalAlpha = 1;
  }

  function frame(now) {
    if (!running) return;
    var dt = last ? Math.min(3, (now - last) / 16.667) : 1;
    last = now;
    draw(dt);
    requestAnimationFrame(frame);
  }

  /* ------------------------------------------------------------- sizing */

  /* scale is the on-screen height of the sampled box */
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (W >= 880) {
      cx = W * 0.72;
      cy = H * 0.50;
      scale = Math.min(H * 0.82, W * 0.42);
    } else {
      /* on a phone it sits centred and higher, above the contact copy */
      cx = W * 0.5;
      cy = H * 0.28;
      scale = Math.min(H * 0.40, W * 0.70);
    }
  }

  /* ------------------------------------------------------------- public */

  window.Portrait = {
    setProgress: function (v) {
      progress = Math.max(0, Math.min(1, v));
    }
  };

  /* --------------------------------------------------------------- boot */

  resize();
  load();
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) { last = 0; requestAnimationFrame(frame); }
  });

  requestAnimationFrame(frame);
})();
