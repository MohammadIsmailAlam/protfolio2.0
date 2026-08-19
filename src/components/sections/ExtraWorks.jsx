import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useState } from "react";

import { siteConfig } from "../../config/siteConfig.js";
import {
  Container,
  ProjectCard,
  Reveal,
  SectionHeading,
} from "@ismailalam/ui-components";

const TAG_VARIANT = {
  react: "func",
  tailwindcss: "string",
  mui: "const",
  bootstrap: "const",
  reacthooks: "func",
  context: "string",
};

export function ExtraWork() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <section id="extra-work" className="scroll-mt-14 py-16 sm:py-20">
      <SectionHeading
        file="extra-work.log"
        title="CODING TESTS"
        description="ls ./coding-tests"
      />

      <Container>
        {/* Toggle */}
        <button
          type="button"
          onClick={() => setShowProjects((prev) => !prev)}
          className="mb-8 flex w-full items-center justify-between border border-border bg-surface px-4 py-3 text-left font-mono text-sm transition-colors hover:border-func/50 hover:bg-surface-2"
        >
          <span className="text-dim">
            <span className="text-func">$</span>{" "}
            {showProjects ? "hide ./coding-tests" : "ls ./coding-tests"}
          </span>

          <ChevronDown
            size={18}
            className={`text-func transition-transform duration-300 ${
              showProjects ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Projects */}
        {showProjects && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.extraWorks.map((project, i) => (
              <Reveal key={`${project.title}-${project.id}`} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

export default ExtraWork;
