---
type: qbank
schema_version: 1
id: medqa-us-train-000920
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f279d57f0cca088aedeeaeba99b1ca9f23db780e0d7c72015d3b7950d9f18260
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Hartnup disease"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

10세 소년이 낫지 않는 일광화상으로 어머니와 함께 내원하였다. 어머니는 아이가 쉽게 일광화상을 입는다고 말한다. 어머니는 아이를 집에서 출산했으며 한 번도 의사에게 진료를 받게 한 적이 없다고 인정한다. 환자는 넓은 보폭으로 걸으며 서 있을 때 불안정해 보인다. 환자는 얼굴, 목, 팔, 다리에 광범위한 홍반성, 인설성, 과각화성 발진이 있다. 광범위한 검사 결과, 환자는 중요한 비타민의 흡수 결함을 초래하는 유전 질환을 앓고 있는 것으로 밝혀졌다. 측정 시 낮게 나타날 가능성이 있는 것은 무엇인가?

## 선택지

A. 나이아신(Niacin)
B. 비타민 A
C. 비타민 K
D. 엽산(Folate)

## 해설


Hartnup disease는 트립토판 흡수 장애로 니아신(비타민 B3) 합성이 감소해 나이아신 결핍을 일으킨다. 환자의 광범위한 광화상 및 각질화는 나이아신 결핍(펠라그라)과 일치한다. 따라서 정답은 A이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000920
