/* ---------------------------------------------------------------------------
   scenes.js — one wireframe per chapter of the story.

   scene.js owns the camera and the ink; this file only says what to draw. Each
   builder returns a plain object:

     spin        yaw in radians per second (steady turn)
     yaw         where that turn starts
     swing       yaw amplitude when the shape reads best from a limited arc
     swingRate   how fast that swing runs
     tilt        base pitch, negative looks down on the scene
     sway, swayRate   how far and how fast the pitch drifts
     scale       size multiplier over the shared scene radius
     dolly       camera distance multiplier
     gain        ink multiplier when a scene sits farther from the camera
     paper       structural lines in the page off-white instead of cool grey
     weight      stroke width, for a scene with more detail than the default
     draw(g, sec)     sec counts from the moment the chapter came on screen

   Coordinates are in units of the scene radius: +y is down, +z is toward the
   camera, the ground sits near y = 0.8. Every scene loops on its own clock,
   so a passport gets stamped, a building goes up, a carpet gets woven.
--------------------------------------------------------------------------- */
(function () {
  'use strict';

  var TAU = Math.PI * 2;
  var GLYPHS = '0123456789abcdefghijklmnopqrstuvwxyz/\\|<>=+-*{}[]()#$%&@'.split('');

  /* ------------------------------------------------------------- helpers */

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

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function frac(v) { return v - Math.floor(v); }
  function ease(v) { return v <= 0 ? 0 : v >= 1 ? 1 : v * v * (3 - 2 * v); }
  function pulse(v) { return v <= 0 || v >= 1 ? 0 : Math.sin(v * Math.PI); }
  function pick(rnd) { return GLYPHS[(rnd() * GLYPHS.length) | 0]; }

  /* A plane frame, so flat things (a page, a sheet of paper, a wall) can be
     authored in their own two coordinates and land wherever the plane is. */
  function plane(o, u, v) {
    return function (du, dv) {
      return [o[0] + u[0] * du + v[0] * dv,
              o[1] + u[1] * du + v[1] * dv,
              o[2] + u[2] * du + v[2] * dv];
    };
  }

  function seg(g, p, q, a, tone) {
    g.line(p[0], p[1], p[2], q[0], q[1], q[2], a, tone);
  }

  function panel(g, P, u0, v0, u1, v1, a, tone, filled) {
    var p0 = P(u0, v0), p1 = P(u1, v0), p2 = P(u1, v1), p3 = P(u0, v1);
    var pts = [p0[0], p0[1], p0[2], p1[0], p1[1], p1[2],
               p2[0], p2[1], p2[2], p3[0], p3[1], p3[2]];
    if (filled) g.fill(pts, a, tone);
    else g.path(pts, a, tone, true);
  }

  /* a circle drawn inside a plane frame */
  function ringIn(g, P, cu, cv, r, a, tone, n) {
    n = n || 20;
    var pts = [];
    for (var i = 0; i < n; i++) {
      var p = P(cu + Math.cos(i / n * TAU) * r, cv + Math.sin(i / n * TAU) * r);
      pts.push(p[0], p[1], p[2]);
    }
    g.path(pts, a, tone, true);
  }

  /* part of a circle inside a plane frame */
  function arcIn(g, P, cu, cv, r, a0, a1, a, tone, n) {
    n = n || 10;
    var pts = [];
    for (var i = 0; i <= n; i++) {
      var th = a0 + (a1 - a0) * (i / n);
      var p = P(cu + Math.cos(th) * r, cv + Math.sin(th) * r);
      pts.push(p[0], p[1], p[2]);
    }
    g.path(pts, a, tone);
  }

  /* a polyline authored in a plane's own two coordinates */
  function polyIn(g, P, uv, a, tone, close) {
    var pts = [];
    for (var i = 0; i < uv.length; i += 2) {
      var p = P(uv[i], uv[i + 1]);
      pts.push(p[0], p[1], p[2]);
    }
    g.path(pts, a, tone, close);
  }

  /* The rose curve security printing is engraved from: a circle with a set
     number of lobes. Nested at different counts it reads as guilloche. */
  function rosette(g, P, cu, cv, r, lobes, amp, a, tone, n) {
    n = n || 64;
    var uv = [];
    for (var i = 0; i < n; i++) {
      var th = i / n * TAU;
      var rr = r * (1 + amp * Math.cos(lobes * th));
      uv.push(cu + Math.cos(th) * rr, cv + Math.sin(th) * rr);
    }
    polyIn(g, P, uv, a, tone, true);
  }

  /* a circle lying flat, for light pools and orbit paths */
  function ringY(g, x, y, z, r, a, tone, n) {
    n = n || 24;
    var pts = [];
    for (var i = 0; i < n; i++) {
      pts.push(x + Math.cos(i / n * TAU) * r, y, z + Math.sin(i / n * TAU) * r);
    }
    g.path(pts, a, tone, true);
  }

  /* A drum lying along z: two end rings and a few lines down its length. The
     beams of a loom, and anything else that has to read as turned. */
  function drumZ(g, x, y, z0, z1, r, a, tone) {
    var A = plane([0, 0, z0], [1, 0, 0], [0, 1, 0]);
    var B = plane([0, 0, z1], [1, 0, 0], [0, 1, 0]);
    ringIn(g, A, x, y, r, a, tone, 14);
    ringIn(g, B, x, y, r, a * 0.7, tone, 14);
    for (var i = 0; i < 4; i++) {
      var th = i / 4 * TAU + 0.4;
      var dx = Math.cos(th) * r, dy = Math.sin(th) * r;
      g.line(x + dx, y + dy, z0, x + dx, y + dy, z1, a * 0.55, tone);
    }
  }

  /* twelve edges, optionally yawed about its own centre */
  function box(g, x, y, z, hx, hy, hz, a, tone, yaw) {
    var c = Math.cos(yaw || 0), s = Math.sin(yaw || 0);
    var p = [];
    for (var i = 0; i < 8; i++) {
      var sx = (i & 1) ? hx : -hx;
      var sy = (i & 2) ? hy : -hy;
      var sz = (i & 4) ? hz : -hz;
      p.push([x + sx * c - sz * s, y + sy, z + sx * s + sz * c]);
    }
    for (i = 0; i < 8; i++) {
      for (var b = 1; b <= 4; b <<= 1) {
        if (i & b) continue;
        seg(g, p[i], p[i | b], a, tone);
      }
    }
  }

  /* A loose sheet of paper: a letterhead block, ruled lines, a seal in the
     corner and the corner opposite turned up. */
  function sheet(g, x, y, z, yaw, tip, hw, hh, rows, a, tone) {
    var cy = Math.cos(yaw), sy = Math.sin(yaw);
    var ct = Math.cos(tip), st = Math.sin(tip);
    var P = plane([x, y, z], [cy, 0, sy], [-sy * ct, st, cy * ct]);
    panel(g, P, -hw, -hh, hw, hh, a, tone);

    seg(g, P(-hw * 0.72, -hh * 0.74), P(hw * 0.06, -hh * 0.74), a * 0.75, tone);
    seg(g, P(-hw * 0.72, -hh * 0.62), P(-hw * 0.2, -hh * 0.62), a * 0.45, tone);
    panel(g, P, hw * 0.3, -hh * 0.84, hw * 0.76, -hh * 0.52, a * 0.4, tone);

    for (var i = 0; i < rows; i++) {
      var v = -hh * 0.36 + i * (hh * 1.05 / rows);
      var w = hw * (0.2 + 0.62 * frac(i * 0.37 + hh * 3));
      seg(g, P(-hw * 0.72, v), P(w, v), a * 0.55, tone);
    }

    ringIn(g, P, hw * 0.42, hh * 0.66, hw * 0.2, a * 0.5, tone, 12);
    ringIn(g, P, hw * 0.42, hh * 0.66, hw * 0.11, a * 0.3, tone, 10);
    seg(g, P(hw * 0.6, hh), P(hw, hh * 0.64), a * 0.55, tone);
  }

  /* a point on a rectangle's perimeter, s in 0..1 — the path a robot walks */
  function onRect(s, hx, hz) {
    var d = frac(s) * 4 * (hx + hz);
    if (d < 2 * hx) return [-hx + d, hz];
    d -= 2 * hx;
    if (d < 2 * hz) return [hx, hz - d];
    d -= 2 * hz;
    if (d < 2 * hx) return [hx - d, -hz];
    return [-hx, -hz + (d - 2 * hx)];
  }

  /* ---------------------------------------------- 1 · passport and papers */

  /* An open passport on a desk. The left page is the record: a guilloche
     rosette under the photograph, a printed line for every fact about you, a
     signature, a chip. The right page is where the answers land — the visas
     already granted, and the strip a machine reads along the foot. A stamp
     comes down every few seconds and leaves a dated mark, and loose documents
     drift up around the book: the paperwork of a country, being processed. */
  function passport(seed) {
    var rnd = mulberry32(seed);
    var DESK = 0.10;                 // the spine's height, lowest point of the book
    var HALF = 0.42;                 // half the spine's length
    var WIDE = 0.56;                 // spine to fore-edge
    var LEAVES = 4;                  // page edges showing at the fore-edge
    var STAMP_AT = 6.4;              // seconds between stamps
    var MRZ = ['p<usa<yip<<aaron<<<<<<<<',
               'y8842119<3usa9104071m28'];
    var DATE = '240926'.split('');

    var i, f;

    /* the signature: jittered once here, then simply reprinted every frame */
    var sign = [];
    for (i = 0; i <= 24; i++) {
      f = i / 24;
      sign.push(0.085 + f * 0.25,
                0.336 + Math.sin(f * 9.4) * 0.015 * (1 - f * 0.35) + (rnd() - 0.5) * 0.005);
    }

    /* visas already in the book, each at whatever angle the officer held it */
    var granted = [];
    for (i = 0; i < 3; i++) {
      granted.push({
        u: 0.15 + rnd() * 0.24, v: -0.34 + i * 0.13 + rnd() * 0.03,
        r: 0.058 + rnd() * 0.018, rot: rnd() * TAU, a: 0.24 + rnd() * 0.18
      });
    }

    var sheets = [];
    for (i = 0; i < 6; i++) {
      sheets.push({
        ang: rnd() * TAU,
        rad: 0.74 + rnd() * 0.44,
        yaw: rnd() * TAU,
        tip: (rnd() - 0.5) * 0.8,
        phase: rnd(),
        speed: 0.03 + rnd() * 0.028,
        rows: 4 + ((rnd() * 3) | 0)
      });
    }

    var dust = [];
    for (i = 0; i < 30; i++) {
      dust.push({
        x: (rnd() - 0.5) * 2.2, y: (rnd() - 0.5) * 1.4, z: (rnd() - 0.5) * 1.7,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.16 + rnd() * 0.32
      });
    }

    /* one mark left by one stamp: two rings, the teeth between them, and the
       date ruled across the middle */
    function mark(g, P, cu, cv, r, rot, a, tone) {
      ringIn(g, P, cu, cv, r, a * 0.95, tone, 18);
      ringIn(g, P, cu, cv, r * 0.62, a * 0.55, tone, 14);
      for (var m = 0; m < 12; m++) {
        var th = rot + m / 12 * TAU;
        seg(g, P(cu + Math.cos(th) * r * 0.68, cv + Math.sin(th) * r * 0.68),
               P(cu + Math.cos(th) * r * 0.92, cv + Math.sin(th) * r * 0.92), a * 0.4, tone);
      }
      seg(g, P(cu - r * 0.5, cv - r * 0.2), P(cu + r * 0.5, cv - r * 0.2), a * 0.45, tone);
      seg(g, P(cu - r * 0.5, cv + r * 0.24), P(cu + r * 0.5, cv + r * 0.24), a * 0.45, tone);
      for (m = 0; m < DATE.length; m++) {
        var q = P(cu + (m - 2.5) * r * 0.19, cv + r * 0.03);
        g.glyph(DATE[m], q[0], q[1], q[2], a * 0.75, tone, 0.024);
      }
    }

    return {
      spin: 0.1, yaw: 0.35, tilt: -0.74, sway: 0.08, swayRate: 0.08,
      scale: 1.12, gain: 1.65,
      draw: function (g, sec) {
        var i, k, v, w, p;
        var open = 0.15 + Math.sin(sec * 0.32) * 0.05;
        var co = Math.cos(open), so = Math.sin(open);

        /* du runs out from the spine, dv along it */
        function page(side, lift) {
          return plane([0, DESK - lift, 0], [side * co, -so, 0], [0, 0, 1]);
        }
        var L = page(-1, 0.024), R = page(1, 0.024);

        /* the desk the book is lying on */
        for (i = -5; i <= 5; i++) {
          var d0 = i * 0.19, faint = 0.17 * (1 - Math.abs(i) / 6.5);
          g.line(d0, DESK + 0.003, -0.95, d0, DESK + 0.003, 0.95, faint, 0);
          g.line(-0.95, DESK + 0.003, d0, 0.95, DESK + 0.003, d0, faint, 0);
        }

        /* covers, the leaves stacked on them, and the sewn spine */
        panel(g, page(-1, 0), 0.012, -HALF, WIDE + 0.012, HALF, 1, 0);
        panel(g, page(1, 0), 0.012, -HALF, WIDE + 0.012, HALF, 1, 0);
        for (k = 0; k < LEAVES; k++) {
          var inset = 0.007 + k * 0.0055;
          var lit = k === LEAVES - 1 ? 0.9 : 0.3;
          panel(g, page(-1, 0.005 + k * 0.0063), 0.02, -HALF + inset, WIDE - inset, HALF - inset, lit, 0);
          panel(g, page(1, 0.005 + k * 0.0063), 0.02, -HALF + inset, WIDE - inset, HALF - inset, lit, 0);
        }
        g.line(0, DESK, -HALF, 0, DESK, HALF, 0.95, 0);
        for (k = 0; k < 9; k++) {
          var sv = -HALF + 0.06 + k * (HALF * 2 - 0.12) / 8;
          g.line(-0.016, DESK - 0.005, sv, 0.016, DESK - 0.005, sv, 0.45, 0);
        }

        /* a ruled border on each page, and the guilloche printed inside it */
        panel(g, L, 0.05, -0.375, 0.51, 0.395, 0.5, 0);
        panel(g, L, 0.062, -0.363, 0.498, 0.383, 0.22, 0);
        panel(g, R, 0.05, -0.375, 0.51, 0.395, 0.5, 0);
        panel(g, R, 0.062, -0.363, 0.498, 0.383, 0.22, 0);

        rosette(g, L, 0.28, -0.05, 0.24, 9, 0.11, 0.14, 0, 60);
        rosette(g, L, 0.28, -0.05, 0.185, 13, 0.08, 0.11, 0, 52);
        rosette(g, L, 0.2, -0.18, 0.148, 7, 0.15, 0.26, 0, 52);
        rosette(g, L, 0.2, -0.18, 0.112, 11, 0.11, 0.2, 0, 44);

        /* the photograph, ruled over by the line screen it was printed with */
        panel(g, L, 0.08, -0.33, 0.32, -0.03, 0.95, 0);
        panel(g, L, 0.094, -0.316, 0.306, -0.044, 0.38, 0);
        for (k = 0; k < 7; k++) {
          v = -0.3 + k * 0.038;
          seg(g, L(0.096, v), L(0.304, v), 0.13, 0);
        }
        ringIn(g, L, 0.2, -0.215, 0.046, 0.85, 0, 16);
        arcIn(g, L, 0.2, -0.23, 0.056, Math.PI * 1.06, TAU, 0.5, 0, 10);
        arcIn(g, L, 0.2, -0.045, 0.104, Math.PI, TAU, 0.8, 0, 14);
        seg(g, L(0.2, -0.169), L(0.2, -0.149), 0.45, 0);

        /* the second, fainter portrait printed beside it */
        ringIn(g, L, 0.425, -0.245, 0.026, 0.4, 0, 12);
        arcIn(g, L, 0.425, -0.196, 0.058, Math.PI, TAU, 0.32, 0, 10);

        /* one printed line per fact, each with its label */
        for (k = 0; k < 8; k++) {
          v = 0.02 + k * 0.038;
          seg(g, L(0.07, v), L(0.113, v), 0.32, 0);
          w = 0.09 + frac(k * 0.47 + 0.2) * 0.15;
          seg(g, L(0.128, v), L(0.128 + w, v), 0.78, 0);
        }

        /* the signature, and the chip with its aerial printed around it */
        polyIn(g, L, sign, 0.7, 0);
        seg(g, L(0.07, 0.372), L(0.44, 0.372), 0.26, 0);
        panel(g, L, 0.39, 0.05, 0.49, 0.15, 0.65, 0);
        for (k = 1; k < 4; k++) seg(g, L(0.39, 0.05 + k * 0.025), L(0.49, 0.05 + k * 0.025), 0.3, 0);
        seg(g, L(0.44, 0.05), L(0.44, 0.15), 0.3, 0);
        ringIn(g, L, 0.44, 0.1, 0.062, 0.22, 0, 16);

        /* the seal, engraved the same way as the rest of the page */
        rosette(g, L, 0.42, 0.29, 0.072, 9, 0.16, 0.6, 0, 40);
        rosette(g, L, 0.42, 0.29, 0.044, 6, 0.2, 0.4, 0, 28);

        /* right page: the wave print, faint under everything else */
        for (k = 0; k < 11; k++) {
          var wave = [];
          for (i = 0; i <= 18; i++) {
            var t2 = i / 18;
            wave.push(0.07 + t2 * 0.42,
                      -0.34 + k * 0.062 + Math.sin(t2 * 7.4 + k * 0.8) * 0.015);
          }
          polyIn(g, R, wave, 0.2, 0);
        }

        /* the visas it has collected, and the number punched down the edge */
        for (k = 0; k < granted.length; k++) {
          var gr = granted[k];
          mark(g, R, gr.u, gr.v, gr.r, gr.rot, gr.a, 0);
        }
        for (k = 0; k < 13; k++) {
          p = R(0.535, -0.32 + k * 0.05);
          g.dot(p[0], p[1], p[2], 0.45, 0, 0.5);
        }

        /* the strip a machine reads */
        panel(g, R, 0.04, 0.26, 0.52, 0.385, 0.4, 0);
        for (k = 0; k < MRZ.length; k++) {
          for (i = 0; i < MRZ[k].length; i++) {
            p = R(0.056 + i * 0.0185, 0.297 + k * 0.05);
            g.glyph(MRZ[k].charAt(i), p[0], p[1], p[2], 0.7, 0, 0.021);
          }
        }

        /* the ink pad, waiting beside the book */
        var Pad = plane([0.86, DESK - 0.036, -0.36], [1, 0, 0], [0, 0, 1]);
        box(g, 0.86, DESK - 0.018, -0.36, 0.15, 0.018, 0.11, 0.5, 1);
        for (k = 0; k < 7; k++) seg(g, Pad(-0.12, -0.08 + k * 0.027), Pad(0.12, -0.08 + k * 0.027), 0.2, 1);

        /* the stamp: down, press, up, then wait */
        var u = sec % STAMP_AT;
        var down = u < 1.1 ? ease(u / 1.1)
                 : u < 1.5 ? 1
                 : u < 2.5 ? 1 - ease((u - 1.5) / 1)
                 : 0;
        var at = R(0.31, 0.11);
        var hy = at[1] - 0.026 - (1 - down) * 0.44;
        var th;

        ringY(g, at[0], hy, at[2], 0.092, 0.85, 1, 20);           // the die
        ringY(g, at[0], hy - 0.042, at[2], 0.092, 0.7, 1, 20);
        ringY(g, at[0], hy - 0.042, at[2], 0.052, 0.4, 1, 14);
        for (k = 0; k < 10; k++) {
          th = k / 10 * TAU;
          g.line(at[0] + Math.cos(th) * 0.092, hy, at[2] + Math.sin(th) * 0.092,
                 at[0] + Math.cos(th) * 0.092, hy - 0.042, at[2] + Math.sin(th) * 0.092, 0.45, 1);
        }
        var coil = [];                                            // the spring above it
        for (k = 0; k <= 30; k++) {
          var cf = k / 30;
          th = cf * TAU * 3.5;
          coil.push(at[0] + Math.cos(th) * 0.036, hy - 0.05 - cf * 0.085, at[2] + Math.sin(th) * 0.036);
        }
        g.path(coil, 0.4, 1);
        g.line(at[0], hy - 0.042, at[2], at[0], hy - 0.235, at[2], 0.45, 1);
        ringY(g, at[0], hy - 0.155, at[2], 0.056, 0.7, 1, 16);     // the knurled handle
        ringY(g, at[0], hy - 0.215, at[2], 0.056, 0.7, 1, 16);
        for (k = 0; k < 12; k++) {
          th = k / 12 * TAU;
          g.line(at[0] + Math.cos(th) * 0.056, hy - 0.155, at[2] + Math.sin(th) * 0.056,
                 at[0] + Math.cos(th) * 0.056, hy - 0.215, at[2] + Math.sin(th) * 0.056, 0.3, 1);
        }
        ringY(g, at[0], hy - 0.238, at[2], 0.034, 0.5, 1, 12);

        /* the impression it leaves, and the ring that spreads from it */
        var age = u - 1.2;
        if (age > 0) {
          var stay = clamp(1 - age / (STAMP_AT - 1.2) * 0.85, 0, 1);
          mark(g, R, 0.31, 0.11, 0.088, 0.2, stay, 1);
          if (age < 0.9) {
            var ripple = age / 0.9;
            ringIn(g, R, 0.31, 0.11, 0.092 + ripple * 0.26, (1 - ripple) * 0.7, 1, 20);
          }
        }

        /* documents rising past the book */
        for (i = 0; i < sheets.length; i++) {
          var s = sheets[i];
          var rise = frac(s.phase + sec * s.speed);
          var a = pulse(rise) * 0.8;
          if (a < 0.02) continue;
          var ang = s.ang + sec * 0.055;
          sheet(g, Math.cos(ang) * s.rad, DESK - 0.14 - rise * 1.05, Math.sin(ang) * s.rad,
                s.yaw + sec * 0.1, s.tip, 0.14, 0.19, s.rows, a, 0);
        }

        for (i = 0; i < dust.length; i++) {
          var dt = dust[i];
          g.glyph(dt.ch, dt.x, dt.y + Math.sin(sec * 0.4 + dt.drift) * 0.05, dt.z,
                  dt.a, i % 6 === 0 ? 2 : 0, 0.04);
        }
      }
    };
  }

  /* ------------------------------------------------------- 2 · the globe */

  /* The original cage: a subdivided icosahedron with a field of characters
     drifting inside it. Chapter two is about language as a border, so the
     characters occasionally turn over into other characters, and a phrase
     hops the surface from one place to another. */

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

  var CAGE = (function () {
    var geo = subdivide(icosahedron());
    geo.verts = geo.verts.map(function (v) {
      var m = Math.hypot(v[0], v[1], v[2]) || 1;
      return [v[0] / m, v[1] / m, v[2] / m];
    });
    var seen = {}, edges = [];
    geo.faces.forEach(function (f) {
      for (var i = 0; i < 3; i++) {
        var a = f[i], b = f[(i + 1) % 3];
        var key = a < b ? a + ':' + b : b + ':' + a;
        if (!seen[key]) { seen[key] = 1; edges.push([a, b]); }
      }
    });
    return { verts: geo.verts, edges: edges };
  })();

  function globe(seed) {
    var rnd = mulberry32(seed);
    var N = CAGE.verts.length;
    var offs = new Float32Array(N);
    var pos = new Float64Array(N * 3);
    var i;
    for (i = 0; i < N; i++) offs[i] = 0.82 + rnd() * 0.34;

    var cloud = [];
    for (i = 0; i < 110; i++) {
      cloud.push({
        x: (rnd() - 0.5) * 0.62, y: (rnd() - 0.5) * 0.62, z: (rnd() - 0.5) * 0.62,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.22 + rnd() * 0.5
      });
    }

    /* a phrase leaving one place and arriving somewhere else */
    var hops = [];
    for (i = 0; i < 4; i++) {
      hops.push({
        from: (rnd() * N) | 0,
        to: (rnd() * N) | 0,
        phase: rnd(),
        speed: 0.07 + rnd() * 0.05
      });
    }

    return {
      spin: 0.156, tilt: -0.35, sway: 0.22, swayRate: 0.21,
      draw: function (g, sec) {
        var j;
        for (j = 0; j < N; j++) {
          var v = CAGE.verts[j];
          var r = offs[j] * (1 + Math.sin(sec * 0.5 + j * 0.7) * 0.024);
          pos[j * 3] = v[0] * r;
          pos[j * 3 + 1] = v[1] * r;
          pos[j * 3 + 2] = v[2] * r;
        }

        for (j = 0; j < cloud.length; j++) {
          var c = cloud[j];
          if (Math.random() < 0.0022) c.ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          g.glyph(c.ch, c.x, c.y + Math.sin(sec * 0.36 + c.drift) * 0.035, c.z,
                  c.a, j % 7 === 0 ? 2 : 0);
        }

        for (j = 0; j < CAGE.edges.length; j++) {
          var a = CAGE.edges[j][0] * 3, b = CAGE.edges[j][1] * 3;
          g.line(pos[a], pos[a + 1], pos[a + 2], pos[b], pos[b + 1], pos[b + 2], 1, 0);
        }

        for (j = 0; j < N; j++) {
          g.dot(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2], 1, 1);
        }

        /* Each hop lifts off the surface and lands, drawing only the part of
           the arc it has flown so far. */
        for (j = 0; j < hops.length; j++) {
          var h = hops[j];
          var p = frac(h.phase + sec * h.speed);
          if (p > 0.72) continue;
          var travel = Math.min(1, p / 0.72);
          var A = CAGE.verts[h.from], B = CAGE.verts[h.to];
          var pts = [];
          var steps = 10;
          for (var k = 0; k <= steps; k++) {
            var f = travel * (k / steps);
            var lx = A[0] + (B[0] - A[0]) * f;
            var ly = A[1] + (B[1] - A[1]) * f;
            var lz = A[2] + (B[2] - A[2]) * f;
            var m = Math.hypot(lx, ly, lz) || 1;
            var lift = (1 + Math.sin(f * Math.PI) * 0.22) * 0.95;
            pts.push(lx / m * lift, ly / m * lift, lz / m * lift);
          }
          g.path(pts, 0.8 * (1 - travel * 0.4), 1);
          g.dot(pts[pts.length - 3], pts[pts.length - 2], pts[pts.length - 1], 1.4, 1, 1.5);
        }
      }
    };
  }

  /* ------------------------------------------------ 3 · site and robots */

  /* A building goes up on a grid: columns first, then a floor plate every
     couple of seconds, while a crane swings loads in and robots run the
     perimeter of the topmost plate installing them. It tops out, holds, comes
     apart from the top down, and starts again. */
  function site(seed) {
    var rnd = mulberry32(seed);
    var GY = 0.82;                   // ground
    var FH = 0.19;                   // floor to floor
    var FLOORS = 6;
    var HX = 0.4, HZ = 0.34;         // footprint
    var CYCLE = 26;
    var COLS = [-HX, 0, HX], ROWS = [-HZ, 0, HZ];

    var tags = [], i;
    for (i = 0; i < 22; i++) {
      tags.push({
        x: (rnd() - 0.5) * 0.9, z: (rnd() - 0.5) * 0.75, f: rnd() * FLOORS,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.2 + rnd() * 0.35
      });
    }
    var bots = [
      { at: 0.02, speed: 0.052 },
      { at: 0.38, speed: 0.046 },
      { at: 0.71, speed: 0.058 }
    ];

    return {
      spin: 0.13, yaw: -0.5, tilt: -0.42, sway: 0.11, swayRate: 0.07,
      draw: function (g, sec) {
        var u = sec % CYCLE;
        var built = clamp(u / 2.2, 0, FLOORS);                 // topped out at 13.2s
        var standing = FLOORS * (1 - ease((u - 19.5) / 4.5));  // then taken apart
        var top = Math.min(built, standing);
        var i, j, k;

        /* ground */
        for (i = -3; i <= 3; i++) {
          var a = 0.55 - Math.abs(i) * 0.1;
          g.line(i * 0.32, GY, -1.0, i * 0.32, GY, 1.0, a, 0);
          g.line(-1.0, GY, i * 0.32, 1.0, GY, i * 0.32, a, 0);
        }

        /* columns, drawn only as far up as the frame has got */
        var head = GY - top * FH;
        for (j = 0; j < COLS.length; j++) {
          for (k = 0; k < ROWS.length; k++) {
            if (top > 0.02) g.line(COLS[j], GY, ROWS[k], COLS[j], head, ROWS[k], 0.8, 0);
            g.dot(COLS[j], GY, ROWS[k], 0.9, 1);
          }
        }

        /* floor plates: the newest one settles down into place, and on the way
           back out the same term lifts it away again */
        for (k = 0; k < FLOORS; k++) {
          var appear = clamp(top - k, 0, 1);
          if (appear <= 0.01) continue;
          var y = GY - (k + 1) * FH - (1 - appear) * 0.24;
          var e = ease(appear);
          var F = plane([0, y, 0], [1, 0, 0], [0, 0, 1]);
          panel(g, F, -HX, -HZ, HX, HZ, e * 0.9, 0);
          seg(g, F(-HX, 0), F(HX, 0), e * 0.4, 0);
          seg(g, F(0, -HZ), F(0, HZ), e * 0.4, 0);
          for (j = 0; j < COLS.length; j++) g.dot(COLS[j], y, -HZ, e, 1);
        }

        /* the crane: mast, jib, counterweight, and a load on the hook. It stays
           deliberately short — a taller one swings its jib over the copy. */
        var mx = -0.78, mz = 0.44, mtop = GY - 1.24;
        g.line(mx - 0.05, GY, mz, mx - 0.05, mtop, mz, 0.8, 0);
        g.line(mx + 0.05, GY, mz, mx + 0.05, mtop, mz, 0.8, 0);
        for (k = 0; k < 8; k++) {
          var y0 = GY - k * 0.185, y1 = GY - (k + 1) * 0.185;
          if (y1 < mtop) break;
          g.line(mx - 0.05, y0, mz, mx + 0.05, y1, mz, 0.45, 0);
          g.line(mx - 0.05, y1, mz, mx + 0.05, y1, mz, 0.5, 0);
        }

        var jyaw = sec * 0.19;
        var jx = Math.cos(jyaw), jz = Math.sin(jyaw);
        var JIB = 0.92, TAIL = 0.3;
        g.line(mx, mtop, mz, mx + jx * JIB, mtop, mz + jz * JIB, 0.85, 0);
        g.line(mx, mtop + 0.07, mz, mx + jx * JIB, mtop + 0.05, mz + jz * JIB, 0.6, 0);
        g.line(mx, mtop, mz, mx - jx * TAIL, mtop, mz - jz * TAIL, 0.7, 0);
        box(g, mx - jx * TAIL, mtop + 0.05, mz - jz * TAIL, 0.05, 0.045, 0.05, 0.6, 0);
        for (k = 0; k < 6; k++) {
          var f0 = k / 6 * JIB, f1 = (k + 1) / 6 * JIB;
          g.line(mx + jx * f0, mtop, mz + jz * f0,
                 mx + jx * f1, mtop + 0.06, mz + jz * f1, 0.35, 0);
        }

        var trolley = 0.4 + 0.58 * (0.5 + 0.5 * Math.sin(sec * 0.4));
        var tx = mx + jx * JIB * trolley, tz = mz + jz * JIB * trolley;
        var hook = mtop + 0.3 + (GY - mtop - 0.55) * (0.5 + 0.5 * Math.sin(sec * 0.4 - 1.5));
        g.line(tx, mtop + 0.02, tz, tx, hook, tz, 0.55, 1);
        box(g, tx, hook + 0.03, tz, 0.13, 0.012, 0.09, 0.9, 1);
        g.dot(tx, hook, tz, 1, 1);

        /* robots working the top plate */
        if (top > 0.6) {
          var ry = GY - Math.floor(top) * FH;
          for (j = 0; j < bots.length; j++) {
            var s = bots[j].at + sec * bots[j].speed;
            var p = onRect(s, HX - 0.03, HZ - 0.03);
            var q = onRect(s + 0.008, HX - 0.03, HZ - 0.03);
            var dx = q[0] - p[0], dz = q[1] - p[1];
            var m = Math.hypot(dx, dz) || 1;
            dx /= m; dz /= m;

            box(g, p[0], ry - 0.042, p[1], 0.042, 0.042, 0.034, 0.95, 1,
                Math.atan2(dz, dx));
            var ex = p[0] + dx * 0.05, ez = p[1] + dz * 0.05;
            g.line(p[0], ry - 0.084, p[1], ex, ry - 0.15, ez, 0.8, 1);
            var wx = ex + dx * 0.05, wz = ez + dz * 0.05;
            g.line(ex, ry - 0.15, ez, wx, ry - 0.06, wz, 0.8, 1);

            /* a weld flashes every second or so */
            var weld = Math.max(0, Math.sin(sec * 5.5 + j * 2.1));
            weld = weld * weld * weld;
            g.dot(wx, ry - 0.05, wz, 0.6 + weld * 2, 1, 1 + weld * 2);
            if (weld > 0.4) {
              for (k = 0; k < 3; k++) {
                var ang = k * 2.1 + sec * 3;
                g.line(wx, ry - 0.05, wz,
                       wx + Math.cos(ang) * 0.05, ry - 0.05 - Math.sin(ang) * 0.04,
                       wz + Math.sin(ang) * 0.04, weld, 1);
              }
            }
          }
        }

        /* part numbers hanging in the frame */
        for (j = 0; j < tags.length; j++) {
          var tg = tags[j];
          if (tg.f > top) continue;
          g.glyph(tg.ch, tg.x, GY - tg.f * FH - 0.06 + Math.sin(sec * 0.5 + tg.drift) * 0.02,
                  tg.z, tg.a * clamp(top - tg.f, 0, 1), j % 5 === 0 ? 2 : 0, 0.042);
        }
      }
    };
  }

  /* -------------------------------------------------- 4 · interior design */

  /* A corner of a room, seen from just outside it, with the furniture
     rearranging itself every few seconds: the same space, laid out three
     different ways, dissolving from one plan into the next. */
  function interior(seed) {
    var rnd = mulberry32(seed);
    var FY = 0.72;                   // floor
    var CEIL = -0.5;
    var BACK = -0.85, LEFT = -0.95, RIGHT = 0.95, NEAR = 0.85;
    var HOLD = 6.2, TURN = 1.2;      // seconds per plan, and per changeover

    var plans = [
      [{ k: 'rug', x: 0.05, z: 0.16, yaw: 0 },
       { k: 'sofa', x: -0.35, z: 0.3, yaw: 0.35 },
       { k: 'table', x: 0.1, z: 0.12, yaw: 0.1 },
       { k: 'chair', x: 0.52, z: -0.12, yaw: -0.9 },
       { k: 'plant', x: -0.72, z: -0.5, yaw: 0 },
       { k: 'lamp', x: 0.62, z: 0.42, yaw: 0 }],

      [{ k: 'rug', x: -0.1, z: 0.3, yaw: 0.25 },
       { k: 'sofa', x: 0.3, z: -0.4, yaw: 1.5 },
       { k: 'table', x: -0.05, z: 0.3, yaw: 0.5 },
       { k: 'chair', x: -0.55, z: 0.34, yaw: 0.4 },
       { k: 'chair', x: -0.3, z: -0.3, yaw: -0.3 },
       { k: 'plant', x: 0.72, z: 0.5, yaw: 0 }],

      [{ k: 'rug', x: 0.15, z: -0.02, yaw: -0.15 },
       { k: 'sofa', x: 0.2, z: 0.42, yaw: -0.15 },
       { k: 'table', x: 0.22, z: 0.02, yaw: -0.4 },
       { k: 'chair', x: -0.45, z: -0.02, yaw: 1.2 },
       { k: 'plant', x: -0.75, z: 0.48, yaw: 0 },
       { k: 'lamp', x: -0.6, z: -0.45, yaw: 0 }]
    ];

    var motes = [];
    for (var i = 0; i < 26; i++) {
      motes.push({
        x: (rnd() - 0.5) * 1.7, y: FY - rnd() * 1.0, z: (rnd() - 0.5) * 1.5,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.08 + rnd() * 0.18
      });
    }

    function piece(g, it, a, drop) {
      var x = it.x, z = it.z, y = FY - drop;
      var c = Math.cos(it.yaw), s = Math.sin(it.yaw);

      if (it.k === 'rug') {
        var R = plane([x, y - 0.002, z], [c, 0, s], [-s, 0, c]);
        panel(g, R, -0.36, -0.26, 0.36, 0.26, a * 0.8, 0);
        panel(g, R, -0.31, -0.21, 0.31, 0.21, a * 0.4, 0);

      } else if (it.k === 'sofa') {
        box(g, x, y - 0.08, z, 0.26, 0.08, 0.11, a * 0.95, 0, it.yaw);
        box(g, x - s * 0.1, y - 0.19, z + c * 0.1, 0.26, 0.11, 0.025, a * 0.8, 0, it.yaw);
        for (var j = -1; j <= 1; j += 2) {
          g.line(x + c * 0.24 * j, y - 0.16, z + s * 0.24 * j,
                 x + c * 0.24 * j, y - 0.02, z + s * 0.24 * j, a * 0.6, 0);
        }

      } else if (it.k === 'table') {
        box(g, x, y - 0.15, z, 0.15, 0.012, 0.1, a * 0.95, 0, it.yaw);
        for (var q = 0; q < 4; q++) {
          var lx = (q & 1 ? 0.12 : -0.12), lz = (q & 2 ? 0.07 : -0.07);
          g.line(x + lx * c - lz * s, y - 0.15, z + lx * s + lz * c,
                 x + lx * c - lz * s, y, z + lx * s + lz * c, a * 0.55, 0);
        }

      } else if (it.k === 'chair') {
        box(g, x, y - 0.16, z, 0.08, 0.012, 0.08, a * 0.9, 0, it.yaw);
        box(g, x - s * 0.07, y - 0.27, z + c * 0.07, 0.08, 0.11, 0.015, a * 0.7, 0, it.yaw);
        for (q = 0; q < 4; q++) {
          lx = (q & 1 ? 0.06 : -0.06); lz = (q & 2 ? 0.06 : -0.06);
          g.line(x + lx * c - lz * s, y - 0.16, z + lx * s + lz * c,
                 x + lx * c - lz * s, y, z + lx * s + lz * c, a * 0.5, 0);
        }

      } else if (it.k === 'plant') {
        box(g, x, y - 0.05, z, 0.05, 0.05, 0.05, a * 0.8, 0);
        for (q = 0; q < 5; q++) {
          var ang = q * 1.3;
          g.line(x, y - 0.1, z,
                 x + Math.cos(ang) * 0.11, y - 0.1 - 0.13 - (q % 2) * 0.06,
                 z + Math.sin(ang) * 0.09, a * 0.6, 0);
        }

      } else if (it.k === 'lamp') {
        g.line(x, y, z, x, y - 0.42, z, a * 0.7, 0);
        ringY(g, x, y - 0.44, z, 0.075, a * 0.8, 1, 14);
        ringY(g, x, y - 0.52, z, 0.045, a * 0.6, 1, 12);
        ringY(g, x, y - 0.004, z, 0.24, a * 0.35, 1, 20);
      }
    }

    return {
      yaw: 0.42, swing: 0.5, swingRate: 0.14, tilt: -0.4, sway: 0.07,
      swayRate: 0.09, scale: 1.02, gain: 2.1,
      draw: function (g, sec) {
        var j;

        /* floor */
        for (j = -4; j <= 4; j++) {
          var f = j / 4;
          g.line(LEFT, FY, f * NEAR, RIGHT, FY, f * NEAR, 0.5, 0);
          g.line(f * RIGHT, FY, BACK, f * RIGHT, FY, NEAR, 0.5, 0);
        }

        /* the two walls that make the corner, and the window in one of them */
        var B = plane([0, 0, BACK], [1, 0, 0], [0, 1, 0]);
        panel(g, B, LEFT, FY, RIGHT, CEIL, 0.85, 0);
        panel(g, B, -0.05, -0.12, 0.55, -0.42, 1, 0);
        seg(g, B(0.25, -0.12), B(0.25, -0.42), 0.75, 0);
        seg(g, B(-0.05, -0.27), B(0.55, -0.27), 0.75, 0);

        var Lw = plane([LEFT, 0, 0], [0, 0, 1], [0, 1, 0]);
        panel(g, Lw, BACK, FY, NEAR, CEIL, 0.7, 0);
        seg(g, Lw(BACK, -0.08), Lw(NEAR, -0.08), 0.4, 0);

        /* daylight landing on the floor */
        g.fill([-0.05, -0.12, BACK, 0.55, -0.12, BACK,
                0.75, FY, BACK + 0.75, 0.15, FY, BACK + 0.75], 0.42, 1);

        /* the plans, dissolving one into the next */
        var span = HOLD + TURN;
        var idx = Math.floor(sec / span) % plans.length;
        var into = clamp((sec % span - HOLD) / TURN, 0, 1);
        var e = ease(into);

        var out = plans[idx];
        for (j = 0; j < out.length; j++) piece(g, out[j], 1 - e, e * 0.1);
        if (e > 0) {
          var next = plans[(idx + 1) % plans.length];
          for (j = 0; j < next.length; j++) piece(g, next[j], e, (1 - e) * 0.1);
        }

        /* the tape measure that comes out while the room is being redrawn */
        var showing = pulse(into) * 0.9;
        if (showing > 0.02) {
          g.line(LEFT, FY - 0.02, NEAR * 0.5, RIGHT, FY - 0.02, NEAR * 0.5, showing, 1);
          for (j = -1; j <= 1; j += 2) {
            g.line(j * 0.95, FY - 0.06, NEAR * 0.5, j * 0.95, FY + 0.02, NEAR * 0.5, showing, 1);
          }
          g.glyph('4', 0, FY - 0.08, NEAR * 0.5, showing, 1, 0.05);
          g.glyph('m', 0.06, FY - 0.08, NEAR * 0.5, showing * 0.8, 1, 0.05);
        }

        for (j = 0; j < motes.length; j++) {
          var m = motes[j];
          g.glyph(m.ch, m.x, m.y + Math.sin(sec * 0.34 + m.drift) * 0.05, m.z,
                  m.a, j % 6 === 0 ? 2 : 0, 0.04);
        }
      }
    };
  }

  /* ------------------------------------------- 5 · camera reconstruction */

  /* A chair, as a point cloud, with a camera orbiting it. Wherever the camera
     has just been, points snap into place and knit themselves to their
     neighbours; ahead of it they are still guesses, and jitter. The strip of
     little crosses on the image plane is what the camera is actually matching
     on. Interiors in 3D, from a photograph. */
  function capture(seed) {
    var rnd = mulberry32(seed);
    var pts = [];
    var i, j, k;

    /* the chair is authored sitting on a floor at y = 0.66 and then lifted, so
       the cloud centres on the frame instead of hanging under the camera */
    function add(x, y, z) {
      pts.push({
        x: x, y: y - 0.24, z: z,
        ang: frac(Math.atan2(z, x) / TAU + 1),
        wob: rnd() * TAU
      });
    }

    /* seat, back, legs — enough of a chair to read as one */
    for (i = 0; i < 7; i++) {
      for (j = 0; j < 7; j++) {
        add(-0.3 + i * 0.1 + (rnd() - 0.5) * 0.025, 0.2 + (rnd() - 0.5) * 0.02,
            -0.3 + j * 0.1 + (rnd() - 0.5) * 0.025);
      }
    }
    for (i = 0; i < 7; i++) {
      for (j = 0; j < 5; j++) {
        add(-0.3 + i * 0.1 + (rnd() - 0.5) * 0.025, 0.15 - j * 0.12 + (rnd() - 0.5) * 0.02,
            -0.31 + (rnd() - 0.5) * 0.03);
      }
    }
    for (i = 0; i < 4; i++) {
      var lx = (i & 1 ? 0.27 : -0.27), lz = (i & 2 ? 0.27 : -0.27);
      for (j = 0; j < 5; j++) add(lx, 0.26 + j * 0.1, lz);
    }
    for (i = 0; i < 26; i++) {
      var a = rnd() * TAU, r = 0.5 + rnd() * 0.5;
      add(Math.cos(a) * r, 0.72 + (rnd() - 0.5) * 0.02, Math.sin(a) * r);
    }

    /* The model the points resolve into. Each edge carries the orbit angle of
       its midpoint, which is when the camera has enough of it to commit. */
    var model = [];

    function edge(x1, y1, z1, x2, y2, z2, w) {
      var mx = (x1 + x2) / 2, mz = (z1 + z2) / 2;
      model.push({
        a: [x1, y1 - 0.24, z1], b: [x2, y2 - 0.24, z2],
        w: w === undefined ? 1 : w,
        ang: frac(Math.atan2(mz, mx) / TAU + 1)
      });
    }

    function slab(x, y, z, hx, hy, hz) {
      for (var n = 0; n < 8; n++) {
        for (var bit = 1; bit <= 4; bit <<= 1) {
          if (n & bit) continue;
          var m = n | bit;
          edge(x + ((n & 1) ? hx : -hx), y + ((n & 2) ? hy : -hy), z + ((n & 4) ? hz : -hz),
               x + ((m & 1) ? hx : -hx), y + ((m & 2) ? hy : -hy), z + ((m & 4) ? hz : -hz));
        }
      }
    }

    slab(0, 0.23, 0, 0.3, 0.03, 0.3);            // seat
    slab(0, -0.06, -0.28, 0.3, 0.27, 0.03);      // back
    for (i = 0; i < 4; i++) {
      var mx = (i & 1 ? 0.27 : -0.27), mz = (i & 2 ? 0.27 : -0.27);
      edge(mx, 0.26, mz, mx, 0.66, mz);          // legs
    }
    for (i = 0; i < 4; i++) {
      var f0 = onRect(i / 4, 0.7, 0.7), f1 = onRect((i + 1) / 4, 0.7, 0.7);
      edge(f0[0], 0.72, f0[1], f1[0], 0.72, f1[1], 0.4);   // the floor it stands on
    }

    var LAP = 17;                     // seconds for one trip around
    var SHOTS = 8;                    // frames grabbed per trip

    return {
      spin: 0.07, yaw: 0.2, tilt: -0.34, sway: 0.12, swayRate: 0.1, scale: 1.12,
      draw: function (g, sec) {
        var k;
        var lap = frac(sec / LAP);
        var camAng = lap * TAU;
        var R = 1.2;
        var ex = Math.cos(camAng) * R;
        var ey = -0.34 + Math.sin(sec * 0.4) * 0.12;
        var ez = Math.sin(camAng) * R;

        /* how long ago, in laps, the camera passed each point */
        function since(p) { return frac(lap - p.ang); }

        var n, p;
        for (n = 0; n < pts.length; n++) {
          p = pts[n];
          var d = since(p);
          var fresh = Math.exp(-d * 7);
          var loose = d > 0.72 ? (d - 0.72) * 3.6 : 0;      // guesses wobble again
          var jx = Math.sin(sec * 3.1 + p.wob) * 0.022 * loose;
          var jy = Math.cos(sec * 2.7 + p.wob) * 0.022 * loose;
          g.dot(p.x + jx, p.y + jy, p.z, 0.6 + fresh * 1.2, fresh > 0.3 ? 1 : 0,
                0.9 + fresh * 1.1);
        }

        /* the model, strongest just behind the camera and thinning out ahead
           of it, so the chair is always most solid where it was last seen */
        for (n = 0; n < model.length; n++) {
          var e = model[n];
          var d2 = frac(lap - e.ang);
          var w = clamp(1 - d2 * 1.25, 0, 1);
          if (w <= 0.02) continue;
          g.line(e.a[0], e.a[1], e.a[2], e.b[0], e.b[1], e.b[2],
                 (0.25 + w * 0.95) * e.w, d2 < 0.06 ? 1 : 0);
        }

        /* the rig: apex, image plane, and the four rays that bound the view */
        var tx = -ex, ty = -0.05 - ey, tz = -ez;
        var tm = Math.hypot(tx, ty, tz) || 1;
        tx /= tm; ty /= tm; tz /= tm;

        var ux = -tz, uy = 0, uz = tx;              // right, level with the floor
        var um = Math.hypot(ux, uy, uz) || 1;
        ux /= um; uy /= um; uz /= um;
        var vx = ty * uz - tz * uy;                 // down the frame
        var vy = tz * ux - tx * uz;
        var vz = tx * uy - ty * ux;

        var LENS = 0.4;
        var cxp = ex + tx * LENS, cyp = ey + ty * LENS, czp = ez + tz * LENS;
        var HW = 0.24, HH = 0.17;
        var IM = plane([cxp, cyp, czp], [ux, uy, uz], [vx, vy, vz]);

        var shot = frac(lap * SHOTS);
        var flash = Math.exp(-shot * 9);

        panel(g, IM, -HW, -HH, HW, HH, 0.9 + flash * 0.8, 1);
        if (flash > 0.05) panel(g, IM, -HW, -HH, HW, HH, flash, 1, true);
        for (k = 0; k < 4; k++) {
          var cu = (k & 1 ? HW : -HW), cv = (k & 2 ? HH : -HH);
          var corner = IM(cu, cv);
          g.line(ex, ey, ez, corner[0], corner[1], corner[2], 0.5 + flash * 0.4, 1);
        }
        box(g, ex - tx * 0.09, ey - ty * 0.09, ez - tz * 0.09, 0.07, 0.05, 0.07, 0.9, 1);
        g.dot(ex, ey, ez, 1.6, 1, 1.6);
        /* just the stretch of the orbit it has flown, not the whole circle:
           a full ring reads as a horizon and cuts the frame in half */
        var wake = [];
        for (k = 0; k <= 7; k++) {
          var wa = camAng - 0.85 * (k / 7);
          wake.push(Math.cos(wa) * R, ey + 0.02 * (k / 7), Math.sin(wa) * R);
        }
        g.path(wake, 0.35, 1);

        /* what the frame has locked onto, drawn where it lands on the plane */
        for (n = 0; n < pts.length; n += 3) {
          p = pts[n];
          if (since(p) > 0.2) continue;
          var dx = p.x - ex, dy = p.y - ey, dz = p.z - ez;
          var into = dx * tx + dy * ty + dz * tz;
          if (into <= 0.05) continue;
          var s = LENS / into;
          var qx = ex + dx * s - cxp, qy = ey + dy * s - cyp, qz = ez + dz * s - czp;
          var qu = qx * ux + qy * uy + qz * uz;
          var qv = qx * vx + qy * vy + qz * vz;
          if (Math.abs(qu) > HW * 0.94 || Math.abs(qv) > HH * 0.94) continue;
          var w2 = 1 - since(p) / 0.2;
          seg(g, IM(qu - 0.016, qv), IM(qu + 0.016, qv), w2 * 0.9, 1);
          seg(g, IM(qu, qv - 0.016), IM(qu, qv + 0.016), w2 * 0.9, 1);

          /* and the ray it was solved from */
          if (since(p) < 0.03) {
            g.line(ex, ey, ez, p.x, p.y, p.z, (1 - since(p) / 0.03) * 0.45, 1);
          }
        }
      }
    };
  }

  /* ---------------------------------------------- 6 · mill and countryside */

  /* Rolling ground that scrolls past: a hedgerow, bare trees, poles marching
     off into the distance, and a mill with a sawtooth roof and a tapered
     chimney. In front of it all a loom — warp beam, two heddle shafts lifting
     a shed, a reed that beats each pick home, a shuttle running back and
     forth — laying down one thread per pass until there is a carpet with a
     pattern in it, then starting over. */
  function mill(seed) {
    var rnd = mulberry32(seed);
    var GY = 0.28;
    var RIDGES = [-1.34, -1.16, -0.99, -0.83, -0.68, -0.54, -0.41, -0.29];
    var SMOKE = ['.', ':', '~', '^', 'o', '-'];
    var PICKS = 24, PICK = 0.4, WEAVE = PICKS * PICK + 3.4;
    var WARPS = 15;                  // threads across the carpet
    var DENTS = 21;                  // slots in the reed the warp runs through

    /* Three sines, so the ground rolls rather than ripples. The ridge nearest
       the mill is flattened into the pad it stands on. */
    function land(x, z) {
      var pad = clamp((z + 0.2) * 2.4, 0, 1);
      return GY - (1 - pad) * (0.15 * Math.sin(x * 1.35 + z * 0.5)
                             + 0.07 * Math.sin(x * 3.1 + 1.3)
                             + 0.04 * Math.sin(x * 6.4 - z));
    }

    var poles = [], i;
    for (i = 0; i < 6; i++) poles.push(i * 0.62);

    /* Bare trees, grown once here and then only carried past by the drift. A
       branch splits in two, each child tilted off its parent at its own angle
       around it, so the tree holds up from any side the camera swings to. */
    function limbs() {
      var out = [];
      function grow(p, d, len, depth) {
        var q = [p[0] + d[0] * len, p[1] + d[1] * len, p[2] + d[2] * len];
        out.push({ a: p, b: q, w: 0.72 - depth * 0.16 });
        if (depth >= 3) return;
        var s = Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 0, 1];
        var e1 = [d[1] * s[2] - d[2] * s[1], d[2] * s[0] - d[0] * s[2], d[0] * s[1] - d[1] * s[0]];
        var m = Math.hypot(e1[0], e1[1], e1[2]) || 1;
        e1 = [e1[0] / m, e1[1] / m, e1[2] / m];
        var e2 = [d[1] * e1[2] - d[2] * e1[1], d[2] * e1[0] - d[0] * e1[2], d[0] * e1[1] - d[1] * e1[0]];
        for (var c = 0; c < 2; c++) {
          var az = rnd() * TAU, sp = 0.38 + rnd() * 0.34;
          var cs = Math.cos(sp), sn = Math.sin(sp);
          var ca = Math.cos(az) * sn, sa = Math.sin(az) * sn;
          grow(q, [d[0] * cs + e1[0] * ca + e2[0] * sa,
                   d[1] * cs + e1[1] * ca + e2[1] * sa,
                   d[2] * cs + e1[2] * ca + e2[2] * sa], len * 0.66, depth + 1);
        }
      }
      grow([0, 0, 0], [0, -1, 0], 0.13, 0);
      return out;
    }

    var trees = [];
    for (i = 0; i < 3; i++) {
      trees.push({ at: i * 1.05 + rnd() * 0.3, z: -1.12 + rnd() * 0.18, limbs: limbs() });
    }

    var motes = [];
    for (i = 0; i < 20; i++) {
      motes.push({
        x: (rnd() - 0.5) * 2.2, y: GY - 0.2 - rnd() * 0.9, z: (rnd() - 0.5) * 1.6,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.14 + rnd() * 0.26
      });
    }

    return {
      spin: 0.05, yaw: 0.22, swing: 0.18, swingRate: 0.08,
      tilt: -0.44, sway: 0.07, swayRate: 0.07,
      scale: 1.42, dolly: 0.68, gain: 1.85, paper: true, weight: 1.1,
      draw: function (g, sec) {
        var drift = sec * 0.055;
        var j, k, x, f;

        /* anything standing in the field is carried past at the same rate */
        function walk(at, span) { return -1.4 + frac((at + drift * 0.9) / span) * span; }
        function edgeAt(px) { return clamp((1.35 - Math.abs(px)) * 2.2, 0, 1); }

        /* the ground, as ridges at eight depths with a mesh knitting them */
        for (j = 0; j < RIDGES.length; j++) {
          var z = RIDGES[j];
          var pts = [];
          for (k = 0; k <= 28; k++) {
            x = -1.3 + k * 0.0929;
            pts.push(x, land(x + drift, z), z);
          }
          g.path(pts, 0.34 + j * 0.055, 0);

          if (j) {
            var pz = RIDGES[j - 1];
            for (k = 0; k <= 28; k += 3) {
              x = -1.3 + k * 0.0929;
              g.line(x, land(x + drift, pz), pz, x, land(x + drift, z), z, 0.2, 0);
            }
          }
        }

        /* the hedgerow: posts with two rails run between them */
        var HZ = -0.55, prev = null;
        for (j = 0; j < 15; j++) {
          var hx = walk(j * 0.21, 3.15);
          var hb = land(hx + drift, HZ), ha = edgeAt(hx);
          g.line(hx, hb, HZ, hx, hb - 0.09, HZ, 0.4 * ha, 0);
          if (prev && hx > prev[0]) {
            g.line(prev[0], prev[1] - 0.075, HZ, hx, hb - 0.075, HZ, 0.28 * ha, 0);
            g.line(prev[0], prev[1] - 0.04, HZ, hx, hb - 0.04, HZ, 0.22 * ha, 0);
          }
          prev = [hx, hb];
        }

        /* bare trees on the far side */
        for (j = 0; j < trees.length; j++) {
          var tr = trees[j];
          var tx = walk(tr.at, 3.15), ta = edgeAt(tx);
          if (ta <= 0.01) continue;
          var ty = land(tx + drift, tr.z);
          for (k = 0; k < tr.limbs.length; k++) {
            var lb = tr.limbs[k];
            g.line(tx + lb.a[0], ty + lb.a[1], tr.z + lb.a[2],
                   tx + lb.b[0], ty + lb.b[1], tr.z + lb.b[2], lb.w * ta, 0);
          }
        }

        /* poles walking past, crossarms and all, cable sagging between them */
        for (j = 0; j < poles.length; j++) {
          var px = walk(poles[j], 3.1);
          var ppz = -0.86;
          var base = land(px + drift, ppz);
          var top = base - 0.32;
          var pa = edgeAt(px);
          g.line(px, base, ppz, px, top, ppz, 0.55 * pa, 0);
          g.line(px - 0.055, top + 0.035, ppz, px + 0.055, top + 0.035, ppz, 0.45 * pa, 0);
          g.line(px - 0.04, top + 0.09, ppz, px + 0.04, top + 0.09, ppz, 0.32 * pa, 0);
          g.line(px - 0.03, top + 0.035, ppz, px, top + 0.075, ppz, 0.25 * pa, 0);
          g.line(px + 0.03, top + 0.035, ppz, px, top + 0.075, ppz, 0.25 * pa, 0);
          for (k = -1; k <= 1; k += 2) {
            g.dot(px + k * 0.055, top + 0.025, ppz, 0.5 * pa, 0, 0.7);
          }
          var nx = px + 0.62;
          if (nx < 1.4) {
            var ntop = land(nx + drift, ppz) - 0.32;
            for (var c = -1; c <= 1; c += 2) {
              var cable = [];
              for (k = 0; k <= 5; k++) {
                f = k / 5;
                cable.push(px + c * 0.055 + (nx - px) * f,
                           top + 0.035 + (ntop - top) * f + Math.sin(f * Math.PI) * 0.032, ppz);
              }
              g.path(cable, 0.22 * pa, 0);
            }
          }
        }

        /* the mill: brick hall, sawtooth roof, tapered chimney, windows */
        var MX = -0.5, MZ = -0.06, MY = GY - 0.02;
        var W0 = MX - 0.34, W1 = MX + 0.34, ZB = MZ - 0.22, ZF = MZ + 0.22;
        var EAVE = MY - 0.28;
        var Fr = plane([0, 0, ZF], [1, 0, 0], [0, 1, 0]);
        var Bk = plane([0, 0, ZB], [1, 0, 0], [0, 1, 0]);

        box(g, MX, (MY + EAVE) / 2, MZ, 0.34, (MY - EAVE) / 2, 0.22, 0.9, 0);
        for (k = 1; k < 8; k++) {                            // brick courses
          var by = MY - k * 0.035;
          seg(g, Fr(W0, by), Fr(W1, by), 0.16, 0);
        }
        for (k = 0; k <= 6; k++) {                           // pilasters
          x = W0 + k * (W1 - W0) / 6;
          seg(g, Fr(x, MY), Fr(x, EAVE), 0.22, 0);
        }
        seg(g, Fr(W0, MY - 0.022), Fr(W1, MY - 0.022), 0.4, 0);
        for (k = 0; k < 5; k++) {                            // windows, four panes each
          var wx = MX - 0.27 + k * 0.135;
          panel(g, Fr, wx, MY - 0.085, wx + 0.075, MY - 0.2, 0.6, 0);
          seg(g, Fr(wx + 0.0375, MY - 0.085), Fr(wx + 0.0375, MY - 0.2), 0.32, 0);
          seg(g, Fr(wx, MY - 0.1425), Fr(wx + 0.075, MY - 0.1425), 0.32, 0);
        }
        panel(g, Fr, MX + 0.24, MY, MX + 0.31, MY - 0.13, 0.55, 0);   // the door
        seg(g, Fr(MX + 0.23, MY + 0.012), Fr(MX + 0.32, MY + 0.012), 0.4, 0);

        for (k = 0; k < 5; k++) {                            // the sawtooth bays
          var v0 = W0 + k * 0.136, v1 = v0 + 0.136;
          var rid = EAVE - 0.088;
          seg(g, Fr(v0, EAVE), Fr(v0, rid), 0.6, 0);         // the glazed north light
          seg(g, Fr(v0, rid), Fr(v1, EAVE), 0.75, 0);
          seg(g, Bk(v0, EAVE), Bk(v0, rid), 0.4, 0);
          seg(g, Bk(v0, rid), Bk(v1, EAVE), 0.5, 0);
          g.line(v0, rid, ZB, v0, rid, ZF, 0.55, 0);         // ridge
          g.line(v1, EAVE, ZB, v1, EAVE, ZF, 0.4, 0);        // valley
          for (j = 1; j < 4; j++) {                          // glazing bars
            var gz = ZB + (ZF - ZB) * (j / 4);
            g.line(v0, EAVE, gz, v0, rid, gz, 0.2, 0);
            g.line(v0 + 0.045, rid - 0.029, gz, v0 + 0.091, rid - 0.058, gz, 0.14, 0);
          }
        }

        var CHX = MX + 0.2, CHZ = MZ - 0.12, CHTOP = MY - 0.68;
        for (k = 0; k < 4; k++) {                            // the chimney, tapering
          var sx = (k & 1) ? 1 : -1, sz = (k & 2) ? 1 : -1;
          g.line(CHX + sx * 0.042, MY, CHZ + sz * 0.042,
                 CHX + sx * 0.026, CHTOP, CHZ + sz * 0.026, 0.75, 0);
        }
        for (k = 0; k <= 5; k++) {                           // its banding
          f = k / 5;
          var cy2 = MY + (CHTOP - MY) * f, cr = 0.042 - 0.016 * f;
          if (k === 5) cr = 0.05;
          ringY(g, CHX, cy2, CHZ, cr * 1.34, 0.35 + (k === 5 ? 0.3 : 0), 0, 4);
        }
        g.line(CHX + 0.05, MY, CHZ, CHX + 0.034, CHTOP + 0.02, CHZ, 0.3, 0);
        g.line(CHX + 0.066, MY, CHZ, CHX + 0.05, CHTOP + 0.02, CHZ, 0.3, 0);
        for (k = 0; k < 9; k++) {                            // the ladder up its side
          f = k / 9;
          var ly2 = MY + (CHTOP + 0.02 - MY) * f;
          g.line(CHX + 0.05 - 0.016 * f, ly2, CHZ, CHX + 0.066 - 0.016 * f, ly2, CHZ, 0.24, 0);
        }

        /* smoke, drifting off with the wind */
        for (k = 0; k < 14; k++) {
          var p = frac(k / 14 + sec * 0.062);
          var puff = pulse(p);
          if (puff < 0.03) continue;
          g.glyph(SMOKE[k % SMOKE.length],
                  CHX + p * 0.42 + Math.sin(p * 5 + k) * 0.05,
                  CHTOP - p * 0.5,
                  CHZ + Math.sin(k * 2.3) * 0.06 * p,
                  puff * 0.5, 0, 0.045 + p * 0.03);
        }

        /* ------------------------------------------------------- the loom */

        var X0 = 0.04, X1 = 0.74, Z0 = 0.06, Z1 = 0.5;
        var XF = X0 + (X1 - X0) * 0.58;    // as far as the cloth ever reaches
        var LY = GY - 0.14;                // the plane the cloth lies in
        var TOPY = LY - 0.2;               // the castle the shafts hang from
        var u = sec % WEAVE;
        var done = clamp(Math.floor(u / PICK), 0, PICKS);
        var into = frac(u / PICK);
        var cloth = u > PICKS * PICK + 1.9 ? 1 - (u - PICKS * PICK - 1.9) / 1.5 : 1;
        cloth = clamp(cloth, 0, 1);

        /* the floor it stands on */
        for (k = 0; k <= 8; k++) {
          var fz = Z0 - 0.14 + (Z1 - Z0 + 0.28) * (k / 8);
          g.line(X0 - 0.16, GY, fz, X1 + 0.16, GY, fz, 0.16, 0);
        }

        /* the frame: four legs, the breast rails, and the castle over the top */
        var CX = [X0 - 0.05, X1 + 0.05], CZ = [Z0 - 0.05, Z1 + 0.05];
        for (j = 0; j < 2; j++) {
          for (k = 0; k < 2; k++) {
            g.line(CX[j], GY, CZ[k], CX[j], TOPY, CZ[k], 0.62, 0);
          }
          g.line(CX[j], LY + 0.02, CZ[0], CX[j], LY + 0.02, CZ[1], 0.5, 0);
          g.line(CX[j], TOPY, CZ[0], CX[j], TOPY, CZ[1], 0.45, 0);
          g.line(CX[0], LY + 0.02, CZ[j], CX[1], LY + 0.02, CZ[j], 0.45, 0);
          g.line(CX[0], TOPY, CZ[j], CX[1], TOPY, CZ[j], 0.4, 0);
          g.line(CX[j], GY - 0.04, CZ[0], CX[j], GY - 0.04, CZ[1], 0.3, 0);
        }

        /* warp beam at the back, cloth beam at the front */
        drumZ(g, X1 + 0.05, LY - 0.05, CZ[0], CZ[1], 0.042, 0.55, 0);
        drumZ(g, X0 - 0.05, LY + 0.025, CZ[0], CZ[1], 0.038, 0.55, 0);

        /* Where the weaving has got to, and the two shafts just behind it: one
           lifts while the other drops, which is what opens the shed. */
        var fell = X0 + (XF - X0) * (done / PICKS);
        var lift = (done % 2 ? 1 : -1) * 0.022;
        var HX = [fell + 0.115, fell + 0.19];

        for (j = 0; j < 2; j++) {
          var sy2 = LY - 0.09 + (j ? -lift : lift);
          for (k = 0; k < 2; k++) {
            g.line(HX[j], sy2 - 0.042, CZ[k], HX[j], sy2 + 0.042, CZ[k], 0.35, 0);
          }
          g.line(HX[j], sy2 - 0.042, CZ[0], HX[j], sy2 - 0.042, CZ[1], 0.5, 0);
          g.line(HX[j], sy2 + 0.042, CZ[0], HX[j], sy2 + 0.042, CZ[1], 0.5, 0);
          for (k = j; k < WARPS; k += 2) {                   // one heddle per thread
            var hz = Z0 + (Z1 - Z0) * (k / (WARPS - 1));
            g.line(HX[j], sy2 - 0.042, hz, HX[j], sy2 + 0.042, hz, 0.2, 0);
          }
          g.line(HX[j], sy2 - 0.042, (Z0 + Z1) / 2, HX[j], TOPY, (Z0 + Z1) / 2, 0.22, 0);
          g.line(HX[j], sy2 + 0.042, CZ[0] + 0.02, X0 + 0.1, GY - 0.045 - (j ? -lift : lift) * 1.6, CZ[0] + 0.02, 0.16, 0);
        }

        /* the warp: flat off the beam, then split into the shed at the fell */
        for (k = 0; k < WARPS; k++) {
          var wz2 = Z0 + (Z1 - Z0) * (k / (WARPS - 1));
          var side = (k % 2 ? 1 : -1) * lift;
          g.line(X1 + 0.05, LY - 0.05, wz2, HX[1], LY - 0.09, wz2, 0.3, 0);
          g.line(HX[1], LY - 0.09 + side, wz2, HX[0], LY - 0.09 + side, wz2, 0.34, 0);
          g.line(HX[0], LY - 0.09 + side, wz2, fell, LY, wz2, 0.42, 0);
          if (done) g.line(X0, LY, wz2, fell, LY, wz2, 0.5 * cloth, 0);
        }

        /* The reed: it hangs back while the shuttle flies, then swings forward
           and beats the new thread up against the cloth. */
        var beat = into > 0.72 ? pulse((into - 0.72) / 0.28) : 0;
        var bx = fell + 0.062 - beat * 0.065;
        for (k = 0; k < DENTS; k++) {
          var dz = Z0 - 0.02 + (Z1 - Z0 + 0.04) * (k / (DENTS - 1));
          g.line(bx, LY - 0.062, dz, bx, LY + 0.005, dz, 0.22, 0);
        }
        g.line(bx, LY - 0.062, CZ[0], bx, LY - 0.062, CZ[1], 0.5, 0);
        g.line(bx, LY + 0.005, CZ[0], bx, LY + 0.005, CZ[1], 0.5, 0);
        for (k = 0; k < 2; k++) {
          g.line(bx, LY - 0.062, CZ[k], HX[1] + 0.05, TOPY, CZ[k], 0.3, 0);
        }

        /* the cloth: one weft thread per pass, with the pattern coming up in it */
        for (k = 0; k < done; k++) {
          var kx = X0 + (XF - X0) * (k / PICKS);
          g.line(kx, LY, Z0, kx, LY, Z1, 0.5 * cloth, 0);
          var motif = Math.abs((k % 8) - 3.5) / 3.5;         // a diamond, repeating
          var half = (Z1 - Z0) * 0.42 * (1 - motif);
          if (half > 0.01) {
            var mid = (Z0 + Z1) / 2;
            g.line(kx, LY - 0.004, mid - half, kx, LY - 0.004, mid + half, 0.85 * cloth, 1);
          }
        }
        g.line(X0, LY, Z0, fell, LY, Z0, 0.6 * cloth, 0);
        g.line(X0, LY, Z1, fell, LY, Z1, 0.6 * cloth, 0);
        for (k = 0; k <= 3; k++) {                           // rolling onto the beam
          var rz = Z0 + (Z1 - Z0) * (k / 3);
          var roll = [];
          for (j = 0; j <= 5; j++) {
            f = j / 5;
            roll.push(X0 - Math.sin(f * 1.9) * 0.062, LY + (1 - Math.cos(f * 1.9)) * 0.05, rz);
          }
          g.path(roll, 0.35 * cloth, 0);
        }

        /* the shuttle, and the thread paying out behind it */
        if (done < PICKS) {
          var back = done % 2 === 1;
          var run = clamp(into / 0.72, 0, 1);
          var sz2 = Z0 - 0.04 + (Z1 - Z0 + 0.08) * (back ? 1 - run : run);
          var Sh = plane([fell + 0.025, LY - 0.025, 0], [1, 0, 0], [0, 0, 1]);
          polyIn(g, Sh, [0, sz2 - 0.05, 0.017, sz2 - 0.018, 0.017, sz2 + 0.018,
                         0, sz2 + 0.05, -0.017, sz2 + 0.018, -0.017, sz2 - 0.018], 1, 1, true);
          ringIn(g, Sh, 0, sz2, 0.012, 0.6, 1, 10);
          g.line(fell + 0.025, LY - 0.025, back ? Z1 + 0.04 : Z0 - 0.04,
                 fell + 0.025, LY - 0.025, sz2, 0.7, 1);
          g.dot(fell + 0.025, LY - 0.025, sz2, 1.3, 1, 1.3);
        }

        for (j = 0; j < motes.length; j++) {
          var m = motes[j];
          g.glyph(m.ch, m.x, m.y + Math.sin(sec * 0.3 + m.drift) * 0.04, m.z,
                  m.a, j % 5 === 0 ? 2 : 0, 0.04);
        }
      }
    };
  }

  /* ---------------------------------------------------------------- public */

  /* site.js counts the chapters at runtime and hands the index over, so an
     unknown one falls back to the cage rather than going blank. */
  var BUILDERS = {
    1: passport,
    2: globe,
    3: site,
    4: interior,
    5: capture,
    6: mill
  };

  window.SceneShapes = {
    build: function (index) {
      var make = BUILDERS[index] || globe;
      return make(index * 9176 + 13);
    }
  };
})();
