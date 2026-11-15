---
type: qbank
schema_version: 1
id: medqa-us-train-004802
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd169c473138e80a6962415f5668929862526b29642d562b6676440c9877d948
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "로키산 홍반열"
  - "Rickettsia rickettsii"
  - "진드기 매개 감염"
related_disease_slugs:
  - MDgg6rCQ7Je8L-udvOyehOuzkSAoTHltZSBEaXNlYXNlKS5tZA
question_type: management
difficulty: simple
answer: A
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
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

미국 노스캐롤라이나 여행에서 진드기에 물린 32세 환자가 귀국 후 고열과 심한 두통을 보인다. 손목·발목에서 시작된 점상발진이 손바닥까지 퍼졌고 혈소판이 낮다. 로키산 홍반열을 의심할 때 적절한 처치는?

## 선택지

A. 독시사이클린을 바로 시작한다
B. 급성기 혈청항체 양성이 확인된 뒤 독시사이클린을 시작한다
C. 아목시실린을 시작하고 항체 결과를 기다린다
D. 발진이 호전되는지 관찰 후 항생제를 결정한다

## 해설


여행지와 진드기 노출, 특징적 발진이 맞으면 독시사이클린을 경험적으로 투여한다. 초기 항체 검사는 음성일 수 있으므로 결과 때문에 치료를 미루지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004802 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RMSF를 Lyme과 혼동한 설명 교정; doxycycline D 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/rocky-mountain-spotted-fever/hcp/clinical-care/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004802
