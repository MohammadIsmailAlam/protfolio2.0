import { Container } from "./Container.jsx";

/**
 * SectionHeading — the consistent "// comment" + heading pattern that
 * opens every section, styled like a code comment followed by a
 * declaration. One component, so heading rhythm/spacing never drifts
 * between sections.
 */
export function SectionHeading({ file, title, description }) {
  return (
    <Container className="mb-10">
      <p className="font-mono text-sm text-comment">// {file}</p>
      <h2 className="mt-2 font-mono text-2xl font-semibold text-text sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-base text-dim">{description}</p>
      ) : null}
    </Container>
  );
}
