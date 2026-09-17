"use client";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function PrivateQuestionImage({ path, alt }: { path: string; alt: string }) {
  const [image, setImage] = useState<{ path: string; url: string } | null>(null);
  const [failed, setFailed] = useState("");
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    let active = true;
    let url = "";
    const client = getSupabaseBrowserClient();
    if (!client) return;
    void client.storage.from("private-qbank").download(path).then(({ data, error }) => {
      if (!active) return;
      if (error || !data) { setFailed(path); return; }
      url = URL.createObjectURL(data);
      setImage({ path, url });
    }).catch(() => { if (active) setFailed(path); });
    return () => { active = false; if (url) URL.revokeObjectURL(url); };
  }, [path]);
  // Authenticated Blob URLs must stay in this browser; no image proxy receives them.
  // eslint-disable-next-line @next/next/no-img-element
  if (image?.path === path) return <>
    <button type="button" onClick={() => setExpanded(true)} className="mt-4 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-slate-200 bg-slate-50" aria-label={`${alt} 크게 보기`}>
      <img src={image.url} alt={alt} className="mx-auto max-h-64 w-auto max-w-full object-contain" />
    </button>
    {expanded && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4" role="dialog" aria-modal="true" aria-label={`${alt} 크게 보기`} onClick={() => setExpanded(false)}>
      <button type="button" onClick={() => setExpanded(false)} className="absolute right-4 top-4 rounded-md bg-white/95 px-3 py-2 text-sm font-semibold text-slate-800">닫기</button>
      <img src={image.url} alt={alt} className="max-h-[88vh] max-w-[94vw] rounded-lg object-contain" onClick={(event) => event.stopPropagation()} />
    </div>}
  </>;
  return <p className="mt-4 text-sm text-slate-500" role="status">{failed === path ? "원본 이미지를 불러오지 못했습니다. 접근 권한과 연결을 확인해주세요." : "원본 이미지를 불러오는 중입니다."}</p>;
}
