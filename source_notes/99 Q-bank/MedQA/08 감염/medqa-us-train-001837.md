---
type: qbank
schema_version: 1
id: medqa-us-train-001837
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2b38ab9d5ed591b4c4542afc17665c4e5f6bf32328db5dbe75e14734264d9b6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "severe combined immunodeficiency"
  - "B-cell deficiency"
  - "T-cell deficiency"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7KSR7KadIOuzte2VqSDrqbTsl60g6rKw7ZWN7KadIChTZXZlcmUgQ29tYmluZWQgSW1tdW5vZGVmaWNpZW5jeSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 남아가 일주일간의 발열, 호흡곤란 및 기침으로 내원했다. 지난 1년 동안 부비동염 4회, 상기도감염 3회, 입원이 필요했던 중증 세기관지염 1회를 앓았다. 출생 이후 nystatin으로 치료한 구강 칸디다증이 반복되었고 만성 설사와 성장장애도 있다. 체온 38.0°C (100.4°F), 맥박 130/min, 호흡 38/min, 혈압 106/63 mm Hg, 실내 공기 산소포화도 88%이다. 양측 수포음과 천명음이 들리고 콧등 돌출, 코날개 저형성, 짧은 턱, 기형 귀가 있다. 흉부 X선에서 과팽창, 간질 침윤 및 무기폐가 보이며 RSV 비인두 흡인검사가 양성이다. 다음 중 어떤 결핍이 가장 가능성 높은가?

## 선택지

A. B세포
B. T세포
C. B세포와 T세포
D. 백혈구 부착

## 해설


반복 바이러스·진균 감염, 만성 설사와 성장장애에 특징적인 안면기형이 동반되어 DiGeorge 증후군 같은 흉선 발달장애에 의한 T세포 결핍 B가 가장 부합한다. T세포 기능 저하는 항체 반응에도 영향을 줄 수 있으나 이 사례를 곧바로 B·T 세포 모두의 중증 복합면역결핍이라고 확정하는 것은 적절하지 않다. 칼슘, 심장 기형과 22q11.2 결실 등 추가 평가로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001837 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 특징적 안면기형을 무시하고 SCID를 진단한 해설을 DiGeorge/흉선 저형성에 따른 T세포 결핍으로 교체.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001837
