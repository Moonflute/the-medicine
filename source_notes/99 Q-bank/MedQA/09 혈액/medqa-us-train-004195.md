---
type: qbank
schema_version: 1
id: medqa-us-train-004195
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:24431a76104325651af1b4479624d85e00837cc6242717f4539d2924ef27c8d2
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "진성적혈구증가증"
  - "혈소판증가증"
  - "저에리트로포이에틴혈증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-ynhOyEsSDsoIHtmIjqtazspp3qsIDspp0gKFBWKSAoUG9seWN5dGhlbWlhIFZlcmEgKFBWKSkubWQ
question_type: monitoring
difficulty: complex
answer: D
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
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvSW1hdGluaWIubWQ
---

# MedQA US 임상문제

## 문제

진성 적혈구증가증으로 확진된 환자가 과거 뇌경색을 겪었다. 급성기 뇌졸중 치료는 끝났고 현재 헤마토크릿은 55%다. 항혈전·혈구감소 치료를 함께 평가하며 사혈로 유지할 헤마토크릿 목표는?

## 선택지

A. 60% 미만
B. 55% 미만
C. 50% 미만
D. 45% 미만

## 해설


헤마토크릿을 45% 미만으로 유지하면 심혈관 사망과 주요 혈전 사건 위험이 줄어든다. 혈전 병력이 있는 환자는 사혈 외에도 혈구감소 치료 등 이차 예방이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004195 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PV의 합병증 예방 사혈 D 유지; 실제 급성 뇌졸중 평가와 고위험군의 추가 치료를 누락하지 않도록 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/myeloproliferative/hp/myeloproliferative-neoplasms-treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004195
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7820646/
- https://www.nejm.org/doi/10.1056/NEJMoa1208500
