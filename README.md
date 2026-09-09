# website

A single-page personal site. Static files, no build step, no dependencies.

## Structure

```
index.html              markup and all copy
assets/css/main.css     design tokens, layout, reveal transitions
assets/js/flock.js      boid flock + the glyph letter on the hero
assets/js/scene.js      the wireframe that turns beside the story
assets/js/portrait.js   the point cloud that gathers into a portrait
assets/js/site.js       scroll state, chapter rail, cue words, cipher
```

## Editing

Everything you'd want to change is in `index.html`, marked with `EDIT ME`:

- **The hero line.** The three `<b class="cue">` words drive the flock. Keep
  three of them and keep the `data-cue` values (`gather`, `race`, `ring`);
  rename the words to whatever you like.
- **The chapters.** Each `<section class="chapter">` is one beat. Add or remove
  them freely — the header rail, the scroll progress and the wireframe all
  count the chapters at runtime.
- **Your portrait.** The `#portrait` canvas has an empty `data-src`. Drop a
  photo in `assets/img/` and point it there:

  ```html
  <canvas id="portrait" data-src="assets/img/portrait.jpg" aria-hidden="true"></canvas>
  ```

  Until you do, a drawn head-and-shoulders stand-in is sampled instead, so the
  animation works either way. A plain shot on a simple background reads best,
  because particle density follows the light in the image: bright pixels are
  kept more often than dark ones. If the cloud looks too sparse or too dense,
  tune `MAX_POINTS` and the luminance threshold in `portrait.js`.
- **Your email.** The `data-rot` attribute on the cipher button holds your
  address rotated thirteen places, so scrapers see nonsense. To generate it:

  ```sh
  node -e 'console.log(process.argv[1].replace(/[a-z]/gi,c=>{const b=c<="Z"?65:97;return String.fromCharCode((c.charCodeAt(0)-b+13)%26+b)}))' you@example.com
  ```

## Animations

| What | Where | Notes |
| --- | --- | --- |
| Flocking birds | `flock.js` | Separation, alignment and cohesion over near neighbours; wander from stacked sines |
| `gather` | `flock.js` | Folds the flock into a V trailing the lead bird |
| `race` | `flock.js` | Raises the speed ceiling and adds thrust along each heading |
| `ring` | `flock.js` | Tangential orbit at a fixed radius around the letter |
| Glyph letter | `flock.js` | A character is rasterised offscreen and its opaque pixels become particle homes |
| Wireframe | `scene.js` | Subdivided icosahedron, hand-rolled perspective projection |
| Chapter morph | `scene.js` | Each chapter seeds per-vertex radial offsets; topology is shared so the cage eases between them |
| Portrait gather | `portrait.js` | Pixels sampled from a photo become particle targets; scroll drives each one from a scattered origin, staggered per particle |
| Chapter reveals | `main.css` | Opacity, translate and blur, staggered per child |

`prefers-reduced-motion: reduce` drops both canvases and shows all copy
immediately.

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
