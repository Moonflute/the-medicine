"use client";
import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

export function PrivateQuestionImage({ path, alt }: { path: string; alt: string }) {
  const [image, setImage] = useState<{ path: string; url: string } | null>(null);
  const [failed, setFailed] = useState("");
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
  if (image?.path === path) return <img src={image.url} alt={alt} className="mt-4 h-auto w-full rounded-lg" />;
  return <p className="mt-4 text-sm text-slate-500" role="status">{failed === path ? "원본 이미지를 불러오지 못했습니다. 접근 권한과 연결을 확인해주세요." : "원본 이미지를 불러오는 중입니다."}</p>;
}
