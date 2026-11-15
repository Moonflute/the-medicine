---
type: qbank
schema_version: 1
id: medqa-us-test-000821
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:aac1f0e804300d2fffb2c1a5e2c6b0ccb5653db1b88134bcb49060d4fff811c4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "발덴스트룀 거대글로불린혈증"
  - "IgM 단클론감마병증"
  - "고점도 증후군"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qzoOygkOuPhCDspp3tm4TqtbAgKEh5cGVydmlzY29zaXR5IFN5bmRyb21lKS5tZA
question_type: management
difficulty: standard
answer: D
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

발덴스트룀 거대글로불린혈증으로 진단된 환자에게 새 시야 흐림, 두통과 반복 코피가 생겼고 안저에서 망막 출혈이 보인다. IgM은 6.3g/dL다. 전신 치료를 계획하면서 과점도 증상을 신속히 줄일 처치는?

## 선택지

A. 철분 정맥 투여
B. 리툭시맙만 투여하고 증상이 줄기를 기다린다
C. 혈청 점도 결과가 나올 때까지 치료하지 않는다
D. 치료적 혈장교환

## 해설


증상을 동반한 과점도는 응급이다. 혈장교환으로 순환 IgM을 빠르게 낮춘 뒤 재상승을 막기 위해 기저 림프형질세포 질환 치료를 병행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000821 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단클론 IgM 고농도와 고점도 증상·빈혈은 Waldenstrom C와 일치. MGUS와 구별하는 증상 및 농도 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000821
- https://pubmed.ncbi.nlm.nih.gov/37099027/
