A dark, warm portfolio system for an independent product engineer: one coral on near-black, three typefaces with distinct jobs, and motion that eases content into place. Everything is set on `background`; coral (`primary-500`) is the only colour the brand owns.

## Content fundamentals

- **Voice:** first person, plain and confident, speaking to "you". Lead with outcomes and tradeoffs, not buzzwords — "I solve technical problems and balance shipping fast with building right."
- **Casing:** lowercase for the personal, conversational layer — the greeting ("hi, i’m vitaly"), the headline ("product engineer"), nav ("about", "works", "feedback") and the hero CTA ("let's chat"). Section titles are Title or sentence case ("Featured Work", "Happy Clients", "Let's work together"). Form copy is sentence case ("Send", "How can I help you?").
- **Specifics over claims:** "10+ years", "I typically respond within 24 hours". No filler stats.
- **Testimonials** are quoted verbatim in curly quotes with the client's name and "Company, Role".
- **Emoji:** none, except the single ✉️ beside "Message Sent". Don't add more.
- **Typography in copy:** curly apostrophes and quotes (’ “ ”), em dashes for ranges in lists.

## Colour

- Paint every page on `background` (#1a1f25). Raise cards and fields with `surface-raised`; tiles use `surface-tile`.
- Set headings, names and nav in `foreground`; long copy in `text-body`; secondary lines in `text-secondary`; project write-ups and list items in `text-muted`.
- `primary-500` is for: the Logo, active/hover nav and icon links, text links ("← Back", "Open project"), Buttons and the hero dot field. Never fill large areas with it.
- Use the rest of the coral scale only where the source does: `primary-300`→`primary-600` for the headline gradient, `primary-600`/`primary-700` for the lighter list rules, `primary-100` at 10% for the focus shade.
- Client work wears the client's colours (`showcase-*` tokens), never coral.
- `rating` is only for testimonial stars; `danger` only for form errors.
- There is one theme. Don't invent a light mode.

## Type

- **Montserrat** (`--font-hero`) is the voice of the hero and project names: `hero-greeting`, `hero-headline` (900, the first word filled with a vertical `primary-300`→`primary-600` gradient), `work-title`.
- **Cormorant Garamond** (`--font-title`, 700) titles every section: `section-title`, `cta-title`, `list-title`. Never use it for body text.
- **Mukta Mahee** (`--font-body`) carries everything else, mostly at 300: `lead`, `body-lg`, `body`, `nav`; 600 for `name`, 700 for `label` and outline Button text.
- Copy runs tight: `lineHeight` 1.25 for paragraphs.
- All three are Google Fonts; `components/bundle.css` imports them (300/400/600 Mukta Mahee, 400/600/900 Montserrat, 700 Cormorant Garamond).

## Spacing, layout, shape

- `space-5` (20px) is the default for everything: page gutter, card padding, gaps between cards. `space-2.5`, `space-4`, `space-10` cover most of the rest.
- Content lives in a centred `container-max` (1024px) column with `space-5` side padding; the hero narrows to `hero-max` (550px), centred.
- On desktop, sections breathe: `space-40` (160px) above each section, `space-60` above Featured Work. On mobile they collapse to `space-10`.
- From md the header is fixed, `background` at 90% with a backdrop blur: Logo left, NavLinks centred, SocialMedia right.
- Radii: `radius-full` for buttons and avatars, `radius-xl` for every card and screenshot, `radius-lg` for fields. Nothing is square.
- Borders are rare: a 1px `hairline` divider, a `control-ring` on fields, and the coral rules over AnimatedLists.

## Depth and atmosphere

- Shadows are faint (`shadow-sm`, `shadow`); the only expressive one is `shadow-glow`, under an outline Button on hover.
- Behind the hero sits a radial glow: `glow` at the centre fading to transparent `background`, ellipse 60%×40%.
- A field of ~200 small coral dots (up to 8px, opacity tied to size) rotates slowly behind the page (one turn per 300s) and pulses gently. Keep it behind content (`z-index: -10`).

## Motion

- Content eases in once as it enters: fade from `y: 20` (hero, 0.75s, each line staggered 0.1s, CTA last at 1.2s), slide from `x: ±40` (contact columns, testimonials, 0.5s), or scale from 1.1 (showcase cards, staggered 0.2s).
- Hover: colour changes 300ms; cards scale (ShowcaseItem 1.05, WorkListItem 1.1) over 500ms.
- Page exit: fade out, scale to 1.1 and drop 40px over 0.5s.
- Respect `prefers-reduced-motion`: drop the entrance animations.

## States

- Hover: links and icons turn `primary-500`; outline Button fills coral with `shadow-glow`; filled Button drops to 90%.
- Focus: Buttons get a 1px `primary-300` ring; fields swap to `shadow-focus-inner`. Both are subtle — keep them, don't remove them.
- Disabled: `opacity-disabled`; a submitting Button is disabled and reads "Sending...".

## Iconography

- Social and utility icons are 16px, single-ink SVGs filled with `currentColor` (shapes match Bootstrap Icons for GitHub, X, LinkedIn, mail; Heroicons solid for the star; Lucide square-arrow-up-right for "Open project").
- Icons sit in `foreground` and turn `primary-500` on hover; stars are `rating`.
- No decorative icons, no emoji as icons. Files are in `assets/Icons/`; components export them as `IconGitHub`, `IconTwitter`, `IconLinkedIn`, `IconMail`, `IconStar`, `IconCornerArrow`.

## Imagery

- The portrait (`assets/Portraits/me.webp`) is circular at `avatar-lg`. Client photos are circular at `avatar-sm`.
- Project imagery is real product screenshots with `radius-xl`, fading and scaling in from 0.9 as they load.
- Images aren't selectable or draggable.

## Not synced

- Components are hand-written ports from the source files named in each README (React + plain CSS, no framer-motion, Radix or Tailwind); entrance animations are left to the consumer except AnimatedList's.
- Not carried: Footer (empty in the source), Container and the page sections (compositions, not components), Header's scroll-spy, Screenshots, LogosAnimation (the dot field), the unused LogosAnimationRadial and its tech logos, and most portfolio screenshots.
- `text-muted-foreground` and `bg-muted` in the source are undefined in the Tailwind config and have no tokens.
- Fonts are hosted by Google; no font files are bundled.
