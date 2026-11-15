---
type: qbank
schema_version: 1
id: medqa-us-train-004986
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d004fae113833772fa843a583f514d39c098a4f741ce359d0297f2262ef0751e
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "급성 세균성 관절염"
  - "혈행성 관절 감염"
  - "패혈성 무릎관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-qwkOyXvCDqtIDsoIjsl7wgKEluZmVjdGlvdXMgQXJ0aHJpdGlzKS5tZA
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

42세 여성이 발열과 심한 무릎 통증으로 내원했다. 관절액이 화농성이며 백혈구 85,000/μL, 그람양성 구균이 보인다. 관절액과 혈액 배양은 채취했다. 다음 조치는?

## 선택지

A. 배양 최종 결과 전까지 진통제만 쓴다
B. 관절강에 스테로이드를 주사한다
C. 경험적 정맥 항생제를 시작하고 신속히 관절 배농을 의뢰한다
D. 경구 콜히친으로 시작한다

## 해설


세균성 관절염은 관절 손상이 빠르므로 검체를 채취한 뒤 경험적 정맥 항생제를 시작하고 배농한다. 배양과 감수성이 확인되면 약을 조정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004986 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈행성 감염 C의 임상상은 유지하며 감염원·위험 평가에 중요한 당뇨/성생활 정보를 복원했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004986
- https://doi.org/10.5194/jbji-8-29-2023
