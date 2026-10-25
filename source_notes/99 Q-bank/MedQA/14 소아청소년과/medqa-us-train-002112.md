---
type: qbank
schema_version: 1
id: medqa-us-train-002112
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2e09ed02f6d81c920075fd8833b02d699c8c0fbdc798a1b3afce0a62d6267755
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "fragile X syndrome"
  - "FMR1"
  - "CGG repeat expansion"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

14세 남아가 위턱과 아래턱에 치아가 너무 많다는 이유로 부모와 함께 소아과에 왔다. 만삭에 제왕절개로 태어났고 출생 체중은 3.6 kg이었다. 생후 6개월까지 모유수유를 했고 이후 고형식을 시작했다. 출생 직후 바로 울지 않아 중환자실에 입원했으며 그곳에서 황달도 발생했다. 지적장애의 가족력이 있다. 운동 발달이 지연되었다. 지능지수는 56이다. 체온 37.0°C, 맥박 88회/분, 호흡 20회/분이다. 신체검사에서 자폐 양상의 행동장애, 긴 얼굴과 넓은 이마, 돌출된 턱이 보인다. 구강검사에서 위아래 치열궁 모두에 여러 치아가 빽빽하게 나 있고 높은 구개와 큰 혀가 보인다. 생식기검사에서 고환이 커져 있다. 파노라마 방사선검사에서 위아래 치열궁의 치아 밀집과 일부 치아의 선천적 결손이 보인다. 다음 중 이 소견을 설명하는 가장 가능성 높은 삼염기 반복서열은?

## 선택지

A. CGG
B. CAG
C. GAA
D. CTG

## 해설

지적·발달장애와 자폐 양상, 긴 얼굴·큰 이마·돌출 턱, 큰 고환은 취약X증후군을 시사한다. FMR1의 CGG 반복 확장(A)이 관련된다. 원문의 영상은 치아 밀집과 일부 선천 결손을 기술하므로 보호자가 말한 '치아가 많다'를 모두 진짜 과잉치로 확정해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 치아 밀집을 실제 과잉치로 확정해 취약X 진단 근거로 쓴 해설을 주요 유전·임상 소견 중심으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002112
