---
type: qbank
schema_version: 1
id: medqa-us-train-009746
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:febb16bd0bb67effd36cb4c89166c8f4caf0c02f19ba6fc0442c65289a932a14
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "담낭 용종"
  - "담낭절제술"
  - "담낭암 위험"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trgq3slZQgKEdhbGxibGFkZGVyIENhbmNlcikubWQ
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

39세 여성이 몇 시간 전부터 시작된 우상복부 불편감으로 응급실에 내원했다. 통증은 둔하며 방사되지 않는다. 과거에도 비슷한 통증이 있었지만 저절로 호전되었다고 한다. 체온 37°C, 호흡수 분당 16회, 맥박 분당 78회, 혈압 122/98 mmHg이다. 신체검사는 복부 전반의 압통을 제외하면 정상이다. 제한적 복부 초음파에서 1.4cm 크기의 담낭 용종이 발견되었다. 이 환자에서 다음으로 시행할 가장 적절한 처치는?

## 선택지

A. 담낭절제술
B. 내시경 역행 담췌관 조영술(ERCP)
C. 자기공명 담췌관 조영술(MRCP)
D. 추가 치료가 필요하지 않음

## 해설


정답 A. 제시된 1.4cm(14mm) 담낭용종은 유럽 다학회 권고의 10mm 이상 수술 고려 기준에 해당하여 수술 적합성과 동의를 확인하고 담낭절제술을 권할 수 있다. 크기만으로 이미 악성이라고 확진하는 것은 아니며 실제 위험 평가는 형태·성장·동반 위험인자도 반영한다. 각 영상학회 지침의 추적/수술 문턱이 모두 동일한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009746 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 14mm 담낭용종 수술 A는 유럽 다학회 기준에 부합하나 악성 확진/모든 지침 동일 문턱이라는 주장 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9038818/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009746
