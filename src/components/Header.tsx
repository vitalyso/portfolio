import { Logo } from "~/components/Logo";
import { Button } from "~/components/ui/button";

const navigation = [
  { name: "About", href: "#" },
  { name: "Works", href: "#" },
  { name: "Feedback", href: "#" },
  { name: "Contact", href: "#" },
];

export function Header() {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Logo</span>
            <Logo className="text-primary-500 w-10 h-10" />
          </a>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground font-light leading-6 hover:text-primary-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Button size="lg" className="rounded-full">
            Let's chat
          </Button>
        </div>
      </nav>
    </header>
  );
}
