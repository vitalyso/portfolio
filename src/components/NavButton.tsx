import { Button, ButtonProps } from "~/components/ui/button";
import { useNavClick } from "~/hooks/useNavClick";

interface Props extends ButtonProps {
  anchor: string;
}

export function NavButton({ anchor, ...props }: Props) {
  const handleClick = useNavClick(anchor);
  return <Button {...props} onClick={handleClick} />;
}
