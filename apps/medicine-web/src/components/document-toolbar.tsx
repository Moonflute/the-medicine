"use client";

import type { ReactNode } from "react";
import { useAppTheme } from "@/components/theme-provider";
import { ChatDocumentTools } from "@/components/chat-room";

/** Keep document actions with their content, below the app navigation. */
export function DocumentToolbar({ title, children, className = "" }: { title: string; children?: ReactNode; className?: string }) {
  const { theme } = useAppTheme();
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  if (theme === "chat") return <ChatDocumentTools title={title}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</ChatDocumentTools>;
  return <div data-document-toolbar data-highlight-ignore className={`document-toolbar ${className}`}>
    <div className={`document-toolbar-title ${special ? "skin-document-toolbar-title" : ""}`} title={title}>
      {special ? <span className="skin-document-toolbar-mark" aria-hidden="true">{theme === "sheet" ? "X" : ">_"}</span> : null}
      <span>{special ? <small className="skin-document-toolbar-label">{theme === "sheet" ? "문서 시트" : "TYPE / READ"}</small> : null}{title}</span>
    </div>
    <div className="document-toolbar-actions" role="group" aria-label="문서 도구">
      <span data-highlighter-slot className="inline-flex shrink-0" />
      {children}
    </div>
  </div>;
}
