"use client";

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

      <div className="flex w-full items-center gap-5">
        <Button
          size="lg"
          type="submit"
          disabled={pending}
          className={cn({ "opacity-75": pending })}
        >
          {pending ? "Sending..." : "Send"}
        </Button>

        {error && <div className="text-red-500">{error}</div>}
      </div>
    </form>
  );
}

async function sendMessage(formData: FormData) {
  const response = await fetch("/contact", {
    method: "POST",
    body: formData,
  });

  return response.json();
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
