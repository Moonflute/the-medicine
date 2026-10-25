---
type: qbank
schema_version: 1
id: medqa-us-validation-000063
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:67321528c079ffef0a29354bde7d5ffd9f9cc2253ea335e40714dde8ad05a70f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "자발성 세균성 복막염"
  - "복수"
  - "세포탁심"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
question_type: management
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvR2VudGFtaWNpbi5tZA
---

# MedQA US 임상문제

## 문제

56세 흑인 남성이 의식변화, 복통, 미열로 진료를 받으러 왔다. 알코올 사용과 간경변 병력이 있고 복수천자에서 SAAG 1.3 g/dL, 다형핵백혈구 280 cells/mm³였다. 복수액 배양 결과를 기다리는 동안 가장 적절한 치료는?

## 선택지

A. 나돌롤
B. 세포탁심
C. 페니실린
D. 겐타마이신

## 해설


정답 B. 간경변 환자의 발열·복통·의식 변화와 복수 PMN 280/mm³는 SBP 치료 기준인 250/mm³ 이상에 해당한다. 배양 결과를 기다리지 않고 경험적 항생제를 투여한다. 선택지 중 cefotaxime이 적절하지만 원내/의료관련 감염과 내성 위험이면 지역 자료에 따라 더 넓은 요법을 선택할 수 있다. SAAG만으로 SBP를 진단하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000063 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 복수 PMN 280≥250이므로 배양 결과 전 SBP 경험치료 B; 지역 내성/원내 감염 위험에 따른 선택 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000063
