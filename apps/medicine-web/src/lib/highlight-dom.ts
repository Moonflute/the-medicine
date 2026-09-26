import { makeAnchor, locateAnchor, type TextAnchor } from "./highlight-anchor";

type Point = { node: Text; offset: number };
export type TextBlock = { element: Element; key: string; text: string; starts: Point[]; ends: Point[] };
const EXCLUDED = "script,style,nav,dialog,[role=dialog],[role=alertdialog],textarea,input,select,svg,[contenteditable=true],[data-highlight-ignore],[hidden]";
const SEMANTIC = "[data-highlight-block],p,li,td,th,h1,h2,h3,h4,h5,h6,pre,blockquote,dt,dd";
const fingerprints = new WeakMap<TextBlock[], string>();

function fingerprint(blocks: TextBlock[]) {
  const cached = fingerprints.get(blocks);
  if (cached) return cached;
  const value = JSON.stringify(blocks.map(block => [block.key, block.element.tagName, block.text]));
  let first = 2166136261, second = 5381;
  for (let i = 0; i < value.length; i++) {
    first = Math.imul(first ^ value.charCodeAt(i), 16777619);
    second = Math.imul(second, 33) ^ value.charCodeAt(i);
  }
  const result = (first >>> 0).toString(16) + ":" + (second >>> 0).toString(16);
  fingerprints.set(blocks, result);
  return result;
}
export function makeDOMAnchor(blocks: TextBlock[], block: TextBlock, start: number, end: number, snapshot = fingerprint(blocks)): TextAnchor {
  return { ...makeAnchor(block.text, start, end, block.key), kind: block.element.tagName, position: blocks.indexOf(block), snapshot };
}

export function textBlocks(root: HTMLElement): TextBlock[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const groups = new Map<Element, Text[]>();
  let next: Node | null;
  while ((next = walker.nextNode())) {
    const node = next as Text;
    const parent = node.parentElement;
    if (!parent || !node.data || parent.closest(EXCLUDED)) continue;
    if (parent.closest("button,[role=button],summary") && !parent.closest("[data-highlight-block]")) continue;
    const element = parent.closest(SEMANTIC) ?? parent;
    if (!root.contains(element) || !element.getClientRects().length) continue;
    const nodes = groups.get(element) ?? [];
    nodes.push(node); groups.set(element, nodes);
  }
  const blocks: TextBlock[] = [];
  for (const [element, nodes] of groups) {
    const block: TextBlock = { element, key: element.getAttribute("data-highlight-block") ?? "", text: "", starts: [], ends: [] };
    const pending: { whitespace: { start: Point; end: Point } | null } = { whitespace: null };
    for (const node of nodes) {
      for (let i = 0; i < node.length; i++) {
        const start = { node, offset: i }, end = { node, offset: i + 1 };
        if (/\s/.test(node.data[i])) { pending.whitespace = { start: pending.whitespace?.start ?? start, end }; continue; }
        if (pending.whitespace && block.text.length) { block.text += " "; block.starts.push(pending.whitespace.start); block.ends.push(pending.whitespace.end); }
        pending.whitespace = null;
        block.text += node.data[i]; block.starts.push(start); block.ends.push(end);
      }
    }
    if (block.text) blocks.push(block);
  }
  return blocks;
}

export function anchorRange(block: TextBlock, start: number, end: number): Range | null {
  const first = block.starts[start], last = block.ends[end - 1];
  if (!first || !last) return null;
  const range = document.createRange();
  range.setStart(first.node, first.offset); range.setEnd(last.node, last.offset);
  return range;
}

export function selectionAnchors(blocks: TextBlock[], range: Range): TextAnchor[] {
  const snapshot = fingerprint(blocks);
  return blocks.flatMap(block => {
    if (!range.intersectsNode(block.element)) return [];
    let start = -1, end = -1;
    for (let i = 0; i < block.text.length; i++) {
      const first = block.starts[i], last = block.ends[i];
      if (range.comparePoint(first.node, first.offset) >= 0 && range.comparePoint(last.node, last.offset) <= 0) {
        if (start < 0) start = i;
        end = i + 1;
      }
    }
    while (start >= 0 && start < end && block.text[start] === " ") start++;
    while (end > start && block.text[end - 1] === " ") end--;
    return start >= 0 && end > start ? [makeDOMAnchor(blocks, block, start, end, snapshot)] : [];
  });
}

export function resolveHighlight(blocks: TextBlock[], anchor: TextAnchor) {
  // A position is trusted only while the entire rendered text is unchanged.
  // This allows marking identical headings/table cells immediately without
  // guessing by an old offset after an edit.
  if (Number.isInteger(anchor.position) && anchor.snapshot === fingerprint(blocks)) {
    const block = blocks[anchor.position!];
    if (block && (!anchor.block || block.key === anchor.block) && block.text.slice(anchor.start, anchor.start + anchor.exact.length) === anchor.exact) {
      return { block, start: anchor.start, end: anchor.start + anchor.exact.length };
    }
  }
  let candidates = blocks.filter(block => !anchor.block || block.key === anchor.block)
    .flatMap(block => { const position = locateAnchor(block.text, anchor); return position ? [{ block, ...position }] : []; });
  if (candidates.length === 1) return candidates[0];
  const sameKind = candidates.filter(candidate => candidate.block.element.tagName === anchor.kind);
  if (sameKind.length === 1) return sameKind[0];
  if (sameKind.length > 0) candidates = sameKind;
  const contextual = candidates.filter(({ block, start, end }) =>
    (anchor.prefix && block.text.slice(Math.max(0, start - anchor.prefix.length), start) === anchor.prefix) ||
    (anchor.suffix && block.text.slice(end, end + anchor.suffix.length) === anchor.suffix));
  return contextual.length === 1 ? contextual[0] : null;
}
