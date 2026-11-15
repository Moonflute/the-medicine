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
answer: B
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

32세 여성이 반복되는 월경 사이 소량 출혈로 내원했다. 임신검사는 음성이다. 질경검사에서 자궁경부관 입구에 가는 줄기의 폴립이 보이고 부착부에 접근할 수 있다. 처치는?

## 선택지

A. 자궁경부 냉동치료
B. 폴립을 제거하고 조직검사를 의뢰한다
C. HPV 검사만 하고 병변은 남긴다
D. 폴립이 보이는 부위에 자궁내막 소파술을 한다

## 해설

증상이 있고 접근 가능한 자궁경부 폴립은 제거하고 병리로 확인한다. 기저부가 보이지 않거나 원발부가 불확실하면 맹목적으로 당기지 말고 전문 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 증상성 자궁경부 폴립의 ring forceps D 유지. 고리 겸자를 LEEP로 오인한 오류 교정.
- https://screening.iarc.fr/atlascolpodetail.php?Index=37

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000823
- https://rms.cornwall.nhs.uk/rms/primary_care_clinical_referral_criteria/primary_care_clinical_referral_criteria/gynae/cervical_polyps
