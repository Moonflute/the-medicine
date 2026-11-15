---
type: qbank
schema_version: 1
id: medqa-us-train-000476
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9acac861efaa36eeb3a6a2f7f7e001fe43daa77e417165e56b3b4b5917608f8b
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "coarctation of the aorta"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 달리면 양쪽 종아리가 아프고 자주 쉰다. 오른팔 혈압은 143/83 mmHg, 오른쪽 다리는 105/64 mmHg이다. 대퇴동맥 맥박이 요골동맥보다 약하고 늦게 만져지고, 견갑골 사이에서 수축기 잡음이 들린다. 가장 가능성 높은 진단은?

## 선택지

A. 판막성 대동맥판협착
B. 대동맥축착
C. 신동맥협착
D. 동맥관개존

## 해설

상지 혈압은 높은데 하지 혈압이 낮고 요골–대퇴 맥박 지연이 있으면 대동맥축착이 의심된다. 견갑골 사이 수축기 잡음도 단서다. 신동맥협착은 고혈압을 일으킬 수 있지만 이런 상하지 압력 차이나 맥박 지연을 설명하지 못한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시되지 않은 양팔 혈압 동일 소견을 삭제하고 조직 산소화 저하를 관류 감소로 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000476
- https://doi.org/10.1161/CIR.0000000000001402
