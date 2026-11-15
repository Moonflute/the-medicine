---
type: qbank
schema_version: 1
id: medqa-us-train-009499
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:18d2c2479aa5050e6347c4f2b698e1f0e4cf547081188101029a96d5aa30904b
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "breastfeeding with maternal hepatitis C"
  - "산모 C형간염에서 모유수유"
  - "neonatal nutrition"
question_type: management
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
difficulty: standard
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

만성 C형간염이 있고 HIV 검사 음성인 산모가 모유수유 중이다. 한쪽 유두가 갈라져 피가 나지만 반대쪽은 정상이다. 수유를 어떻게 조정할까?

## 선택지

A. 두 쪽 모두 평소대로 직접 수유한다
B. 이제부터는 양쪽 모유수유를 영구 중단한다
C. 출혈이 있는 쪽만 회복될 때까지 수유를 쉬고 반대쪽은 계속한다
D. 손상된 쪽의 모유를 짜서 가열한 뒤 신생아에게 먹인다

## 해설

C형간염 자체는 모유수유 금기가 아니다. 다만 혈액으로 전파될 수 있어 출혈하는 쪽의 모유는 상처가 아물 때까지 먹이지 않는다. 다른 쪽은 계속 수유할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HCV가 모유에 존재하지 않는다는 단정을 감염 전파 근거와 유두 출혈 예외로 교정.
- https://www.cdc.gov/std/treatment-guidelines/hcv.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009499
- https://www.cdc.gov/breastfeeding-special-circumstances/hcp/illnesses-conditions/hepatitis-b-c.html
