---
type: qbank
schema_version: 1
id: medqa-us-train-009042
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b50e00a99487054df050af14aaef8be29b3c758b0d81093814e1c23b32d0d49a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "homocystinuria"
  - "cystathionine beta-synthase deficiency"
  - "lens dislocation"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Zi466qo7Iuc7Iqk7YWM7J2464eo7KadIChIb21vY3lzdGludXJpYSkubWQ
difficulty: standard
answer: C
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

4세 남아가 건강검진을 위해 내원했다. 20개월에 걷기 시작했고 컵으로 마실 수 있지만 식기는 사용하지 못한다. 두 단어 문장을 말하고 블록 4개를 쌓을 수 있다. 낙서는 하지만 원을 그리지는 못한다. 키는 99백분위수 초과, 체중은 15백분위수이다. 양쪽 수정체가 아래쪽으로 탈구되어 있고 손가락이 길고 가늘며 높은 입천장이 있다. 손목을 반대 손으로 잡으면 엄지와 새끼손가락이 겹친다. 목 피부가 쉽게 늘어난다. 다음 중 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 하이포잔틴-구아닌 포스포리보실전이효소 결핍
B. 피브릴린-1 결핍
C. 시스타티오닌 합성효소 결핍
D. 갈락토키나아제 결핍

## 해설

마르판형 체형, 발달지연과 아래쪽 수정체 탈구는 cystathionine β-synthase 결핍의 호모시스틴뇨증(C)을 시사한다. 눈동자 자체의 탈구가 아니며, Marfan의 fibrillin-1 이상과 달리 발달 문제와 수정체 탈구 방향이 감별에 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 수정체 탈구를 동공 탈구로, 제시되지 않은 관절 소견을 고긴장성으로 쓴 오류 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009042
