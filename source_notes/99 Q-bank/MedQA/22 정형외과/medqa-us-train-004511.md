---
type: qbank
schema_version: 1
id: medqa-us-train-004511
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f7a95a6ccd86769f7321c114de52d421585129374b6c37bd5d038522f4503306
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "파제트병"
  - "변형성 골염"
  - "알칼리성 인산분해효소 상승"
question_type: diagnosis
related_disease_slugs:
  - MTMg67aA7J246rO8L-2MjOygnO2KuOuzkSAoUGFnZXQncyBEaXNlYXNlKS5tZA
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

67세 남성이 모자가 전보다 작게 느껴지고 청력도 떨어졌다고 한다. 두개골과 골반에 골 비후 및 용해와 경화가 섞인 병변이 있고 ALP가 올라 있지만 칼슘은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 골연화증
B. 원발성 부갑상선기능항진증
C. 파제트 골질환
D. 골다공증

## 해설

뼈가 커지고 영상에서 용해와 경화가 섞이며 골성 ALP가 증가하는 조합은 파제트 골질환을 시사한다. 두개골 침범 때 청력 저하가 동반될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. S. bovis/대장내시경 해설은 다른 케이스. 두개골 크기 증가·청력저하·골스캔 섭취를 파제트 골질환과 ALP 상승으로 설명. 원정답 B 유지.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/pagets-disease-of-bone/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004511
