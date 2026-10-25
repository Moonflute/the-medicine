---
type: qbank
schema_version: 1
id: medqa-us-train-006342
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2bfb89deb8456dc6b4580c3cb8de652813ff60a355bb4fee63014b210b573ac
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "낭성섬유증"
  - "녹농균 감염"
  - "기관지확장증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4sOq0gOyngCDtmZXsnqXspp0gKEJyb25jaGllY3Rhc2lzKS5tZA
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
  - MDgg6rCQ7Je8L-uFueuGjeq3oCAoUHNldWRvbW9uYXMgQWVydWdpbm9zYSkubWQ
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: machine-generated
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

20세 여성이 낭성섬유증으로 치료받으며 추적 진료를 위해 내원했다. 최근 1년 동안 반복되는 기침과 악취가 나는 점액농성 가래로 고생하고 있다. 각 에피소드는 약 일주일 지속되다가 가라앉는다. 이때 발열이나 오한은 없다. 소아기에 폐렴으로 여러 차례 입원했고 지금도 설사가 지속된다. 신체적으로 저체중이며 힘들어 보인다. 청진에서 양쪽 폐 하부의 호흡음이 감소하고 거친 수포음이 두드러진다. 다음 중 이 환자가 겪는 반복 증상과 가장 관련성이 높은 감염원은?

## 선택지

A. 히스토플라스마
B. 마이코박테리움 아비움
C. 폐렴구균
D. 녹농균

## 해설


낭성섬유증 환자에서 반복적인 녹농균 감염이 흔하며, 녹농균은 점액에 서식해 악취가 나는 가래를 유발한다. 따라서 가장 관련된 병원체는 녹농균이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 성인CF의 반복 화농성 호흡기감염은 제시 중 Pseudomonas D와 가장 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006342
