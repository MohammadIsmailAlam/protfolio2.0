import { useEffect, useState } from "react";

/**
 * useTypewriter — cycles through an array of strings, typing each one out
 * character by character, pausing, deleting it, then moving to the next.
 * Powers the "role" line in the Hero section. Pure hook — no DOM
 * assumptions — so it can be reused anywhere text needs this effect.
 */
export function useTypewriter(
  words,
  { typingSpeed = 65, deletingSpeed = 35, pause = 1400 } = {}
) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return undefined;
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentWord.slice(0, prev.length - 1)
              : currentWord.slice(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return text;
}
