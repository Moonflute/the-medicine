---
type: qbank
schema_version: 1
id: medqa-us-train-001050
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b6beb47731b22f72e0f036095d178c399951d4eb0d873b0e2081c7d92b5e2a32
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "familial adenomatous polyposis"
  - "colon cancer"
  - "adenomatous polyps"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qsIDsobHshLEg7ISg7KKF7ISxIOyaqeyiheymnSAoRkFQKSAoRmFtaWxpYWwgQWRlbm9tYXRvdXMgUG9seXBvc2lzKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rjIDsnqUg7Y-Q7IeEIChMYXJnZSBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvT3hhbGlwbGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

17세 가족성 선종성 용종증 환자의 대장 전체에 선종이 수백 개 있고 직장에도 30개 이상이다. 내시경으로 모두 제거하기 어렵다. 대장암 위험을 낮출 계획 수술은?

## 선택지

A. 직장은 남기는 결장절제와 회장직장문합
B. 직장결장절제술과 회장낭-항문문합술
C. 선종이 가장 많은 결장 구간만 절제
D. 수술 없이 매년 대변잠혈검사

## 해설


직장에도 선종이 많아 내시경으로 관리하기 어려우면 직장을 남기는 수술보다 직장결장절제와 회장낭-항문문합을 고려한다. 수술 뒤에도 남은 점막과 회장낭의 감시를 계속한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001050 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: FAP에서 수백 개의 결장 선종과 30개 초과 직장 선종은 직장결장절제·회장항문문합 C를 지지한다. 원문·해설 일치; 실제 수술 방식과 시기는 기능·생식·종양 위험을 함께 상의한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/2024-Polyposis-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001050
