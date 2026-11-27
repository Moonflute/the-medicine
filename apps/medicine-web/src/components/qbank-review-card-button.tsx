"use client";

import { ReviewCardCreateButton } from "@/components/review-card-create-button";
import type { QbankQuestion } from "@/lib/types";
import { mockQuestionSubject } from "@/lib/mock-exam";

export function QbankReviewCardButton({ question }: { question: QbankQuestion }) {
  const year = question.id.match(/(?:19|20)\d{2}/)?.[0];
  const label = question.questionBank === "practice"
    ? question.archiveRoundKey ? `${question.source} · ${mockQuestionSubject(question)}`
      : `${year ? `${year}년 · ` : ""}${mockQuestionSubject(question)} · ${Number(question.id.split("-").at(-1)) || question.id}번`
    : `${question.questionBank === "theory" ? "이론" : "임상"} · ${question.targetTitle || question.specialty}`;
  return <ReviewCardCreateButton source={{ questionId: question.id, bank: question.questionBank, label: label.slice(0, 240) }} />;
}
