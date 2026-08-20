import {
  Container,
  Reveal,
  SectionHeading,
  Tag,
} from "@portf0li0/ui-components";
import { siteConfig } from "../../config/siteConfig.js";

const TAG_VARIANT = {
  feat: "string",
  fix: "func",
  chore: "const",
};

/**
 * Experience — a date-ordered "commit log" of roles/milestones. Unlike
 * decorative 01/02/03 numbering elsewhere, this list is a real timeline,
 * so a connecting line + chronological order genuinely carries meaning.
 */
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-14 py-16 sm:py-20">
      <SectionHeading
        file="experience.log"
        title="WORK EXPERIENCE"
        description="git log --oneline, roughly."
      />

      <Container>
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
          {siteConfig.experience.map((entry, i) => (
            <Reveal key={`${entry.title}-${entry.date}`} delay={i * 80}>
              <li className="relative whitespace-pre-line">
                <span className="absolute -left-[1.85rem] top-1.5 h-2.5 w-2.5 rounded-full bg-func ring-4 ring-bg sm:-left-[2.35rem]" />
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-comment">
                  <Tag variant={TAG_VARIANT[entry.tag] ?? "dim"}>
                    {entry.tag}
                  </Tag>
                  <span>{entry.date}</span>
                </div>
                <h3 className="mt-2 font-mono text-base font-semibold text-text">
                  {entry.title}
                </h3>
                <p className="font-mono text-sm text-func">{entry.org}</p>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-dim">
                  {entry.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
