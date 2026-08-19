import { useTypewriter } from "@ismailalam/react-utils";
import { siteConfig } from "../../config/siteConfig.js";
import { ArrowRight, FileDown } from "lucide-react";
import {
  Button,
  Container,
  CursorBlink,
  IconLink,
  LineNumbers,
  Reveal,
  WindowChrome,
} from "@ismailalam/ui-components";

/**
 * Intro — the signature moment of the page: a fake "intro.js" file, typed
 * out with a real editor gutter, whose `role` value cycles via
 * useTypewriter. Everything below the fold uses the same visual language
 * more quietly.
 */
export function Intro() {
  const role = useTypewriter(siteConfig.personal.roles, { pause: 1600 });

  return (
    <section id="intro" className="scroll-mt-14 py-20 sm:py-28">
      <Container>
        <Reveal>
          <WindowChrome title="intro.js" bodyClassName="p-0">
            <div className="flex">
              <LineNumbers count={9} />
              <pre className="flex-1 overflow-x-auto px-5 py-5 font-mono text-sm leading-7 sm:text-base">
                <code>
                  <span className="text-keyword">const</span>{" "}
                  <span className="text-func">developer</span>{" "}
                  <span className="text-text">= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text">name:</span>{" "}
                  <span className="text-string">
                    &quot;{siteConfig.personal.name}&quot;
                  </span>
                  <span className="text-text">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text">role:</span>{" "}
                  <span className="text-string">
                    &quot;{role}
                    <CursorBlink className="ml-0.5" />
                    &quot;
                  </span>
                  <span className="text-text">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text">location:</span>{" "}
                  <span className="text-string">
                    &quot;{siteConfig.personal.location}&quot;
                  </span>
                  <span className="text-text">,</span>
                  {"\n"}
                  {"  "}
                  <span className="text-text">available:</span>{" "}
                  <span className="text-const">
                    {String(siteConfig.personal.available)}
                  </span>
                  <span className="text-text">,</span>
                  {"\n"}
                  <span className="text-text">{"}"}</span>
                  <span className="text-text">;</span>
                </code>
              </pre>
            </div>
          </WindowChrome>
        </Reveal>

        <Reveal delay={120} className="mt-8 flex flex-wrap items-center gap-3">
          <Button
            onClick={() => scrollToId("projects", { offset: 56 })}
            icon={ArrowRight}
          >
            View projects
          </Button>
          <Button
            onClick={() => window.open(siteConfig.personal.resumeUrl, "_blank")}
            variant="ghost"
            icon={FileDown}
          >
            Resume
          </Button>

          <div className="ml-1 flex items-center gap-2">
            {siteConfig.socials.map((social) => (
              <IconLink key={social.label} {...social} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
