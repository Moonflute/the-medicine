"use client";

import { useEffect, useRef, useState } from "react";
import { Copy } from "lucide-react";

export function QbankCopyButton({ text, label, iconOnly = false, title }: { text: string; label: string; iconOnly?: boolean; title?: string }) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => () => { if (timer.current) window.clearTimeout(timer.current); }, []);

  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setFailed(false);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setFailed(true);
    }
  };

  return <span className="inline-flex items-center gap-1">
    <button type="button" onClick={() => void copy()} className={`qbank-copy-action ${copied ? "qbank-copy-action--copied" : ""}`} aria-label={label} title={title ?? label}><Copy className="h-3.5 w-3.5" />{copied ? "복사됨" : iconOnly ? null : label}</button>
    {failed ? <span role="alert" className="text-[11px] text-rose-700">복사 실패 · 권한 확인</span> : null}
    {copied && iconOnly ? <span role="status" className="sr-only">복사됨</span> : null}
  </span>;
}
