import React from "react";

function renderInline(text: string) {
  const normalized = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1");
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

  if (/^[•*-]\s+/.test(trimmed)) {
    return (
      <div className="flex gap-2">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
        <p className="min-w-0">{renderInline(trimmed.replace(/^[•*-]\s+/, ""))}</p>
      </div>
    );
  }

  return <p>{renderInline(trimmed)}</p>;
}

export function RichTextLines({ lines, className = "space-y-2 text-sm leading-6 text-stone-700" }: { lines: string[]; className?: string }) {
  return <div className={className}>{lines.map((line, index) => <div key={`${line}-${index}`}>{renderLine(line)}</div>)}</div>;
}
