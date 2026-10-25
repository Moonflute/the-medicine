---
type: qbank
schema_version: 1
id: medqa-us-train-001338
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1da323354a8913d67041c393fa8a92cbba4a6981486070dfebaedfde3ceb2d2d
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "fragile X syndrome"
  - "mitral valve prolapse"
question_type: prognosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDsnbztg4jspp0gKE1pdHJhbCBWYWx2ZSBQcm9sYXBzZSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
difficulty: standard
answer: D
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

3세 남아가 발달 지연 평가를 위해 내원했다. 12개월에 혼자 앉을 수 있었고 2세에 지지받으며 걷기 시작했다. 익숙한 물건 몇 개만 이름을 말하고 두 단어로 된 간단한 문장을 사용한다. 블록을 2개 넘게 쌓지 못한다. 부모는 다른 아이들과 노는 것을 좋아하지 않는다고 한다. 머리둘레는 80백분위수, 키는 85백분위수, 체중은 50백분위수이다. 얼굴은 길고 좁으며 귀가 크고 돌출되어 있다. 엄지손가락을 같은 쪽 팔뚝까지 수동으로 굽힐 수 있다. 이 환자에게 다음 중 어떤 질환이 발생할 위험이 증가하는가?

## 선택지

A. 급성 골수성 백혈병
B. 대동맥 박리
C. 고요산혈증
D. 승모판 역류

## 해설

발달지연·긴 얼굴·돌출 귀와 엄지를 팔뚝까지 굽힐 수 있는 관절 과유연성은 취약 X 증후군을 시사한다. 결합조직 관련 승모판탈출과 역류(D)가 가능하다. 본문에는 손발톱 이상이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 취약 X의 승모판 역류 D 연관 유지. 손발톱 소견 창작을 관절 과유연성으로 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001338
