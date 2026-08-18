import { ExternalLink, Github } from "lucide-react";
import { WindowChrome } from "./WindowChrome.jsx";
import { Tag } from "./Tag.jsx";

export function ProjectCard({ project }) {
  // Support both old and new data formats
  const name = project.name ?? project.title;
  const image = project.image ?? project.img;

  const stack =
    project.stack ??
    project.technologies?.split("|").map((tech) => tech.trim()) ??
    [];

  const liveUrl = project.liveUrl ?? project.link;
  const repoUrl = project.repoUrl ?? project.github;

  return (
    <WindowChrome title={`${name}.tsx`} className="h-full">
      <div className="flex h-full flex-col">
        {/* Image */}
        {image && (
          <div className="group relative mb-5 aspect-video overflow-hidden rounded-md bg-surface-2">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        {/* Description */}
        <p className="text-sm leading-relaxed text-dim">
          {project.description}
        </p>

        {/* Technologies */}
        {stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {stack.map((tech, index) => (
              <Tag key={`${tech}-${index}`} variant="func">
                {tech}
              </Tag>
            ))}
          </div>
        )}

        {/* Links */}
        {(repoUrl || liveUrl) && (
          <div className="mt-auto flex items-center gap-4 border-t border-border pt-4 font-mono text-xs">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-dim transition-colors hover:text-text"
              >
                <Github size={14} />
                github
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-dim transition-colors hover:text-func"
              >
                <ExternalLink size={14} />
                live
              </a>
            )}
          </div>
        )}
      </div>
    </WindowChrome>
  );
}
