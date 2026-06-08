import React from "react";
import Link from "next/link";
import type { TermLink } from "@/lib/webdb";

type BulletStyle = "plain" | "card";

type ParsedBlock =
  | { type: "line"; line: string }
  | { type: "group"; label: string; items: string[] };

const EMPHASIS_LABEL_PATTERN =
  /^(임상 정보|용법\/용량|적응증|금기증|부작용|이상반응|주의사항|주의|상호작용|모니터링|기전|약동학|투여|복약지도|신장 조절|간 조절)$/;

function stripWikiMarkup(text: string) {
  return text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function normalizeInline(text: string) {
  const safeText = typeof text === "string" ? text : String(text ?? "");
  return stripWikiMarkup(safeText);
}

function plainText(text: string) {
  return normalizeInline(text).replace(/\*\*/g, "").trim();
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function isBulletLine(text: string) {
  return /^(?:•|-|\?\?)\s+/.test(text.trim());
}

function stripBulletPrefix(text: string) {
  return text.trim().replace(/^(?:•|-|\?\?)\s+/, "");
}

function isSpecialLine(text: string) {
  const trimmed = text.trim();
  return !trimmed || trimmed === "---" || trimmed.startsWith("### ") || trimmed.startsWith("#### ");
}

function normalizeLabelText(text: string) {
  return normalizeInline(text)
    .trim()
    .replace(/^#{3,4}\s*/, "")
    .replace(/[:：]\s*$/, "")
    .trim();
}

function isEmphasisLabelLine(text: string) {
  return EMPHASIS_LABEL_PATTERN.test(normalizeLabelText(text));
}

function getLabelOnly(body: string) {
  const plain = plainText(body);
  const match = plain.match(/^([^:]{1,32}):\s*$/);
  return match ? match[1] : null;
}

function parseBlocks(lines: string[], bulletStyle: BulletStyle): ParsedBlock[] {
  if (bulletStyle !== "plain") {
    return lines.map((line) => ({ type: "line", line }));
  }

  const blocks: ParsedBlock[] = [];
  let currentGroup: ParsedBlock | null = null;

  const flushGroup = () => {
    if (currentGroup?.type === "group") {
      blocks.push(currentGroup);
      currentGroup = null;
    }
  };

  for (const line of lines) {
    const trimmed = (typeof line === "string" ? line : String(line ?? "")).trim();

    if (isSpecialLine(trimmed)) {
      flushGroup();
      blocks.push({ type: "line", line: trimmed });
      continue;
    }

    if (isBulletLine(trimmed)) {
      const body = stripBulletPrefix(trimmed);
      const labelOnly = getLabelOnly(body);

      if (labelOnly) {
        flushGroup();
        currentGroup = { type: "group", label: body, items: [] };
        continue;
      }

      if (currentGroup?.type === "group") {
        currentGroup.items.push(trimmed);
        continue;
      }

      blocks.push({ type: "line", line: trimmed });
      continue;
    }

    if (currentGroup?.type === "group") {
      currentGroup.items.push(trimmed);
      continue;
    }

    blocks.push({ type: "line", line: trimmed });
  }

  flushGroup();
  return blocks;
}

function renderWikiText(text: string, wikiLinks: TermLink[]) {
  const safeText = typeof text === "string" ? text : String(text ?? "");

  if (wikiLinks.length === 0 || !safeText.includes("[[")) {
    return stripWikiMarkup(safeText);
  }

  const hrefByTerm = new Map(wikiLinks.map((item) => [item.term, item.href]));
  const parts = safeText.split(/(\[\[[^\]]+\]\])/g).filter(Boolean);

  return parts.map((part, index) => {
    const match = part.match(/^\[\[([^\]|]+)(?:\|([^\]]+))?\]\]$/);

    if (!match) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    const rawTarget = match[1].trim();
    const display = (match[2] ?? rawTarget).trim();
    const href = hrefByTerm.get(rawTarget) ?? hrefByTerm.get(display);

    if (!href) {
      return <React.Fragment key={`${part}-${index}`}>{display}</React.Fragment>;
    }

    return (
      <Link key={`${part}-${index}`} href={href} className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2">
        {display}
      </Link>
    );
  });
}

function linkPlainTerms(text: string, termLinks: TermLink[]) {
  if (termLinks.length === 0) {
    return text;
  }

  const sorted = termLinks
    .filter((item) => item.term.trim().length > 0)
    .slice()
    .sort((a, b) => b.term.length - a.term.length);

  if (sorted.length === 0) {
    return text;
  }

  const pattern = new RegExp(`(${sorted.map((item) => escapeRegex(item.term)).join("|")})`, "g");
  const hrefByTerm = new Map(sorted.map((item) => [item.term, item.href]));
  const parts = text.split(pattern).filter((part) => part.length > 0);

  return parts.map((part, index) => {
    const href = hrefByTerm.get(part);

    if (!href) {
      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    }

    return (
      <Link key={`${part}-${index}`} href={href} className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-2">
        {part}
      </Link>
    );
  });
}

function renderLinkedText(text: string, termLinks: TermLink[], wikiLinks: TermLink[]) {
  const wikiRendered = renderWikiText(text, wikiLinks);

  if (!Array.isArray(wikiRendered)) {
    return linkPlainTerms(wikiRendered, termLinks);
  }

  return wikiRendered.map((node, nodeIndex) => {
    if (typeof node !== "string") {
      return <React.Fragment key={nodeIndex}>{node}</React.Fragment>;
    }

    return <React.Fragment key={nodeIndex}>{linkPlainTerms(node, termLinks)}</React.Fragment>;
  });
}

function renderInline(text: string, termLinks: TermLink[], wikiLinks: TermLink[]) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-stone-900">
          {renderLinkedText(part.slice(2, -2), termLinks, wikiLinks)}
        </strong>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{renderLinkedText(part, termLinks, wikiLinks)}</React.Fragment>;
  });
}

function splitLeadLabel(text: string) {
  const normalized = normalizeInline(text).trim();
  const match = normalized.match(/^([^:]{1,24}):\s+(.+)$/);

  if (!match) {
    return null;
  }

  return {
    label: match[1],
    body: match[2],
  };
}

function renderParagraph(text: string, className: string, termLinks: TermLink[], wikiLinks: TermLink[]) {
  const labeled = splitLeadLabel(text);

  if (!labeled) {
    return <p className={className}>{renderInline(text, termLinks, wikiLinks)}</p>;
  }

  return (
    <p className={className}>
      <span className="font-semibold text-stone-900">{renderInline(labeled.label, termLinks, wikiLinks)}:</span>{" "}
      {renderInline(labeled.body, termLinks, wikiLinks)}
    </p>
  );
}

function renderEmphasisLabel(text: string, termLinks: TermLink[], wikiLinks: TermLink[]) {
  return (
    <div className="pt-1">
      <div className="text-[17px] font-semibold tracking-tight text-stone-950">
        {renderInline(normalizeLabelText(text), termLinks, wikiLinks)}
      </div>
    </div>
  );
}

function renderLine(line: string, bulletStyle: BulletStyle, termLinks: TermLink[], wikiLinks: TermLink[]) {
  const trimmed = (typeof line === "string" ? line : String(line ?? "")).trim();

  if (!trimmed) {
    return <div className="h-1" />;
  }

  if (trimmed === "---") {
    return <hr className="border-stone-200" />;
  }

  if (isEmphasisLabelLine(trimmed)) {
    return renderEmphasisLabel(trimmed, termLinks, wikiLinks);
  }

  if (trimmed.startsWith("#### ")) {
    const heading = trimmed.slice(5);
    if (isEmphasisLabelLine(heading)) {
      return renderEmphasisLabel(heading, termLinks, wikiLinks);
    }
    return <h5 className="font-medium text-stone-900">{renderInline(heading, termLinks, wikiLinks)}</h5>;
  }

  if (trimmed.startsWith("### ")) {
    const heading = trimmed.slice(4);
    if (isEmphasisLabelLine(heading)) {
      return renderEmphasisLabel(heading, termLinks, wikiLinks);
    }
    return <h4 className="font-medium text-stone-900">{renderInline(heading, termLinks, wikiLinks)}</h4>;
  }

  if (isBulletLine(trimmed)) {
    const body = stripBulletPrefix(trimmed);

    if (bulletStyle === "plain") {
      return (
        <div className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
          {renderParagraph(body, "min-w-0 text-[15px] leading-7 text-stone-700", termLinks, wikiLinks)}
        </div>
      );
    }

    return (
      <div className="flex gap-3 rounded-2xl border border-stone-200/80 bg-stone-50/60 px-3 py-2.5">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
        {renderParagraph(body, "min-w-0 text-[15px] leading-7 text-stone-700", termLinks, wikiLinks)}
      </div>
    );
  }

  return renderParagraph(trimmed, "text-[15px] leading-7 text-stone-700", termLinks, wikiLinks);
}

function renderGroup(label: string, items: string[], termLinks: TermLink[], wikiLinks: TermLink[]) {
  return (
    <div className="space-y-2 rounded-2xl bg-white/45 px-3 py-2">
      <div className="text-[15px] font-semibold leading-7 text-stone-900">
        {renderInline(label.replace(/:\s*$/, ""), termLinks, wikiLinks)}
      </div>
      <div className="space-y-2 border-l border-stone-200 pl-4">
        {items.map((item, index) => (
          <div key={`${item}-${index}`}>{renderLine(item, "plain", termLinks, wikiLinks)}</div>
        ))}
      </div>
    </div>
  );
}

export function RichTextLines({
  lines,
  className = "space-y-2.5 text-sm text-stone-700",
  bulletStyle = "card",
  termLinks = [],
  wikiLinks = [],
}: {
  lines: string[];
  className?: string;
  bulletStyle?: BulletStyle;
  termLinks?: TermLink[];
  wikiLinks?: TermLink[];
}) {
  const blocks = parseBlocks(lines, bulletStyle);

  return (
    <div className={className}>
      {blocks.map((block, index) => (
        <div key={index}>
          {block.type === "group"
            ? renderGroup(block.label, block.items, termLinks, wikiLinks)
            : renderLine(block.line, bulletStyle, termLinks, wikiLinks)}
        </div>
      ))}
    </div>
  );
}
