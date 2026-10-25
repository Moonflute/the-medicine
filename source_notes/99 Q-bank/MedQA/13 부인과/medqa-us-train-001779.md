---
type: qbank
schema_version: 1
id: medqa-us-train-001779
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a8766f0217de99f16a7339d0584a8e111f4a7d95beafeefa0464ec21a3867bf5
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "gonorrhea"
  - "chlamydia coinfection"
  - "partner treatment"
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQmVuenlscGVuaWNpbGxpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 산부인과 검진을 위해 내원했다. 건강하고 증상은 없으며 지난 1년 동안 안정적인 일부일처 관계를 유지했다. 신체검사는 정상이다. 선별검사에서 임질 양성이 나와 ceftriaxone 근육주사와 doxycycline 7일 요법으로 치료했다. 이 경우 추가로 무엇이 권고되는가?

## 선택지

A. 매독 동시감염 가능성 때문에 penicillin G로 치료
B. 파트너를 임질과 클라미디아에 대해 치료
C. 파트너가 바람을 피웠을 가능성이 높다고 알림
D. 골반염 배제를 위한 복부 초음파

## 해설

최근 성파트너는 검사·평가와 임질 추정치료를 받아야 하며 클라미디아가 배제되지 않았다면 동시 치료한다(B). 양쪽 치료 후 권고 기간 성관계를 피하고 환자는3개월 재검을 계획한다. 양성 결과만으로 외도를 단정하거나 무조건 매독 치료를 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 파트너의 임질·클라미디아 치료 범위 및 재검 조건 명시.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001779
