# NavLink

A lowercase header link; the active section turns `primary-500` and bold.

- Labels are single lowercase words: "about", "works", "feedback".
- Lay them out in `.vs-nav` (`space-12` gap), centred in the header between the Logo and SocialMedia.
- `active` sets `aria-current="true"` (they are in-page section links); the site drives it from scroll position.

**Consumer provides:** `href`, `children`, `active`, optional `onClick` (the site smooth-scrolls to the anchor).

Source: `NavLink` in `src/components/Header.tsx`.
