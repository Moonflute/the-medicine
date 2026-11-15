---
type: qbank
schema_version: 1
id: medqa-us-train-005043
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2baf21185acd641ce9fb6376ad7253079a3272058b3f1565a18943ee7b6e84b8
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "일차성 무월경"
  - "임신 검사"
  - "사춘기 후 골반 종괴"
  - "Pregnancy"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
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

초경이 없는 15세 여아가 수개월 동안 매달 하복부 통증을 겪었다. 유방 발달은 정상이다. 질 입구에 푸르스름하게 팽윤한 막이 보이고, 초음파에서 질 안에 혈액이 고여 있다. 진단은?

## 선택지

A. 뮐러관 무형성
B. 완전 안드로겐 불감증
C. 폐쇄 처녀막
D. 기능성 시상하부성 무월경

## 해설

푸른 막이 질 입구에서 볼록하고 그 위로 혈액이 고인 경우 폐쇄 처녀막이다. 질중격 등이 의심되거나 해부가 불분명하면 추가 영상으로 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원발무월경에서 우선 임신검사 D 유지. Tanner 5를 사춘기 발달 정지로 오역한 해설 교정.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005043
- https://pubmed.ncbi.nlm.nih.gov/31135763/
