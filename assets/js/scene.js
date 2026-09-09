/* ---------------------------------------------------------------------------
   scene.js — the wireframe that turns beside the story.

   This file is only the camera and the ink. The shapes themselves live in
   scenes.js, one per chapter, and are drawn through the small 3D API below.
   Moving between chapters cross-dissolves the outgoing shape into the incoming
   one: topology differs from chapter to chapter now, so there is nothing to
   morph, and a dissolve keeps the same unhurried feel.

   Every coordinate is in units of the scene radius. +y is down, +z is toward
   the camera, the ground of a scene sits around y = 0.8, and roughly
   -1.3 .. 1.3 stays inside the frame. `tone` is 0 for the cool structural
   lines and 1 for the warm accent that carries whatever is moving; glyphs also
   take 2 for the cool blue that speckles a drifting field.

     g.line(x1,y1,z1, x2,y2,z2, a, tone)
     g.path(flatPts, a, tone, close)
     g.fill(flatPts, a, tone)
     g.dot(x,y,z, a, tone, size)
     g.glyph(char, x,y,z, a, tone, size)

   Public API
     Scene.setChapter(index)
     Scene.setFade(0..1)
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var canvas = document.getElementById('scene');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var shapes = window.SceneShapes;
  if (!shapes) return;

  var ctx = canvas.getContext('2d');

  var W = 0, H = 0, dpr = 1;
  var cx = 0, cy = 0, radius = 0;
  var visible = true;
  var fade = 0;
  var running = true;
  var t = 0, last = 0;

  var CAMERA = 3.2;                 // in units of the scene radius
  var CROSS = 0.85;                 // seconds to dissolve one chapter into the next

  var chapter = -1;
  var cur = null, prev = null;      // { scene: …, since: seconds }
  var mix = 1;
  var built = {};                   // scenes are deterministic, so build once

  function sceneFor(index) {
    if (!built[index]) built[index] = shapes.build(index);
    return built[index];
  }

  /* --------------------------------------------------- camera + ink state */

  /* Set once per scene per frame, then read by every call the scene makes. */
  var vAlpha = 1, vScale = 1, vDist = CAMERA;
  var cosY = 1, sinY = 0, cosX = 1, sinX = 0;

  var pa = { x: 0, y: 0, k: 1 };
  var pb = { x: 0, y: 0, k: 1 };
  var buf = new Float64Array(1536);  // projected points for path() and fill()

  function project(x, y, z, out) {
    x *= vScale; y *= vScale; z *= vScale;

    /* yaw, then pitch, then a plain perspective divide */
    var x1 = x * cosY - z * sinY;
    var z1 = x * sinY + z * cosY;
    var y1 = y * cosX - z1 * sinX;
    var z2 = y * sinX + z1 * cosX;

    var depth = vDist - z2;
    if (depth < 0.2) depth = 0.2;
    var k = vDist / depth;

    out.x = cx + x1 * radius * k;
    out.y = cy + y1 * radius * k;
    out.k = k;
    return out;
  }

  /* Depth does the shading: nothing is lit, near lines are simply less faint.
     The warm tone rides a little brighter because it is always the subject. */
  function inkFor(k, a, tone) {
    var v = (0.06 + Math.max(0, k - 0.68) * 0.34) * a * vAlpha;
    if (tone) v *= 1.35;
    if (v <= 0.004) return null;
    if (v > 0.9) v = 0.9;
    return tone
      ? 'rgba(216, 201, 163, ' + v.toFixed(3) + ')'
      : 'rgba(150, 160, 190, ' + v.toFixed(3) + ')';
  }

  /* ---------------------------------------------------------- the 3D API */

  var g = {
    line: function (x1, y1, z1, x2, y2, z2, a, tone) {
      if (a === undefined) a = 1;
      if (a <= 0.01) return;
      project(x1, y1, z1, pa);
      project(x2, y2, z2, pb);
      var ink = inkFor((pa.k + pb.k) * 0.5, a, tone);
      if (!ink) return;
      ctx.strokeStyle = ink;
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.stroke();
    },

    /* One alpha for the whole polyline, from its mean depth. Anything that
       spans a lot of depth is better off as separate line() calls. */
    path: function (pts, a, tone, close) {
      if (a === undefined) a = 1;
      var n = pts.length / 3 | 0;
      if (n < 2 || a <= 0.01) return;
      var sum = 0;
      for (var i = 0; i < n; i++) {
        project(pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2], pa);
        buf[i * 2] = pa.x;
        buf[i * 2 + 1] = pa.y;
        sum += pa.k;
      }
      var ink = inkFor(sum / n, a, tone);
      if (!ink) return;
      ctx.strokeStyle = ink;
      ctx.beginPath();
      ctx.moveTo(buf[0], buf[1]);
      for (i = 1; i < n; i++) ctx.lineTo(buf[i * 2], buf[i * 2 + 1]);
      if (close) ctx.closePath();
      ctx.stroke();
    },

    /* A wash rather than a surface — used for light, never for material. */
    fill: function (pts, a, tone) {
      var n = pts.length / 3 | 0;
      if (n < 3) return;
      var sum = 0;
      for (var i = 0; i < n; i++) {
        project(pts[i * 3], pts[i * 3 + 1], pts[i * 3 + 2], pa);
        buf[i * 2] = pa.x;
        buf[i * 2 + 1] = pa.y;
        sum += pa.k;
      }
      var v = a * vAlpha * 0.07 * (0.6 + Math.max(0, sum / n - 0.7));
      if (v <= 0.002) return;
      ctx.fillStyle = tone
        ? 'rgba(216, 201, 163, ' + v.toFixed(3) + ')'
        : 'rgba(150, 160, 190, ' + v.toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(buf[0], buf[1]);
      for (i = 1; i < n; i++) ctx.lineTo(buf[i * 2], buf[i * 2 + 1]);
      ctx.closePath();
      ctx.fill();
    },

    dot: function (x, y, z, a, tone, size) {
      if (a === undefined) a = 1;
      project(x, y, z, pa);
      var v = Math.max(0, Math.min(1, (pa.k - 0.7) * 1.6)) * 0.55 * a * vAlpha;
      if (v <= 0.004) return;
      ctx.globalAlpha = Math.min(1, v);
      ctx.fillStyle = tone ? '#d8c9a3' : '#93a0bb';
      ctx.beginPath();
      ctx.arc(pa.x, pa.y, Math.max(0.6, 1.15 * pa.k * (size || 1)), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    },

    glyph: function (ch, x, y, z, a, tone, size) {
      if (a === undefined) a = 1;
      project(x, y, z, pa);
      var v = a * vAlpha * Math.min(1, pa.k * 0.75);
      if (v <= 0.006) return;
      ctx.globalAlpha = Math.min(1, v);
      ctx.fillStyle = tone === 1 ? '#d8c9a3' : tone === 2 ? '#93a0bb' : '#b9b2a2';
      ctx.font = '400 ' + Math.max(3.5, radius * (size || 0.055) * pa.k).toFixed(1) + 'px "Jost", monospace';
      ctx.fillText(ch, pa.x, pa.y);
      ctx.globalAlpha = 1;
    }
  };

  /* ------------------------------------------------------------- drawing */

  function render(slot, alpha, scale) {
    var s = slot.scene;
    var sec = t - slot.since;

    /* A chapter either turns steadily or swings back and forth: a room reads
       as a room only from a limited arc, a globe wants the full rotation. */
    var yaw = (s.yaw || 0) + (s.spin || 0) * sec;
    if (s.swing) yaw += Math.sin(sec * (s.swingRate || 0.05)) * s.swing;

    cosY = Math.cos(yaw);
    sinY = Math.sin(yaw);
    var pitch = (s.tilt === undefined ? -0.35 : s.tilt) +
                Math.sin(sec * (s.swayRate || 0.06)) * (s.sway === undefined ? 0.2 : s.sway);
    cosX = Math.cos(pitch);
    sinX = Math.sin(pitch);

    vDist = CAMERA * (s.dolly || 1);
    vScale = (s.scale || 1) * scale;
    vAlpha = alpha;

    ctx.lineWidth = 1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    s.draw(g, sec);
  }

  function frame(now) {
    if (!running) return;
    var dt = last ? Math.min(0.05, (now - last) / 1000) : 0.016;
    last = now;
    t += dt;

    if (mix < 1) {
      mix += dt / CROSS;
      if (mix >= 1) { mix = 1; prev = null; }
    }

    ctx.clearRect(0, 0, W, H);

    if (fade > 0.01 && visible && cur) {
      var m = mix * mix * (3 - 2 * mix);
      if (prev) render(prev, fade * (1 - m), 0.94 + 0.06 * (1 - m));
      render(cur, fade * m, 1.06 - 0.06 * m);
    }

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
    radius = Math.min(W * 0.132, H * 0.235);
  }

  /* ------------------------------------------------------------- public */

  window.Scene = {
    setChapter: function (index) {
      if (index === chapter) return;
      chapter = index;

      /* Each scene runs its own clock from the moment it arrives, so a build
         cycle or a stamp lands while you are actually looking at it. */
      prev = cur;
      cur = { scene: sceneFor(index), since: t };
      mix = prev ? 0 : 1;
    },
    setFade: function (v) {
      fade = Math.max(0, Math.min(1, v));
    }
  };

  /* --------------------------------------------------------------- boot */

  resize();
  cur = { scene: sceneFor(0), since: 0 };
  window.addEventListener('resize', resize);

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) { last = 0; requestAnimationFrame(frame); }
  });

  requestAnimationFrame(frame);
})();
