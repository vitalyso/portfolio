import * as React from "react";
import { cn } from "~/lib/utils";
import { IconGitHub } from "~/components/icons/IconGitHub";
import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconLinkedIn } from "~/components/icons/IconLinkedIn";
import { MailLink } from "~/components/MailLink";

export function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4 mt-2", className)}>
      <a
        className="hover:text-primary-500"
        href="https://github.com/sivkoff"
        target="_blank"
      >
        <IconGitHub className="h-4 w-4" />
      </a>
      <a
        className="hover:text-primary-500"
        href="https://twitter.com/vitaly_so"
        target="_blank"
      >
        <IconTwitter className="h-4 w-4" />
      </a>
      <a
        className="hover:text-primary-500"
        href="https://www.linkedin.com/in/vitalyso"
        target="_blank"
      >
        <IconLinkedIn className="h-4 w-4" />
      </a>
      <MailLink />
    </div>
  );
}
