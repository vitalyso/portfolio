import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export function ContactForm() {
  return (
    <form className="flex flex-col items-start gap-4">
      <div className="w-full">
        <label className="font-bold mb-1" htmlFor="name">
          Name
        </label>
        <Input
          id="name"
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
          type="email"
          required
          placeholder="Your email address so I can get in touch"
        />
      </div>

      <div className="w-full">
        <label className="font-bold mb-1" htmlFor="name">
          How can I help you?
        </label>
        <Textarea
          className="resize-none"
          id="name"
          required
          placeholder="Tell me about your project or problem"
        />
      </div>

      <Button size="lg">Submit</Button>
    </form>
  );
}
