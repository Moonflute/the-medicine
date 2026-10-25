---
type: qbank
schema_version: 1
id: medqa-us-test-001127
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2d6b1261c31992e313a234f55525ac7c8c73c1c76546c5fb82f380dfcc972d9f
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "뇌사"
  - "각막반사"
  - "중증 외상성 뇌손상"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsgqwgKEJyYWluIGRlYXRoKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성이 고속 교통사고 후 응급실에 왔다. 경추 보호대를 하고 반응이 없으며 동공은 산대되고 빛에 반응하지 않았다. 삽관 후 기계환기를 시작했고 독성검사는 음성이었다. 비조영 두부 CT에서 대량 두개내 출혈과 C3 경추 손상이 보였다. 뇌사 진단을 위한 다음 단계로 가장 적절한 검사는?

## 선택지

A. 뇌파검사
B. 자기공명 혈관조영술
C. 심부건반사 검사
D. 각막반사 검사

## 해설

명확한 치명적 뇌손상 뒤에도 저체온·진정제·대사 이상 등 교란을 배제하고 의식·뇌간반사·무호흡 평가를 체계적으로 해야 한다. 선지 중 각막반사 검사(D)는 뇌간 기능 평가에 해당한다. 각막반사 소실 하나만으로 뇌사를 확진할 수 없다. 경추 손상은 일부 검사·호흡 평가 해석을 제한할 수 있어 안전한 검사 범위와 필요한 보조검사를 전문가가 판단한다. 2023 AAN 지침은 EEG나 MRA를 표준 보조검사로 권고하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 각막반사 D는 검사 구성요소이나 최소 반사 한 가지만으로 뇌사를 판정한다는 해설을 교정한다.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC10791061/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001127
