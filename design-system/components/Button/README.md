# Button

A pill-shaped action in brand coral; **outline** is the default and the one the site uses everywhere, **default** (filled) is available but unused.

- Use `outline` + `size="lg"` for calls to action: the hero ("let's chat") and the contact form's submit ("Send"). It fills coral with `shadow-glow` on hover.
- While a request is in flight set `disabled` and swap the label to "Sending...".
- Labels are short and lowercase in marketing copy ("let's chat"), sentence case in forms ("Send").
- White on `primary-500` is 3.1:1 — if you use the filled variant, keep it to `lg` (18px) labels.

**Consumer provides:** `children` (label), `variant` (`outline` | `default`), `size` (`default` 36px | `sm` 32px | `lg` 44px, 40px from md | `icon` 36×36), plus any `<button>` attribute.

Source: `src/components/ui/button.tsx` (hand-written port; `asChild` is declared there but unused, so it is omitted).
