/**
 * LineNumbers — renders a muted, non-selectable column of line numbers,
 * like an editor gutter. Purely decorative but diegetic to the "this page
 * is a code editor" concept, so it's reused wherever a code block needs
 * a gutter (currently the Hero).
 */
export function LineNumbers({ count }) {
  return (
    <div
      aria-hidden="true"
      className="hidden select-none flex-col items-end pr-4 font-mono text-xs leading-7 text-comment sm:flex"
    >
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>{i + 1}</span>
      ))}
    </div>
  );
}
