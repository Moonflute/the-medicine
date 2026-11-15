---
type: qbank
schema_version: 1
id: medqa-us-train-006191
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e4aa8fa0f7e523790a6b60d5ac62dae55157e0116896a03c576291d6912f0c08
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "난치성 복수"
  - "알코올성 간경변"
  - "대량 복수천자"
  - "Alcoholic cirrhosis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 간경변으로 저염식과 이뇨제 치료를 받고도 복부가 팽팽하고 숨이 찬다. 초음파에서 다량의 복수가 확인됐으며 좌심실 수축기능도 감소해 있다. 증상을 줄이기 위해 약 7 L를 배액할 계획이다. 적절한 처치는?

## 선택지

A. 심부전과 관계없이 즉시 TIPS를 시행한다
B. 이뇨제만 더 늘리고 배액은 하지 않는다
C. 복수만 배액하고 혈압이나 신기능은 확인하지 않는다
D. 치료적 복수천자를 하고 알부민을 보충한다

## 해설

팽팽한 복수는 치료적 복수천자로 완화한다. 5 L를 넘겨 배액하는 경우 순환 기능장애와 신손상 위험을 줄이기 위해 알부민을 보충한다. 심부전은 TIPS 선택에 중요한 제한점이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 긴장성 복수 D를 albumin과 합병증평가에 연결하고 HFrEF/HE의 TIPS위험을 명시.
- https://aasldpubs.onlinelibrary.wiley.com/doi/full/10.1002/hep.31884

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006191
- https://doi.org/10.3350/cmh.2026.0281
