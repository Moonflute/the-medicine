"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Award, Trophy } from "lucide-react";
import { loadPracticeIndex } from "@/lib/practice-bank";
import { loadQbankState, QBANK_CHANGE_EVENT } from "@/lib/qbank-store";
import { practiceAchievement, type PracticeAchievement } from "@/lib/practice-achievements";
import type { PracticeIndex } from "@/lib/practice-selection";

const sparks = Array.from({ length: 48 }, (_, i) => {
  const angle = (i % 12) / 12 * Math.PI * 2;
  return {
    "--spark-x": `${Math.cos(angle) * 120}px`, "--spark-y": `${Math.sin(angle) * 120}px`,
    "--burst-x": `${[20, 75, 40, 65][Math.floor(i / 12)]}%`, "--burst-y": `${[28, 20, 50, 45][Math.floor(i / 12)]}%`,
    "--spark-delay": `${Math.floor(i / 12) * 220}ms`, "--spark-color": ["var(--primary)", "var(--accent)", "#d5a229", "#cb6486"][i % 4],
  } as CSSProperties;
});

export function PracticeResultAchievement({ sessionId, fresh }: { sessionId: string; fresh: boolean }) {
  const [achievement, setAchievement] = useState<PracticeAchievement | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const celebrated = useRef(false);
  useEffect(() => {
    const state = loadQbankState();
    const current = state.sessions.find(session => session.id === sessionId);
    if (!current || !current.questionIds.length || current.questionIds.some(id => !id.startsWith("QB-"))) return;
    let active = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let catalogue: PracticeIndex[] | undefined;
    const update = () => {
      if (!active) return;
      const latest = loadQbankState();
      const saved = latest.sessions.find(session => session.id === sessionId);
      // Account switches replace the store; never retain another account's badge.
      if (!saved) {
        active = false;
        setAchievement(null);
        setCelebrate(false);
        return;
      }
      if (!catalogue) return;
      const result = practiceAchievement(saved, latest.sessions, catalogue);
      setAchievement(result);
      if (fresh && result?.passed && !celebrated.current) {
        celebrated.current = true;
        setCelebrate(true);
        timer = setTimeout(() => { if (active) setCelebrate(false); }, 2400);
      }
    };
    void loadPracticeIndex().then(({ questions }) => { catalogue = questions; update(); })
      .catch(() => { /* A secondary celebration must never block grading or saved results. */ });
    window.addEventListener(QBANK_CHANGE_EVENT, update);
    return () => { active = false; if (timer) clearTimeout(timer); window.removeEventListener(QBANK_CHANGE_EVENT, update); };
  }, [fresh, sessionId]);
  if (!achievement || (!achievement.passed && !achievement.roundRecord && !achievement.overallRecord)) return null;
  return <section className="practice-achievement" aria-label="실전문제 성취" role="status">
    {achievement.passed && <div className="practice-achievement-pass"><Award size={22} aria-hidden="true" /><strong>합격!</strong><span>{Number(achievement.score.toFixed(1))}점 · 총점 40점 기준 달성</span></div>}
    {(achievement.roundRecord || achievement.overallRecord) && <div className="practice-achievement-records">
      {achievement.roundRecord && <span><Trophy size={15} aria-hidden="true" />해당 회차 최고점 갱신!</span>}
      {achievement.overallRecord && <span><Trophy size={15} aria-hidden="true" />실전문제 전체 최고점 갱신!</span>}
    </div>}
    {celebrate && <div className="practice-fireworks" aria-hidden="true">{sparks.map((style, index) => <i key={index} style={style} />)}</div>}
  </section>;
}
