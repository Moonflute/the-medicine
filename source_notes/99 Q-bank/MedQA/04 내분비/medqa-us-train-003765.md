---
type: qbank
schema_version: 1
id: medqa-us-train-003765
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03b5073f752d3b15280a25dfede1b2b86e68f20beb72544634dca0f28b77731f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "central precocious puberty"
  - "gonadotropin-dependent puberty"
  - "GnRH agonist"
  - "leuprolide"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7ISx7KGw7IiZ7KadIChTZXh1YWwgUHJlY29jaW91c25lc3MpLm1k
question_type: investigation
difficulty: standard
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

7세 남아에게 고환이 커지고 키가 빠르게 자라는 변화가 생겼다. 골연령이 앞서고 GnRH 자극 검사로 중추성 성조숙증이 확인됐다. 뇌신경 진찰은 정상이다. 원인 확인을 위해 추가할 검사는?

## 선택지

A. 부신 CT
B. 뇌 MRI
C. 소변 성호르몬 단회 측정
D. 복부 단순 X선

## 해설

남아의 중추성 성조숙증에서는 중추신경계 기질적 원인을 고려해 뇌 MRI를 권고한다. 신경 증상이 없다고 영상 평가를 생략하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Leuprolide 지속투여는 receptor down-regulation으로 억제하는데 지속 자극만으로 억제한다고 한 설명 보완.
- https://www.endocrine.org/clinical-practice-guidelines/central-precocious-puberty

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003765
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10556443/
