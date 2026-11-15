---
type: qbank
schema_version: 1
id: medqa-us-train-004320
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:203f11695cc72327a776e7ae4aae05ac81c12062cb13139f34e326999344d177
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "소아 비만"
  - "이상지질혈증"
  - "인슐린 저항성"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: 임상증례 객관식
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

국내 성장도표에서 BMI가 연령·성별 98백분위수인 15세 청소년에게 중성지방 상승과 낮은 HDL이 확인됐다. 아직 체계적 치료를 받은 적이 없다. 첫 관리 계획은?

## 선택지

A. 성장 여부와 무관하게 단식 프로그램만 시작
B. 가족과 함께 식사·신체활동·행동 습관을 조정하고 동반질환도 평가
C. 중성지방을 낮추기 위해 나이아신만 먼저 처방
D. 체중만 관찰하고 혈압·혈당과 지질은 다시 확인하지 않음

## 해설

소아·청소년 비만 치료는 성장에 필요한 영양을 유지하면서 가족이 함께 생활습관을 바꾸는 것으로 시작한다. 고혈압, 당대사 이상과 이상지질혈증을 함께 평가해 필요한 후속 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 15세를 영유아검진으로 오역. B를 극단열량제한이 아닌 가족중심영양/행동치료로 설명.
- https://publications.aap.org/pediatrics/article/151/2/e2022060640/190423/Clinical-Practice-Guideline-for-the-Evaluation

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004320
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11000513/
