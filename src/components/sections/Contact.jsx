import { Mail } from "lucide-react";
import { siteConfig } from "../../config/siteConfig.js";
import { Container } from "../ui/Container.jsx";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { WindowChrome } from "../ui/WindowChrome.jsx";
import { Button } from "../ui/Button.jsx";
import { CursorBlink } from "../ui/CursorBlink.jsx";
import { Reveal } from "../ui/Reveal.jsx";

/**
 * Contact — styled as a terminal session. Keeps to real, working actions
 * (mailto + social links from siteConfig) instead of a non-functional
 * form with no backend to submit to.
 */
export function Contact() {
  const { email } = siteConfig.personal;
  const { heading, body } = siteConfig.contact;

  return (
    <section id="contact" className="scroll-mt-14 py-16 sm:py-24">
      <SectionHeading file="contact.sh" title="Get in touch" />

      <Container>
        <Reveal>
          <WindowChrome title="contact.sh">
            <p className="font-mono text-lg font-semibold text-text sm:text-xl">
              {heading}
            </p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-dim">
              {body}
            </p>

            <div className="mt-6 space-y-1.5 font-mono text-sm">
              <p className="text-dim">
                <span className="text-string">$</span> echo{" "}
                <span className="text-const">$EMAIL</span>
              </p>
              <p className="pl-4 text-func">{email}</p>
              <p className="text-dim">
                <span className="text-string">$</span> <CursorBlink />
              </p>
            </div>

            <Button
              as="a"
              href={`mailto:${email}`}
              icon={Mail}
              className="mt-6"
            >
              Send an email
            </Button>
          </WindowChrome>
        </Reveal>
      </Container>
    </section>
  );
}
