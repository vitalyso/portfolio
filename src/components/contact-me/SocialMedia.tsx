import * as React from "react";
import { cn } from "~/lib/utils";
import { IconGitHub } from "~/components/icons/IconGitHub";
import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconLinkedIn } from "~/components/icons/IconLinkedIn";
import { MailLink } from "./MailLink";

export function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-4", className)}>
      <a
        className="hover:text-primary-500 transition-colors duration-300"
        href="https://github.com/vitalyso"
        target="_blank"
        aria-label="GitHub"
      >
        <IconGitHub className="h-4 w-4" />
      </a>
      <a
        className="hover:text-primary-500 transition-colors duration-300"
        href="https://twitter.com/vitaly_so"
        target="_blank"
        aria-label="Twitter"
      >
        <IconTwitter className="h-4 w-4" />
      </a>
      <MailLink />
    </div>
  );
}
