---
type: qbank
schema_version: 1
id: medqa-us-validation-001111
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2809f272ab5c1e3bcfdc8df03039082487ad0ac293b0702257598e511fb8beca
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "파제트 골질환"
  - "고알칼리성 인산분해효소혈증"
  - "졸레드론산"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: management
difficulty: complex
answer: C
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

52세 여성이 두개골 통증과 비대로 평가받았다. 영상과 뼈 유래 ALP 상승으로 활동성 파제트 골질환이 확인됐다. 칼슘·비타민 D·신기능은 정상이다. 질환 관련 뼈 통증에 가장 적절한 약제는?

## 선택지

A. 테리파라타이드
B. 칼슘·비타민 D 단독
C. 정맥 졸레드론산
D. 알로푸리놀

## 해설


활동성 파제트 골질환의 뼈 통증에는 비스포스포네이트를 사용하며 금기가 없으면 졸레드론산을 우선 고려한다. 치료 전 신기능, 칼슘과 비타민 D 상태를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001111 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 골 재형성 억제·조골형성제라는 정반대 기전을 Paget병의 증가된 무질서 재형성과 bisphosphonate 골흡수 억제로 교체했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.endocrine.org/clinical-practice-guidelines/pagets-disease-of-bone

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001111
- https://pubmed.ncbi.nlm.nih.gov/30803025/
- Endocrine Society 파제트 골질환 진료지침: https://www.endocrine.org/clinical-practice-guidelines/pagets-disease-of-bone
