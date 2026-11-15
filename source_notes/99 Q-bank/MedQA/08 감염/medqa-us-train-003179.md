---
type: qbank
schema_version: 1
id: medqa-us-train-003179
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3cedafe1baef69df5f9912e623c11cfaee0f8e19ee7be9fd2e3e3fe2ef534af7
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "herpes simplex encephalitis"
  - "temporal lobe hyperintensity"
  - "viral encephalitis"
  - "CSF lymphocytic pleocytosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uLqOyInO2PrOynhCDqsJDsl7wgKEhlcnBlcyBTaW1wbGV4IEluZmVjdGlvbikubWQ
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: investigation
difficulty: complex
answer: B
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

발열과 국소 발작을 보인 24세 환자의 MRI에서 비대칭 측두엽 이상이 보였다. 정맥 아시클로버를 시작했지만 증상 첫날 채취한 뇌척수액 HSV PCR은 음성이다. 의심이 여전히 높을 때 다음 조치는?

## 선택지

A. 검사 한 번이 음성이므로 아시클로버를 바로 중단한다
B. 정맥 아시클로버를 유지하면서 며칠 내 뇌척수액 HSV PCR을 다시 시행한다
C. 정맥 치료를 중단하고 경구 아시클로버로 바꾼다
D. 뇌척수액 대신 혈청 HSV IgG만으로 확진한다

## 해설


발병 초기에 채취하면 뇌척수액 HSV PCR이 위음성일 수 있다. 의심이 높으면 정맥 치료를 유지하고 재검하며 다른 원인도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003179 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 측두엽 우세 뇌염의 HSV D 유지하되 다른 바이러스는 CSF/영상 양상을 보일 수 없다는 절대적 배제 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003179
- https://doi.org/10.1111/ene.70647
- https://academic.oup.com/cid/article/47/3/303/313455
