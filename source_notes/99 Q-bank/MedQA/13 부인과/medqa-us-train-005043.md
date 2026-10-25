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
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-2PrOyDgeq4sO2DnCAoTW9sYXIgUHJlZ25hbmN5KS5tZA
difficulty: complex
answer: D
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

16세 여자가 3개월 동안 간헐적인 복부 경련, 피로, 빈뇨가 있어 어머니와 내원했다. 아직 초경을 하지 않았고 유방과 음모 발달은 태너 5단계이다. 복부 하부에 단단한 종괴가 만져진다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 골반 초음파
B. 공복 혈당과 지질 검사
C. 혈청 유리 T4
D. 혈청 β-hCG

## 해설

Tanner 5는 사춘기 발달이 완료된 상태이며 배란은 첫 월경 전에 일어날 수 있다. 원발무월경을 보고해도 임신 가능성을 먼저 확인하므로 β-hCG(D)를 측정한다. 음성이면 주기적 통증·하복부 종괴를 설명할 유출로 폐쇄 등 구조적 원인을 초음파로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원발무월경에서 우선 임신검사 D 유지. Tanner 5를 사춘기 발달 정지로 오역한 해설 교정.
- https://www.asrm.org/practice-guidance/practice-committee-documents/current-evaluation-of-amenorrhea/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005043
