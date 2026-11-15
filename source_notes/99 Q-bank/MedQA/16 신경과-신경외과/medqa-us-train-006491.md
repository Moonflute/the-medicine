---
type: qbank
schema_version: 1
id: medqa-us-train-006491
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2f6fcf2882848f2816c71a13ad473a04758e34df210a2bd0cb1e0e90c868db1e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "정상압 수두증"
  - "보행 장애"
  - "요실금과 치매"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soJXsg4HslZUg7IiY65GQ7KadIChOb3JtYWwgcHJlc3N1cmUgaHlkcm9jZXBoYWx1cykubWQ
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MZXZvZG9wYS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NZW1hbnRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 환자에게 짧은 걸음과 요절박이 있고 영상에서 정상압 수두증에 합당한 소견이 있다. 단락술 전, 뇌척수액을 줄이면 보행이 좋아지는지 평가할 검사는?

## 선택지

A. 요역동학검사
B. 척수 신경전도검사
C. 보행검사 없이 뇌척수액 단백만 확인
D. 요추천자로 뇌척수액을 배액하고 전후 보행을 비교

## 해설

뇌척수액 배액 전후 보행 속도나 걸음 수를 비교하면 단락술 반응을 예측하는 데 도움 된다. 반응이 없다고 모든 환자에서 치료 효과가 없는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. NPH에서 LP B의 일시적 개선·션트 반응 예측 역할을 장기 확정치료와 구별.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC7905302/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006491
