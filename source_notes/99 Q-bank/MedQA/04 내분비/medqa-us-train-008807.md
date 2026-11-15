---
type: qbank
schema_version: 1
id: medqa-us-train-008807
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6b004f1422f3fc0126551236d27dc6287325ec0642f77c15a81abd2176ff621e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "loop diuretic adverse effect"
  - "hypokalemic metabolic alkalosis"
  - "ventricular tachycardia"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyLpCDruYjrp6UgKFZlbnRyaWN1bGFyIFRhY2h5Y2FyZGlhKS5tZA
  - MDEg7Iic7ZmY6riwL-uwnOyekeyEsSDsg4Hsi6zsi6TshLEg67mI66elIChQYXJveHlzbWFsIFN1cHJhdmVudHJpY3VsYXIgVGFjaHljYXJkaWEgKFBTVlQpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

복수가 있는 간경변 환자가 푸로세미드 용량을 올린 뒤 4일 만에 4kg이 빠졌다. 기립성 저혈압이 생겼고, 칼륨 2.8 mmol/L, 중탄산염 34 mmol/L, 크레아티닌이 0.9에서 2.1 mg/dL로 상승했다. 우선 처치는?

## 선택지

A. 푸로세미드 용량을 더 늘린다
B. 이뇨제를 일시 중단하고 혈관 내 용적과 전해질을 교정한다
C. 진단 평가 없이 간신증후군 치료부터 시작한다
D. 수분 제한만 하고 이뇨제를 유지한다

## 해설


빠른 체중 감소와 기립성 증상, 저칼륨성 알칼리증은 과도한 이뇨에 의한 혈관 내 용적 감소를 시사한다. 이뇨제를 멈추고 체액과 전해질을 재평가하며, 호전되지 않으면 다른 급성 신손상 원인을 찾는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008807 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수 치료 loop 이뇨제 B의 K/Mg 소실 기전 유지; thiazide도 저K 알칼리증을 만들 수 없다는 잘못된 배제 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=341e29d9-a6f1-4c77-ae44-9b2c423ea6b4

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008807
- https://doi.org/10.3350/cmh.2026.0281
