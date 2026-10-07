"use client";

import { RefreshCw } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import { isSpecialTheme } from "@/lib/themes";
import { skinRetryLabel, skinStatusMessage, skinStatusTone, type SkinStatusKind } from "@/lib/skin-status";

/** Presentation only: callers keep their loading, persistence, and retry logic. */
export function SkinStatus({ kind, fallback, detail, className = "", stage = false, inline = false, onRetry, suffix = "", title }: {
  kind: SkinStatusKind;
  fallback: string;
  detail?: string;
  className?: string;
  stage?: boolean;
  inline?: boolean;
  onRetry?: () => void;
  suffix?: string;
  title?: string;
}) {
  const { theme } = useAppTheme();
  const special = isSpecialTheme(theme);
  const tone = skinStatusTone(kind);
  const Tag = inline ? "span" : "div";
  const label = skinRetryLabel(theme, kind === "syncFailed");
  return <Tag role={tone === "error" ? "alert" : "status"} aria-atomic="true" title={title} data-skin-status={kind} data-tone={tone}
    className={special ? `skin-status skin-status--${theme}${stage ? " skin-status--stage" : ""}${inline ? " skin-status--inline" : ""}` : className}>
    <span className={special ? "skin-status-line" : undefined}>
      {theme === "sheet" ? <span className="skin-status-mark" aria-hidden="true">{tone === "busy" ? "작업 중" : tone === "error" ? "확인" : "준비"}</span> : theme === "terminal" ? <span className="skin-status-mark" aria-hidden="true">{tone === "busy" ? "[BUSY]" : tone === "error" ? "[ERR]" : tone === "empty" ? "[INFO]" : "[OK]"}</span> : null}
      <span className="skin-status-text">{skinStatusMessage(theme, kind, fallback)}{suffix}</span>
      {theme === "terminal" && tone === "busy" ? <span className="skin-status-cursor" aria-hidden="true">▌</span> : null}
      {onRetry ? <button type="button" onClick={onRetry} className={special ? "skin-status-retry" : "secondary-action ml-2"} aria-label={label} title={label}>
        {theme === "chat" ? <RefreshCw size={15} aria-hidden="true" /> : label}
      </button> : null}
    </span>
    {special && detail ? <span className="skin-status-detail">{detail}</span> : null}
  </Tag>;
}
