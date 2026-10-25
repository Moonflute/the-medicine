---
type: qbank
schema_version: 1
id: medqa-us-train-003910
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20c38ef4375eea8d949b1393ad6f6d052313b014d8c7de82ab9a593ed8f0a955
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "perinatal HIV prophylaxis"
  - "maternal viral load"
  - "neonatal zidovudine"
  - "HIV transmission prevention"
  - "HIV infection"
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNCDqsITri7Tst4wvTGFtaXZ1ZGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "분만 전 1주 HIV RNA 678은 고위험 노출이므로 2026 NIH 권고에 따라 지도부딘 단독 D를 삼제 A로 변경. 원문에 없는 만삭 표현도 삭제."
---

# MedQA US 임상문제

## 문제

HIV 감염 산모가 임신 중 삼제 항레트로바이러스 치료를 받았고 분만 1주 전 바이러스량은 678 copies/mL였다. 체중 2,300 g으로 태어난 신생아의 신체검사는 정상이었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 지도부딘, 라미부딘, 네비라핀 투여
B. 라미부딘과 네비라핀 투여
C. 네비라핀 투여
D. 지도부딘 투여

## 해설

분만 전 4주 내 산모 HIV RNA가 50 copies/mL 이상이면 신생아는 고위험 노출로 분류한다. 이 경우 출생 직후 가능한 빨리 ZDV·3TC와 NVP 또는 DTG의 삼제 추정 치료/강화 예방을 시작하므로 보기 중 A가 적절하다. 재태주수·체중에 맞춰 용법을 정하고 HIV NAT를 시행하되 결과를 기다리며 투약을 지연하지 않는다. 신체검사가 정상이라는 이유로 저위험 ZDV 단독 요법을 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분만 전 1주 HIV RNA 678은 고위험 노출이므로 2026 NIH 권고에 따라 지도부딘 단독 D를 삼제 A로 변경. 원문에 없는 만삭 표현도 삭제.
- https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/management-infants-utero-intrapartum-breastfeeding-hiv-exposure?view=brief

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003910
