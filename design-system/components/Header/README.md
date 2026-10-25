# Header

The site's top bar: the coral Logo linking home on the left, lowercase NavLinks centred, SocialMedia icons on the right.

- One per page. From md it is fixed to the top on `background` at 90% with a backdrop blur; below md it scrolls away and the nav links are hidden (Logo and icons only).
- Content sits in the `container-max` column with `space-5` padding; links are `space-12` apart, icons `space-4`.
- Mark the section in view with `active` (an item `id`, falling back to its label; the first item by default); the site does scroll-spy on the `about`, `work`, `feedback`, `contact` anchors and smooth-scrolls on click — wire that through `onNavigate`.
- Leave room for it: page content below a fixed header starts with generous top padding (the hero uses 280px from md).

**Consumer provides:** optional `items` (`{id?, label, href}[]`, defaults to about · works · feedback with ids about · work · feedback), `active`, `onNavigate` (click handler for the logo and links), `homeHref`, `socialLinks` / `email` (passed to SocialMedia), `fixed` (default true; pass false to render it in flow).

Source: `src/components/Header.tsx`. Scroll-spy and smooth-scroll (`useNavClick`) are not included.
