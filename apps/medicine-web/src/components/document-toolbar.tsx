"use client";

import type { ReactNode } from "react";
import { useSkinTheme } from "@/components/theme-provider";
import { ChatDocumentTools } from "@/components/chat-room";
import { useChatSenderName } from "@/components/chat-contact";
import { SheetDocumentToolbar } from "@/components/sheet-workbook";
import { ConceptDocumentToolbar } from "@/components/concept-document";
import { useConceptDocument } from "@/components/concept-workspace";
import { isConceptTheme } from "@/lib/themes";

/** Keep document actions with their content, below the app navigation. */
export function DocumentToolbar({ title, children, className = "" }: { title: string; children?: ReactNode; className?: string }) {
  const { theme } = useSkinTheme();
  const senderName = useChatSenderName(title);
  useConceptDocument(title, senderName);
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  if (isConceptTheme(theme)) return <ConceptDocumentToolbar theme={theme} title={title} className={className}>{children}</ConceptDocumentToolbar>;
  if (theme === "chat") return <ChatDocumentTools title={senderName}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</ChatDocumentTools>;
  if (theme === "sheet") return <SheetDocumentToolbar className={className}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</SheetDocumentToolbar>;
  return <div data-document-toolbar data-highlight-ignore className={`document-toolbar ${className}`}>
    <div className={`document-toolbar-title ${special ? "skin-document-toolbar-title" : ""}`} title={title}>
      {special ? <span className="skin-document-toolbar-mark" aria-hidden="true">{">_"}</span> : null}
      <span>{special ? <small className="skin-document-toolbar-label">{"TYPE / READ"}</small> : null}{title}</span>
    </div>
    <div className="document-toolbar-actions" role="group" aria-label="문서 도구">
      <span data-highlighter-slot className="inline-flex shrink-0" />
      {children}
    </div>
  </div>;
}
