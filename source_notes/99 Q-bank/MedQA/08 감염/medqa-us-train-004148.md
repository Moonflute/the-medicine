---
type: qbank
schema_version: 1
id: medqa-us-train-004148
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:61724a374230b4d47da0f7b3af0a8ebb53bb17b5e7120443c75fa8a0aca75726
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "신생아 단순포진바이러스 감염"
  - "HSV 뇌염"
  - "소수포성 발진"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64uo7Iic7Y-s7KeE67CU7J2065-s7IqkIOqwkOyXvCAoSGVycGVzIFNpbXBsZXggVmlydXMgSW5mZWN0aW9uKS5tZA
  - MDgg6rCQ7Je8L-uLqOyInO2PrOynhCDqsJDsl7wgKEhlcnBlcyBTaW1wbGV4IEluZmVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
  - ZHJ1ZzowOCDqsJDsl7wvR2FuY2ljbG92aXIubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

생후 10일 된 아기가 발열과 수유 저하로 왔다. 홍반 위에 수포가 모여 있고 국소 발작이 있었다. 신생아 패혈증 평가와 경험적 항균제와 함께, HSV PCR을 기다리며 추가할 약은?

## 선택지

A. 정맥 간시클로버
B. 정맥 아시클로버
C. 경구 아시클로버
D. 정맥 플루코나졸

## 해설


신생아의 수포, 발작과 전신 증상은 중추신경계 또는 파종성 HSV 감염을 시사한다. 검체를 채취하되 검사 결과까지 기다리지 않고 정맥 아시클로버를 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004148 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 군집 수포·발작·신생아 CSF 이상에서 IV acyclovir C를 공식 신생아 HSV 권고와 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/herpes.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004148
- https://doi.org/10.1177/09564624241280734
