# website

A single-page personal site. Static files, no build step, no dependencies.

## Structure

```
index.html              markup and all copy
assets/css/main.css     design tokens, layout, reveal transitions
assets/js/flock.js      boid flock + the glyph letter on the hero
assets/js/scene.js      camera, ink and cross-dissolve for the story wireframe
assets/js/scenes.js     the shape each chapter draws through that camera
assets/js/portrait.js   the point cloud that gathers into a portrait
assets/js/site.js       scroll state, chapter rail, cue words
assets/img/portrait.png the cut-out the point cloud samples
tools/cutout.swift      regenerates that cut-out from a photo
tools/source-photo.png  the photo it was cut out of
```

## Editing

Everything you'd want to change is in `index.html`, marked with `EDIT ME`:

- **The hero line.** The three `<b class="cue">` words drive the flock. Keep
  three of them and keep the `data-cue` values (`gather`, `race`, `ring`);
  rename the words to whatever you like.
- **The chapters.** Each `<section class="chapter">` is one beat. Add or remove
  them freely — the header rail, the scroll progress and the wireframe all
  count the chapters at runtime. The wireframe beside a chapter comes from
  `BUILDERS` at the bottom of `scenes.js`, keyed by chapter number; anything
  without an entry falls back to the globe.
- **Your portrait.** `assets/img/portrait.png` is what the point cloud samples.
  Swap the file, or point `data-src` on the `#portrait` canvas somewhere else.
  Clear `data-src` entirely and a drawn head-and-shoulders stand-in is sampled
  instead, so the animation works with no photo at all.

  A cut-out PNG gives the best result, because its alpha channel tells the
  sampler exactly where you are. To make one from any photo, background and
  all, see **Regenerating the cut-out** below.

  A plain background works too, with no cut-out step: the sampler averages the
  frame edge to decide whether the subject is the dark pixels or the bright
  ones, then floods the background inward from the border. Growing it from the
  edge rather than thresholding the whole image is what stops a bright
  forehead from punching a hole in the face. This only holds up on an even
  backdrop, though — a busy one leaves the clutter in.

  If the cloud looks wrong, the dials in `portrait.js` are `MAX_POINTS` and
  the three terms in `density`: a base so flat areas don't hollow out, a tone
  term so lit skin separates from dark clothing, and a local contrast term
  that keeps features legible once colour is gone.

## Animations

| What | Where | Notes |
| --- | --- | --- |
| Flocking birds | `flock.js` | Separation, alignment and cohesion over near neighbours; wander from stacked sines |
| `gather` | `flock.js` | Folds the flock into a V trailing the lead bird |
| `race` | `flock.js` | Raises the speed ceiling and adds thrust along each heading |
| `ring` | `flock.js` | Tangential orbit at a fixed radius around the letter |
| Glyph letter | `flock.js` | A character is rasterised offscreen and its opaque pixels become particle homes |
| Wireframe camera | `scene.js` | Hand-rolled perspective projection, depth-faded lines, one warm accent tone. Scenes are authored in units of the scene radius through a tiny 3D API (`line`, `path`, `fill`, `dot`, `glyph`) |
| Chapter dissolve | `scene.js` | Chapters no longer share a topology, so the outgoing shape cross-fades into the incoming one over 0.85s. Each scene runs its own clock from the moment it arrives, so its loop starts while you are looking at it |
| Passport | `scenes.js` | An open passport, printed fields and a machine-readable strip; a stamp comes down every 6s and leaves a mark, documents drift up around it |
| Globe | `scenes.js` | The original subdivided icosahedron and glyph cloud, with characters turning over and a phrase hopping the surface |
| Site and robots | `scenes.js` | A floor plate every 2.2s until it tops out, a crane swinging loads in, robots welding their way around the top plate, then the frame comes apart from the top down |
| Interior | `scenes.js` | A room corner with daylight on the floor, rearranging itself into a new furniture plan every 6s |
| Reconstruction | `scenes.js` | A camera orbits a point cloud; wherever it has just been, the model commits and the frame's matched features appear on the image plane |
| Mill | `scenes.js` | Rolling ground scrolling past a sawtooth-roofed mill, and a loom laying down one weft thread per pass of the shuttle until there is a carpet |
| Portrait gather | `portrait.js` | Pixels sampled from a photo become particle targets; scroll drives each one from a scattered origin, staggered per particle. Density carries the likeness, so the dots stay an even brightness the way a stipple drawing does |
| Chapter reveals | `main.css` | Opacity, translate and blur, staggered per child |

`prefers-reduced-motion: reduce` drops both canvases and shows all copy
immediately.

## Regenerating the cut-out

`tools/cutout.swift` runs Vision's person segmentation over a photo and writes
a PNG whose alpha channel is the subject mask. It needs nothing but the macOS
SDK, so it works offline.

```sh
swiftc -O tools/cutout.swift -o /tmp/cutout
/tmp/cutout tools/source-photo.png assets/img/portrait.png
```

Doing this once, ahead of time, is much more reliable than trying to separate a
subject from a busy background in the browser on every page load.

## Local preview

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. A plain file open works too, but a server
keeps the font loading and canvas sampling behaving like production.

## Deploying

`.github/workflows/deploy.yml` publishes the repo root on every push to
`main`. One-time setup: **Settings → Pages → Build and deployment → Source →
GitHub Actions**.

`.nojekyll` is present so Pages serves the files as-is instead of running them
through Jekyll.
