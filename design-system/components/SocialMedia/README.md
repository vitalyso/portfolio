# SocialMedia

A row of 16px monochrome icon links (GitHub, X/Twitter, LinkedIn, email) that turn coral on hover.

- Appears in the header (right), under the contact intro after a `hairline`, and below the CTA on work pages.
- Icons only, always with an `aria-label`; no counts, no brand colours.
- The mail icon opens a draft to the site's address with the subject "Work Proposal"; the address is assembled at runtime to deter scrapers.

**Consumer provides:** optional `links` (`{label, href, icon}[]`, defaults to Vitaly's profiles), optional `email` (an address, or `false` to drop the mail icon), `className`.

Source: `src/components/contact-me/SocialMedia.tsx`, `MailLink.tsx`.
