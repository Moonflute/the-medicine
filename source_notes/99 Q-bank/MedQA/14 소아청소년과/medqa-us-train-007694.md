---
type: qbank
schema_version: 1
id: medqa-us-train-007694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:897cf7c13888c51e51eadaf1c90cdb30af2a055359fa67ac8408d1189faf50eb
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "cerebral palsy"
  - "spastic diplegia"
  - "prematurity"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64eM7ISxIOuniOu5hCAoQ2VyZWJyYWwgUGFsc3kpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13개월 아이가 생후 9개월부터 왼손만 써 왔다. 오른손은 자주 주먹을 쥐고, 기어갈 때 오른쪽 다리를 끈다. 진찰에서도 오른쪽 팔다리의 경직과 항진반사가 확인된다. 가장 적절한 해석은?

## 선택지

A. 일찍 왼손잡이가 된 정상 변이다
B. 아직 걷지 못할 수 있으므로 두 돌까지 평가할 필요가 없다
C. 양쪽 다리를 쓰므로 근력 차이는 의미가 없다
D. 편측 운동장애를 의심하고 소아신경 및 조기재활 평가를 연결한다

## 해설

돌 전 뚜렷한 한 손 선호와 비대칭 운동, 항진반사는 단순한 손잡이가 아닌 편측 운동장애의 단서다. 병인을 평가하면서 조기지원을 연결한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: hand preference를 손잡이 선호로 오역한 핵심 신경학 단서를 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007694
- https://www.aacpdm.org/publications/care-pathways/early-detection-of-cerebral-palsy/
