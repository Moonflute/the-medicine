---
type: qbank
schema_version: 1
id: medqa-us-test-001246
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:0327cc37269104f30fbf27bcc3b14a33e1d57970fe61c35cfe34bd4fb561fe8e
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "악성 중피종"
  - "석면 노출"
  - "삼출성 흉수"
  - "Malignant mesothelioma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
question_type: investigation
difficulty: complex
answer: A
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

과거 석면에 노출된 환자의 CT에 한쪽 흉수를 둘러싸는 결절성 흉막 비후가 있다. 첫 흉수 세포검사에서 악성세포가 확인되지 않았지만 흉막 중피종 의심이 높고 시술은 가능하다. 다음 단계는?

## 선택지

A. 흉강경 또는 영상 유도 흉막 조직검사
B. 혈청 종양표지자만 측정해 질환을 배제한다
C. 흉수 세포검사가 음성이면 추적을 중단한다
D. 흉막 병변을 확인하기 위해 복부 내시경부터 시행한다

## 해설


흉수 세포검사 음성만으로 흉막 중피종을 배제할 수 없다. 충분한 흉막 조직을 얻어 형태와 면역염색을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-001246 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 흉막 결절·삼출과 장기 섬유산업 노출의 mesothelioma B 유지. 원문에서 석면이 직접 확인된 것처럼 단정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001246
- https://thorax.bmj.com/content/78/Suppl_3/s1
- https://pubmed.ncbi.nlm.nih.gov/39778125/
