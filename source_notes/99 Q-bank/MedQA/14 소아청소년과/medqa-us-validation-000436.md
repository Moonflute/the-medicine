---
type: qbank
schema_version: 1
id: medqa-us-validation-000436
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f7b0456a3871fcf1143066d95feb59672278a57c1b55e7a75c697251c965b757
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "기능성 변비"
  - "소아 변비"
  - "폴리에틸렌글리콜"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67OA67mEIChDb25zdGlwYXRpb24pLm1k
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

5세 아이가 두 달째 통증 때문에 배변을 참다가 큰 덩어리 변을 본다. 최근 속옷에 변이 묻고 복부에 대변 덩이가 만져진다. 성장과 신경 진찰은 정상이며 구토·발열은 없다. 첫 약물 처치는?

## 선택지

A. 식이 섬유만 늘리고 막힌 변은 그대로 둔다
B. 경구 폴리에틸렌글리콜로 변매복을 제거하고 유지 치료로 이어간다
C. 바륨 관장으로 정기적으로 배변을 유도
D. 장운동을 줄이는 지사제 투여

## 해설

기능성 변비에 변매복이 생기면 묻어 나오는 변이 있을 수 있다. 폴리에틸렌글리콜로 먼저 매복을 해소한 뒤 적정 완하제와 배변 습관 교정을 이어간다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 5세 환자를 생후3일 영아로 바꾼 해설 오류 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/constipation_guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000436
- https://pubmed.ncbi.nlm.nih.gov/42159193/
