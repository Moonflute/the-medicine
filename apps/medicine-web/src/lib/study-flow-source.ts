"use client";

import { useEffect, useId } from "react";
import { usePathname } from "next/navigation";
import { safeStudyHref, type StudyLink } from "./study-flow-model";

export const STUDY_SOURCE_EVENT = "medicine:study-flow-source";
const sources = new Map<string, { link: StudyLink; path: string; priority: number }>();

export function studyPath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (base && (path === base || path.startsWith(base + "/")) ? path.slice(base.length) || "/" : path).replace(/\/$/, "") || "/";
}
export function studyQuestionHref(id: string) {
  return "/review/qbank/session?mode=study-flow&ids=" + encodeURIComponent(id) + "&count=1";
}
export function currentStudyPageSource(path: string) {
  return [...sources.values()].filter(source => source.path === studyPath(path)).sort((a, b) => b.priority - a.priority)[0]?.link ?? null;
}
export function useStudyPageSource(link: StudyLink | null, priority = 10) {
  const id = useId();
  const key = link?.key;
  const kind = link?.kind;
  const title = link?.title;
  const href = link?.href;
  useEffect(() => {
    if (!key || !kind || !title || !href || !safeStudyHref(href)) return;
    sources.set(id, { link: { key, kind, title: title.slice(0, 300), href }, path: studyPath(window.location.pathname), priority });
    window.dispatchEvent(new Event(STUDY_SOURCE_EVENT));
    return () => { sources.delete(id); window.dispatchEvent(new Event(STUDY_SOURCE_EVENT)); };
  }, [id, key, kind, title, href, priority]);
}
export function useStudyDocumentSource(title: string) {
  const id = useId();
  const pathname = usePathname();
  useEffect(() => {
    const path = studyPath(window.location.pathname);
    if (path.startsWith("/review/qbank/session")) return;
    const kind = path.startsWith("/disease/") ? "disease" : path.startsWith("/cc/") ? "cc" : path.startsWith("/drugs/") ? "drug" : path.startsWith("/lab-img/") ? "lab" : path.startsWith("/skills/") ? "skill" : "page";
    if (!safeStudyHref(path)) return;
    sources.set(id, { link: { key: kind + ":" + path, kind, title: title.slice(0, 300), href: path }, path, priority: 10 });
    window.dispatchEvent(new Event(STUDY_SOURCE_EVENT));
    return () => { sources.delete(id); window.dispatchEvent(new Event(STUDY_SOURCE_EVENT)); };
  }, [id, title, pathname]);
}
