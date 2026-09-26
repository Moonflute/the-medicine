export const HIGHLIGHT_COLORS = ["yellow", "green", "blue", "pink", "purple", "orange"] as const;
export type HighlightColor = typeof HIGHLIGHT_COLORS[number];
export type TextAnchor = { exact: string; prefix: string; suffix: string; start: number; block: string; kind?: string; position?: number; snapshot?: string };
export type PersonalHighlight = { id: string; user_id: string; document_key: string; color: HighlightColor; anchor: TextAnchor; deleted: boolean };

export function normalizeText(text: string): string { return text.replace(/\s+/g, " ").trim(); }

export function makeAnchor(text: string, start: number, end: number, block = ""): TextAnchor {
  return { exact: text.slice(start, end), prefix: text.slice(Math.max(0, start - 48), start), suffix: text.slice(end, end + 48), start, block };
}

// Exact text survives inserted paragraphs and changed layout. Context resolves
// repeated phrases; ambiguous matches are retained as detached records.
export function locateAnchor(text: string, anchor: TextAnchor): { start: number; end: number } | null {
  if (!anchor.exact) return null;
  const matches: Array<{ start: number; score: number }> = [];
  for (let from = 0; from <= text.length;) {
    const start = text.indexOf(anchor.exact, from);
    if (start < 0) break;
    const before = text.slice(Math.max(0, start - anchor.prefix.length), start);
    const after = text.slice(start + anchor.exact.length, start + anchor.exact.length + anchor.suffix.length);
    let score = 0;
    for (let i = 1; i <= Math.min(before.length, anchor.prefix.length); i++) {
      if (before.at(-i) !== anchor.prefix.at(-i)) break;
      score++;
    }
    for (let i = 0; i < Math.min(after.length, anchor.suffix.length); i++) {
      if (after[i] !== anchor.suffix[i]) break;
      score++;
    }
    matches.push({ start, score });
    from = start + 1;
  }
  if (!matches.length) return null;
  if (matches.length === 1) return { start: matches[0].start, end: matches[0].start + anchor.exact.length };
  matches.sort((a, b) => b.score - a.score);
  if (matches[0].score <= matches[1].score || matches[0].score === 0) return null;
  return { start: matches[0].start, end: matches[0].start + anchor.exact.length };
}

export function subtractInterval(start: number, end: number, cuts: Array<{ start: number; end: number }>) {
  let pieces = [{ start, end }];
  for (const cut of cuts) pieces = pieces.flatMap(piece => {
    if (cut.end <= piece.start || cut.start >= piece.end) return [piece];
    return [
      ...(piece.start < cut.start ? [{ start: piece.start, end: Math.min(piece.end, cut.start) }] : []),
      ...(piece.end > cut.end ? [{ start: Math.max(piece.start, cut.end), end: piece.end }] : []),
    ];
  });
  return pieces;
}

export function mergeHighlights(...groups: PersonalHighlight[][]): PersonalHighlight[] {
  const values = new Map<string, PersonalHighlight>();
  for (const row of groups.flat()) {
    const old = values.get(row.id);
    if (!old || !old.deleted) values.set(row.id, row);
  }
  return [...values.values()];
}
