---
type: qbank
schema_version: 1
id: medqa-us-train-007277
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff6e23f7dba25f069009d320097c06647ad430160e479bae1109643a2d9d4ec6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "베타 지중해빈혈 보인자"
  - "표적세포"
  - "경미한 소구성 빈혈"
  - "안심"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: management
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

검진에서 우연히 소구성 빈혈이 발견된 19세 환자다. 혈색소는 11.2g/dL, MCV는 63fL, 적혈구 수는 560만/μL다. 페리틴과 트랜스페린 포화도는 정상이고 HbA₂는 5.8%다. 적절한 조치는?

## 선택지

A. 철결핍으로 간주해 철분을 장기 복용한다
B. 베타 지중해빈혈 보인자임을 설명하고 필요시 유전상담을 한다
C. 정기 적혈구 수혈을 시작한다
D. 비장절제술을 권한다

## 해설


정상 철 상태에 비해 소구성이 뚜렷하고 HbA₂가 증가한 소견은 베타 지중해빈혈 보인자와 맞는다. 철결핍이 확인되지 않으면 철분이 필요하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007277 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: beta-thal trait 자체의 안심 C 유지; 귀국 후 발열을 모두 보인자로 설명해 무시하지 않도록 분리.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nhs.uk/conditions/thalassaemia/carriers/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007277
- https://pubmed.ncbi.nlm.nih.gov/35593002/
- https://www.ncbi.nlm.nih.gov/books/NBK614253/
