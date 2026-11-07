import type { TermLink } from "./types";

/** Keep the same link resolution order without serializing the entire glossary. */
export function selectDocumentLinks(links: TermLink[], document: unknown, matchPlainText = false): TermLink[] {
  const terms = new Set<string>();
  const text: string[] = [];
  const visit = (value: unknown) => {
    if (typeof value === "string") {
      terms.add(value.trim());
      if (matchPlainText) text.push(value);
      for (const match of value.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)) {
        terms.add(match[1].trim());
        if (match[2]) terms.add(match[2].trim());
      }
    } else if (value && typeof value === "object") {
      for (const item of Object.values(value)) visit(item);
    }
  };
  visit(document);
  const plainText = text.join("\n");
  return links.filter(({ term }) => terms.has(term) || (matchPlainText && term.trim() && plainText.includes(term)));
}
