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

  /* a circle lying flat, for light pools and orbit paths */
  function ringY(g, x, y, z, r, a, tone, n) {
    n = n || 24;
    var pts = [];
    for (var i = 0; i < n; i++) {
      pts.push(x + Math.cos(i / n * TAU) * r, y, z + Math.sin(i / n * TAU) * r);
    }
    g.path(pts, a, tone, true);
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

  /* a loose sheet of paper: outline plus a few ruled lines */
  function sheet(g, x, y, z, yaw, tip, hw, hh, rows, a, tone) {
    var cy = Math.cos(yaw), sy = Math.sin(yaw);
    var ct = Math.cos(tip), st = Math.sin(tip);
    var P = plane([x, y, z], [cy, 0, sy], [-sy * ct, st, cy * ct]);
    panel(g, P, -hw, -hh, hw, hh, a, tone);
    for (var i = 0; i < rows; i++) {
      var v = -hh + (i + 1) * (hh * 2 / (rows + 1));
      var w = hw * (0.3 + 0.6 * frac(i * 0.37 + hh * 3));
      seg(g, P(-hw * 0.7, v), P(w, v), a * 0.65, tone);
    }
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

  /* An open passport lying on an invisible desk: photograph page on the left,
     printed fields and a machine-readable strip on the right. A stamp comes
     down every few seconds and leaves a mark, and loose documents drift up
     around the book — the paperwork of a country, being processed. */
  function passport(seed) {
    var rnd = mulberry32(seed);
    var DESK = 0.10;                 // the spine's height, lowest point of the book
    var HALF = 0.42;                 // half the spine's length
    var WIDE = 0.56;                 // spine to fore-edge
    var STAMP_AT = 6.4;              // seconds between stamps
    var MRZ = 'p<usa<yip<<aaron<<<<<<<<'.split('');

    var sheets = [], i;
    for (i = 0; i < 5; i++) {
      sheets.push({
        ang: rnd() * TAU,
        rad: 0.74 + rnd() * 0.44,
        yaw: rnd() * TAU,
        tip: (rnd() - 0.5) * 0.8,
        phase: rnd(),
        speed: 0.03 + rnd() * 0.028,
        rows: 3 + ((rnd() * 3) | 0)
      });
    }

    var dust = [];
    for (i = 0; i < 30; i++) {
      dust.push({
        x: (rnd() - 0.5) * 2.2, y: (rnd() - 0.5) * 1.4, z: (rnd() - 0.5) * 1.7,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.16 + rnd() * 0.32
      });
    }

    return {
      spin: 0.1, yaw: 0.35, tilt: -0.52, sway: 0.1, swayRate: 0.08,
      scale: 1.22, gain: 1.65,
      draw: function (g, sec) {
        var i;
        var open = 0.15 + Math.sin(sec * 0.32) * 0.05;
        var co = Math.cos(open), so = Math.sin(open);

        /* du runs out from the spine, dv along it */
        function page(side, lift) {
          return plane([0, DESK - lift, 0], [side * co, -so, 0], [0, 0, 1]);
        }
        var L = page(-1, 0.016), R = page(1, 0.016);

        /* covers, then the block of pages sitting on them */
        panel(g, page(-1, 0), 0.015, -HALF, WIDE, HALF, 1, 0);
        panel(g, page(1, 0), 0.015, -HALF, WIDE, HALF, 1, 0);
        panel(g, L, 0.03, -HALF + 0.02, WIDE - 0.03, HALF - 0.02, 0.88, 0);
        panel(g, R, 0.03, -HALF + 0.02, WIDE - 0.03, HALF - 0.02, 0.88, 0);
        g.line(0, DESK, -HALF, 0, DESK, HALF, 0.95, 0);

        /* left page: the photograph, and the seal under it */
        panel(g, L, 0.1, -0.34, 0.36, -0.04, 0.95, 0);
        ringIn(g, L, 0.23, -0.24, 0.045, 0.85, 0, 12);
        seg(g, L(0.13, -0.06), L(0.23, -0.16), 0.8, 0);
        seg(g, L(0.33, -0.06), L(0.23, -0.16), 0.8, 0);
        for (i = 0; i < 3; i++) {
          seg(g, L(0.1, 0.04 + i * 0.08), L(0.1 + 0.14 + i * 0.06, 0.04 + i * 0.08), 0.8, 0);
        }
        ringIn(g, L, 0.44, 0.3, 0.085, 0.75, 0, 16);
        ringIn(g, L, 0.44, 0.3, 0.055, 0.58, 0, 12);

        /* right page: fields, then the strip a machine reads */
        for (i = 0; i < 6; i++) {
          var w = 0.16 + frac(i * 0.41) * 0.32;
          seg(g, R(0.08, -0.3 + i * 0.09), R(0.08 + w, -0.3 + i * 0.09), 0.82, 0);
        }
        for (i = 0; i < MRZ.length; i++) {
          var du = 0.06 + (i % 12) * 0.043;
          var dv = 0.28 + ((i / 12) | 0) * 0.07;
          var p = R(du, dv);
          g.glyph(MRZ[i], p[0], p[1], p[2], 0.75, 0, 0.036);
        }

        /* the stamp: down, press, up, then wait */
        var u = sec % STAMP_AT;
        var down = u < 1.1 ? ease(u / 1.1)
                 : u < 1.5 ? 1
                 : u < 2.5 ? 1 - ease((u - 1.5) / 1)
                 : 0;
        var mark = R(0.34, 0.06);
        var lift = 0.038 + (1 - down) * 0.46;
        box(g, mark[0], mark[1] - lift, mark[2], 0.075, 0.035, 0.075, 0.85, 1);
        g.line(mark[0], mark[1] - lift - 0.035, mark[2],
               mark[0], mark[1] - lift - 0.16, mark[2], 0.7, 1);
        box(g, mark[0], mark[1] - lift - 0.19, mark[2], 0.04, 0.03, 0.04, 0.6, 1);

        /* the impression it leaves, and the ring that spreads from it */
        var age = u - 1.2;
        if (age > 0) {
          var stay = clamp(1 - age / (STAMP_AT - 1.2) * 0.85, 0, 1);
          ringIn(g, R, 0.34, 0.06, 0.1, stay * 0.9, 1, 16);
          ringIn(g, R, 0.34, 0.06, 0.066, stay * 0.6, 1, 12);
          seg(g, R(0.28, 0.06), R(0.4, 0.06), stay * 0.5, 1);
          if (age < 0.9) {
            var wave = age / 0.9;
            ringIn(g, R, 0.34, 0.06, 0.1 + wave * 0.28, (1 - wave) * 0.7, 1, 20);
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
          var d = dust[i];
          g.glyph(d.ch, d.x, d.y + Math.sin(sec * 0.4 + d.drift) * 0.05, d.z,
                  d.a, i % 6 === 0 ? 2 : 0, 0.04);
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
        ch: pick(rnd), drift: rnd() * TAU, a: 0.14 + rnd() * 0.3
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
      swayRate: 0.09, scale: 1.02,
      draw: function (g, sec) {
        var j;

        /* floor */
        for (j = -4; j <= 4; j++) {
          var f = j / 4;
          g.line(LEFT, FY, f * NEAR, RIGHT, FY, f * NEAR, 0.3, 0);
          g.line(f * RIGHT, FY, BACK, f * RIGHT, FY, NEAR, 0.3, 0);
        }

        /* the two walls that make the corner, and the window in one of them */
        var B = plane([0, 0, BACK], [1, 0, 0], [0, 1, 0]);
        panel(g, B, LEFT, FY, RIGHT, CEIL, 0.7, 0);
        panel(g, B, -0.05, -0.12, 0.55, -0.42, 0.85, 0);
        seg(g, B(0.25, -0.12), B(0.25, -0.42), 0.6, 0);
        seg(g, B(-0.05, -0.27), B(0.55, -0.27), 0.6, 0);

        var Lw = plane([LEFT, 0, 0], [0, 0, 1], [0, 1, 0]);
        panel(g, Lw, BACK, FY, NEAR, CEIL, 0.55, 0);
        seg(g, Lw(BACK, -0.08), Lw(NEAR, -0.08), 0.3, 0);

        /* daylight landing on the floor */
        g.fill([-0.05, -0.12, BACK, 0.55, -0.12, BACK,
                0.75, FY, BACK + 0.75, 0.15, FY, BACK + 0.75], 1, 1);

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

  /* Rolling ground that scrolls past, a mill with a sawtooth roof and a
     chimney, poles marching off into the distance — and in front of it all a
     loom, where a shuttle runs back and forth and lays down one thread per
     pass until there is a carpet, then starts over. */
  function mill(seed) {
    var rnd = mulberry32(seed);
    var GY = 0.55;
    var RIDGES = [-1.15, -0.92, -0.7, -0.48, -0.26];
    var SMOKE = ['.', ':', '~', '^', 'o', '-'];
    var PICKS = 20, PICK = 0.44, WEAVE = PICKS * PICK + 3.4;

    /* Two sines and a slow swell, so the ground rolls rather than ripples. The
       ridge nearest the mill is flattened into the pad it stands on. */
    function land(x, z) {
      var pad = clamp((z + 0.2) * 2.4, 0, 1);
      return GY - (1 - pad) * (0.15 * Math.sin(x * 1.35 + z * 0.5)
                             + 0.07 * Math.sin(x * 3.1 + 1.3)
                             + 0.04 * Math.sin(x * 6.4 - z));
    }

    var poles = [];
    for (var i = 0; i < 5; i++) poles.push(i * 0.62);

    var motes = [];
    for (i = 0; i < 20; i++) {
      motes.push({
        x: (rnd() - 0.5) * 2.2, y: GY - 0.2 - rnd() * 0.9, z: (rnd() - 0.5) * 1.6,
        ch: pick(rnd), drift: rnd() * TAU, a: 0.14 + rnd() * 0.26
      });
    }

    return {
      spin: 0.055, yaw: 0.18, swing: 0.26, swingRate: 0.09,
      tilt: -0.38, sway: 0.09, swayRate: 0.07,
      scale: 1.28, gain: 2.4,
      draw: function (g, sec) {
        var drift = sec * 0.055;
        var j, k, x;

        /* the ground, as ridges at a few depths with a sparse mesh between */
        for (j = 0; j < RIDGES.length; j++) {
          var z = RIDGES[j];
          var pts = [];
          for (k = 0; k <= 20; k++) {
            x = -1.25 + k * 0.125;
            pts.push(x, land(x + drift, z), z);
          }
          g.path(pts, 0.55 + j * 0.12, 0);

          if (j) {
            var pz = RIDGES[j - 1];
            for (k = 0; k <= 20; k += 4) {
              x = -1.25 + k * 0.125;
              g.line(x, land(x + drift, pz), pz, x, land(x + drift, z), z, 0.42, 0);
            }
          }
        }

        /* poles walking past, with the cable sagging between them */
        for (j = 0; j < poles.length; j++) {
          var px = -1.35 + frac((poles[j] + drift * 0.9) / 3.1) * 3.1;
          if (px > 1.35) continue;
          var pz = -0.78;
          var base = land(px + drift, pz);
          var top = base - 0.3;
          var edge = clamp((1.3 - Math.abs(px)) * 2.2, 0, 1);
          g.line(px, base, pz, px, top, pz, 0.6 * edge, 0);
          g.line(px - 0.05, top + 0.04, pz, px + 0.05, top + 0.04, pz, 0.5 * edge, 0);
          var nx = px + 0.62;
          if (nx < 1.35) {
            var ntop = land(nx + drift, pz) - 0.3;
            var cable = [];
            for (k = 0; k <= 4; k++) {
              var f = k / 4;
              cable.push(px + (nx - px) * f,
                         top + (ntop - top) * f + Math.sin(f * Math.PI) * 0.035, pz);
            }
            g.path(cable, 0.3 * edge, 0);
          }
        }

        /* the mill: hall, sawtooth roof, chimney, and a row of windows */
        var MX = -0.46, MZ = -0.02, MY = GY - 0.02;
        box(g, MX, MY - 0.13, MZ, 0.3, 0.13, 0.2, 1, 0);
        for (k = 0; k < 4; k++) {
          var x0 = MX - 0.3 + k * 0.15;
          for (j = -1; j <= 1; j += 2) {
            var zf = MZ + j * 0.2;
            g.line(x0, MY - 0.26, zf, x0 + 0.075, MY - 0.35, zf, 0.85, 0);
            g.line(x0 + 0.075, MY - 0.35, zf, x0 + 0.15, MY - 0.26, zf, 0.85, 0);
          }
          g.line(x0 + 0.075, MY - 0.35, MZ - 0.2, x0 + 0.075, MY - 0.35, MZ + 0.2, 0.7, 0);
        }
        var CHX = MX + 0.22, CHZ = MZ - 0.1, CHTOP = MY - 0.62;
        box(g, CHX, MY - 0.36, CHZ, 0.035, 0.26, 0.035, 0.9, 0);

        var Fr = plane([0, 0, MZ + 0.2], [1, 0, 0], [0, 1, 0]);
        for (k = 0; k < 5; k++) {
          var wx = MX - 0.24 + k * 0.12;
          panel(g, Fr, wx, MY - 0.09, wx + 0.07, MY - 0.19, 0.7, 0);
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

        /* the loom: warp threads, then one weft thread per pass of the shuttle */
        var X0 = 0.1, X1 = 0.92, Z0 = 0.18, Z1 = 0.72;
        var LY = GY - 0.015;
        var u = sec % WEAVE;
        var done = clamp(Math.floor(u / PICK), 0, PICKS);
        var cloth = u > PICKS * PICK + 1.9 ? 1 - (u - PICKS * PICK - 1.9) / 1.5 : 1;
        cloth = clamp(cloth, 0, 1);

        for (k = 0; k <= 6; k++) {
          var wz = Z0 + (Z1 - Z0) * (k / 6);
          g.line(X0 - 0.04, LY, wz, X1 + 0.04, LY, wz, 0.72, 0);
        }
        for (k = 0; k < done; k++) {
          var kx = X0 + (X1 - X0) * (k / PICKS);
          g.line(kx, LY, Z0, kx, LY, Z1, 0.88 * cloth, 0);
        }
        if (done < PICKS) {
          var sx = X0 + (X1 - X0) * (done / PICKS);
          var f2 = frac(u / PICK);
          var back = done % 2 === 1;
          var sz = Z0 + (Z1 - Z0) * (back ? 1 - f2 : f2);
          box(g, sx, LY - 0.022, sz, 0.022, 0.02, 0.05, 1, 1);
          g.line(sx, LY - 0.01, back ? Z1 : Z0, sx, LY - 0.01, sz, 0.85, 1);
          g.dot(sx, LY - 0.02, sz, 1.4, 1, 1.4);
        }
        g.line(X0, LY, Z0, X0, LY, Z1, 0.78 * cloth, 0);
        g.line(X0 + (X1 - X0) * (done / PICKS), LY, Z0,
               X0 + (X1 - X0) * (done / PICKS), LY, Z1, 0.78 * cloth, 0);

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
