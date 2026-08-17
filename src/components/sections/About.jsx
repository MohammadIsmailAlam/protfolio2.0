import { siteConfig } from "../../config/siteConfig.js";
import { Container } from "../ui/Container.jsx";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { WindowChrome } from "../ui/WindowChrome.jsx";
import { Reveal } from "../ui/Reveal.jsx";

/**
 * About — reads bio + focus list from siteConfig.personal. The "focus"
 * list is rendered like a code comment block, reinforcing the editor
 * metaphor without introducing a new component.
 */
export function About() {
  const { bio, focus } = siteConfig.personal;

  return (
    <section id="about" className="scroll-mt-14 py-16 sm:py-20">
      <SectionHeading
        file="about.jsx"
        title="About me"
        description="A little context before you scroll through the code."
      />

      <Container>
        <div className="grid gap-6 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <p className="text-base leading-relaxed text-dim">{bio}</p>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <WindowChrome title="focus.js">
              <ul className="space-y-3 font-mono text-sm">
                {focus.map((line) => (
                  <li key={line} className="flex gap-2 text-dim">
                    <span className="text-comment">//</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </WindowChrome>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
