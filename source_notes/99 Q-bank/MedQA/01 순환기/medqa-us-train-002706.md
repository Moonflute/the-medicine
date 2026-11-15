---
type: qbank
schema_version: 1
id: medqa-us-train-002706
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:57e667bd1c38b825bebfd23cce0c2baf7b8b3db74a27d884a1f8eadcd297e237
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "migraine with aura"
  - "migraine prophylaxis"
  - "hypertension"
  - "propranolol beta-blocker"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjrjrkZDthrUgKE1pZ3JhaW5lKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

34세 여성이 한 달에 6일 이상 조짐편두통으로 일상에 지장이 있다. 가정혈압 평균은 145/93 mmHg이고 맥박은 78회/분이다. 임신 중이 아니고 천식이나 방실차단 병력은 없다. 편두통 예방과 혈압 조절에 함께 쓸 수 있는 약은?

## 선택지

A. 히드로클로로티아지드
B. 탐술로신
C. 프로프라놀롤
D. 수마트립탄

## 해설

프로프라놀롤은 편두통 발작을 예방하는 데 근거가 있으며 혈압도 낮춘다. 모든 단순 고혈압에서 베타차단제가 첫 선택이라는 뜻은 아니다. 수마트립탄은 급성 발작 치료제이며 조절되지 않는 고혈압에서는 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Propranolol C는 편두통 예방과 동반 혈압 치료의 선택지상 이점; β차단제가 모든 단순 HTN의 1차약이라는 설명은 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002706
- https://www.e-hpr.org/journal/view.php?doi=10.62087%2Fhpr.2024.0019
- https://koreanhypertension.org/reference/guide?idno=10446&mode=read
