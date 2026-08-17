import { siteConfig } from "../../config/siteConfig.js";
import { Container } from "../ui/Container.jsx";
import { SectionHeading } from "../ui/SectionHeading.jsx";
import { ProjectCard } from "../ui/ProjectCard.jsx";
import { Reveal } from "../ui/Reveal.jsx";

/**
 * Projects — maps siteConfig.projects to ProjectCard. Adding, removing,
 * or reordering a project is purely a data edit in siteConfig.js.
 */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-14 py-16 sm:py-20">
      <SectionHeading
        file="projects.map()"
        title="Selected projects"
        description="A few things I've built, end to end."
      />

      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
