---
type: qbank
schema_version: 1
id: medqa-us-train-001982
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:66c08cd634a1f385268eaaf9a626194a9af141beb64aa4e985baffc2654e11d3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "diabetic peripheral neuropathy"
  - "neuropathic pain"
  - "nortriptyline"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uMgOyDgSDtj6zsp4QgKEhlcnBlcyBab3N0ZXIpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Ub3BpcmFtYXRlLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9UcmFtYWRvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

61세 여성이 발의 저림, 무감각 및 통증으로 내원했다. 통증은 지속적이고 화끈거리며 시각통증척도 5/10이다. 발 감각저하로 여러 번 넘어졌고 5년 전 당뇨병과 당뇨망막병증을 진단받아 metformin 1000 mg을 하루 두 번 복용하지만 추적진료는 없었다. 복부 비만과 선조가 있고 양측 경동맥 잡음, 양측 발목반사 감소, 발목까지 대칭적인 촉각 감소 및 진동감각 소실, 경한 운동실조와 양성 Romberg 검사가 있다. 통증 치료에 사용할 약물은 무엇인가?

## 선택지

A. Morphine
B. Tramadol
C. Topiramate
D. Nortriptyline

## 해설

당뇨를 배경으로 한 대칭원위 감각저하·반사감소와 작열통은 통증성말초신경병을 시사한다. 선지중 노르트립틸린(D) 같은TCA는 근거가 있는 선택이다. SNRI/가바펜티노이드 등 다른초기약제도 있고 오피오이드(트라마돌포함)는 통상선택하지 않는다. TCA의 항콜린·기립저혈압·심장전도/낙상위험을 평가하며 혈당조절과 B12결핍 등 다른신경병원인도 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Nortriptyline의 보편적우월성 표현을 선지내적절성/안전성으로 수정. D 유지.
- 공식/학회 근거: https://diabetesjournals.org/care/article-lookup/doi/10.2337/dc26-S012

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001982
