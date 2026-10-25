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
answer: D
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

79세 남성이 복통으로 응급실에 내원했다. 통증은 심하고 찢어지는 듯하며 등으로 방사된다. 고혈압, 고지혈증, 간헐적 파행, 60갑년의 흡연력이 있다. 초음파 추적 중인 안정된 복부 대동맥류를 이전에 진단받았다. 체온 36.7°C, 맥박 분당 113회, 혈압 84/46 mmHg, 호흡수 분당 24회, 실내 공기 산소포화도 99%이다. 창백하고 식은땀을 흘리며 진찰 중 혼란스러워진다. 다음 중 이 환자의 평가와 치료에 가장 적절한 것은?

## 선택지

A. 조영제를 사용한 복부 CT
B. 조영제를 사용하지 않은 복부 CT
C. 복부 MRI
D. 수술

## 해설


알려진 AAA 환자의 갑작스러운 복통·등 방사통과 쇼크·의식 악화는 파열을 강하게 의심하게 하므로 즉시 혈관외과 수술/혈관내 복구를 위한 대응(D)이 필요하다. 혈액제제 소생과 신속 출혈제어를 준비한다. 실제 복구 방식은 EVAR 가능 해부학과 자원에 따라 정하며 무조건 개방술만 뜻하지 않는다. CTA는 신속히 시행 가능하고 처치를 지연하지 않는다면 복구 계획에 중요하지만, 악화하는 환자의 생명구제 처치를 기다리게 해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010045 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 파열 AAA의 응급 복구 D는 유지하고 모든 경우 개방술/CT 금지로 단정한 설명을 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2024/02/ESVS-2024-AAA-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010045
