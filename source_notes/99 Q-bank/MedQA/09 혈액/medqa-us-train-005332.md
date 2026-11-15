---
type: qbank
schema_version: 1
id: medqa-us-train-005332
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:de21a1a28e34355587b9b46de0388254b5a82485012c5427e52055d5931b906e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈우병 A"
  - "관절강내 출혈"
  - "제8응고인자 결핍"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

중증 혈우병 A로 확진된 10세 환자가 가벼운 외상 뒤 무릎이 빠르게 붓고 아파 내원했다. 관절 출혈이 의심되고 제VIII인자 억제항체는 없다. 관절 평가와 함께 즉시 할 치료는?

## 선택지

A. 관절천자 결과가 나올 때까지 지혈을 미룬다
B. 제IX인자 농축제를 투여한다
C. 제VIII인자 농축제를 신속히 투여한다
D. 항혈소판제로 관절 혈류를 유지한다

## 해설


혈우병 A의 급성 관절 출혈은 제VIII인자 보충이 우선이다. 출혈을 치료하며 통증과 관절 상태를 평가하고, 관절천자를 일률적으로 먼저 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005332 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 남아 관절내출혈 의심·출혈 가족력에서 선택지 중 혈우병 A가 가장 가능함을 원문 대조 유지. 다른 선지는 주로 혈전 성향.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005332
- https://doi.org/10.1111/hae.14046
