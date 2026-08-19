import {
  Container,
  Reveal,
  SectionHeading,
  Tag,
  WindowChrome,
} from "@ismailalam/ui-components";
import { siteConfig } from "../../config/siteConfig.js";

const TAG_VARIANTS = ["keyword", "string", "func", "const"];

/**
 * Skills — one WindowChrome per category, each listing its skills as
 * Tag pills. Both category count and skill count are entirely data
 * driven from siteConfig.skills.
 */
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-14 py-16 sm:py-20">
      <SectionHeading
        file="skills.json"
        title="Skills & tools"
        description="Grouped the way I'd actually reach for them."
      />

      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <WindowChrome title={group.file} className="h-full">
                <p className="mb-4 font-mono text-xs text-comment">
                  // {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <Tag
                      key={item}
                      variant={TAG_VARIANTS[j % TAG_VARIANTS.length]}
                    >
                      {item}
                    </Tag>
                  ))}
                </div>
              </WindowChrome>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
