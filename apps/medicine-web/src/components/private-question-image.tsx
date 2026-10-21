"use client";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { SkinStatus } from "@/components/skin-status";
import { QuestionImageDialog } from "@/components/question-image-dialog";

export function PrivateQuestionImage({ path, alt }: { path: string; alt: string }) {
  const [image, setImage] = useState<{ path: string; url: string } | null>(null);
  const [failed, setFailed] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [revision, setRevision] = useState(0);
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
  }, [path, revision]);
  if (image?.path === path) return <>
    <button type="button" onClick={() => setExpanded(true)} className="mt-4 block w-full cursor-zoom-in overflow-hidden rounded-lg border border-slate-200 bg-slate-50" aria-label={`${alt} 크게 보기`}>
      {/* Blob URLs require an in-browser image element; Next image optimization cannot fetch this private URL. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.url} alt={alt} className="mx-auto max-h-64 w-auto max-w-full object-contain" />
    </button>
    {expanded && <QuestionImageDialog src={image.url} alt={alt} onClose={() => setExpanded(false)} />}
  </>;
  return <SkinStatus kind={failed === path ? "imageError" : "imageLoading"}
    fallback={failed === path ? "원본 이미지를 불러오지 못했습니다. 접근 권한과 연결을 확인해주세요." : "원본 이미지를 불러오는 중입니다."}
    detail={failed === path ? "접근 권한과 연결을 확인해주세요." : undefined}
    onRetry={failed === path ? () => { setFailed(""); setRevision(value => value + 1); } : undefined} className="mt-4 text-sm text-slate-500" />;
}
