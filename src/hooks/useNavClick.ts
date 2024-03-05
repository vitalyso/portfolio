import * as React from "react";

export function useNavClick(name: string, spy = true) {
  const [anchorTarget, setAnchorTarget] = React.useState<HTMLElement | null>(
    null,
  );

  React.useEffect(() => {
    setAnchorTarget(document.getElementById(name));
  }, [name]);

  return (event: React.MouseEvent) => {
    if (spy) {
      event.preventDefault();
    }

    anchorTarget?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
}

export function navigateTo(name: string) {
  const element = document.getElementById(name);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}
