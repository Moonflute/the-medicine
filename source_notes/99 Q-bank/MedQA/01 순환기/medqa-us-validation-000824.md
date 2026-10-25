---
type: qbank
schema_version: 1
id: medqa-us-validation-000824
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c03418792af85dd833d90b808714ca2bee526653a351f4a3ee648dc9fb7f78a7
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대동맥 축착"
  - "상지 고혈압"
  - "지연된 하지 맥박"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

11세 여아가 두통과 운동 시 다리 피로로 진료를 받으러 왔다. 왼팔 혈압은 155/100 mmHg이고 왼쪽 족배동맥 맥박이 왼쪽 요골맥박보다 지연되며 하지 혈압은 120/80 mmHg이다. 가장 가능성 높은 병리는?

## 선택지

A. 말초동맥질환
B. 혈관연축
C. 대동맥 축착
D. 팔로사징

## 해설


상지 고혈압·하지 저혈압·맥박 지연은 대동맥 축착에 의해 상지 혈류가 증가하고 하지 혈류가 감소하는 전형적인 소견이다. 따라서 정답은 C이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소아의 상지 고혈압·하지 저혈압과 요골-족배 맥박 지연은 대동맥 축착 C의 위치별 압력차를 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000824
