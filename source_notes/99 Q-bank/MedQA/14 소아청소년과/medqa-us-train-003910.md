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
publication_status: "withheld"
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

HIV 감염 산모가 분만 직전 진단되어 임신 중 항레트로바이러스 치료를 받지 못했다. 혈중 HIV RNA가 높으며 만삭으로 태어난 신생아는 무증상이다. 출생 직후 적절한 조치는?

## 선택지

A. HIV 핵산검사 검체를 채취하고 신생아 고위험군 항레트로바이러스 요법을 즉시 시작한다
B. 출생 시 항체검사가 음성이면 예방 약제를 투여하지 않는다
C. 신생아에게 증상이 생길 때까지 기다린다
D. 첫 핵산검사 결과가 양성일 때에만 약을 시작한다

## 해설

치료받지 못한 산모의 높은 바이러스량에 노출된 신생아는 고위험군이다. 출생 직후 HIV 핵산검사 검체를 얻고 결과를 기다리지 않고 고위험군 요법을 시작한다. 신생아의 항체검사는 모체 항체 때문에 확진에 적합하지 않다. 약제와 기간은 재태주수, 체중, 노출 위험에 맞춰 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 분만 전 1주 HIV RNA 678은 고위험 노출이므로 2026 NIH 권고에 따라 지도부딘 단독 D를 삼제 A로 변경. 원문에 없는 만삭 표현도 삭제.
- https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/management-infants-utero-intrapartum-breastfeeding-hiv-exposure?view=brief

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003910
- 미국 NIH 주산기 HIV 노출 신생아 관리 지침(2026): https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/management-infants-utero-intrapartum-breastfeeding-hiv-exposure
