"use client";

import type { ReactNode } from "react";
import { useStudyDocumentSource } from "@/lib/study-flow-source";
import { useSkinTheme } from "@/components/theme-provider";
import { ChatDocumentTools } from "@/components/chat-room";
import { useChatSenderName } from "@/components/chat-contact";
import { SheetDocumentToolbar } from "@/components/sheet-workbook";
import { ConceptDocumentToolbar } from "@/components/concept-document";
import { useConceptDocument } from "@/components/concept-workspace";
import { isConceptTheme } from "@/lib/themes";
import { PixelSprite } from "@/components/pixel-ui";
import { PencilLine } from "lucide-react";

/** Keep document actions with their content, below the app navigation. */
export function DocumentToolbar({ title, children, metadata, className = "" }: { title: string; children?: ReactNode; metadata?: ReactNode; className?: string }) {
  useStudyDocumentSource(title);
  const { theme } = useSkinTheme();
  const senderName = useChatSenderName(title);
  useConceptDocument(title, senderName);
  const special = theme === "chat" || theme === "sheet" || theme === "terminal";
  const questionLabel = metadata ? <span className="qbank-toolbar-label"><span className="qbank-toolbar-name">{title}</span><span className="qbank-toolbar-metadata">{metadata}</span></span> : null;
  if (theme === "notebook") return <div data-document-toolbar data-highlight-ignore data-question-toolbar={metadata ? true : undefined} className={`document-toolbar notebook-document-toolbar ${className}`}><div className="document-toolbar-title" title={title}><PencilLine size={17} aria-hidden="true" />{questionLabel ?? <span>{title}</span>}</div><div className="document-toolbar-actions" role="group" aria-label="노트 도구"><span data-highlighter-slot className="inline-flex shrink-0" />{children}</div></div>;
  if (theme === "pixel") return <div data-document-toolbar data-highlight-ignore data-question-toolbar={metadata ? true : undefined} className={`document-toolbar pixel-document-toolbar ${className}`}><div className="document-toolbar-title" title={title}><PixelSprite name="book" />{questionLabel ?? <span><small>CODEX</small>{title}</span>}</div><div className="document-toolbar-actions" role="group" aria-label="도감 도구"><span data-highlighter-slot className="inline-flex shrink-0" />{children}</div></div>;
  if (isConceptTheme(theme)) return <ConceptDocumentToolbar theme={theme} title={title} metadata={metadata} className={className}>{children}</ConceptDocumentToolbar>;
  if (theme === "chat") return <><ChatDocumentTools title={senderName}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</ChatDocumentTools>{metadata ? <div className="qbank-chat-notice" aria-label="문제 정보"><span aria-hidden="true">ⓘ</span><span className="qbank-toolbar-metadata">{metadata}</span></div> : null}</>;
  if (theme === "sheet") return <SheetDocumentToolbar metadata={metadata} className={className}><span data-highlighter-slot className="inline-flex shrink-0" />{children}</SheetDocumentToolbar>;
  return <div data-document-toolbar data-highlight-ignore data-question-toolbar={metadata ? true : undefined} className={`document-toolbar ${className}`}>
    <div className={`document-toolbar-title ${special ? "skin-document-toolbar-title" : ""}`} title={title}>
      {special ? <span className="skin-document-toolbar-mark" aria-hidden="true">{">_"}</span> : null}
      {questionLabel ?? <span>{special ? <small className="skin-document-toolbar-label">{"TYPE / READ"}</small> : null}{title}</span>}
    </div>
    <div className="document-toolbar-actions" role="group" aria-label="문서 도구">
      <span data-highlighter-slot className="inline-flex shrink-0" />
      {children}
    </div>
  </div>;
}
