---
type: qbank
schema_version: 1
id: medqa-us-train-008855
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6a284fa5c3ea52cfbc7cc6ff51482c2e1930fba715a261a031ee5c77ec178b47
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "abdominal aortic aneurysm"
  - "benign prostatic hyperplasia"
  - "abdominal ultrasonography"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 외래 진찰에서 박동성 복부 종괴가 새로 만져졌다. 흡연력이 있지만 복통과 허리 통증은 없고 혈압은 안정적이다. 처음 복부대동맥류의 유무와 직경을 평가할 검사는?

## 선택지

A. 복부 단순 X선
B. 카테터 대동맥조영술
C. 프로스타테이트 특이항원 검사
D. 복부대동맥 초음파

## 해설


활력징후가 안정적이고 파열을 의심할 통증이 없는 상황에서 복부대동맥 초음파로 동맥류와 직경을 평가한다. 통증·저혈압이 생기거나 수술 계획이 필요한 상황은 검사 경로가 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정적 환자의 박동성 복부 종괴는 AAA 의심이며 크기 확인을 위한 초기 복부초음파 D가 적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008855
- ACC/AHA 대동맥질환 진료지침: https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease
