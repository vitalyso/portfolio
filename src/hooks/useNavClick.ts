import * as React from "react";

export function useNavClick(name: string) {
  const [anchorTarget, setAnchorTarget] = React.useState<HTMLElement | null>(
    null
  );

  React.useEffect(() => {
    setAnchorTarget(document.getElementById(name));
  }, [name]);

  return (event: React.MouseEvent) => {
    event.preventDefault();
    anchorTarget?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
}
