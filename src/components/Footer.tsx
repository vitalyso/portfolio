import { Container } from "~/components/utils/Container";
import { SocialMedia } from "~/components/contact-me/SocialMedia";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col items-center justify-center pb-4 md:py-10 gap-4">
        {/*<SocialMedia />*/}
        {/*<p className="text-white/50">© {new Date().getFullYear()} vitaly</p>*/}
      </Container>
    </footer>
  );
}
