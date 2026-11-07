"use client";

import { useEffect, useState } from "react";
import { QbankDashboardClient } from "@/components/qbank-dashboard-client";
import { RelatedQbankPageClient } from "@/components/related-qbank-page-client";
import { SkinStatus } from "@/components/skin-status";
import type { DiseaseHierarchy, QbankQuestionIndex } from "@/lib/types";

let indexRequest: Promise<QbankQuestionIndex[]> | undefined;
function loadIndex() {
  // The session player already consumes this same generated public index.
  // A release-scoped URL avoids stale index/target mappings after a deployment.
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/generated/qbank/index.json?v=${process.env.NEXT_PUBLIC_APP_VERSION ?? "dev"}`;
  indexRequest ??= fetch(url, { cache: "force-cache" }).then(async response => {
    if (!response.ok) throw new Error(`Question index: HTTP ${response.status}`);
    const questions: unknown = await response.json();
    if (!Array.isArray(questions)) throw new Error("Invalid question index");
    return questions as QbankQuestionIndex[];
  }).catch(error => { indexRequest = undefined; throw error; });
  return indexRequest;
}

type Props = { mode: "all" } | { mode: "related"; hierarchy: DiseaseHierarchy };
export function QbankPageLoader(props: Props) {
  const [questions, setQuestions] = useState<QbankQuestionIndex[]>();
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let active = true;
    loadIndex().then(value => { if (active) setQuestions(value); }, () => { if (active) setFailed(true); });
    return () => { active = false; };
  }, [attempt]);

  if (failed) return <div role="alert" className="surface space-y-3 p-6"><p>문제 목록을 불러오지 못했습니다.</p><button type="button" className="secondary-action" onClick={() => { setFailed(false); setAttempt(value => value + 1); }}>다시 시도</button></div>;
  if (!questions) return <SkinStatus kind="questionsLoading" fallback="문제 목록을 불러오는 중입니다." stage className="surface p-6 text-slate-600" />;
  return props.mode === "related"
    ? <RelatedQbankPageClient questions={questions} hierarchy={props.hierarchy} />
    : <QbankDashboardClient questions={questions} />;
}
