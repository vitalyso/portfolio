import * as React from "react";
import { useEffect } from "react";
import { IconMail } from "~/components/icons/IconMail";

export function MailLink() {
  const [mailTo, setMailTo] = React.useState("");

  useEffect(() => {
    setTimeout(() => {
      setMailTo(["hello", "vitaly.so"].join("@"));
    }, 200);
  }, []);

  return (
    <a
      className="hover:text-primary-500 transition-colors duration-300"
      href={`mailto:${mailTo}?subject=Work Proposal&body=Hi Vitaly, I have a product idea, can you help me implementing it?`}
      aria-label="Email me"
    >
      <IconMail className="h-4 w-4" />
    </a>
  );
}
