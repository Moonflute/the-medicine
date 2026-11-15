---
type: qbank
schema_version: 1
id: medqa-us-train-005113
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a5b6713aeefa70f9de48fceadf015debdfc6e81883bc9e729073f6637ac5a097
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "브라운-세카르 증후군"
  - "척수 반절 병변"
  - "척수 압박"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9Ccm93bi1TZXF1YXJkIOymne2bhOq1sCAoQnJvd24tU2VxdWFyZCBzeW5kcm9tZSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 남성의 오른쪽 다리에 경직성 위약이 있고 진동·위치감각이 떨어진다. 왼쪽은 배꼽 아래 통각과 온도감각이 낮다. 병변은 어디에 가장 잘 국소화되는가?

## 선택지

A. 왼쪽 흉수 반쪽
B. 오른쪽 흉수 반쪽
C. 오른쪽 대뇌 반구
D. 왼쪽 교뇌

## 해설

척수 반쪽을 침범하면 병변 아래 같은 쪽 운동과 후주 감각, 반대쪽 통각·온도감각이 저하된다. 이 경우 오른쪽 흉수 병변이 가장 잘 설명한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 척수 반절 병변의 반대쪽 감각저하를 모든 감각으로 뭉뚱그린 해설을 운동·후주·통각온도 각각의 교차 위치로 구별했다. 오른쪽 반척수 C를 유지한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005113
