---
type: qbank
schema_version: 1
id: medqa-us-train-000063
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:73a0e09d85a12cfed24f89eb5722890f855ed9be07310a5f3f743ba76424a890
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "Medial collateral ligament injury"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-uCtOy4oSDsuKHrtoAg7J2464yAIOyGkOyDgSAoTWVkaWFsIENvbGxhdGVyYWwgTGlnYW1lbnQgSW5qdXJ5KS5tZA
difficulty: standard
answer: C
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

20세 남성이 농구 경기 중 넘어진 지 이틀 만에 내원하였다. 환자는 무릎의 가쪽(lateral aspect)이 다른 선수의 무릎과 부딪혔다고 말한다. 진찰 결과, 환자의 오른쪽 무릎은 왼쪽 무릎과 크기가 같아 보이며 부종이나 관절 삼출은 없다. 환자는 양쪽 하지의 감각과 근력이 정상이다. 환자의 오른쪽 무릎은 내반 스트레스 검사(varus stress test)에서는 이완이 없으나, 왼쪽 무릎과 비교했을 때 외반 스트레스 검사(valgus stress test)에서 더 이완되어 있다. Lachman 검사와 후방 전위 검사(posterior drawer test) 모두 이완 없이 단단한 끝점(firm endpoint)을 보인다. 이 환자가 손상받은 구조물은 무엇인가?

## 선택지

A. 후방 십자인대(Posterior cruciate ligament)
B. 전방 십자인대(Anterior cruciate ligament)
C. 내측 측부인대(Medial collateral ligament)
D. 외측 측부인대(Lateral collateral ligament)

## 해설


외측 스트레스 검사에서 비정상적인 이완이 나타나고, 내반 스트레스 검사에서는 정상으로 유지되는 것은 내측 측부인대 손상을 의미한다. 내측 측부인대는 무릎의 내측 안정성을 제공하므로 손상 시 외측 스트레스에 대한 과도한 이완이 관찰된다. 따라서 손상된 구조물은 내측 측부인대이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000063
