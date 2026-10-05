"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useAppTheme } from "@/components/theme-provider";
import { SkinEntry } from "@/components/skin-entry";

export function SkinCategory({ title, href, entries, children }: { title: string; href?: string; entries: { href: string; title: string; summary?: string }[]; children: ReactNode }) {
  const { theme } = useAppTheme();
  if (theme !== "chat" && theme !== "sheet" && theme !== "terminal") return children;
  return <section className={`skin-category skin-category--${theme}`}>
    <div className="skin-directory-heading"><h2>{href ? <Link href={href}>{title}</Link> : title}</h2><span>{theme === "terminal" ? `${entries.length} FILES` : `${entries.length}개`}</span></div>
    {entries.map((entry, index) => <SkinEntry key={entry.href} {...entry} ordinal={index + 1}><span>{entry.title}</span></SkinEntry>)}
  </section>;
}
