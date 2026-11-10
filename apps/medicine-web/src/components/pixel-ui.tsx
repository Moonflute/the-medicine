"use client";

import Link from "next/link";
import type { ReactNode } from "react";

// Small original SVG icons stay static; the two animated characters use editable pixel cels.
const sprites = {
  hero: ["...kkkk.....", "..kggggk....", "..kyyyyk....", "..kykyk.....", "...yyyy.....", "..kmmmmk....", ".kkmwwmkk...", ".y.mwwm.y...", "...mmmm.....", "...k..k.....", "..kk..kk....", "............"],
  slime: ["............", "............", "....kkkk....", "..kkmmmmkk..", ".kmmmmmmmmk.", ".kmmkmmkmmk.", "kmmmwmmwmmmk", "kmmmmmmmmmmk", "kmmkmmmmkmmk", ".kmmkkkkmmk.", "..kkkkkkkk..", "............"],
  book: ["............", ".kkkk.kkkk..", ".kyyykwwwwk.", ".kyyykwwwwk.", ".kyyykwwwwk.", ".kyyykwwwwk.", ".kyyykwwwwk.", ".kyyykwwwwk.", ".kkkkkwwwwk.", ".....kkkkk..", "............", "............"],
  sword: [".........kk.", "........kwk.", ".......kwk..", "......kwk...", ".....kwk....", ".kk.kwk.....", "..kkwk......", "...kk.......", "..kykk......", ".kyk.kk.....", ".kk.........", "............"],
  chest: ["............", "..kkkkkkkk..", ".kyyyyyyyyk.", ".kyyyyyyyyk.", ".kkkkkkkkkk.", ".kggkyykggk.", ".kggkkkkggk.", ".kggggggggk.", ".kkkkkkkkkk.", "............", "............", "............"],
  flag: ["..kk........", "..kykkkkk...", "..kyyyyyk...", "..kyyyyk....", "..kyyyyyk...", "..kkkkkkk...", "..kk........", "..kk........", "..kk........", ".kkkk.......", "............", "............"],
  bag: ["....kkkk....", "...kwwwwk...", "...kkkkkk...", "..kggggggk..", ".kgggyygggk.", ".kggyyyyggk.", ".kggyyyyggk.", ".kgggyygggk.", "..kggggggk..", "...kkkkkk...", "............", "............"],
} as const;
export type PixelSpriteName = keyof typeof sprites;
const colors: Record<string, string> = { k: "#243149", m: "#77d6a4", g: "#63866c", y: "#f4ce72", w: "#fff7dc" };

export function PixelSprite({ name, className = "" }: { name: PixelSpriteName; className?: string }) {
  return <svg className={`pixel-sprite ${className}`} viewBox="0 0 12 12" shapeRendering="crispEdges" aria-hidden="true" focusable="false">{sprites[name].flatMap((row, y) => [...row].map((color, x) => color === "." ? null : <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[color]} />))}</svg>;
}

export function PixelDancer({ name, pose = "dance", className = "" }: {
  name: "medic" | "slime"; pose?: "dance" | "cheer" | "hit" | "still"; className?: string;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return <span className={`pixel-sprite pixel-dancer ${className}`} data-pose={pose} aria-hidden="true" style={{ backgroundImage: `url("${basePath}/themes/pixel/${name}.png")` }} />;
}

const letters: Record<string, string[]> = {
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  I: ["111", "010", "010", "010", "010", "010", "111"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  N: ["10001", "11001", "11001", "10101", "10011", "10011", "10001"],
  Q: ["01110", "10001", "10001", "10001", "10101", "10010", "01101"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
};

function PixelWord({ text }: { text: string }) {
  let offset = 0;
  const pixels = [...text].flatMap((letter, index) => {
    const glyph = letters[letter];
    const start = offset;
    offset += glyph[0].length + 1;
    return glyph.flatMap((row, y) => [...row].map((bit, x) => bit === "1" ? <rect key={`${index}-${x}-${y}`} x={start + x} y={y} width="1" height="1" /> : null));
  });
  return <svg viewBox={`0 0 ${offset - 1} 8`} fill="currentColor" shapeRendering="crispEdges" aria-hidden="true">{pixels}</svg>;
}

export const pixelDestinations: Record<string, { label: string; icon: PixelSpriteName }> = {
  "/": { label: "타이틀", icon: "flag" },
  "/cc": { label: "증상 탐험", icon: "hero" },
  "/specialties": { label: "질환 도감", icon: "book" },
  "/drugs": { label: "약물 가방", icon: "bag" },
  "/lab-img": { label: "검사 연구소", icon: "slime" },
  "/skills": { label: "술기 훈련소", icon: "sword" },
  "/review": { label: "모험 기록", icon: "chest" },
  "/review/qbank": { label: "문제 전투", icon: "sword" },
};

export function PixelNavigation({ currentHref, menuOpen, onMenu }: { currentHref: string; menuOpen: boolean; onMenu: () => void }) {
  return <nav className="pixel-navigation app-bottom-nav" aria-label="모험 메뉴">{["/", "/cc", "/specialties", "/review/qbank"].map(href => <Link key={href} href={href} aria-current={currentHref === href ? "page" : undefined}><PixelSprite name={pixelDestinations[href].icon} /><span>{pixelDestinations[href].label}</span></Link>)}<button type="button" aria-label="전체 메뉴" aria-controls="skin-app-menu" aria-expanded={menuOpen} onClick={onMenu}><span className="pixel-menu-glyph" aria-hidden="true">▤</span><span>메뉴</span></button></nav>;
}

export function PixelHomeDirectory() {
  return <div className="pixel-home">
    <div className="pixel-title-scene">
      <span className="pixel-eyebrow">8-BIT STUDY ADVENTURE</span>
      <h1 className="pixel-wordmark"><span className="sr-only">Medicine Quest</span><PixelWord text="MEDICINE" /><PixelWord text="QUEST" /></h1>
      <div className="pixel-title-party" aria-hidden="true"><PixelDancer name="medic" className="pixel-hero" /><span className="pixel-trail">· · ·</span><PixelSprite name="book" /><span className="pixel-trail">· · ·</span><PixelDancer name="slime" className="pixel-opponent" /></div>
      <span className="pixel-scene-caption">한 문제씩, 다음 스테이지로.</span>
    </div>
    <nav className="pixel-start-menu" aria-label="게임 시작 메뉴">
      <span className="pixel-window-caption">SELECT MENU</span>
      <Link href="/review/qbank" className="pixel-start-primary"><span aria-hidden="true">▶</span><div><strong>모험 시작</strong><small>문제 풀기</small></div><PixelSprite name="sword" /></Link>
      <Link href="/specialties"><span aria-hidden="true">▶</span><div><strong>도감 열기</strong><small>분과별 이론</small></div><PixelSprite name="book" /></Link>
      <Link href="/review"><span aria-hidden="true">▶</span><div><strong>모험 기록</strong><small>복습 · 저장 · 최근 학습</small></div><PixelSprite name="chest" /></Link>
    </nav>
    <nav className="pixel-world-menu" aria-label="탐험할 자료">{["/cc", "/drugs", "/lab-img", "/skills"].map((href, index) => <Link key={href} href={href}><span className="pixel-world-number" aria-hidden="true">0{index + 1}</span><PixelSprite name={pixelDestinations[href].icon} /><strong>{pixelDestinations[href].label}</strong></Link>)}</nav>
  </div>;
}

export function PixelDocumentTabs({ sections, activeId, choose }: { sections: { id: string; title: string }[]; activeId?: string; choose: (id: string) => void }) {
  return <div className="pixel-codex-tabs" role="tablist" aria-label="도감 목차" data-highlight-ignore>{sections.map((section, index) => <button key={section.id} type="button" id={`${section.id}-tab`} role="tab" aria-selected={activeId === section.id} aria-controls={section.id} tabIndex={activeId === section.id ? 0 : -1} onClick={() => choose(section.id)} onKeyDown={event => {
    const target = event.key === "ArrowRight" ? sections[(index + 1) % sections.length] : event.key === "ArrowLeft" ? sections[(index + sections.length - 1) % sections.length] : event.key === "Home" ? sections[0] : event.key === "End" ? sections.at(-1) : undefined;
    if (target) { event.preventDefault(); choose(target.id); document.getElementById(`${target.id}-tab`)?.focus(); }
  }} title={section.title}><small>{String(index + 1).padStart(2, "0")}</small>{section.title.replace(/\s*\([^)]*\)/g, "")}</button>)}</div>;
}

export function PixelQuestionWorkspace({ question, choices, response, actions, copy, hint, answerText, submitted, number, total, mode, sourceTitle, correct = null }: {
  question: ReactNode; choices: ReactNode; response: ReactNode; actions: ReactNode; copy: ReactNode;
  hint: string; answerText: string; submitted: boolean; number: number; total: number;
  mode: "study" | "mock"; sourceTitle: string; correct?: boolean | null;
}) {
  const outcome = !submitted ? "idle" : correct === true ? "correct" : correct === false ? "wrong" : "ungraded";
  const turnLabel = outcome === "correct" ? "정답!" : outcome === "wrong" ? "다시 도전" : submitted ? "TURN END" : "YOUR TURN";
  return <div className="pixel-battle skin-question-workspace" data-question-skin="pixel" data-submitted={submitted} data-outcome={outcome}>
    <div className="pixel-battle-scene">
      <div className="pixel-battle-hud"><span className="pixel-eyebrow">{mode === "mock" ? "MOCK BATTLE" : "QUESTION BATTLE"}</span><div><strong>ROUND {String(number).padStart(2, "0")}</strong><span>{number} / {total}</span></div><progress aria-label="현재 문제 위치" value={number} max={Math.max(total, number, 1)} /></div>
      <div key={`${number}:${outcome}`} className="pixel-battle-party" aria-hidden="true"><PixelDancer name="medic" pose={outcome === "correct" ? "cheer" : outcome === "wrong" ? "hit" : outcome === "idle" ? "dance" : "still"} className="pixel-hero" /><span className="pixel-turn-label">{turnLabel}</span><PixelDancer name="slime" pose={outcome === "correct" ? "hit" : outcome === "wrong" ? "cheer" : outcome === "idle" ? "dance" : "still"} className="pixel-opponent" /></div>
    </div>
    <div className="pixel-battle-panels">
      <section className="pixel-dialogue pixel-question-dialogue" aria-label="문제"><div className="pixel-dialogue-heading"><strong>{sourceTitle}</strong><span className="pixel-question-copy">{copy}</span></div><div className="pixel-question-text">{question}</div>{hint ? <p className="pixel-question-hint">{hint}</p> : null}</section>
      <section className="pixel-command-window" aria-label="답안 커맨드"><div className="pixel-dialogue-heading"><strong>{submitted ? "선택한 커맨드" : "어떻게 할까?"}</strong><span>{mode === "mock" ? "선택 시 저장" : "COMMAND"}</span></div>{submitted ? <><p className="pixel-answer-log">▶ {answerText || "모르겠습니다."}</p><details className="pixel-choice-history"><summary>선택지 다시 보기</summary>{choices}</details></> : choices}</section>
    </div>
    {submitted ? <section className="pixel-dialogue pixel-battle-response" aria-label="해설" aria-live="polite"><div className="pixel-dialogue-heading"><strong>전투 로그</strong><span>RESULT</span></div><div className="skin-q-response">{response}</div></section> : null}
    <div className="pixel-battle-actions">{actions}</div>
  </div>;
}
