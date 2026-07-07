"use client";

import { useMemo, useState } from "react";
import type { ChiefComplaintRecommendation } from "@/lib/types";
import { RichTextLines } from "@/components/rich-text-lines";

function scoreRecommendation(recommendation: ChiefComplaintRecommendation, selected: Set<string>, index: number) {
  const matched = recommendation.symptoms.filter((symptom) => selected.has(symptom)).length;
  if (matched === 0) return Number.NEGATIVE_INFINITY;
  return matched * 100 + (matched / recommendation.symptoms.length) * 10 - index / 1000;
}

export function ChiefComplaintRecommendationPicker({
  recommendations,
}: {
  recommendations: ChiefComplaintRecommendation[];
}) {
  const symptoms = useMemo(() => {
    const seen = new Set<string>();
    const result: string[] = [];

    for (const recommendation of recommendations) {
      for (const symptom of recommendation.symptoms) {
        if (seen.has(symptom)) continue;
        seen.add(symptom);
        result.push(symptom);
      }
    }

    return result;
  }, [recommendations]);

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const selectedSet = useMemo(() => new Set(selectedSymptoms), [selectedSymptoms]);

  const selectedRecommendation = useMemo(() => {
    if (selectedSet.size === 0) return null;

    return recommendations
      .map((recommendation, index) => ({
        recommendation,
        score: scoreRecommendation(recommendation, selectedSet, index),
      }))
      .filter((item) => Number.isFinite(item.score))
      .sort((a, b) => b.score - a.score)[0]?.recommendation ?? null;
  }, [recommendations, selectedSet]);

  if (recommendations.length === 0 || symptoms.length === 0) return null;

  function toggleSymptom(symptom: string) {
    setSelectedSymptoms((current) =>
      current.includes(symptom)
        ? current.filter((item) => item !== symptom)
        : [...current, symptom],
    );
  }

  return (
    <section className="rounded-lg border border-teal-200 bg-teal-50/70 p-4 sm:p-5">
      <div className="mb-3 text-xs font-semibold uppercase text-teal-700">Symptom matcher</div>
      <div className="flex flex-wrap gap-2">
        {symptoms.map((symptom) => {
          const selected = selectedSet.has(symptom);
          return (
            <button
              key={symptom}
              type="button"
              onClick={() => toggleSymptom(symptom)}
              className={[
                "rounded-full border px-3 py-1.5 text-xs font-medium transition",
                selected
                  ? "border-teal-700 bg-teal-700 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:text-teal-800",
              ].join(" ")}
            >
              {symptom}
            </button>
          );
        })}
      </div>

      {selectedRecommendation ? (
        <div className="mt-5 rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm">
          <div className="text-xs font-medium text-slate-500">의심되는 질환은</div>
          <div className="mt-1 text-2xl font-semibold text-slate-950">{selectedRecommendation.disease}</div>
          <div className="mt-4 grid gap-3 text-left sm:grid-cols-2">
            {selectedRecommendation.tests ? (
              <div className="rounded-md bg-slate-50 p-3">
                <div className="mb-1 text-xs font-semibold uppercase text-slate-500">검사</div>
                <RichTextLines lines={[selectedRecommendation.tests]} className="text-sm leading-6 text-slate-700" />
              </div>
            ) : null}
            {selectedRecommendation.treatment ? (
              <div className="rounded-md bg-slate-50 p-3">
                <div className="mb-1 text-xs font-semibold uppercase text-slate-500">치료</div>
                <RichTextLines lines={[selectedRecommendation.treatment]} className="text-sm leading-6 text-slate-700" />
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-lg border border-dashed border-slate-200 bg-white/70 p-4 text-center text-sm text-slate-500">
          증상을 선택하면 가능성이 높은 질환과 검사/치료가 표시됩니다.
        </div>
      )}
    </section>
  );
}
