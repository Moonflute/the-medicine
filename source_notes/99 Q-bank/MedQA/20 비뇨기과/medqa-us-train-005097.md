---
type: qbank
schema_version: 1
id: medqa-us-train-005097
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6070a8343ea114ab408569410e9519a4f573e445be3bea82921accd873be90eb
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "고환 염전"
  - "크레마스터 반사 소실"
  - "응급 고환 고정술"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmOyXvOyghCAoVGVzdGljdWxhciB0b3JzaW9uKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

15세 남자가 3시간 전 잠에서 깰 정도의 심한 하복부 통증으로 응급실에 왔다. 통증은 날카롭고 왼쪽 허벅지로 방사되며 한 차례 구토했다. 복부는 압통이 없지만 왼쪽 고환이 올라가 있고 전반적으로 압통이 있으며 왼쪽 허벅지 안쪽을 문질러도 고환이 올라가지 않는다. 다음 처치는?

## 선택지

A. 복부 및 골반 CT
B. 정맥 항생제
C. 관찰과 모르핀
D. 수술적 탐색

## 해설

급성 하복부 통증·구토와 올라간 압통성 고환, 같은 쪽 허벅지 안쪽 자극에 고환이 상승하지 않는 소견은 고환염전을 강하게 시사한다. 거고근반사는 이 자극에 따른 반사성 고환 상승을 보는 것이며 손가락으로 고환을 움직이는 검사가 아니다. D, 긴급 수술적 탐색이 필요하며 CT나 단순 관찰로 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 거고근반사를 손가락으로 고환이 움직이지 않는 것이라고 잘못 설명한 부분 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/paediatric-urology/chapter/acute-scrotum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005097
