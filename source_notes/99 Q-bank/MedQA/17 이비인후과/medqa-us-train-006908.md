---
type: qbank
schema_version: 1
id: medqa-us-train-006908
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1690abfa6a4f22cbba437a2f0f6c81e1c2607c986277ed337e2b5b9d42b6cb6c
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "갑상설관 낭종"
  - "정중선 경부 종괴"
  - "경부 초음파"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISk6rSAIOuCreyihSAoVGh5cm9nbG9zc2FsIER1Y3QgQ3lzdCkubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 아이의 정중선 목 종괴가 혀를 내밀 때 위로 움직인다. 아프지 않고 호흡이나 삼킴에는 문제가 없다. 갑상설관낭종이 의심될 때 첫 검사는?

## 선택지

A. 조영증강 경부 CT
B. 경부 초음파
C. 핵의학 전신 스캔
D. 즉시 절제 후 조직검사

## 해설

초음파로 종괴가 낭성인지 확인하고 정상 위치에 갑상선이 있는지 본다. 정상 TSH만으로 정상 위치 갑상선이 있다는 것을 확인할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 정중선 종괴/혀돌출 시 상승은 갑상설관낭종. 초음파를 보편적 최고 정확검사로 단정하지 않고 낭종 확인과 정상 위치 갑상선 확인이라는 수술 전 역할 설명. B 유지.
- 공식/학회 근거: https://doi.org/10.1308/rcsann.2022.0060

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006908
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10313460/
