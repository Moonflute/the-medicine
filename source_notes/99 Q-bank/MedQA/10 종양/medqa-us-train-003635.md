---
type: qbank
schema_version: 1
id: medqa-us-train-003635
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:db3ffb35dad7d283bc3c083b430c71c6e42686253d75ec49b909f45709ec83f9
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "cancer cachexia"
  - "anorexia"
  - "involuntary weight loss"
  - "megestrol acetate"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
question_type: management
difficulty: complex
answer: C
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
---

# MedQA US 임상문제

## 문제

진행암 항암치료 중인 64세 여성이 입맛 저하와 근육 감소로 체중이 8% 줄었다. 장폐색이나 삼킴곤란은 없고, 통증을 조절하고 영양 상담을 했지만 식욕 저하가 지속된다. 식욕과 체중 개선을 위해 고려할 약은?

## 선택지

A. 고용량 덱사메타손을 장기 사용
B. 드로나비놀
C. 저용량 올란자핀
D. 메토클로프라미드 정기 복용

## 해설


저용량 올란자핀은 항암치료 중 지속되는 식욕 저하와 체중 감소에 고려할 수 있다. 진정 등 이상반응을 확인하며, 약을 추가해도 영양 관리와 가역적 원인 교정은 계속한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003635 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Megestrol을 보편적 필수 1차 치료로 단정한 표현을 선택 가능한 식욕증진 치료와 위험 평가로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ascopubs.org/doi/10.1200/JCO.23.01280
- https://link.springer.com/content/pdf/10.1007/s12094-024-03502-8.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003635
- https://pubmed.ncbi.nlm.nih.gov/37467399/
