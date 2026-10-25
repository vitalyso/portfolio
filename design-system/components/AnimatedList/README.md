# AnimatedList

A titled fact list for project pages whose items drop in from above, bottom item first.

- Always used as a trio side by side — Core tools, Scope, Timeframe — with descending coral rules: `rule={4}` (`primary-500`), `rule={2}` (`primary-600`), `rule={1}` (`primary-700`), and `baseDelay` 0, 0.2, 0.4.
- Items are short nouns in `text-muted`; the title uses `list-title`.
- Two columns on mobile, 160px stacked columns from md. Animation is off under `prefers-reduced-motion`.

**Consumer provides:** `title`, `items` (strings), optional `rule` (4 | 2 | 1), `baseDelay` (s), `className`.

Source: `src/components/work-details/AnimatedList.tsx`; framer-motion replaced by a CSS keyframe with the same delays.
