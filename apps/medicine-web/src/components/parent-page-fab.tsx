"use client";

import Link from "next/link";
import { CornerUpLeft } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import { ChatComposerContent } from "@/components/chat-room";

export function ParentPageFab({ href }: { href: string }) {
  const { theme } = useAppTheme();
  if (theme === "chat") return <ChatComposerContent area="tools"><div className="document-toolbar-actions chat-attachment-actions"><Link href={href} aria-label="상위 페이지로 이동" title="상위 페이지"><CornerUpLeft size={22} /></Link></div></ChatComposerContent>;
  return (
    <Link
      href={href}
      aria-label="상위 페이지로 이동"
      title="상위 페이지"
      className="fixed bottom-20 right-4 z-50 inline-flex h-10 w-10 items-center justify-center border border-slate-200 bg-white/95 text-slate-700 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800 xl:bottom-6 xl:right-6"
      style={{ borderRadius: 8 }}
    >
      <CornerUpLeft className="h-4 w-4" />
    </Link>
  );
}
