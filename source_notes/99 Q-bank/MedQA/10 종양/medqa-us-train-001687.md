---
type: qbank
schema_version: 1
id: medqa-us-train-001687
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1a80b1efb3afaf5ac7191a5e34d81963d92e70521cefb9705780f48022003bb
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "cyclophosphamide hemorrhagic cystitis"
  - "mesna"
  - "uroprotection"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-y2nO2YiOyEsSDrsKnqtJHsl7wgKEhlbW9ycmhhZ2ljIEN5c3RpdGlzKS5tZA
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

62세 여성이 전이성 평활근육종에 이포스파미드 항암요법을 시작한다. 수액과 함께 출혈성 방광염 예방에 투여할 약은?

## 선택지

A. 덱스라족산
B. 류코보린
C. 알로푸리놀
D. 메스나

## 해설


메스나는 이포스파미드의 요로독성 대사산물을 소변에서 불활성화한다. 충분한 수분 공급과 함께 출혈성 방광염 예방에 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001687 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Mesna B 기전은 유지하되 명시되지 않은 항암제를 cyclophosphamide로 확정하지 않았다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/publications/dictionaries/cancer-drug/def/mesna

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001687
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/genitourinary/1297-haemorrhagic-cystitis
