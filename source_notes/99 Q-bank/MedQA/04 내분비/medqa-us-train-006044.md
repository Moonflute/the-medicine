---
type: qbank
schema_version: 1
id: medqa-us-train-006044
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd3603af9b3bc3fd410012b1f557f11431b3c55863284acdf136e31dc09d501e
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 자율신경병증"
  - "기립성 저혈압"
  - "발기부전"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
  - MjAg67mE64eo6riw6rO8L-uwnOq4sOu2gOyghCAoRXJlY3RpbGUgRHlzZnVuY3Rpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQmlzb3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFsc2FydGFuLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병을 오래 앓은 58세 남성이 일어설 때 어지럽다. 누워 있을 때 혈압 145/80 mmHg, 맥박 78회/분이고 선 지 2분 뒤 116/67 mmHg, 80회/분이다. 탈수나 출혈은 없고 심박수를 억제하는 약을 쓰지 않는다. 가장 가능성 높은 원인은?

## 선택지

A. 급성 혈액량 감소
B. 전정성 어지럼
C. 당뇨병성 자율신경병증에 의한 기립성 저혈압
D. 심인성 과호흡

## 해설


일어선 후 혈압이 크게 떨어졌는데 맥박이 거의 늘지 않아 보상성 자율신경 반응 저하를 시사한다. 복용약과 탈수 등 다른 원인도 함께 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 기립저혈압의 심박보상 부재·위장운동장애·고A1c는 자율신경병증의 발기부전 C를 지지.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006044
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11067441/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
