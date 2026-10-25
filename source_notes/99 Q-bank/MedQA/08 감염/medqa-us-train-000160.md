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
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWV0b2Nsb3ByYW1pZGUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9TdW1hdHJpcHRhbi5tZA
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


복통·자율신경/말초신경 증상과 소변 ALA·PBG 상승은 급성 간성 포르피린증 발작을 지지한다. Primidone(A)은 phenobarbital 관련 효소 유도와 헴 수요 증가로 발작을 유발할 수 있어 포르피린증에 금기이다. 요산 상승이나 헴 전구체 억제가 기전이라는 기존 설명은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000160 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ALA/PBG 상승의 급성 간성 포르피린증과 primidone A 유지. 요산 상승이라는 오연결 및 헴 전구체 억제제라는 정반대 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=e4e493bd-94d7-7e5a-e053-2995a90a2706&type=pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000160
