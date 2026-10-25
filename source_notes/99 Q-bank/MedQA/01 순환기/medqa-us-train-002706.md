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

34세 여성이 4주 전 건강검진에서 혈압이 148/98 mmHg로 측정되어 추적 진료를 받으러 왔다. 현재 특별한 증상은 없다. 20년 전부터 중등도에서 중증의 조짐편두통이 있었고, 지난 1년 동안 두통이 일주일에 1~2회 발생했다. 복용 중인 약은 수마트립탄뿐이다. 일주일에 2~3회 달리기를 하고 일주일에 한 번 요가를 한다. 남편과 성생활을 하며 콘돔은 일관되게 사용하지 않는다. 아버지는 제2형 당뇨병과 고혈압이 있다. 체온은 37.2°C, 맥박은 76회/분, 호흡수는 12회/분, 혈압은 143/92 mmHg이다. 20분 후 앉은 자세에서 혈압을 다시 측정하니 145/94 mmHg였다. 신체검사는 정상이다. 다음 중 이 환자에게 가장 적절한 약물치료는?

## 선택지

A. 하이드로클로로티아지드
B. 리시노프릴
C. 프로프라놀롤
D. 프라조신

## 해설

빈번한 편두통의 예방치료가 필요하고 고혈압도 있어 선택지 중 propranolol C는 두 문제에 모두 도움이 된다. 다만 β차단제가 모든 단순 고혈압에서 일차약인 것은 아니다. 임신 가능성·기도질환·서맥 등 금기와 환자 선호를 함께 검토하며, 피임이 불확실한 환자에게 ACE 억제제를 무조건 선택해서는 안 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Propranolol C는 편두통 예방과 동반 혈압 치료의 선택지상 이점; β차단제가 모든 단순 HTN의 1차약이라는 설명은 수정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002706
