---
type: qbank
schema_version: 1
id: medqa-us-train-009078
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:cda7e00d68fe9fd63d1d230ea0e1d956efd047ed72c8c59e3c1003b5b2578eb2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "diffuse large B-cell lymphoma"
  - "CD20"
  - "high-grade non-Hodgkin lymphoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uyhO2CtyDsnKDsgqwg66-466eM7ISxIOqxsOuMgCBC7IS47Y-sIOumvO2UhOyihSAoQnVya2l0dC1saWtlIERpZmZ1c2UgTGFyZ2UgQi1jZWxsIEx5bXBob21hKS5tZA
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: investigation
difficulty: complex
answer: D
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

67세 환자에게 3주 사이 커진 무통성 쇄골상부 림프절과 야간발한, 체중감소가 있다. 영상에서 여러 림프절이 커져 있고 쇄골상부 림프절은 안전하게 절제할 수 있다. 림프종의 조직 아형을 처음 확인하기 위한 적절한 검사는?

## 선택지

A. 혈청 LDH만 반복
B. 림프절 미세침흡인만 시행
C. PET-CT 모양만으로 림프종 아형을 확진
D. 접근 가능한 림프절 절제생검

## 해설


림프종 진단은 조직 구조와 세포 형태, 면역표현형을 함께 평가한다. 가능하면 절제생검으로 충분한 조직을 확보하고, 수술 접근이 어렵다면 중심바늘생검 등을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009078 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빠른 진행·B 증상·CD20 양성 고증식 B세포 림프종은 DLBCL B가 가장 적절. 다발성 큰 B세포라는 질환명 오기를 미만성으로 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009078
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12456099/
