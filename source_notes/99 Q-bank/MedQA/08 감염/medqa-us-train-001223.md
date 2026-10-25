---
type: qbank
schema_version: 1
id: medqa-us-train-001223
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6e7c94e83abf356405f99a22055f44f5a9194fb961d03542ab4df0fadd32bd6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculosis"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOqysO2VtSAoUHVsbW9uYXJ5IFR1YmVyY3Vsb3NpcykubWQ
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

이전에 병원이나 의료 기관에서 근무한 적이 없는 21세 미국 태생의 의대 1학년 학생이 정기 건강검진을 위해 내원했다. 환자는 HIV 음성이고, 약물 사용을 부인하며, 환자와의 접촉력도 없다. 의사는 환자의 오른쪽 아래팔 피내에 정제 단백질 결핵균 검사(purified protein tuberculin test)를 시행했다. 검사 결과를 판독하기 위한 적절한 시간과 양성 결과를 나타내는 경결(induration) 직경은 무엇인가?

## 선택지

A. 24시간 및 18mm 직경
B. 36시간 및 7mm 직경
C. 72시간 및 16mm 직경
D. 96시간 및 14mm 직경

## 해설


TST는 주사 후 48–72시간에 발적이 아니라 경결의 가로 지름을 판독한다. 알려진 위험요인이 없는 사람의 양성 역치는 ≥15 mm이다. 따라서 보기의 72시간 및 16 mm는 양성에 해당하여 C가 맞지만, 역치 자체가 16 mm인 것은 아니다. 노출 및 임상 위험군에 따라 ≥5 또는 ≥10 mm를 적용할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001223 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 양성 역치를 16 mm로 잘못 외삽한 설명을 무위험군 ≥15 mm, 판독48–72시간으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/tuberculin-skin-test.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001223
