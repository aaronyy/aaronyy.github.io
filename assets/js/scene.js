/* ---------------------------------------------------------------------------
   scene.js — the slowly turning wireframe that sits beside the story.

   A subdivided icosahedron (42 vertices, 120 edges) rendered with a hand
   written perspective projection. Every chapter owns a deterministic set of
   per-vertex radial offsets, so moving between chapters makes the cage
   visibly reform rather than cut. A small cloud of glyphs drifts inside it.

   Public API
     Scene.setChapter(index)
     Scene.setFade(0..1)
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var canvas = document.getElementById('scene');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');

  var W = 0, H = 0, dpr = 1;
  var cx = 0, cy = 0, radius = 0;
  var visible = true;
  var fade = 0;
  var running = true;
  var t = 0, last = 0;
  var rx = -0.35, ry = 0.4;

  var GLYPH_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz/\\|<>=+-*{}[]()#$%&@'.split('');
  var CAMERA = 3.2;          // in units of radius
  var CLOUD = 110;

  /* ---------------------------------------------------------- tiny prng */

  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      var x = a;
      x = Math.imul(x ^ (x >>> 15), 1 | x);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* --------------------------------------------------------- geometry */

  function icosahedron() {
    var p = (1 + Math.sqrt(5)) / 2;
    var v = [
      [-1, p, 0], [1, p, 0], [-1, -p, 0], [1, -p, 0],
      [0, -1, p], [0, 1, p], [0, -1, -p], [0, 1, -p],
      [p, 0, -1], [p, 0, 1], [-p, 0, -1], [-p, 0, 1]
    ];
    var f = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1]
    ];
    return { verts: v, faces: f };
  }

  function subdivide(geo) {
    var verts = geo.verts.slice();
    var faces = [];
    var cache = {};

    function midpoint(a, b) {
      var key = a < b ? a + ':' + b : b + ':' + a;
      if (cache[key] !== undefined) return cache[key];
      var va = verts[a], vb = verts[b];
      verts.push([(va[0] + vb[0]) / 2, (va[1] + vb[1]) / 2, (va[2] + vb[2]) / 2]);
      return (cache[key] = verts.length - 1);
    }

    geo.faces.forEach(function (f) {
      var a = f[0], b = f[1], c = f[2];
      var ab = midpoint(a, b), bc = midpoint(b, c), ca = midpoint(c, a);
      faces.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    });

    return { verts: verts, faces: faces };
  }

  function normalise(geo) {
    geo.verts = geo.verts.map(function (v) {
      var m = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / m, v[1] / m, v[2] / m];
    });
    return geo;
  }

  function edgesOf(geo) {
    var seen = {}, out = [];
    geo.faces.forEach(function (f) {
      for (var i = 0; i < 3; i++) {
        var a = f[i], b = f[(i + 1) % 3];
        var key = a < b ? a + ':' + b : b + ':' + a;
        if (!seen[key]) { seen[key] = 1; out.push([a, b]); }
      }
    });
    return out;
  }

  var geo = normalise(subdivide(icosahedron()));
  var edges = edgesOf(geo);
  var N = geo.verts.length;

  /* ------------------------------------------------- per-chapter shapes */

  /* Same topology every time, only the radial offsets differ, which is what
     makes a clean morph possible. */
  function offsetsFor(index) {
    var rnd = mulberry32(index * 9176 + 13);
    var out = new Float32Array(N);
    for (var i = 0; i < N; i++) out[i] = 0.82 + rnd() * 0.34;
    return out;
  }

  var current = offsetsFor(0);
  var target = offsetsFor(0);
  var chapter = 0;

  /* ----------------------------------------------------- glyph cloud */

  var cloud = [];
  function buildCloud(index) {
    var rnd = mulberry32(index * 4421 + 7);
    cloud = [];
    for (var i = 0; i < CLOUD; i++) {
      cloud.push({
        x: (rnd() - 0.5) * 0.62,
        y: (rnd() - 0.5) * 0.62,
        z: (rnd() - 0.5) * 0.62,
        char: GLYPH_CHARS[(rnd() * GLYPH_CHARS.length) | 0],
        drift: rnd() * Math.PI * 2,
        alpha: 0.22 + rnd() * 0.5
      });
    }
  }
  buildCloud(0);

  /* --------------------------------------------------------- projection */

  function project(x, y, z) {
    /* rotate around Y then X */
    var cosY = Math.cos(ry), sinY = Math.sin(ry);
    var x1 = x * cosY - z * sinY;
    var z1 = x * sinY + z * cosY;

    var cosX = Math.cos(rx), sinX = Math.sin(rx);
    var y1 = y * cosX - z1 * sinX;
    var z2 = y * sinX + z1 * cosX;

    var depth = CAMERA - z2;
    if (depth < 0.15) depth = 0.15;
    var k = CAMERA / depth;

    return { x: cx + x1 * radius * k, y: cy + y1 * radius * k, k: k, z: z2 };
  }

  /* ------------------------------------------------------------ drawing */

  function draw(dt) {
    t += dt;

    ry += 0.0026 * dt;
    rx = -0.35 + Math.sin(t * 0.0035) * 0.22;

    /* ease the cage toward the active chapter's shape */
    for (var i = 0; i < N; i++) {
      current[i] += (target[i] - current[i]) * Math.min(1, 0.055 * dt);
    }

    ctx.clearRect(0, 0, W, H);
    if (fade <= 0.01 || !visible) return;

    /* project the cage once, reuse for edges and vertices */
    var pts = new Array(N);
    for (i = 0; i < N; i++) {
      var v = geo.verts[i];
      var r = current[i];
      pts[i] = project(v[0] * r, v[1] * r, v[2] * r);
    }

    /* ---- glyph cloud, behind the cage ---- */
    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (i = 0; i < cloud.length; i++) {
      var g = cloud[i];
      var bob = Math.sin(t * 0.006 + g.drift) * 0.035;
      var p = project(g.x, g.y + bob, g.z);
      var size = Math.max(4, radius * 0.055 * p.k);
      ctx.globalAlpha = g.alpha * fade * Math.min(1, p.k * 0.75);
      ctx.fillStyle = i % 7 === 0 ? '#93a0bb' : '#b9b2a2';
      ctx.font = '400 ' + size.toFixed(1) + 'px "Jost", monospace';
      ctx.fillText(g.char, p.x, p.y);
    }
    ctx.restore();

    /* ---- wireframe ---- */
    ctx.save();
    ctx.lineWidth = 1;
    for (i = 0; i < edges.length; i++) {
      var a = pts[edges[i][0]], b = pts[edges[i][1]];
      var near = (a.k + b.k) / 2;                       // >1 is toward camera
      var alpha = (0.05 + Math.max(0, near - 0.7) * 0.30) * fade;
      if (alpha <= 0.004) continue;
      ctx.strokeStyle = 'rgba(150, 160, 190, ' + alpha.toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    /* ---- vertices ---- */
    for (i = 0; i < N; i++) {
      var q = pts[i];
      ctx.globalAlpha = Math.max(0, Math.min(1, (q.k - 0.75) * 1.5)) * 0.5 * fade;
      ctx.fillStyle = '#d8c9a3';
      ctx.beginPath();
      ctx.arc(q.x, q.y, Math.max(0.6, 1.1 * q.k), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
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

    visible = W >= 880;                 /* no room for it on a phone */
    cx = W * 0.72;
    cy = H * 0.5;
    radius = Math.min(W * 0.115, H * 0.20);
  }

  /* ------------------------------------------------------------- public */

  window.Scene = {
    setChapter: function (index) {
      if (index === chapter) return;
      chapter = index;
      target = offsetsFor(index);
      buildCloud(index);
    },
    setFade: function (v) {
      fade = Math.max(0, Math.min(1, v));
    }
  };

  /* --------------------------------------------------------------- boot */

  resize();
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) { last = 0; requestAnimationFrame(frame); }
  });

  requestAnimationFrame(frame);
})();
