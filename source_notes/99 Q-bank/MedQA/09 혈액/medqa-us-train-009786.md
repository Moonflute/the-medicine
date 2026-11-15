---
type: qbank
schema_version: 1
id: medqa-us-train-009786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8591f145bc2b6c84bd19c2b2272a833bc6929b6f4539c8b7a2dcc5cb3650fc41
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "재생불량성 빈혈"
  - "범혈구감소증"
  - "저세포성 골수"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yerOyDneu2iOufieyEsSDruYjtmIggKEFBKSAoQXBsYXN0aWMgQW5lbWlhIChBQSkpLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

14세 환자의 골수는 심하게 저세포성이며 선천성 골수부전은 배제됐다. 중증 후천성 재생불량성 빈혈로 진단됐고 HLA가 일치하는 건강한 형제 공여자가 있다. 이식을 받을 수 있는 환자의 우선 치료는?

## 선택지

A. HLA 일치 형제 공여자의 동종 조혈모세포이식
B. 철분과 엽산만 투여
C. 정기 적혈구 수혈만 지속
D. 비장절제술

## 해설


이식이 가능한 소아·청소년에서 중증 후천성 재생불량성 빈혈에 적합한 일치 형제 공여자가 있으면 동종이식이 우선 치료가 될 수 있다. 감염과 출혈에 대한 지지치료도 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009786 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전혈구감소와 지방성 저세포 골수가 재생불량빈혈 A를 직접 지지. 가족 혈액질환/바이러스 단서만으로 B19 순수 적혈구 무형성으로 재설계하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009786
- https://pubmed.ncbi.nlm.nih.gov/41920091/
