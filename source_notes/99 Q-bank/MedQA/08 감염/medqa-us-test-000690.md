---
type: qbank
schema_version: 1
id: medqa-us-test-000690
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:5db0e37905fd8193e90ddd3c4de43c763e0a8ca76f11e214bc90d8ac7b1a2cf2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "잠복 매독"
  - "HIV 감염"
  - "후기 잠복 매독 치료"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

새로 HIV를 진단받은 환자가 RPR과 트레포네마 특이 항체에 모두 양성이다. 매독 치료력이 없고 감염 시점을 알 수 없다. 증상이 없고 신경·안과·이과 진찰도 정상이다. 적절한 매독 치료는?

## 선택지

A. 벤자틴 페니실린 G를 1회 근육주사한다
B. 벤자틴 페니실린 G를 1주 간격으로 총 3회 근육주사한다
C. 높은 RPR 역가만으로 신경매독을 진단해 정맥 치료한다
D. HIV 치료를 마칠 때까지 매독 치료를 미룬다

## 해설


기간을 알 수 없는 잠복 매독은 벤자틴 페니실린 G를 주 1회씩 3회 투여한다. HIV 감염이나 높은 RPR 역가만으로 요추천자를 일률 시행하지 않으며, 치료 뒤 정량 역가를 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000690 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기간 불명 HIV 동반 잠복매독 C 유지. 3주 간격이라는 투여 오류를 매주 3회로 교정, HIV의 추가 추적 일정 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis-hiv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000690
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10925736/
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/syphilis
