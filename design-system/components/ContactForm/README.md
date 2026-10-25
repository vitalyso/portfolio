# ContactForm

The "Let's work together" form: Name, Email and a message, an outline "Send" button, an inline error, and a thank-you state once the message is sent.

- Place it in the right column of the contact section, beside the `section-title` + `body-lg` intro; fields stack `space-4` apart.
- Labels and placeholders talk to the visitor ("How should I call you?", "Tell me about your project or problem"). Keep them.
- Submitting shows "Sending..." on a disabled (`opacity-disabled`) button for at least 400ms so it never flickers. A failure shows the server's message in `danger` beside the button; a network failure shows "Server error. Please try again later".
- On success the form is replaced (announced as a status) by "Message Sent ✉️" in `section-title` and a one-line promise to reply within 24 hours — the one place an emoji is used.
- A hidden `csrf` input is the bot honeypot; it is posted with the other fields and must stay empty. The message needs at least 10 characters; the server also rejects bot-shaped submissions.

**Consumer provides:** `onSubmit(data)` — gets `{name, email, message, csrf}` and returns a Promise of `{sent: true}` or `{sent: false, error}`; optional `className`. The preview's first submit returns an error, the second succeeds.

Source: `src/components/contact-me/ContactForm.tsx`; the `fetch('/api/contact')` call is replaced by `onSubmit`.
