import * as React from "react";
import { cn } from "~/lib/utils";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export function ContactForm() {
  const ref = React.createRef<HTMLFormElement>();
  const [pending, setPending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setPending(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(event.currentTarget);

    // make the request to last at least 400ms for better UX
    const [data] = await Promise.all([sendMessage(formData), wait(400)]);

    try {
      if (data.sent) {
        setSuccess(true);
        ref.current?.reset();
      } else {
        setError(data.error);
      }
    } catch (e) {
      setError("Server error. Please try again later");
    } finally {
      setPending(false);
    }
  };

  if (success) {
    return <FormSent />;
  }

  return (
    <form
      className="flex flex-col items-start gap-4"
      ref={ref}
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label className="font-bold mb-1" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="How should I call you?"
        />
      </div>

      <div className="w-full">
        <label className="font-bold mb-1" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your email address so I can get in touch"
        />
      </div>

      <div className="w-full">
        <label className="font-bold mb-1" htmlFor="message">
          How can I help you?
        </label>
        <Textarea
          className="resize-none"
          id="message"
          name="message"
          required
          placeholder="Tell me about your project or problem"
        />
      </div>

      <div className="flex flex-col md:flex-row w-full items-center gap-5 pb-5">
        <Button
          size="lg"
          type="submit"
          disabled={pending}
          className={cn("w-full md:w-auto", { "opacity-75": pending })}
        >
          {pending ? "Sending..." : "Send"}
        </Button>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </form>
  );
}

function FormSent() {
  return (
    <div className="select-none">
      <h2 className="text-white text-4xl font-bold font-title mb-2.5 flex items-center">
        <span>Message Sent</span> <span className="text-3xl pt-2 ml-2">✉️</span>
      </h2>
      <p className="font-light text-white/80">
        Thanks a bunch for reaching out! 🙌 <br /> Your message is on its way to
        my digital doorstep. I'm excited to dive into it and will get back to
        you pronto. In the meantime, feel free to relax – you've just taken the
        first step toward something fantastic! Cheers ✨.
      </p>
    </div>
  );
}

async function sendMessage(formData: FormData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  return response.json();
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
