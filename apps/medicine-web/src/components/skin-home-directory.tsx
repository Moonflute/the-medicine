"use client";

import Link from "next/link";
import { ChevronRight, FolderOpen, MessageCircle } from "lucide-react";
import { useAppTheme } from "@/components/theme-provider";
import { ConceptHomeDirectory } from "@/components/concept-home";
import { isConceptTheme } from "@/lib/themes";
import { skinDestinations } from "@/lib/skin-navigation";

const entries = skinDestinations.slice(1);

export function SkinHomeDirectory() {
  const { theme } = useAppTheme();
  if (isConceptTheme(theme)) return <ConceptHomeDirectory theme={theme} />;
  if (theme === "chat") return <div className="skin-conversations">
    <div className="skin-directory-heading"><h2>대화방</h2><span>자료 {entries.length}</span></div>
    {entries.map((item, index) => <Link key={item.href} href={item.href} className="skin-conversation">
      <span className={`skin-contact-avatar skin-contact-avatar--${index % 4}`} aria-hidden="true">{item.initials}</span>
      <span className="skin-conversation-copy"><strong>{item.title}</strong><span>{item.summary}</span></span>
      <span className="skin-conversation-kind">{item.code === "QBANK" ? "문제" : item.code === "REVIEW" ? "나와의 대화" : "자료"}<MessageCircle size={14} aria-hidden="true" /></span>
    </Link>)}
    <p className="skin-directory-footnote">대화방을 열면 목차와 본문이 메시지로 이어집니다.</p>
  </div>;
  if (theme === "sheet") return <div className="skin-workbook-index">
    <div className="skin-directory-heading"><h2>자료 목록</h2><span>INDEX · {entries.length}개</span></div>
    <table><caption className="sr-only">통합문서의 자료 목록</caption><thead><tr><th aria-label="행 번호" /><th>A <span>자료</span></th><th>B <span>내용</span></th><th>C <span>분류</span></th></tr></thead>
      <tbody>{entries.map((item, index) => <tr key={item.href}><th scope="row">{index + 1}</th><td><Link href={item.href}>{item.title}<ChevronRight size={12} aria-hidden="true" /></Link></td><td>{item.summary}</td><td>{item.short}</td></tr>)}</tbody>
    </table>
    <div className="skin-workbook-summary"><span>COUNT = {entries.length}</span><span>아래 시트 탭으로도 이동할 수 있습니다.</span></div>
  </div>;
  if (theme === "terminal") return <div className="skin-terminal-directory">
    <div className="skin-terminal-banner"><strong>THE MEDICINE / NOTES</strong><span>Personal reference console</span></div>
    <p className="skin-command-line">C:\NOTES&gt; DIR</p>
    <p className="skin-directory-heading">Directory of C:\NOTES</p>
    <div className="skin-directory-columns" aria-hidden="true"><span>NAME</span><span>TYPE</span><span>DESCRIPTION</span></div>
    {entries.map((item, index) => <Link key={item.href} href={item.href} className="skin-directory-row"><span>[{index + 1}] {item.code}</span><span>&lt;DIR&gt;</span><span>{item.title}</span></Link>)}
    <p className="skin-console-total">{entries.length} director{entries.length === 1 ? "y" : "ies"} · 목록을 눌러 열기</p>
    <div className="skin-terminal-help"><FolderOpen size={15} aria-hidden="true" /><span>FIND: 위 검색창에 자료 이름 입력<br />OPEN: 폴더 선택 · MENU: 전체 경로</span></div>
  </div>;
  return null;
}
