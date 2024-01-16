import { Logo } from "~/components/Logo";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const navigation = [
  { name: "About", href: "#" },
  { name: "Works", href: "#" },
  { name: "Feedback", href: "#" },
  { name: "Contact", href: "#" },
];

export function Header() {
  return (
    <header className="md:px-8">
      <nav
        className="mx-auto flex max-w-screen-md items-center justify-between gap-x-6 py-6 relative"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <Logo className="text-primary-500 w-10 h-10" />
          </a>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-foreground font-light leading-6 hover:text-primary-500 transition-colors",
                { "text-primary-500 font-bold": index === 0 }
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Button
            size="lg"
            className="rounded-full hover:shadow-lg hover:shadow-primary-500/50"
          >
            Let's chat
          </Button>
        </div>
      </nav>
    </header>
  );
}
