---
type: qbank
schema_version: 1
id: medqa-us-train-003516
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff679158666fd7f6facb850d4ffa5fee2101b066658af9fd1e5e9a089d3ab2e1
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypokalemia"
  - "thiazide diuretic"
  - "primary hyperaldosteronism"
  - "metabolic alkalosis"
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDQg64K067aE67mEL-yVjOuPhOyKpO2FjOuhoOymnSAoQWxkb3N0ZXJvbmlzbSkubWQ
  - MDUg7Iug7J6lL-yVjOy5vOumrOymnSAoQWxrYWxvc2lzKS5tZA
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

44세 남성이 4주 전 고혈압으로 하이드로클로로티아지드를 시작한 뒤 수주간 피로, 근력저하, 근육경련, 다뇨가 생겨 내원했다. 혈청 칼륨은 2.1 mEq/L였고 이전 검사는 정상이었다. 다음 중 이 환자의 현재 상태 발생에 기여했을 가능성이 가장 높은 기저질환은?

## 선택지

A. 부적절한 항이뇨호르몬 분비 증후군
B. 뇌하수체 선종
C. 고알도스테론증
D. 쿠싱병

## 해설


Thiazide 이뇨제는 나트륨 재흡수를 억제하면서 원위세뇨관에서 칼륨과 수소 이온 배설을 증가시킨다. 고알도스테론증이 있으면 알도스테론이 과다 분비돼 Na⁺ 재흡수와 K⁺/H⁺ 배설이 더욱 촉진돼 심각한 저칼륨혈증을 일으킨다. 따라서 이 환자의 저칼륨혈증은 고알도스테론증이 가장 큰 기여 요인이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003516
