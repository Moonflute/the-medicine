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

39세 여성의 복부 초음파에서 14 mm의 넓게 붙은 담낭용종과 인접 담낭벽 비후가 발견됐다. 증상은 없고 수술을 받을 수 있는 상태다. 대한복부영상의학회 권고에 따른 적절한 다음 조치는?

## 선택지

A. 담낭절제술을 위해 수술 적합성과 환자 선호를 평가한다
B. 증상 없이 우연히 발견됐으므로 추적을 종료한다
C. ERCP로 담낭용종을 제거한다
D. 크기와 형태에 관계없이 초음파만 추적한다

## 해설


국내 영상 권고에서는 수술이 가능한 환자의 담낭용종이 15 mm 이상이거나, 10–14 mm이면서 넓게 붙은 형태나 인접 담낭벽 비후 같은 위험 소견이 있을 때 담낭절제술을 권고한다. 14 mm라는 크기만으로 암을 확진하거나 모든 경우에 수술하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009746 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 14mm 담낭용종 수술 A는 유럽 다학회 기준에 부합하나 악성 확진/모든 지침 동일 문턱이라는 주장 한정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9038818/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009746
- https://doi.org/10.3348/kjr.2024.0914
