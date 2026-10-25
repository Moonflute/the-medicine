---
type: qbank
schema_version: 1
id: medqa-us-validation-000434
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8b41a287c7d30836d52a8d7dde82355a086576bab79d536971a8c3ccc8a8326d
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "간세포암"
  - "만성 C형간염"
  - "알파태아단백"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_rp4zshLEgQ-2YlSDqsITsl7wgKENocm9uaWMgSGVwYXRpdGlzIEMgKEhDVikpLm1k
question_type: investigation
difficulty: complex
answer: B
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

52세 남성이 3개월 동안 3.6 kg의 체중감소와 점점 심해지는 피로로 진료를 받으러 왔다. 6년 전 C형간염을 진단받았고, 진찰에서 공막 황달, 손바닥 홍반, 흉부와 등에 여러 거미혈관종, 단단하고 결절성인 간이 보인다. 간 초음파에서 단일 병변이 보인다. 가장 가능성 높은 소견은?

## 선택지

A. 양성 혈액배양
B. 알파태아단백 상승
C. 암배아항원 상승
D. 흉부 CT에서 가시모양 병변

## 해설


만성 HCV·간경변 환자의 새로운 간 종괴와 체중감소는 간세포암을 의심하게 한다. AFP 상승 B는 선택지 중 이에 가장 관련된 검사 소견이다. 그러나 AFP가 모든 간세포암에서 증가하는 것은 아니고 정상 AFP로 배제하거나 AFP 단독으로 확진할 수 없다. 실제 평가는 위험군의 다상 조영 영상과 필요시 조직검사를 결합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000434 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HCC에서 AFP 상승 B 연관 유지하되 높은 민감도로 진단·배제 가능한 표지자라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10663390/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000434
