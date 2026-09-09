/* ---------------------------------------------------------------------------
   portrait.js — the point cloud that assembles into a portrait at the bottom.

   A photo (or, absent one, a procedurally drawn bust) is rasterised offscreen
   and sampled on a grid. Each surviving pixel becomes a particle, kept with a
   probability that follows how strongly it reads against its background, so
   the cloud thickens over hair, brows and the line of the mouth and thins out
   across flat skin. Density carries the likeness; the dots stay a fairly even
   brightness, the way a stipple drawing works.

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

  /* ------------------------------------------------------------ sampling */

  function samplePixels(buffer, bw, bh) {
    var data = buffer.getImageData(0, 0, bw, bh).data;
    var n = bw * bh;
    var i, x, y;

    var lum = new Float32Array(n);
    var opaque = new Uint8Array(n);
    for (i = 0; i < n; i++) {
      var o = i * 4;
      if (data[o + 3] < 24) continue;
      opaque[i] = 1;
      lum[i] = (data[o] * 0.2126 + data[o + 1] * 0.7152 + data[o + 2] * 0.0722) / 255;
    }

    /* Work out which way round the image is by averaging its border. A studio
       photo on white needs the dark pixels; the drawn bust is light on
       transparent and needs the bright ones. */
    var edge = 0, edgeN = 0;
    for (x = 0; x < bw; x++) { edge += lum[x] + lum[(bh - 1) * bw + x]; edgeN += 2; }
    for (y = 0; y < bh; y++) { edge += lum[y * bw] + lum[y * bw + bw - 1]; edgeN += 2; }
    var darkIsDense = (edge / edgeN) > 0.55;

    /* Flood the background inward from the frame, so only the subject is left.
       Growing from the border rather than thresholding globally means a bright
       forehead or a catchlight never punches a hole in the face. */
    var bg = new Uint8Array(n);
    var stack = [];

    function seed(sx, sy) {
      if (sx < 0 || sy < 0 || sx >= bw || sy >= bh) return;
      var k = sy * bw + sx;
      if (bg[k]) return;
      var isBg = !opaque[k] || (darkIsDense ? lum[k] > 0.80 : lum[k] < 0.12);
      if (!isBg) return;
      bg[k] = 1;
      stack.push(k);
    }

    for (x = 0; x < bw; x++) { seed(x, 0); seed(x, bh - 1); }
    for (y = 0; y < bh; y++) { seed(0, y); seed(bw - 1, y); }

    while (stack.length) {
      var p = stack.pop();
      var px = p % bw;
      var py = (p - px) / bw;
      seed(px + 1, py); seed(px - 1, py); seed(px, py + 1); seed(px, py - 1);
    }

    var found = [];
    for (y = 0; y < bh; y += STEP) {
      for (x = 0; x < bw; x += STEP) {
        i = y * bw + x;
        if (bg[i] || !opaque[i]) continue;

        /* 0 where the subject melts into its background, 1 at the strongest
           tones, which is what makes features legible in a flat point cloud.
           The base is deliberately high: the subject wants to read as a solid
           mass, with tone as variation on top rather than the whole signal,
           or flat skin hollows out and the face reads as a hole. */
        var detail = darkIsDense ? 1 - lum[i] : lum[i];
        var density = Math.min(1, 0.56 + detail * 0.5);

        /* dissolve the last stretch so the shoulders trail off into nothing */
        var fy = y / bh;
        if (fy > 0.74) density *= 1 - (fy - 0.74) / 0.26;

        if (Math.random() > density) continue;
        found.push({ x: x, y: y, detail: detail });
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
        alpha: Math.min(0.92, 0.36 + q.detail * 0.5),
        size: q.detail > 0.55 ? 1.7 : 1.2,
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

  /* Try the photo named on the canvas; fall back to the drawn bust. */
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

    /* The full budget packed into a phone-sized cloud turns muddy, so draw an
       even subset there. The set was shuffled at build time, which is what
       makes taking every other one a fair thinning rather than a crop. */
    var stride = scale < 340 ? 2 : 1;
    var dot = scale < 340 ? 0.85 : 1;

    for (var i = 0; i < points.length; i += stride) {
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
