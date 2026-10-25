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

12세 남아가 발진으로 어머니와 함께 응급실에 내원했다. 며칠 전 인후통이 있었고 처음에는 목캔디로 잘 조절되었지만 오늘 전신에 발진이 생겼다. 어머니는 허브 치료제를 발진에 발랐으나 호전이 없었고, 이전 감염 때 남은 아목시실린을 한 번 투여했다. 예방접종은 최신 상태이고 과거력은 없다. 체온 38.3°C, 혈압 102/68 mmHg, 맥박 분당 97회, 호흡수 분당 19회, 산소포화도 99%이다. 신체검사 소견이 그림 A와 B에 제시되어 있고 그림 B의 발진은 매우 거칠다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 감염성 단핵구증
B. 류마티스열
C. 성홍열
D. 두드러기

## 해설


인후염 뒤 생긴 전신의 거친 사포 같은 발진은 성홍열(C)을 시사한다. A군 연쇄상구균의 발열성 외독소와 관련된 질환이다. 발진이 생긴 뒤 amoxicillin을 한 번 투여했으므로 이를 항생제 유발 EBV 발진의 근거로 삼지 않는다. 딸기혀는 가능한 소견이지만 누락된 그림에서 확인한 사실로 덧붙일 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010123 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 발진은 amoxicillin 투여 전 시작했고 인후염 후 거친 발진은 scarlet fever C 지지. 누락 그림의 딸기혀를 실제 보았다고 주장하지 않고 독소 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/scarlet-fever.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010123
