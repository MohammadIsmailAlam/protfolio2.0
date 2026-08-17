import { siteConfig } from "../../config/siteConfig.js";
import { Container } from "../ui/Container.jsx";
import { CursorBlink } from "../ui/CursorBlink.jsx";
import { IconLink } from "../ui/IconLink.jsx";

/**
 * Footer — styled as a terminal prompt. Reuses CursorBlink and IconLink
 * so no new primitives are needed just for the footer.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-sm text-dim">
          visitor@{siteConfig.personal.name.toLowerCase().replace(/\s+/g, "-")}
          :~$ <CursorBlink />
        </p>

        <div className="flex items-center gap-3">
          {siteConfig.socials.map((social) => (
            <IconLink key={social.label} {...social} />
          ))}
        </div>
      </Container>

      <Container className="mt-6">
        <p className="font-mono text-xs text-comment">
          // built with React, Vite & Tailwind CSS · deployed on Vercel ·
          © {year}
        </p>
      </Container>
    </footer>
  );
}
