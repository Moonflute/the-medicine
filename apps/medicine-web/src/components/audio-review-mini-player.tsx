"use client";

import Link from "next/link";
import { Pause, Play, SkipBack, SkipForward, Volume2, X } from "lucide-react";
import { useAudioReview } from "@/components/audio-review-provider";

export function AudioReviewMiniPlayer() {
  const { session, supported, play, pause, previousDocument, nextDocument, clear } = useAudioReview();
  if (!session || !supported || session.playlist.length === 0) return null;
  const item = session.playlist[session.itemIndex];
  const segment = item?.segments[session.segmentIndex];
  const completed = session.playlist.slice(0, session.itemIndex).reduce((sum, current) => sum + current.segments.length, 0) + session.segmentIndex + 1;
  const total = session.playlist.reduce((sum, current) => sum + current.segments.length, 0);

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 shadow-[0_-8px_24px_rgba(15,23,42,0.12)] backdrop-blur xl:bottom-0">
      <div className="mx-auto flex max-w-[1680px] items-center gap-2 px-3 py-2 sm:px-5">
        <Volume2 className="hidden h-4 w-4 shrink-0 text-teal-700 sm:block" />
        <Link href="/review/audio" className="min-w-0 flex-1">
          <div className="truncate text-xs font-semibold text-slate-900 sm:text-sm">{item.title}</div>
          <div className="truncate text-[11px] text-slate-500">{segment?.sectionTitle ?? "이어듣기"} · {completed} / {total}</div>
        </Link>
        <div className="flex shrink-0 items-center gap-1">
          <button type="button" onClick={previousDocument} className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" aria-label="이전"><SkipBack className="h-4 w-4" /></button>
          <button type="button" onClick={() => session.status === "playing" ? pause() : play()} className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-teal-600 text-white hover:bg-teal-700" aria-label={session.status === "playing" ? "일시정지" : "재생"}>{session.status === "playing" ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}</button>
          <button type="button" onClick={nextDocument} className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" aria-label="다음"><SkipForward className="h-4 w-4" /></button>
          <button type="button" onClick={clear} className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="청취 종료"><X className="h-4 w-4" /></button>
        </div>
      </div>
    </div>
  );
}
