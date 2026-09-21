// Shared with the Edge Function. No browser, Node or third-party dependencies.
export const EDITOR_USER_ID = "7eb6750c-d42c-4291-92cc-971bf4d7e4a5";
export const PILOT_PATHS = [
  "source_notes/01 Chief Complaint/가슴통증.md",
  "source_notes/02 Diseases/01 순환기/고혈압 (Hypertension).md",
  "source_notes/04 Pharmacology/01 심혈계/Adenosine.md",
  "source_notes/06 Lab & Img/01 혈액검사/C-Reactive Protein (CRP).md",
] as const;
export const EDITABLE_DIRECTORIES = ["01 Chief Complaint", "02 Diseases", "04 Pharmacology", "06 Lab & Img", "07 Skills", "99 Q-bank"] as const;
export type Replacement = { index: number; markdown: string };
export type SourceBlock = { raw: string; editable: boolean };
export type SourceDocument = { prefix: string; blocks: SourceBlock[] };

export function isEditablePath(path: unknown): path is string {
  if (typeof path !== "string" || /[\\%?#\x00-\x1f]/.test(path)) return false;
  const parts = path.split("/");
  return parts.length >= 3 && parts[0] === "source_notes" &&
    (EDITABLE_DIRECTORIES as readonly string[]).includes(parts[1]) &&
    parts.every(part => part !== "." && part !== ".." && part.length > 0 && part === part.trim()) && path.endsWith(".md");
}

export function canEditBlock(raw: string): boolean {
  // Pilot: preserve structural headings and nonstandard syntax as opaque source.
  // Do not pretend arbitrary Obsidian Markdown round-trips through a rich editor.
  return Boolean(raw.trim()) && !/(^|\n)(?: {4}|\t)|(^|\n)[ \t]*(?:#{1,6}\s|```|~~~|\[.*\]:|[-*_]{3,}\s*$)|\[\[|\]\[|!\[|\[!|<|\$|\^\w|%%|\r(?!\n)|(?:javascript|vbscript|data)\s*:/im.test(raw);
}

export function splitSource(source: string): SourceDocument {
  if (typeof source !== "string" || source.length > 200_000) throw new Error("문서 크기를 확인해주세요.");
  let prefix = source.startsWith("\uFEFF") ? "\uFEFF" : "";
  let body = source.slice(prefix.length);
  if (/^---(?:\r?\n|$)/.test(body)) {
    const match = body.match(/^---\r?\n[\s\S]*?\r?\n(?:---|\.\.\.)(?:\r?\n|$)/);
    if (!match) throw new Error("메타데이터 경계를 확인할 수 없어 편집을 중단했습니다.");
    prefix += match[0];
    body = body.slice(match[0].length);
  }
  const blocks: SourceBlock[] = [];
  const lines = body.match(/[^\n]*\n|[^\n]+$/g) ?? [];
  let raw = "";
  let fence = "";
  const flush = () => {
    if (raw) blocks.push({ raw, editable: canEditBlock(raw) });
    raw = "";
  };
  for (const line of lines) {
    if (!fence && /^#{1,6}\s/.test(line)) {
      flush();
      blocks.push({ raw: line, editable: false });
      continue;
    }
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker && !fence) fence = marker[1];
    else if (fence && new RegExp(`^\\s{0,3}${fence[0]}{${fence.length},}\\s*$`).test(line.trimEnd())) fence = "";
    const blank = !line.trim();
    if (blank && !fence) {
      flush();
      blocks.push({ raw: line, editable: false });
    } else raw += line;
  }
  flush();
  // HTML/comments can span blank lines. A pilot document containing them is
  // entirely protected until a source-range parser supports these constructs.
  if (/<\/?[a-z!][\s\S]*?>/i.test(body)) blocks.forEach(block => { block.editable = false; });
  return { prefix, blocks };
}

export function replaceBlocks(source: string, changes: Replacement[], path?: string): string {
  if (!Array.isArray(changes) || changes.length > 500) throw new Error("잘못된 수정 요청입니다.");
  if (changes.length === 1 && changes[0]?.index === -1) {
    const next = changes[0].markdown;
    if (typeof next !== "string" || !next.trim() || next.includes("\0")) throw new Error("비어 있거나 잘못된 원문입니다.");
    const original = splitSource(source);
    const edited = splitSource(next);
    if (original.prefix !== edited.prefix) throw new Error("메타데이터는 원문 그대로 보존해주세요. 본문만 수정할 수 있습니다.");
    return next;
  }
  const document = splitSource(source);
  const seen = new Set<number>();
  for (const change of changes) {
    if (!change || !Number.isInteger(change.index) || seen.has(change.index)) throw new Error("중복되거나 잘못된 블록입니다.");
    seen.add(change.index);
    const block = document.blocks[change.index];
    if (!block?.editable || typeof change.markdown !== "string" || !canEditBlock(change.markdown)) throw new Error("보존된 영역 또는 지원하지 않는 문법은 수정할 수 없습니다.");
    if (change.markdown === block.raw) continue;
    const eol = block.raw.includes("\r\n") ? "\r\n" : "\n";
    const trailing = block.raw.match(/(?:\r?\n)+$/)?.[0] ?? "";
    block.raw = change.markdown.replace(/\r\n/g, "\n").trimEnd().replace(/\n/g, eol) + trailing;
  }
  const result = document.prefix + document.blocks.map(block => block.raw).join("");
  if (result.length > 200_000) throw new Error("문서 크기 제한을 초과했습니다.");
  return result;
}

export function assertEditor(user: { id: string; app_metadata?: { providers?: string[] } } | null) {
  if (user?.id !== EDITOR_USER_ID || !user.app_metadata?.providers?.includes("google")) throw new Error("편집 권한이 없습니다.");
}
