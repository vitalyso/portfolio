import { Container } from "~/components/utils/Container";

export function Footer() {
  return (
    <footer>
      <Container className="flex items-center justify-center pb-4 md:py-10 text-white/50">
        © {new Date().getFullYear()} Vitaly Sivkov
      </Container>
    </footer>
  );
}
