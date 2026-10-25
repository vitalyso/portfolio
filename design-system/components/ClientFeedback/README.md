# ClientFeedback

A testimonial card: avatar, name and company, five `rating` stars, and the quote in curly quotes.

- Lay cards out in a two-column masonry (`columns-2` from md) with `space-5` between them.
- Quote the client verbatim; keep their paragraph breaks (`white-space: pre-line`).
- Company line reads "Company, Role" ("Amie, CEO").

**Consumer provides:** `avatar` (URL), `name`, `company`, `feedback` (plain text, `\n\n` for paragraphs).

Source: `src/components/happy-clients/ClientFeedback.tsx`. The slide-in reveal (x ±40px, 0.5s) is left to the consumer.
