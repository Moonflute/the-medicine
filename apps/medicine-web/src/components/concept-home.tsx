"use client";

import Link from "next/link";
import { Bookmark, ChevronRight, Code2, FileText, Folder, Heart, Inbox, ListChecks, Mail, MessageCircle, Paperclip, Send } from "lucide-react";
import { skinDestinations } from "@/lib/skin-navigation";
import type { ConceptTheme } from "@/lib/themes";

const entries = [...skinDestinations.slice(1), { href: "/atlas", title: "인체도감", short: "도감", code: "ATLAS", summary: "3D 인체 모형과 연결된 질환 자료", initials: "도감" }];

export function ConceptHomeDirectory({ theme }: { theme: ConceptTheme }) {
  if (theme === "mail") return <div className="concept-home concept-mail-home">
    <div className="concept-mail-list-heading"><span><Inbox size={18} /><strong>받은메일함</strong><b>{entries.length}</b></span><Link href="/review">중요 자료 <ChevronRight size={14} /></Link></div>
    <div className="concept-mail-list" aria-label="자료 메일 목록">{entries.map((item, index) => <Link key={item.href} href={item.href} className="concept-mail-row"><span className="concept-mail-dot" aria-hidden="true" /><span className="concept-mail-row-copy"><span className="concept-mail-row-sender">{item.title}<small>{item.short}</small></span><strong>{index === 6 ? "질문과 풀이 기록을 확인하세요" : `${item.title} · 자료 모음`}</strong><span>{item.summary}</span></span><span className="concept-mail-row-side" aria-hidden="true"><Mail size={15} /><Paperclip size={14} /></span></Link>)}</div>
    <Link href="/review/qbank" className="concept-mail-compose"><Mail size={18} />질문 메일 열기</Link>
  </div>;
  if (theme === "social") return <div className="concept-home concept-social-home">
    <nav className="concept-stories" aria-label="자료 스토리">{entries.map(item => <Link key={item.href} href={item.href}><span className="concept-story-ring"><span>{item.initials}</span></span><small>{item.short}</small></Link>)}</nav>
    <article className="concept-feed-post"><div className="concept-post-profile"><span className="concept-profile-avatar">M</span><span><strong>the.medicine</strong><small>오늘의 자료</small></span><Link href="/specialties" aria-label="진료과 자료 열기"><ChevronRight size={20} /></Link></div><Link href="/specialties" className="concept-feed-cover"><span className="concept-cover-eyebrow">YOUR DAILY REFERENCE</span><strong>오늘은 어떤<br />분과를 볼까?</strong><span>증상부터 진단과 치료까지</span><span className="concept-cover-chips">순환기　호흡기　소화기</span></Link><div className="concept-post-actions"><Link href="/review" aria-label="저장한 자료"><Heart size={24} /></Link><Link href="/review/qbank" aria-label="문제 풀기"><MessageCircle size={24} /></Link><Link href="/search" aria-label="자료 탐색"><Send size={23} /></Link><Link href="/review" aria-label="보관함"><Bookmark size={24} /></Link></div><p className="concept-post-caption"><b>the.medicine</b> 읽고 싶은 자료를 스토리에서 고르거나 분과별로 둘러보세요.</p></article>
    <article className="concept-feed-post"><div className="concept-post-profile"><span className="concept-profile-avatar">Q</span><span><strong>question.bank</strong><small>문제 피드</small></span><Link href="/review/qbank" aria-label="문제은행 열기"><ChevronRight size={20} /></Link></div><Link href="/review/qbank" className="concept-feed-cover concept-feed-cover--quiz"><ListChecks size={34} /><strong>한 문제만<br />풀고 갈까?</strong><span>이론 · 임상 · 실전 문제</span></Link><p className="concept-post-caption"><b>question.bank</b> 선택한 범위에서 이어풀기. 오답과 저장한 문제도 여기서 확인해요.</p></article>
  </div>;
  return <div className="concept-home concept-editor-home"><div className="concept-editor-breadcrumb"><Folder size={13} />the-medicine <ChevronRight size={12} /><FileText size={13} />README.md</div><div className="concept-readme"><span className="concept-code-comment">{"// Personal reference workspace"}</span><h2><span>#</span> The Medicine</h2><p>문서를 열거나 문제 세트를 실행하세요.</p><div className="concept-code-comment">## workspace</div><div className="concept-project-files">{entries.map(item => <Link key={item.href} href={item.href}><span className="concept-code-indent">│</span><Folder size={16} /><strong>{item.code.toLowerCase()}/</strong><span>{item.title}</span><ChevronRight size={13} /></Link>)}</div><div className="concept-code-comment">## quick start</div><Link href="/review/qbank" className="concept-editor-command"><Code2 size={16} /><code>run qbank</code><span>문제 세트 실행 →</span></Link><Link href="/search" className="concept-editor-command"><FileText size={16} /><code>find reference</code><span>문서 찾기 →</span></Link></div></div>;
}
