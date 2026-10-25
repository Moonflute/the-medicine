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
answer: C
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

33세 남성이 감염병 클리닉에서 추적 진료를 받았다. 최근 발열, 호흡곤란, 기침으로 입원하여 폐포자충 폐렴과 새로 진단된 HIV 감염이 확인되었다. CD4 수는 175이고 바이러스량은 대기 중이다. 정기검사에서 RPR 역가 1:64 양성, FTA-ABS 양성으로 매독이 확인되었다. HIV나 매독에 언제 어떻게 감염되었는지는 모른다. 신경학적 진찰은 정상이고 증상은 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 요추천자를 시행하고 중추신경계 질환 유무에 따라 치료한다
B. 페니실린을 1주 간격으로 3회 주사하고 3개월 후 역가를 확인한다
C. 페니실린을 1주 간격으로 3회 주사하고 6개월 후 역가를 확인한다
D. 페니실린 1회 주사 후 6개월 후 역가를 확인한다

## 해설


감염 기간을 알 수 없는 무증상 잠복매독은 벤자틴 페니실린 G를 1주 간격으로 총 3회 투여한다. C처럼 6개월에 첫 혈청 추적을 하고 HIV 동반 잠복매독에서는 12·18·24개월에도 추적한다. 신경·안구·이과 증상/징후가 없으면 CD4 저하나 높은 RPR만으로 일률적 요추천자를 시행하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000690 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기간 불명 HIV 동반 잠복매독 C 유지. 3주 간격이라는 투여 오류를 매주 3회로 교정, HIV의 추가 추적 일정 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/syphilis-hiv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000690
