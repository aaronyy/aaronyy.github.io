/* ---------------------------------------------------------------------------
   flock.js — ambient layer that lives above everything for the whole page.

   Two things share this canvas:
     1. a boid flock (separation / alignment / cohesion) that reacts to the
        three cue words in the hero line
     2. a field of tiny glyphs arranged into a letter, raining gently inside
        its own silhouette, visible only while the hero is on screen

   Public API
     Flock.setMode('idle' | 'gather' | 'race' | 'ring')
     Flock.setHeroFade(0..1)
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var canvas = document.getElementById('flock');
  if (!canvas || !canvas.getContext) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ctx = canvas.getContext('2d');

  var W = 0, H = 0, dpr = 1;
  var focusX = 0, focusY = 0;          // where the letter sits
  var mode = 'idle';
  var modeSince = 0;
  var heroFade = 1;                    // 1 on the hero, 0 once scrolled away
  var birds = [];
  var glyphs = [];
  var running = true;
  var t = 0;

  var GLYPH_CHARS = '0123456789abcdefghijklmnopqrstuvwxyz/\\|<>=+-*{}[]()#$%&@?!;:.,~^'.split('');
  var SAMPLE = 300;                    // offscreen sampling resolution

  /* ------------------------------------------------------------- helpers */

  function rand(a, b) { return a + Math.random() * (b - a); }

  function limit(v, max) {
    var m = Math.hypot(v.x, v.y);
    if (m > max && m > 0) { v.x = v.x / m * max; v.y = v.y / m * max; }
    return v;
  }

  function clamp(v, a, b) {
    return v < a ? a : v > b ? b : v;
  }

  /* --------------------------------------------------------- the letter */

  /* Rasterise a character offscreen, then keep every opaque pixel on a grid.
     Those pixels become the home positions of the glyph particles. */
  function sampleGlyph(char, step) {
    var off = document.createElement('canvas');
    off.width = off.height = SAMPLE;
    var c = off.getContext('2d');
    c.fillStyle = '#fff';
    c.font = '500 ' + Math.round(SAMPLE * 0.94) + 'px "Cormorant Garamond", Georgia, serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText(char, SAMPLE / 2, SAMPLE / 2);

    var data = c.getImageData(0, 0, SAMPLE, SAMPLE).data;
    var pts = [];
    for (var y = 0; y < SAMPLE; y += step) {
      for (var x = 0; x < SAMPLE; x += step) {
        if (data[(y * SAMPLE + x) * 4 + 3] > 128) {
          pts.push({
            x: (x - SAMPLE / 2) / SAMPLE,
            y: (y - SAMPLE / 2) / SAMPLE
          });
        }
      }
    }
    return pts;
  }

  function buildGlyphs() {
    var pts = sampleGlyph('A', 6);
    glyphs = pts.map(function (p) {
      return {
        hx: p.x,
        hy: p.y,
        char: GLYPH_CHARS[(Math.random() * GLYPH_CHARS.length) | 0],
        phase: Math.random(),
        speed: rand(0.035, 0.11),
        jitter: rand(-1, 1),
        base: rand(0.4, 1),
        swap: rand(1.5, 7)
      };
    });
  }

  /* ---------------------------------------------------------- the birds */

  /* Shared wingbeat with a tight starting spread. Neighbours pull phases
     together (Kuramoto), so a stray bird catches the flock instead of
     drifting on its own clock. flapRate is a tiny personal tempo, not a
     second oscillator. */
  var CAM = 0.95;                       // look down, off vertical, so a flap has height

  function buildBirds() {
    var count = W < 700 ? 7 : W < 1200 ? 11 : 15;
    birds = [];
    for (var i = 0; i < count; i++) {
      var a = rand(0, Math.PI * 2);
      birds.push({
        x: rand(0, W),
        y: rand(H * 0.08, H * 0.82),
        vx: Math.cos(a) * rand(0.5, 1.3),
        vy: Math.sin(a) * rand(0.5, 1.3) * 0.4,
        size: rand(18, 28),
        heading: a,
        roll: 0,
        pitch: 0.14,
        z: rand(-0.65, 0.85),
        flapPhase: rand(0, 0.2),
        flapRate: rand(0.98, 1.02),
        wanderSeed: rand(0, 1000),
        trail: []
      });
    }
  }

  /* Classic three rules, evaluated against near neighbours only. */
  function flockForces(b, i) {
    var sep = { x: 0, y: 0 }, ali = { x: 0, y: 0 }, coh = { x: 0, y: 0 };
    var nSep = 0, nNear = 0;

    for (var j = 0; j < birds.length; j++) {
      if (j === i) continue;
      var o = birds[j];
      var dx = o.x - b.x, dy = o.y - b.y;
      var d = Math.hypot(dx, dy);
      if (d === 0) continue;

      if (d < 46) { sep.x -= dx / d; sep.y -= dy / d; nSep++; }
      if (d < 190) {
        ali.x += o.vx; ali.y += o.vy;
        coh.x += o.x;  coh.y += o.y;
        nNear++;
      }
    }

    var f = { x: 0, y: 0 };

    if (nSep) {
      f.x += (sep.x / nSep) * 0.085;
      f.y += (sep.y / nSep) * 0.085;
    }
    if (nNear) {
      f.x += (ali.x / nNear - b.vx) * 0.021;
      f.y += (ali.y / nNear - b.vy) * 0.021;
      f.x += (coh.x / nNear - b.x) * 0.00042;
      f.y += (coh.y / nNear - b.y) * 0.00042;
    }
    return f;
  }

  function step(dt) {
    t += dt;

    var elapsed = t - modeSince;
    var blend = mode === 'idle' ? 1 : Math.min(1, elapsed / 45);
    var leader = birds[0];

    for (var i = 0; i < birds.length; i++) {
      var b = birds[i];
      var f = flockForces(b, i);
      var maxSpeed = 1.55;

      /* ---- wander: cheap smooth noise from stacked sines ---- */
      var n = b.wanderSeed;
      f.x += Math.sin(t * 0.011 + n) * 0.012;
      f.y += Math.cos(t * 0.009 + n * 1.7) * 0.010;

      if (mode === 'gather') {
        /* the flock folds into a V trailing the lead bird */
        maxSpeed = 1.9;
        if (i === 0) {
          f.x += (W * 0.42 - b.x) * 0.00035;
          f.y += (H * 0.34 - b.y) * 0.00035;
        } else {
          var rank = Math.ceil(i / 2);
          var side = i % 2 ? 1 : -1;
          var hx = leader.vx, hy = leader.vy;
          var hm = Math.hypot(hx, hy) || 1;
          hx /= hm; hy /= hm;
          var spacing = 44 * rank;
          var tx = leader.x - hx * spacing + -hy * side * spacing * 0.72;
          var ty = leader.y - hy * spacing + hx * side * spacing * 0.72;
          f.x += (tx - b.x) * 0.0055 * blend;
          f.y += (ty - b.y) * 0.0055 * blend;
        }

      } else if (mode === 'race') {
        /* everyone accelerates along their current heading */
        maxSpeed = 4.6;
        var m = Math.hypot(b.vx, b.vy) || 1;
        f.x += (b.vx / m) * 0.16 * blend;
        f.y += (b.vy / m) * 0.16 * blend;
        f.y += (H * 0.4 - b.y) * 0.00022;

      } else if (mode === 'ring') {
        /* Each bird owns a slot on a slowly turning circle around the letter,
           so the flock spreads evenly instead of bunching on one arc. */
        maxSpeed = 2.1;
        var radius = Math.min(W, H) * 0.19;
        var slot = (i / birds.length) * Math.PI * 2 + t * 0.011;
        var tx = focusX + Math.cos(slot) * radius;
        var ty = focusY + Math.sin(slot) * radius;
        f.x += (tx - b.x) * 0.0062 * blend;
        f.y += (ty - b.y) * 0.0062 * blend;
      }

      limit(f, 0.22);
      b.vx += f.x * dt;
      b.vy += f.y * dt;

      var speed = Math.hypot(b.vx, b.vy);
      if (speed > maxSpeed) {
        b.vx = b.vx / speed * maxSpeed;
        b.vy = b.vy / speed * maxSpeed;
      } else if (speed < 0.35) {
        /* never let a bird stall into a hover */
        var a2 = speed > 0 ? Math.atan2(b.vy, b.vx) : rand(0, Math.PI * 2);
        b.vx = Math.cos(a2) * 0.35;
        b.vy = Math.sin(a2) * 0.35;
      }

      b.x += b.vx * dt;
      b.y += b.vy * dt;

      /* wrap with a generous margin so nothing pops at the edge, and drop the
         trail on the way through or it gets drawn straight across the page */
      var pad = 90;
      var wrapped = false;
      if (b.x < -pad)     { b.x = W + pad; wrapped = true; }
      if (b.x > W + pad)  { b.x = -pad;    wrapped = true; }
      if (b.y < -pad)     { b.y = H + pad; wrapped = true; }
      if (b.y > H + pad)  { b.y = -pad;    wrapped = true; }
      if (wrapped) b.trail.length = 0;

      var h = Math.atan2(b.vy, b.vx);
      var dh = h - b.heading;
      while (dh > Math.PI) dh -= Math.PI * 2;
      while (dh < -Math.PI) dh += Math.PI * 2;
      b.heading = h;
      var targetRoll = clamp(-dh / Math.max(dt, 0.001) * 0.42, -0.95, 0.95);
      b.roll += (targetRoll - b.roll) * Math.min(1, 0.14 * dt);
      var targetPitch = clamp(0.14 - b.vy * 0.16, -0.35, 0.45);
      b.pitch += (targetPitch - b.pitch) * Math.min(1, 0.10 * dt);

      b.z += Math.sin(t * 0.0065 + n * 0.4) * 0.003 * dt;
      b.z = clamp(b.z, -1, 1);

      b.trail.push(b.x, b.y);
      var keep = (mode === 'race' ? 16 : 8) * 2;
      while (b.trail.length > keep) b.trail.shift();
    }

    /* Advance every wingbeat from the same snapshot so the flock doesn't
       fall into a travelling wave of phases. */
    var phases = [];
    for (i = 0; i < birds.length; i++) phases[i] = birds[i].flapPhase;
    var kFlap = mode === 'gather' ? 0.34 : mode === 'ring' ? 0.26 : 0.22;
    var flapRadius = mode === 'gather' ? 320 : 240;
    for (i = 0; i < birds.length; i++) {
      var bird = birds[i];
      var sum = 0, nNear = 0;
      for (var j = 0; j < birds.length; j++) {
        if (j === i) continue;
        var other = birds[j];
        if (Math.hypot(other.x - bird.x, other.y - bird.y) < flapRadius) {
          sum += Math.sin(phases[j] - phases[i]);
          nNear++;
        }
      }
      var speedNow = Math.hypot(bird.vx, bird.vy);
      var omega = 0.118 * (0.88 + speedNow * 0.22);
      if (mode === 'race') omega *= 1.28;
      var couple = nNear ? (sum / nNear) * kFlap : 0;
      bird.flapPhase += (omega + couple) * dt * bird.flapRate;
    }
  }

  /* ------------------------------------------------------------ drawing */

  function signedArea(pts) {
    var a = 0;
    for (var i = 0, n = pts.length; i < n; i++) {
      var p = pts[i], q = pts[(i + 1) % n];
      a += p.x * q.y - q.x * p.y;
    }
    return a;
  }

  function fillPoly(pts, color, alpha) {
    if (pts.length < 3 || alpha <= 0.01) return;
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.fill();
  }

  /* Local bird space is X forward, Y right, Z up. Roll / pitch / heading
     then a downward camera so the upstroke foreshortens and a bank shows
     one wing large and one thin. */
  function drawBird(b) {
    var flap = Math.sin(b.flapPhase);
    var flapA = 0.22 + flap * 0.95;        // rest with dihedral; stroke goes well above/below
    var s = b.size * (1.12 + b.z * 0.42);
    var alpha = 0.46 + 0.42 * (b.z + 1) * 0.5;

    var ch = Math.cos(b.heading), sh = Math.sin(b.heading);
    var cr = Math.cos(b.roll), sr = Math.sin(b.roll);
    var cp = Math.cos(b.pitch), sp = Math.sin(b.pitch);
    var cc = Math.cos(CAM), sc = Math.sin(CAM);

    function xf(x, y, z) {
      var y1 = y * cr - z * sr;
      var z1 = y * sr + z * cr;
      var x2 = x * cp + z1 * sp;
      var z2 = -x * sp + z1 * cp;
      var y2 = y1;
      var sx = x2 * ch - y2 * sh;
      var sy = x2 * sh + y2 * ch;
      return {
        x: b.x + sx,
        y: b.y + sy * cc - z2 * sc,
        z: sy * sc + z2 * cc
      };
    }

    /* Contact shadow, stretched with the wing stroke so the bird sits in space. */
    var spread = 0.45 + 0.55 * Math.cos(flapA);
    ctx.save();
    ctx.globalAlpha = alpha * 0.16;
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.ellipse(b.x, b.y + s * 0.42, s * 0.95 * Math.abs(spread), s * 0.16, b.heading, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    function wing(side) {
      var a = side * flapA;
      var ca = Math.cos(a), sa = Math.sin(a);
      var sweep = s * 0.10 * (1 - flap);   // tips trail on the downstroke
      var raw = [
        [s * 0.08, side * s * 0.05, s * 0.02],
        [s * 0.12 - sweep * 0.3, side * s * 0.62, s * 0.04],
        [-sweep, side * s * 1.35, s * 0.06],
        [-s * 0.32 - sweep * 0.4, side * s * 0.88, 0],
        [-s * 0.18, side * s * 0.08, -s * 0.02]
      ];
      var pts = [];
      for (var i = 0; i < raw.length; i++) {
        var p = raw[i];
        pts.push(xf(p[0], p[1] * ca - p[2] * sa, p[1] * sa + p[2] * ca));
      }
      return pts;
    }

    function paintWing(pts) {
      var area = signedArea(pts);
      var underside = area > 0;
      fillPoly(pts, underside ? '#6f6a60' : '#d8c9a3', alpha * (underside ? 0.82 : 1));
      if (Math.abs(area) < 40) {
        ctx.globalAlpha = alpha * 0.8;
        ctx.strokeStyle = underside ? '#8a8478' : '#d8c9a3';
        ctx.lineWidth = 1.3;
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
    }

    var left = wing(-1), right = wing(1);
    var leftZ = (left[0].z + left[2].z) * 0.5;
    var rightZ = (right[0].z + right[2].z) * 0.5;

    if (leftZ < rightZ) paintWing(left);
    else paintWing(right);

    fillPoly([
      xf(s * 0.22, 0, -s * 0.05),
      xf(s * 0.02, -s * 0.08, -s * 0.07),
      xf(-s * 0.28, 0, -s * 0.04),
      xf(s * 0.02, s * 0.08, -s * 0.07)
    ], '#7a7468', alpha * 0.75);

    fillPoly([
      xf(s * 0.58, 0, s * 0.03),
      xf(s * 0.08, s * 0.11, s * 0.05),
      xf(-s * 0.42, 0, s * 0.03),
      xf(s * 0.08, -s * 0.11, s * 0.05)
    ], '#e8dcc0', alpha);

    fillPoly([
      xf(-s * 0.30, 0, s * 0.02),
      xf(-s * 0.62, -s * 0.13, 0),
      xf(-s * 0.50, 0, -s * 0.02),
      xf(-s * 0.62, s * 0.13, 0)
    ], '#c8bb9a', alpha * 0.92);

    fillPoly([
      xf(s * 0.42, 0, s * 0.07),
      xf(s * 0.58, -s * 0.05, s * 0.02),
      xf(s * 0.72, 0, 0),
      xf(s * 0.58, s * 0.05, s * 0.02)
    ], '#f0e6ce', alpha);

    if (leftZ < rightZ) paintWing(right);
    else paintWing(left);
  }

  function drawGlyphs() {
    if (heroFade <= 0.01) return;

    /* width matters as much as height on a phone, or the letter overruns */
    var scale = Math.min(H * 0.52, W * 0.6, 380);
    var range = scale * 0.09;

    ctx.save();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '400 ' + Math.max(7, Math.round(scale * 0.032)) + 'px "Jost", monospace';

    for (var i = 0; i < glyphs.length; i++) {
      var g = glyphs[i];

      /* travel down the silhouette and loop back to the top */
      var p = (g.phase + t * g.speed * 0.01) % 1;
      var fall = (p - 0.5) * range;
      var edge = 0.4 + 0.6 * Math.sin(p * Math.PI); // fade in and out at the ends
      var a = g.base * edge * heroFade;
      if (a <= 0.01) continue;

      /* occasional character churn, like the field is still deciding */
      if (Math.floor(t * 0.02 / g.swap) % 2 === 0 && Math.random() < 0.0016) {
        g.char = GLYPH_CHARS[(Math.random() * GLYPH_CHARS.length) | 0];
      }

      var x = focusX + g.hx * scale + Math.sin(t * 0.013 + g.jitter * 6) * 2.2;
      var y = focusY + g.hy * scale + fall;

      ctx.globalAlpha = a;
      ctx.fillStyle = i % 9 === 0 ? '#8f9bb3' : '#cfc7b4';
      ctx.fillText(g.char, x, y);
    }
    ctx.restore();
  }

  function drawBirds() {
    var order = [];
    for (var i = 0; i < birds.length; i++) order.push(i);
    order.sort(function (a, j) { return birds[a].z - birds[j].z; });

    for (i = 0; i < order.length; i++) {
      var b = birds[order[i]];
      var trailA = (mode === 'race' ? 0.18 : 0.08) * (0.55 + (b.z + 1) * 0.22);

      if (b.trail.length > 5) {
        ctx.save();
        ctx.strokeStyle = 'rgba(216, 201, 163, ' + trailA + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(b.trail[0], b.trail[1]);
        for (var k = 2; k < b.trail.length; k += 2) ctx.lineTo(b.trail[k], b.trail[k + 1]);
        ctx.stroke();
        ctx.restore();
      }

      ctx.save();
      drawBird(b);
      ctx.restore();
    }
  }

  /* --------------------------------------------------------------- loop */

  var last = 0;

  function frame(now) {
    if (!running) return;
    var dt = last ? Math.min(3, (now - last) / 16.667) : 1;
    last = now;

    ctx.clearRect(0, 0, W, H);
    step(dt);
    drawGlyphs();
    drawBirds();

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

    focusX = W >= 992 ? W * 0.72 : W * 0.5;
    focusY = W >= 992 ? H * 0.44 : H * 0.28;

    if (!birds.length) buildBirds();
  }

  /* ------------------------------------------------------------- public */

  window.Flock = {
    setMode: function (m) {
      if (m === mode) return;
      mode = m || 'idle';
      modeSince = t;
    },
    setHeroFade: function (v) {
      heroFade = Math.max(0, Math.min(1, v));
    }
  };

  /* --------------------------------------------------------------- boot */

  resize();
  buildGlyphs();
  window.addEventListener('resize', resize);

  /* the sampled letter depends on the webfont, so redo it once that lands */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(buildGlyphs);
  }

  document.addEventListener('visibilitychange', function () {
    running = !document.hidden;
    if (running) { last = 0; requestAnimationFrame(frame); }
  });

  requestAnimationFrame(frame);
})();
