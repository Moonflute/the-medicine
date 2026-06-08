import React from "react";
import Link from "next/link";
import type { TermLink } from "@/lib/webdb";

function normalizeInline(text: string) {
  const safeText = typeof text === "string" ? text : String(text ?? "");
  return safeText.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderLinkedText(text: string, termLinks: TermLink[]) {
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

function renderInline(text: string, termLinks: TermLink[]) {
  const normalized = normalizeInline(text);
  const parts = normalized.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-stone-900">
          {renderLinkedText(part.slice(2, -2), termLinks)}
        </strong>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{renderLinkedText(part, termLinks)}</React.Fragment>;
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

function renderParagraph(text: string, className: string, termLinks: TermLink[]) {
  const labeled = splitLeadLabel(text);

  if (!labeled) {
    return <p className={className}>{renderInline(text, termLinks)}</p>;
  }

  return (
    <p className={className}>
      <span className="font-semibold text-stone-900">{renderInline(labeled.label, termLinks)}:</span>{" "}
      {renderInline(labeled.body, termLinks)}
    </p>
  );
}

function renderLine(line: string, bulletStyle: "plain" | "card", termLinks: TermLink[]) {
  const trimmed = (typeof line === "string" ? line : String(line ?? "")).trim();

  if (!trimmed) {
    return <div className="h-1" />;
  }

  if (trimmed === "---") {
    return <hr className="border-stone-200" />;
  }

  if (trimmed.startsWith("#### ")) {
    return <h5 className="font-medium text-stone-900">{renderInline(trimmed.slice(5), termLinks)}</h5>;
  }

  if (trimmed.startsWith("### ")) {
    return <h4 className="font-medium text-stone-900">{renderInline(trimmed.slice(4), termLinks)}</h4>;
  }

  if (/^(?:•|-|\?\?)\s+/.test(trimmed)) {
    const body = trimmed.replace(/^(?:•|-|\?\?)\s+/, "");

    if (bulletStyle === "plain") {
      return (
        <div className="flex gap-3">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
          {renderParagraph(body, "min-w-0 text-[15px] leading-7 text-stone-700", termLinks)}
        </div>
      );
    }

    return (
      <div className="flex gap-3 rounded-2xl border border-stone-200/80 bg-stone-50/60 px-3 py-2.5">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
        {renderParagraph(body, "min-w-0 text-[15px] leading-7 text-stone-700", termLinks)}
      </div>
    );
  }

  return renderParagraph(trimmed, "text-[15px] leading-7 text-stone-700", termLinks);
}

export function RichTextLines({
  lines,
  className = "space-y-2.5 text-sm text-stone-700",
  bulletStyle = "card",
  termLinks = [],
}: {
  lines: string[];
  className?: string;
  bulletStyle?: "plain" | "card";
  termLinks?: TermLink[];
}) {
  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={`${String(line)}-${index}`}>{renderLine(line, bulletStyle, termLinks)}</div>
      ))}
    </div>
  );
}
