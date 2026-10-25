---
type: qbank
schema_version: 1
id: medqa-us-train-004329
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff33b50cbdd95ec47e8590637657f3a7a2efb2f586b2f4d4a9055b00ddb10ebb
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "엔젤만 증후군"
  - "15번 염색체 부계 단친 이염색체"
  - "발달지연"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Y6Y64uQ7LyA7Yak64eo7KadIChQaGVueWxrZXRvbnVyaWEpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
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

6세 남아가 발작으로 소아과에 왔다. 지난 3일 동안 약 30초간 지속되는 발작을 두 번 했고, 12개월부터 일 년에 몇 번씩 발작을 해왔다. 지적장애가 있으며 14개월에 뒤집고 24개월에 걸었다. 가족력에 간질이나 다른 신경질환은 없다. 키 3백분위수, 체중 15백분위수이다. 신체검사에서 잘 웃고 행복해 보이며 사시, 실조성 보행, 손 퍼덕임이 있다. 질문에 간헐적으로 한 단어로 대답한다. 가장 가능성 높은 유전적 이상은 무엇인가?

## 선택지

A. 5번 염색체 거대결실
B. 15번 염색체 모계 단친 이염색체
C. 15번 염색체 부계 단친 이염색체
D. 삼핵산 반복질환

## 해설

Angelman 증후군은 신경세포에서 모계 유래 UBE3A 기능이 소실되어 발생한다. 부계 단친이염색체성(paternal uniparental disomy, C)은 가능한 원인 중 하나이다. 모계 영역 결실 등 다른 원인도 있으며, 행복한 표정·심한 언어 지연·실조·경련이 제시된 임상상과 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Angelman의 모든 원인을 부계 UPD로 일반화하는 표현과 용어를 보정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004329
