import React from "react";

function normalizeInline(text: string) {
  return text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function renderInline(text: string) {
  const normalized = normalizeInline(text);
  const parts = normalized.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}

function renderLeadLabel(text: string) {
  const normalized = normalizeInline(text).trim();
  const match = normalized.match(/^([^:]{1,24}):\s+(.+)$/);

  if (!match) {
    return null;
  }

  return (
    <>
      <span className="font-semibold text-stone-900">{match[1]}:</span>{" "}
      <span>{renderInline(match[2])}</span>
    </>
  );
}

function renderLine(line: string) {
  const trimmed = line.trim();

  if (!trimmed) {
    return <div className="h-1" />;
  }

  if (trimmed === "---") {
    return <hr className="border-stone-200" />;
  }

  if (trimmed.startsWith("#### ")) {
    return <h5 className="font-medium text-stone-900">{renderInline(trimmed.slice(5))}</h5>;
  }

  if (trimmed.startsWith("### ")) {
    return <h4 className="font-medium text-stone-900">{renderInline(trimmed.slice(4))}</h4>;
  }

  if (/^[•?-]\s+/.test(trimmed)) {
    const body = trimmed.replace(/^[•?-]\s+/, "");
    const labeled = renderLeadLabel(body);

    return (
      <div className="flex gap-3 rounded-2xl border border-stone-200/80 bg-stone-50/60 px-3 py-2.5">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
        <p className="min-w-0 text-[15px] leading-7 text-stone-700">{labeled ?? renderInline(body)}</p>
      </div>
    );
  }

  return <p className="text-[15px] leading-7 text-stone-700">{renderLeadLabel(trimmed) ?? renderInline(trimmed)}</p>;
}

export function RichTextLines({
  lines,
  className = "space-y-2.5 text-sm text-stone-700",
}: {
  lines: string[];
  className?: string;
}) {
  return <div className={className}>{lines.map((line, index) => <div key={`${line}-${index}`}>{renderLine(line)}</div>)}</div>;
}
