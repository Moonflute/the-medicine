import { makeAnchor, locateAnchor, type TextAnchor } from "./highlight-anchor";

type Point = { node: Text; offset: number };
export type TextBlock = { element: Element; key: string; text: string; starts: Point[]; ends: Point[] };
const EXCLUDED = "script,style,nav,dialog,[role=dialog],[role=alertdialog],textarea,input,select,svg,[contenteditable=true],[data-highlight-ignore],[hidden]";
const SEMANTIC = "[data-highlight-block],p,li,td,th,h1,h2,h3,h4,h5,h6,pre,blockquote,dt,dd";

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
    return start >= 0 && end > start ? [makeAnchor(block.text, start, end, block.key)] : [];
  });
}

export function resolveHighlight(blocks: TextBlock[], anchor: TextAnchor) {
  const candidates = blocks.filter(block => !anchor.block || block.key === anchor.block)
    .flatMap(block => { const position = locateAnchor(block.text, anchor); return position ? [{ block, ...position }] : []; });
  if (candidates.length === 1) return candidates[0];
  const contextual = candidates.filter(({ block, start, end }) =>
    (anchor.prefix && block.text.slice(Math.max(0, start - anchor.prefix.length), start) === anchor.prefix) ||
    (anchor.suffix && block.text.slice(end, end + anchor.suffix.length) === anchor.suffix));
  return contextual.length === 1 ? contextual[0] : null;
}
