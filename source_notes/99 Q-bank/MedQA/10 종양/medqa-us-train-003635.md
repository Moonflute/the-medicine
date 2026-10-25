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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
---

# MedQA US 임상문제

## 문제

진행성 췌장 전이 자궁경부암으로 복합항암치료를 받고 있는 40세 여성이 2주간의 식욕부진, 구강건조, 체중감소, 피로와 일상생활 수행 불능으로 내원했다. 마르고 창백하며 전신 쇠약과 골격근 위축이 있었다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 미르타자핀
B. 메게스트롤 아세테이트
C. 사이프로헵타딘
D. 인지행동치료

## 해설


진행암의 식욕저하·체중감소·근육위축은 암성 악액증에 부합한다. 선택지 중 megestrol acetate(B)는 식욕과 체중 증가를 위해 고려할 수 있는 progestin이다. 증가 체중은 주로 지방이며 근육·기능·생존의 회복을 보장하지 않는다. 영양 상담과 가역적 원인 평가를 우선 병행하고 혈전·체액저류·부신억제 위험을 고려한다. 현행 ASCO는 저용량 olanzapine도 제안하므로 megestrol이 모든 환자의 유일한 1차약이라는 설명은 부정확하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003635 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Megestrol을 보편적 필수 1차 치료로 단정한 표현을 선택 가능한 식욕증진 치료와 위험 평가로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://ascopubs.org/doi/10.1200/JCO.23.01280
- https://link.springer.com/content/pdf/10.1007/s12094-024-03502-8.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003635
