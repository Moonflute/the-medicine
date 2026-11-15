---
type: qbank
schema_version: 1
id: medqa-us-train-010123
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:081850743ea8627e19d9d65ac8381020af44d8ba190b86d6f032d48f97a8c062
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "성홍열"
  - "연쇄상구균 인두염"
  - "딸기혀"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7ISx7ZmN7Je0IChTY2FybGV0IEZldmVyKS5tZA
  - MDgg6rCQ7Je8L-yCrOyKrOyVjOq3oCDsnbjrkZDsl7wgKFN0cmVwdG9jb2NjYWwgUGhhcnluZ2l0aXMpLm1k
question_type: diagnosis
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
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

12세 남아가 발열과 인후통 며칠 뒤 몸통부터 전신으로 퍼진 붉은 발진으로 내원했다. 발진은 만지면 사포처럼 거칠다. 아목시실린은 발진이 생긴 뒤 처음 복용했다. 가장 가능성 높은 진단은?

## 선택지

A. 감염성 단핵구증
B. 류마티스열
C. 성홍열
D. 두드러기

## 해설


발열과 인후염 뒤 사포 같은 발진이 생긴 경과는 A군 사슬알균 감염에 의한 성홍열을 시사한다. 발진은 아목시실린 투여 전에 시작했으므로 투약 후 발생한 발진으로 볼 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010123 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발진은 amoxicillin 투여 전 시작했고 인후염 후 거친 발진은 scarlet fever C 지지. 누락 그림의 딸기혀를 실제 보았다고 주장하지 않고 독소 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010123
