---
type: qbank
schema_version: 1
id: medqa-us-train-002681
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6201c5f2e071fd4aa23f011bbfdf823f29b0c0ed45d138a92db6530d7624f5a
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "systemic sclerosis"
  - "scleroderma"
  - "anti-topoisomerase I antibody"
  - "interstitial lung disease"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yghOyLoCDqsr3tmZTspp0gKFN5c3RlbWljIFNjbGVyb3NpcykubWQ
  - MDIg7Zi47Z2h6riwL-qwhOyniOyEsSDtj5Dsp4jtmZggKEludGVyc3RpdGlhbCBsdW5nIGRpc2Vhc2UpLm1k
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

43세 여성이 항Scl-70 양성 전신경화증으로 진단됐다. 운동 시 숨이 차고 폐기저부에 미세 수포음이 있다. 흉부 단순촬영은 특이 소견이 없다. 간질성 폐질환을 확인할 검사는?

## 선택지

A. 운동부하 심전도만 시행
B. 고해상도 흉부 CT와 확산능을 포함한 폐기능검사
C. 흉부 단순촬영만 반복
D. 진단을 위해 폐생검부터 시행

## 해설


전신경화증에서 간질성 폐질환은 단순촬영에 나타나지 않을 수 있다. 고해상도 CT로 폐실질을 평가하고 확산능을 포함한 폐기능검사로 기능 저하를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002681 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전신경화증의 단일 최특이 항체라는 단정 대신 anti-topoisomerase I와 폐 침범의 연관으로 정답을 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002681
- https://doi.org/10.1002/art.42860
