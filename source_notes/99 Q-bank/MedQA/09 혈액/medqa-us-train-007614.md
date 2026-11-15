---
type: qbank
schema_version: 1
id: medqa-us-train-007614
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bde2f5c8f5f75dccfb9b25deb434bf7d228b8302a67e3fa4d69387f45641d88e
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "온난 자가면역 용혈성 빈혈"
  - "IgG 직접 항글로불린 양성"
  - "세팔렉신 유발 용혈"
  - "프레드니손"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
---

# MedQA US 임상문제

## 문제

새로 진단된 온난형 자가면역 용혈성 빈혈 환자의 혈색소가 7.9g/dL까지 떨어져 숨이 차다. 직접항글로불린검사는 IgG 양성이고 유발 약물은 없다. 수혈 필요성을 별도로 판단하며 우선 시작할 면역치료는?

## 선택지

A. 전신 프레드니손 또는 동등한 글루코코르티코이드
B. 비장절제술을 첫 치료로 시행
C. 혈장교환 단독
D. 철분 정맥 투여

## 해설


증상이 있는 온난형 자가면역 용혈성 빈혈에는 글루코코르티코이드로 초기 치료를 시작한다. 중증도와 반응에 따라 수혈이나 다른 면역치료를 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007614 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Warm IgG AIHA의 prednisone B 유지; 최근 약물 관련 원인 평가·회피를 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12891454/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007614
- https://onlinelibrary.wiley.com/doi/10.1111/imj.70656
