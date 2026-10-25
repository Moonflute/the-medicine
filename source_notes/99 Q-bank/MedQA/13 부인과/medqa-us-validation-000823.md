---
type: qbank
schema_version: 1
id: medqa-us-validation-000823
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f96b86d2cfc70829b4b7317fd78043828e74a2f0914731f736fc0b5d71b54a52
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "자궁경부 폴립"
  - "월경 중간 출혈"
  - "유경성 병변"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-u5hOygleyDgSDsnpDqtoEg7Lac7ZiIIChBYm5vcm1hbCBVdGVyaW5lIEJsZWVkaW5nKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성(임신 2회, 출산 2회)이 6개월간 월경 중간의 소량 질출혈로 진료를 받으러 왔다. 초음파에서 자궁경부관 깊숙이 유경성 종괴가 보이고 자궁내막은 5 mm로 균일하다. 가장 적절한 다음 처치는?

## 선택지

A. 추가 처치 없이 6개월 후 추적
B. 전기소작과 냉동치료
C. 자궁경부 브러시 생검
D. 고리 겸자로 병변 제거

## 해설

월경 사이 출혈과 자궁경관 내 유경성 종괴는 자궁경부 폴립에 합당하다. 적절히 접근 가능한 폴립은 고리 겸자로 잡아 비틀어 제거(D)하고 조직검사를 한다. 고리 겸자는 전기고리 절제술(LEEP)과 다른 기구·시술이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 증상성 자궁경부 폴립의 ring forceps D 유지. 고리 겸자를 LEEP로 오인한 오류 교정.
- https://screening.iarc.fr/atlascolpodetail.php?Index=37

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000823
