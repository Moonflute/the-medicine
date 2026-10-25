---
type: qbank
schema_version: 1
id: medqa-us-train-003683
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c833ad30a652d1174737157aafdd1506cec91c07c41db98134db47e1a5a2a1e9
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypercholesterolemia"
  - "statin therapy"
  - "HMG-CoA reductase inhibition"
  - "diabetes cardiovascular risk"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwgOyhseyEsSDqs6DsvZzroIjsiqTthYzroaTtmIjspp0gKEZhbWlsaWFsIEh5cGVyY2hvbGVzdGVyb2xlbWlhKS5tZA
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 남성이 13년간의 제2형 당뇨병과 흡연력이 있으며 공복 지질검사에서 총콜레스테롤 280, LDL 210, HDL 40, 중성지방 230 mg/dL였다. 다음 중 이 환자에게 가장 적절한 초기 치료의 작용기전은?

## 선택지

A. 콜레스테롤 흡수 억제
B. 담즙산 결합
C. 콜레스테롤 합성 억제
D. PPAR-알파 활성화

## 해설


총콜레스테롤 280 mg/dL와 LDL 210 mg/dL에 대한 1차 치료는 HMG‑CoA 환원효소를 억제하는 스타틴이다. 스타틴은 간에서 콜레스테롤 합성을 차단해 LDL 수치를 낮춘다. 따라서 정답은 콜레스테롤 합성 억제이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: LDL210의 우선 약물군 statin은 HMG-CoA reductase 억제로 콜레스테롤 합성을 낮추는 C.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003683
