---
type: qbank
schema_version: 1
id: medqa-us-test-000956
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:115a12bf551d3a36a2f58e5260b5b01034c5e9cb4315a1d311ff7bab4fc971fb
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전"
  - "NYHA 기능분류"
  - "운동 시 증상"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: prognosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성이 심부전 추적 진료를 받는다. 앉아서 쉴 때는 편하지만 세수하거나 방에서 화장실까지 걸어도 숨이 찬다. 뉴욕심장협회(NYHA) 기능분류는?

## 선택지

A. I
B. II
C. III
D. IV

## 해설

휴식 때는 증상이 없지만 평소보다 적은 활동에도 숨이 차고 활동이 현저히 제한되므로 III이다. II는 일상적인 활동에서 증상이 발생하는 경도 제한, IV는 휴식 시에도 증상이 있을 수 있는 단계다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정답 III 유지. 비표준 NYHA IIa/IIb를 실제 기능분류인 것처럼 설명한 문장 제거.
- https://www.heart.org/en/health-topics/heart-failure/what-is-heart-failure/classes-of-heart-failure

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000956
