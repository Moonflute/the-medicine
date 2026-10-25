---
type: qbank
schema_version: 1
id: medqa-us-train-000364
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0b983dc46c3b52ae0cbf6b919786711f3a25b0180a80038b45c6bccdf0c08e4f
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "corneal ulceration"
  - "Bacterial keratitis"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yEuOq3oOqwgeunieq2pOyWkSAoYmFjdGVyaWFsIGNvcm5lYWwgdWxjZXIpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9EZXhhbWV0aGFzb25lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdGF6aWRpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 양측 안구 통증을 주소로 응급실에 내원하였다. 환자는 지난 48시간 동안 통증이 서서히 악화되었다고 진술하였다. 그는 지난 주말에 외출하여 다량의 술을 마시고 피임 없이 성관계를 가졌음을 인정했으나, 선행 사건은 기억하지 못한다. 환자의 활력징후는 정상 범위 내에 있다. 신체 검진상 양측 안구의 통증과 충혈이 관찰되며, 각막의 혼탁과 궤양이 확인된다. 환자의 콘택트렌즈를 제거하고 세극등 검사(slit lamp exam)를 시행한 결과 양측 각막 궤양이 확인되었다. 이 환자를 위한 최선의 치료는 무엇인가?

## 선택지

A. 아시클로버(Acyclovir)
B. 가티플록사신(Gatifloxacin) 점안액
C. 유리체 내 반코마이신 및 세프타지딤 투여
D. 국소 덱사메타손 투여 및 콘택트렌즈 착용 중단

## 해설

콘택트렌즈 착용자에서 통증·충혈과 각막 혼탁/궤양은 감염성 각막염에 합당하다. 제시된 선지 중 B, gatifloxacin 점안과 같은 국소 항균 치료가 적절하다. Gatifloxacin은 4세대 fluoroquinolone이지 1세대가 아니다. 콘택트렌즈는 중단하고 긴급 안과 평가를 받으며, 크거나 중심부·깊은 궤양은 배양과 강화 항생제 등 중증도에 맞는 치료가 필요할 수 있다. 국소 steroid 단독이나 유리체 내 주사가 이 각막 병변의 기본 치료는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Gatifloxacin을 1세대로 잘못 분류한 오류를 4세대 fluoroquinolone으로 교정하고 심한 각막궤양의 긴급 평가를 명시.
- 공식/학회 근거: https://www.aaojournal.org/article/S0161-6420(24)00007-1/fulltext

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000364
