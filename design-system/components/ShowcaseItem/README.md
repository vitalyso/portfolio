# ShowcaseItem

A featured-project card in the client's own colours: logo and a short blurb on the left, a tilted product image on the right that straightens on hover.

- Each project brings its own ground and ink — use the `showcase-*` tokens; the site's coral never appears inside.
- Copy is one or two sentences, warm and concrete ("Think it like Spotify with videos.").
- Stack cards with `space-5`; the whole card scales to 1.05 on hover (500ms).

**Consumer provides:** `href`, `background`, `color`, `bgImage` (square, ≥512px), and `children` (the client logo `<img>` plus a `<p>`).

Source: `src/components/featured-work/ShowcaseItem.tsx`. The scroll reveal (y 20px, scale 1.1→1, staggered 0.2s) is left to the consumer.
