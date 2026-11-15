---
type: qbank
schema_version: 1
id: medqa-us-train-010045
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bcd26950f9a680abeeef3f5dd58e887a2835c17406edae6048f32d9bc228b29e
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "파열된 복부 대동맥류"
  - "출혈성 쇼크"
  - "응급 수술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: management
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

추적 중인 복부 대동맥류가 있는 79세 남성이 갑자기 심한 복통과 등 통증을 호소한다. 혈압은 76/43 mmHg로 떨어지고 의식이 악화된다. 파열이 의심될 때 우선 할 조치는?

## 선택지

A. 복부 MRI 결과가 나올 때까지 대기
B. 혈관외과 응급 대응을 가동하고 수혈 소생과 함께 즉시 복구를 준비
C. 일반병실에서 수액만 주고 혈압 반응을 관찰
D. 외래 초음파로 동맥류 크기만 다시 측정

## 해설


알려진 복부 대동맥류에서 새 복통·등 통증과 쇼크가 나타나면 파열을 우선 의심한다. 혈액제제 소생과 혈관내 또는 개방 복구 준비를 병행한다. CTA는 신속하게 할 수 있을 때 치료 계획에 쓰되 출혈 조절을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010045 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 파열 AAA의 응급 복구 D는 유지하고 모든 경우 개방술/CT 금지로 단정한 설명을 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2024/02/ESVS-2024-AAA-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010045
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12775968/
- https://pubmed.ncbi.nlm.nih.gov/38307694/
