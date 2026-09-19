"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "@tiptap/markdown";
import { TableKit } from "@tiptap/extension-table";
import { TaskList, TaskItem } from "@tiptap/extension-list";
import Image from "@tiptap/extension-image";
import { Bold, ImagePlus, Italic, List, ListChecks, ListOrdered, Quote, Redo2, Strikethrough, Undo2 } from "lucide-react";

export type UploadedDocumentImage = { src: string; alt: string };
type Props = {
  markdown: string;
  disabled: boolean;
  onChange: (markdown: string) => void;
  onUploadImages: (files: File[]) => Promise<UploadedDocumentImage[]>;
};

const supportedTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const buttonClass = "inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition hover:bg-white hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:opacity-40";

function ToolButton({ label, active = false, disabled, onClick, children }: { label: string; active?: boolean; disabled: boolean; onClick: () => void; children: ReactNode }) {
  return <button type="button" aria-label={label} title={label} aria-pressed={active} disabled={disabled} onClick={onClick} className={`${buttonClass} ${active ? "bg-white text-teal-800 shadow-sm" : ""}`}>{children}</button>;
}

export default function DocumentEditorBlock({ markdown, disabled, onChange, onUploadImages }: Props) {
  const initial = useRef("");
  const originalMarkdown = useRef(markdown);
  const fileInput = useRef<HTMLInputElement>(null);
  const uploadRef = useRef<(files: File[]) => void>(() => {});
  const [imageStatus, setImageStatus] = useState("");
  const editor = useEditor({
    extensions: [
      StarterKit.configure({ heading: false, codeBlock: false, horizontalRule: false, link: { openOnClick: false } }),
      Markdown,
      TableKit,
      TaskList,
      TaskItem.configure({ nested: true }),
      Image.configure({ allowBase64: false }),
    ],
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
    editorProps: {
      attributes: {
        class: "min-h-52 p-5 text-base leading-8 outline-none [&_img]:my-4 [&_img]:max-h-[480px] [&_img]:max-w-full [&_img]:rounded-lg [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:w-full [&_td]:border [&_td]:p-2 [&_th]:border [&_th]:p-2 [&_th]:bg-slate-100 [&_p]:my-2",
        "aria-label": "본문 블록 편집",
      },
      handlePaste: (_view, event) => {
        const files = Array.from(event.clipboardData?.files ?? []).filter(file => supportedTypes.has(file.type));
        if (!files.length) return false;
        event.preventDefault();
        uploadRef.current(files);
        return true;
      },
      handleDrop: (_view, event) => {
        const files = Array.from(event.dataTransfer?.files ?? []).filter(file => supportedTypes.has(file.type));
        if (!files.length) return false;
        event.preventDefault();
        uploadRef.current(files);
        return true;
      },
    },
  });

  const uploadImages = async (files: File[]) => {
    if (!editor || disabled || !files.length) return;
    try {
      setImageStatus("이미지 첨부 중…");
      const images = await onUploadImages(files);
      images.forEach(image => editor.chain().focus().setImage(image).run());
      setImageStatus(`${images.length}개 이미지 첨부됨`);
    } catch (error) {
      setImageStatus(error instanceof Error ? error.message : "이미지를 첨부하지 못했습니다.");
    }
  };
  useEffect(() => {
    uploadRef.current = files => { void uploadImages(files); };
  });

  if (!editor) return <p className="p-5">편집기 준비 중…</p>;
  return <div className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-sm">
    <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 p-2" role="toolbar" aria-label="본문 서식">
      <ToolButton label="굵게" disabled={disabled} active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={18} /></ToolButton>
      <ToolButton label="기울임" disabled={disabled} active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={18} /></ToolButton>
      <ToolButton label="취소선" disabled={disabled} active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={18} /></ToolButton>
      <span className="mx-1 h-6 w-px bg-slate-200" />
      <ToolButton label="글머리표 목록" disabled={disabled} active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={18} /></ToolButton>
      <ToolButton label="번호 목록" disabled={disabled} active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()}><ListOrdered size={18} /></ToolButton>
      <ToolButton label="체크리스트" disabled={disabled} active={editor.isActive("taskList")} onClick={() => editor.chain().focus().toggleTaskList().run()}><ListChecks size={18} /></ToolButton>
      <ToolButton label="인용" disabled={disabled} active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()}><Quote size={18} /></ToolButton>
      <span className="mx-1 h-6 w-px bg-slate-200" />
      <ToolButton label="이미지 첨부" disabled={disabled} onClick={() => fileInput.current?.click()}><ImagePlus size={18} /></ToolButton>
      <span className="flex-1" />
      <ToolButton label="실행 취소" disabled={disabled} onClick={() => editor.chain().focus().undo().run()}><Undo2 size={18} /></ToolButton>
      <ToolButton label="다시 실행" disabled={disabled} onClick={() => editor.chain().focus().redo().run()}><Redo2 size={18} /></ToolButton>
    </div>
    <fieldset disabled={disabled} className={disabled ? "pointer-events-none opacity-60" : ""}><EditorContent editor={editor} /></fieldset>
    <input ref={fileInput} className="sr-only" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple onChange={event => { const files = Array.from(event.currentTarget.files ?? []).filter(file => supportedTypes.has(file.type)); event.currentTarget.value = ""; void uploadImages(files); }} />
    {imageStatus && <p role="status" className="border-t border-slate-100 px-4 py-2 text-sm text-slate-600">{imageStatus}</p>}
  </div>;
}
