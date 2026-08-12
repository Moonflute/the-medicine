---
type: qbank
schema_version: 1
id: medqa-us-train-000160
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6ac0c4af4932689596e57926e1ba70942e57d69e7242fe927442181d5e0feb85
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute intermittent porphyria"
  - "Acute intermittent porphyria"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
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

28세 여성이 2일간 심해지는 복통으로 응급실에 내원했다. 통증은 전반적이고 지속적이며, 강도는 10점 만점에 7점이라고 설명한다. 또한 12시간 전부터 하지의 저림 증상이 있었다. 환자는 제1형 당뇨병, 조짐을 동반한 편두통, 본태성 떨림(essential tremor)을 앓고 있다. 환자는 불편해 보이며, 장소와 사람에 대해서만 지남력이 있다. 체온은 37°C, 맥박은 분당 123회, 혈압은 140/70 mmHg이다. 진찰 결과 복부 팽만이 관찰되나 촉진 시 압통은 없다. 장음은 감소되어 있다. 하지의 근력과 감각이 저하되어 있다. 우측 상지에 떨림이 있다. 소변 검사에서 아미노레불린산(aminolevulinic acid)과 포르포빌리노겐(porphobilinogen) 수치가 상승했다. 이 환자 증상의 가장 가능성 있는 원인은 무엇인가?

## 선택지

A. 프리미돈(Primidone)
B. 플루나리진(Flunarizine)
C. 메토클로프라미드(Metoclopramide)
D. 수마트립탄(Sumatriptan)

## 해설


환자는 복통, 구역, 말초 신경 증상, 요산 및 포르포빌리노겐 상승으로 급성 간헐성 포르피린증을 시사한다. 이 질환은 헴 전구체 억제제인 프리미돈이 악화시킬 수 있다. 따라서 원인 약물은 프리미돈이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000160
