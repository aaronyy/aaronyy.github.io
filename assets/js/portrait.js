/* ---------------------------------------------------------------------------
   portrait.js — the point cloud that assembles into a portrait at the bottom.

   A photo (or, absent one, a procedurally drawn bust) is rasterised offscreen
   and sampled on a grid. Bright pixels become particles, and the brighter the
   pixel the more likely it is to be kept, which is what gives the cloud its
   density falloff instead of a flat cut-out.

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
  var visible = true;
  var progress = 0;
  var running = true;
  var t = 0, last = 0;

  var points = [];
  var SAMPLE_H = 300;          // sampling resolution, in px of the offscreen buffer
  var ASPECT = 0.86;           // portrait box is a little taller than it is wide
  var MAX_POINTS = 2600;
  var STEP = 2;                // grid stride when sampling

  /* ------------------------------------------------------------- helpers */

  function rand(a, b) { return a + Math.random() * (b - a); }

  function easeOutCubic(x) { return 1 - Math.pow(1 - x, 3); }

  /* -------------------------------------------------- procedural fallback */

  /* A head, neck and shoulders, then a radial gradient multiplied over the top
     so the cloud thins out toward the edges the way a lit photo would. */
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

    /* Light falling from the upper left, as in a portrait. source-atop keeps
       the gradient inside the silhouette; a blend mode like multiply would
       still composite its alpha source-over and flood the whole box. */
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
    var found = [];

    for (var y = 0; y < bh; y += STEP) {
      for (var x = 0; x < bw; x += STEP) {
        var i = (y * bw + x) * 4;
        if (data[i + 3] < 24) continue;

        /* perceptual luminance, 0..1 */
        var lum = (data[i] * 0.2126 + data[i + 1] * 0.7152 + data[i + 2] * 0.0722) / 255;
        if (lum < 0.12) continue;

        /* keep brighter pixels more often, so density follows the light */
        if (Math.random() > lum * 1.15) continue;

        found.push({
          tx: x / bw - 0.5,
          ty: y / bh - 0.5,
          lum: lum
        });
      }
    }

    /* thin the set down rather than letting a big photo blow the budget */
    while (found.length > MAX_POINTS) {
      found.splice((Math.random() * found.length) | 0, 1);
    }

    points = found.map(function (p) {
      var a = rand(0, Math.PI * 2);
      var r = rand(0.55, 1.9);
      return {
        tx: p.tx,
        ty: p.ty,
        /* scattered origin, flung outward from the portrait's centre */
        sx: Math.cos(a) * r,
        sy: Math.sin(a) * r * 0.75,
        delay: Math.random() * 0.55,
        alpha: 0.28 + p.lum * 0.62,
        size: p.lum > 0.62 ? 1.7 : 1.2,
        phase: rand(0, Math.PI * 2),
        drift: rand(0.004, 0.013)
      };
    });
  }

  function buildFrom(image) {
    var bh = SAMPLE_H;
    var bw = Math.round(SAMPLE_H * ASPECT);

    var off = document.createElement('canvas');
    off.width = bw;
    off.height = bh;
    var c = off.getContext('2d');

    if (image) {
      /* cover-fit the photo into the sampling box */
      var ir = image.width / image.height;
      var br = bw / bh;
      var dw, dh;
      if (ir > br) { dh = bh; dw = bh * ir; } else { dw = bw; dh = bw / ir; }
      c.drawImage(image, (bw - dw) / 2, (bh - dh) / 2, dw, dh);
    } else {
      drawBust(c, bw, bh);
    }

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
    if (!visible || progress <= 0.001 || !points.length) return;

    var p = progress;

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
      ctx.fillRect(x, y, q.size, q.size);
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
      cy = H * 0.52;
      scale = Math.min(H * 0.78, W * 0.44);
    } else {
      /* on a phone it sits centred and higher, above the contact copy */
      cx = W * 0.5;
      cy = H * 0.28;
      scale = Math.min(H * 0.40, W * 0.70);
    }
    visible = true;
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
