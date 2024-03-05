import * as React from "react";
import { Logo } from "~/components/Logo";
import { cn } from "~/lib/utils";
import { Container } from "~/components/utils/Container";
import { navigateTo, useNavClick } from "~/hooks/useNavClick";
import { NavButton } from "~/components/NavButton";
import Link from "next/link";

const navigation = [
  { label: "About", name: "about" },
  { label: "Works", name: "work" },
  { label: "Feedback", name: "feedback" },
  { label: "Contact", name: "contact" },
];

const menuItems: Record<string, any> = {
  about: 0,
  work: 0,
  feedback: 0,
  contact: 0,
};

export function Header({
  initial = "about",
  spy = true,
}: {
  initial: string;
  spy?: boolean;
}) {
  const [active, setActive] = React.useState(initial);

  React.useEffect(() => {
    const root = document.querySelector("body") as HTMLElement;
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(root, {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (window.location.hash) {
      const section = window.location.hash.slice(1);
      navigateTo(section);
    }
  }, []);

  const getAnchorPoints = () => {
    const curScroll = window.scrollY;

    for (const key in menuItems) {
      const node = document.getElementById(key);
      const bottom = node?.getBoundingClientRect().top ?? 0;
      menuItems[key] = bottom + curScroll;
    }

    handleScroll();
  };

  const handleScroll = () => {
    if (!spy) return;

    const currentY = window.scrollY;
    const scrollHeight = document.body.scrollHeight;
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );

    const sections = Object.keys(menuItems);

    if (scrollHeight - viewPortHeight <= currentY) {
      setActive(sections[sections.length - 1]);
      return;
    }

    let currentSection = null;

    for (const section of sections) {
      const sectionY = menuItems[section];
      if (sectionY <= currentY) {
        currentSection = section;
      }
    }

    if (currentSection) {
      setActive(currentSection);
    }
  };

  return (
    <header className="md:fixed left-0 right-0 top-0 md:bg-background/90 z-20 md:backdrop-blur-md">
      <Container
        as="nav"
        className="flex items-center justify-between py-5 relative"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
          <NavLink
            href="/#"
            name="about"
            active={false}
            spy={spy}
            className="-m-1.5 p-1.5"
          >
            <span className="sr-only">Logo</span>
            <Logo className="text-primary-500 w-10 h-10" />
          </NavLink>
        </div>
        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              name={item.name}
              href={`/#${item.name}`}
              active={item.name === active}
              spy={spy}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-6">
          <NavButton anchor="contact" size="lg">
            Hire me
          </NavButton>
        </div>
      </Container>
    </header>
  );
}

function NavLink({
  name,
  href,
  children,
  active,
  spy,
  className,
}: {
  name: string;
  href: string;
  children: React.ReactNode;
  active: boolean;
  spy: boolean;
  className?: string;
}) {
  const handleClick = useNavClick(name, spy);

  return (
    <Link
      className={cn(
        "text-foreground font-light leading-6 hover:text-primary-500 transition-colors",
        className,
        { "text-primary-500 font-bold": active },
      )}
      href={href}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
