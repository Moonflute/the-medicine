"use client";

import { useEffect, useRef } from "react";

/** A native top-layer dialog is not clipped by the surrounding question skin. */
export function QuestionImageDialog({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    element.showModal();
    return () => { if (element.open) element.close(); };
  }, []);

  return <dialog ref={dialog} aria-label={`${alt} 크게 보기`} onClose={onClose}
    onKeyDown={event => event.stopPropagation()}
    onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}
    className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-slate-950/90 p-3 text-white backdrop:bg-slate-950/80 sm:p-4">
    <div className="flex h-full min-h-0 flex-col gap-3">
      <div className="flex shrink-0 justify-end">
        <button type="button" onClick={() => dialog.current?.close()} className="rounded-md bg-white/95 px-3 py-2 text-sm font-semibold text-slate-800">닫기</button>
      </div>
      <div className="min-h-0 w-full flex-1">
        {/* Explicit dimensions upscale small originals while object-contain preserves their aspect ratio. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="h-full w-full max-w-none object-contain" />
      </div>
    </div>
  </dialog>;
}
