---
type: qbank
schema_version: 1
id: medqa-us-train-003349
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:74504d60357d06d7291e8416fcf00b31ecdda5b0808466ddf4f6322ab5521f2c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "multiple myeloma"
  - "plasma cell proliferation"
  - "hypercalcemia"
  - "acute kidney injury"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: mechanism
difficulty: standard
answer: D
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

70세 남성이 무기력, 혼란, 오심으로 내원했다. 혈청 칼슘은 14.7 mg/dL, 헤모글로빈은 9.1 g/dL, 크레아티닌은 2.2 mg/dL였다. 특별한 병력은 없었고 매일 종합비타민과 고관절 통증을 위한 acetaminophen을 복용했다. 기존 크레아티닌은 0.9 mg/dL였다. 이 환자의 고칼슘혈증, 빈혈, 신기능저하를 가장 잘 설명하는 기전은?

## 선택지

A. 이소성 PTHrP 분비
B. 1,25-디하이드록시비타민 D 상승
C. 부갑상샘 PTH 과다
D. 형질세포 과증식

## 해설


골통과 함께 고칼슘혈증·빈혈·급성 신기능 악화가 있어 형질세포의 clonal 증식에 의한 다발골수종 D를 의심한다. 형질세포와 골수 미세환경의 osteoclast 활성화로 골흡수가 증가하고, 경쇄 신독성 등이 신장손상에 관여할 수 있다. Paraprotein은 단클론 면역글로불린 또는 경쇄를 뜻하며 PTHrP와 같은 물질이 아니다. 원인 확진에는 단클론 단백·골수 및 영상 검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003349 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: paraprotein=PTHrP라는 오류 및 MM이 모든 고칼슘·빈혈·신장손상의 최다 원인이라는 과장을 교정. 원문 골통·기저 Cr 복구.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003349
