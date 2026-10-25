# Avatar

A circular photo (`radius-full`) with a text fallback when the image is missing or fails.

- `avatar-lg` (128px) only for the portrait in the hero; `avatar-sm` (40px) for people in testimonials.
- Photos are real people, square-cropped, no frames or borders.

**Consumer provides:** `src`, `alt`, optional `fallback` (initials) and `size` in px (default 40).

Source: `src/components/ui/avatar.tsx` (Radix Avatar); ported without Radix. The source's fallback uses `bg-muted`, which is undefined in the Tailwind config, so this port uses `background-light`.
