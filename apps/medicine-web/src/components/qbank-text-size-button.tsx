"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const options = [
  ["small", "작게"],
  ["default", "기본"],
  ["large", "크게"],
  ["extra-large", "아주 크게"],
] as const;
type TextSize = (typeof options)[number][0];
const storageKey = "medicine-qbank-text-size-v1";

function textSize(value: unknown): TextSize {
  return options.find(([size]) => size === value)?.[0] ?? "default";
}

export function QbankTextSizeButton() {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [chosen, setChosen] = useState<TextSize>("default");

  useLayoutEffect(() => {
    const root = document.documentElement;
    // Apply to the article before it paints, without rerendering the session.
    try { root.dataset.qbankTextSize = textSize(window.localStorage.getItem(storageKey)); }
    catch { /* The preference can still be changed for this tab. */ }
    const sync = (event: StorageEvent) => {
      if (event.key !== storageKey && event.key !== null) return;
      const size = textSize(event.newValue);
      root.dataset.qbankTextSize = size;
      if (dialog.current?.open) setChosen(size);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function choose(size: TextSize) {
    document.documentElement.setAttribute("data-qbank-text-size", size);
    try { window.localStorage.setItem(storageKey, size); }
    catch { /* Keep the current tab usable when storage is blocked. */ }
    dialog.current?.close();
  }

  return <>
    <button ref={trigger} type="button" className="secondary-action qbank-text-size-trigger h-9 w-9 !px-0" aria-label="글자 크기" title="문제 글자 크기" aria-haspopup="dialog" aria-controls={id} onClick={() => {
      if (!dialog.current || dialog.current.open) return;
      setChosen(textSize(document.documentElement.dataset.qbankTextSize));
      dialog.current.showModal();
    }}><span className="qbank-text-size-glyph" aria-hidden="true">가</span></button>
    <dialog ref={dialog} id={id} className="qbank-compact-dialog qbank-text-size-dialog" aria-labelledby={`${id}-title`}
      onClose={() => trigger.current?.focus({ preventScroll: true })}
      onKeyDown={event => event.stopPropagation()}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) event.currentTarget.close();
      }}>
      <header><h2 id={`${id}-title`}>문제 글자 크기</h2><button type="button" className="qbank-text-size-close" aria-label="글자 크기 닫기" onClick={() => dialog.current?.close()}><X size={17} aria-hidden="true" /></button></header>
      <div className="qbank-text-size-options" role="group" aria-label="글자 크기 선택">
        {options.map(([size, label]) => <button key={size} type="button" aria-pressed={chosen === size} onClick={() => choose(size)}>{label}</button>)}
      </div>
    </dialog>
  </>;
}
