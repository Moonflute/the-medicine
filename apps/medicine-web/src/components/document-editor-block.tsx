"use client";

import { useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "@tiptap/markdown";
import { TableKit } from "@tiptap/extension-table";
import { TaskList, TaskItem } from "@tiptap/extension-list";

export default function DocumentEditorBlock({ markdown, disabled, onChange }: { markdown: string; disabled: boolean; onChange: (markdown: string) => void }) {
  const initial = useRef("");
  const originalMarkdown = useRef(markdown);
  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: false, codeBlock: false, horizontalRule: false, link: { openOnClick: false } }), Markdown, TableKit, TaskList, TaskItem.configure({ nested: true })],
    immediatelyRender: false,
    content: markdown,
    contentType: "markdown",
    editable: !disabled,
    onCreate: ({ editor }) => { initial.current = editor.getMarkdown().trim(); },
    onUpdate: ({ editor }) => {
      const current = editor.getMarkdown();
      // Preserve the original source after undo, including editor-added empty trailing paragraphs.
      onChange(current.trim() === initial.current ? originalMarkdown.current : current);
    },
    editorProps: { attributes: { class: "min-h-40 p-5 text-base leading-8 outline-none [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:w-full [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_th]:bg-slate-100 [&_p]:my-2", "aria-label": "본문 블록 편집" } },
  });
  if (!editor) return <p className="p-5">편집기 준비 중…</p>;
  const actions = [
    ["굵게", () => editor.chain().focus().toggleBold().run()],
    ["기울임", () => editor.chain().focus().toggleItalic().run()],
    ["목록", () => editor.chain().focus().toggleBulletList().run()],
    ["번호 목록", () => editor.chain().focus().toggleOrderedList().run()],
    ["실행 취소", () => editor.chain().focus().undo().run()],
    ["다시 실행", () => editor.chain().focus().redo().run()],
  ] as const;
  return <div className="overflow-hidden rounded-xl border-2 border-teal-600 bg-white">
    <div className="flex flex-wrap gap-2 border-b border-teal-100 bg-teal-50 p-3">{actions.map(([label, action]) => <button key={label} type="button" disabled={disabled} onClick={action} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 disabled:opacity-50">{label}</button>)}</div>
    <fieldset disabled={disabled} className={disabled ? "pointer-events-none opacity-60" : ""}><EditorContent editor={editor} /></fieldset>
  </div>;
}
