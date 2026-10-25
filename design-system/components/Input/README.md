# Input

Single-line text field on `surface-raised` with a faint `control-ring` and a warm inner focus shade.

- Always pair with a `.vs-label` directly above it (`label` type style, no gap) and stack fields with `space-4`.
- Placeholder copy speaks directly to the visitor: "How should I call you?", "Your email address so I can get in touch".
- Errors go below the form in `danger` (`.vs-error`), never inside the field.
- Focus shows only `shadow-focus-inner`; the source sets `outline: none`, so the focus cue is subtle — add a visible ring if you need stronger accessibility.

**Consumer provides:** every native `<input>` attribute (`id`, `name`, `type`, `required`, `placeholder`).

Source: `src/components/ui/input.tsx`.
