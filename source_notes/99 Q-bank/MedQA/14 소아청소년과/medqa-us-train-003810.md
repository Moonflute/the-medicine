---
type: qbank
schema_version: 1
id: medqa-us-train-003810
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a9cb5639d96162f39b844c5abd9ad7788f642b56ef9f9accfaf8d73180b836f6
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Haemophilus influenzae meningitis"
  - "sickle cell disease"
  - "meningitis complication"
  - "sensorineural hearing loss"
question_type: investigation
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-uPjOuwnOyEsSDrgpzssq0gKFN1ZGRlbiBzZW5zb3JpbmV1cmFsIGhlYXJpbmcgbG9zcykubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IeE7ZWtIChJbXBlcmZvcmF0ZSBBbnVzKS5tZA
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

7세 아이가 세균성 수막염 치료를 마쳤다. 의식과 보행은 정상으로 회복됐고 보호자가 볼 때 소리에도 반응한다. 퇴원 전이나 퇴원 직후에 계획할 평가는?

## 선택지

A. 증상이 없어도 뇌 MRI를 매달 시행한다
B. 청력은 말이 늦어질 때만 검사한다
C. 수막염이 나았음을 확인하기 위해 모든 아이에서 요추천자를 반복한다
D. 가능하면 퇴원 전에 정식 청력검사를 하고, 어렵다면 곧 시행하도록 연결한다

## 해설


세균성 수막염 뒤에는 겉으로 회복돼 보여도 감각신경성 난청이 남을 수 있다. 퇴원 전에 청력을 평가하고 여의치 않으면 늦어도 4주 내 검사를 연결한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003810
- https://www.who.int/publications/i/item/9789240108042
- https://www.nice.org.uk/guidance/ng240/chapter/Recommendations
