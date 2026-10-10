"use client";

import Link from "next/link";
import { ArrowRight, Headphones, ListChecks, Settings2, Shuffle } from "lucide-react";
import type { ReactNode } from "react";
import { useSkinTheme } from "@/components/theme-provider";

const actions = {
  qbank: { number: 1, code: "QBANK", label: "문제", title: "문제 풀기", summary: "이론·임상 Q-bank 문제 풀기", icon: ListChecks },
  random: { number: 2, code: "RANDOM", label: "랜덤", title: "랜덤 페이지 학습", summary: "선택한 섹션에서 임의의 페이지를 열어 복습합니다.", icon: Shuffle },
  audio: { number: 3, code: "AUDIO", label: "청취", title: "청취 모드", summary: "팟캐스트처럼 틀어놓고 듣습니다.", icon: Headphones },
};

export function ReviewLaunchActions({ children }: { children: ReactNode }) {
  const { theme } = useSkinTheme();
  return <section className="review-launchers" aria-label="학습 메뉴">
    {theme === "chat" ? <div className="review-launcher-heading"><span>학습 대화</span><span>3개</span></div>
      : theme === "sheet" ? <div className="review-launcher-columns" aria-hidden="true"><span /><span>A · 학습</span><span>B · 내용</span><span>C</span></div>
        : theme === "terminal" ? <div className="review-launcher-heading"><span>C:\REVIEW&gt; MENU</span><span>3 COMMANDS</span></div> : null}
    {theme === "mail" || theme === "social" || theme === "editor" ? <div className="skin-directory-heading"><span>{theme === "mail" ? "학습 메일함" : theme === "social" ? "내 학습 피드" : "scripts / learning"}</span><span>3</span></div> : null}
    <div className="review-launcher-list" key="actions">{children}</div>
  </section>;
}

/** Links and the random-learning controller keep their original actions. */
export function ReviewLaunchAction({ kind, href, onClick, onSettings, settingsOpen, settingsId, children }: {
  kind: keyof typeof actions; href?: string; onClick?: () => void; onSettings?: () => void;
  settingsOpen?: boolean; settingsId?: string; children?: ReactNode;
}) {
  const { theme } = useSkinTheme();
  const item = actions[kind];
  const Icon = item.icon;
  const content = <>
    <span className="review-action-number" aria-hidden="true">{theme === "terminal" ? `[${item.number}]` : item.number}</span>
    <span className="review-action-icon" aria-hidden="true"><Icon size={22} /></span>
    <span className="review-action-copy">
      <span className="review-action-label">{theme === "terminal" ? item.code : item.label}</span>
      <strong className="review-action-title">{item.title}</strong>
      <span className="review-action-summary">{item.summary}</span>
    </span>
    <span className="review-action-open" aria-hidden="true"><ArrowRight size={18} /><span>{theme === "terminal" ? "RUN" : "열기"}</span></span>
  </>;
  return <div className="review-launcher" data-kind={kind}>
    {href ? <Link className="review-action-main" href={href}>{content}</Link>
      : <button className="review-action-main" type="button" aria-label="Start random page learning" onClick={onClick}>{content}</button>}
    {onSettings ? <button className="review-action-settings" type="button" aria-label="랜덤 학습 설정" title="랜덤 학습 설정"
      aria-expanded={settingsOpen} aria-controls={settingsOpen ? settingsId : undefined} onClick={onSettings}>
      {theme === "terminal" ? <span>[SET]</span> : <><Settings2 size={18} aria-hidden="true" /><span>{theme === "sheet" ? "범위" : "설정"}</span></>}
    </button> : null}
    {children ? <div className="review-launcher-details">{children}</div> : null}
  </div>;
}
