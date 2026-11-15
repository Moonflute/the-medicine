---
type: qbank
schema_version: 1
id: medqa-us-train-000887
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:383a428a707987804dcbb74a8dcddda4826dd2e65c220a41d5c9b51724549e3d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "esophageal perforation"
  - "achalasia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC9QVUQg7LKc6rO1IChQZXJmb3JhdGlvbikubWQ
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_si53rj4Qg7J207JmE67aI64ql7KadIChBY2hhbGFzaWEpLm1k
question_type: management
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
---

# MedQA US 임상문제

## 문제

식도 확장술 도중 약 5 mm의 의인성 전층 결손이 즉시 발견됐다. 환자는 혈역학적으로 안정적이고 결손에 접근해 닫을 수 있다. 추가 합병증 평가와 금식을 진행하면서 고려할 처치는?

## 선택지

A. 내시경 클립으로 결손을 즉시 닫고 외과와 경과를 함께 평가한다
B. 작은 결손이므로 바로 경구 섭취를 시작한다
C. 다음 날까지 아무 조치 없이 기다린다
D. 결손 크기나 오염 여부와 관계없이 식도절제술을 시행한다

## 해설


즉시 발견한 작은 의인성 식도 천공은 적절한 조건에서 내시경 클립으로 닫을 수 있다. 금식, 항생제 및 추가 영상·외과 평가를 병행하고 누출 지속이나 패혈증이 생기면 치료를 확대한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000887 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 가스트로그라핀의 물성을 가스가 적음·흡인 폐렴 위험 없음으로 설명한 오류를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6544956/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000887
- https://pubmed.ncbi.nlm.nih.gov/32781470/
