import type { ReactNode } from "react";

/** Keep document actions with their content, below the app navigation. */
export function DocumentToolbar({ title, children, className = "" }: { title: string; children?: ReactNode; className?: string }) {
  return <div data-document-toolbar data-highlight-ignore className={`document-toolbar ${className}`}>
    <div className="document-toolbar-title" title={title}>{title}</div>
    <div className="document-toolbar-actions" role="group" aria-label="문서 도구">
      <span data-highlighter-slot className="inline-flex shrink-0" />
      {children}
    </div>
  </div>;
}
