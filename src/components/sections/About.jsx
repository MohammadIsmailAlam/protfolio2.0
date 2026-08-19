import { siteConfig } from "../../config/siteConfig.js";

import {
  Container,
  Reveal,
  SectionHeading,
  WindowChrome,
} from "@ismailalam/ui-components";

/**
 * About — reads bio + focus list from siteConfig.personal.
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
          {/* Bio */}
          <Reveal className="md:col-span-3 flex items-center">
            <p className="text-base leading-relaxed text-dim">{bio}</p>
          </Reveal>

          <Reveal delay={100} className="md:col-span-2">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <img
                src={siteConfig.personal.profileImage}
                alt={siteConfig.personal.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="mt-6 md:ml-auto md:w-[100%]">
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
      </Container>
    </section>
  );
}
