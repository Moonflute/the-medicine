---
type: qbank
schema_version: 1
id: medqa-us-test-000240
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e34764302eb9f1e31bcb0eb53d32f6ee4b54f73776503b13210c1194781cce57
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "피부근염"
  - "염증성 근병증"
  - "간질성 폐질환"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
question_type: investigation
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
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

피부근염으로 진단된 48세 여성이 점점 심해지는 마른기침과 운동 시 숨참을 호소한다. 폐기저부에서 미세한 들숨 수포음이 들리고 흉부 단순촬영은 정상이다. 간질성 폐질환을 평가할 조합은?

## 선택지

A. 고해상도 흉부 CT와 폐기능검사
B. 가슴 단순촬영만 1년 뒤 반복
C. 운동부하 심전도만 시행
D. 폐생검부터 시행

## 해설


염증성 근병증에서는 간질성 폐질환이 동반될 수 있다. 단순촬영으로 배제할 수 없으므로 고해상도 CT와 확산능을 포함한 폐기능검사로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-test-000240`와 직접 대조했다.
- 판정: 근위부 근력저하와 특징적 피부 발진은 다발근염보다 피부근염을 지지. A 유지하되 피부 병변을 무시한 해설 교정.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.niehs.nih.gov/sites/default/files/research/resources/imacs/classificationcriteria/classification_criteria_study_form2018_508.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000240
- https://doi.org/10.1002/art.42860
