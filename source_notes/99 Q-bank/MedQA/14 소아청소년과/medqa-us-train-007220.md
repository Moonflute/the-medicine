---
type: qbank
schema_version: 1
id: medqa-us-train-007220
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1999969ec0dfaaedb2430512b236a298c88a2e6bf1b7894c169590aef4ea36ae
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "낭성 섬유증"
  - "정상 땀 염화물 검사"
  - "비강 경상피 전위차"
  - "CFTR"
  - "Cystic fibrosis"
question_type: investigation
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-uCreyEseyErOycoOymnSAoQ3lzdGljIEZpYnJvc2lzKS5tZA
difficulty: standard
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

7세 아이가 반복 폐렴, 기관지확장과 지방변을 보인다. 전문기관의 땀 염소 검사가 서로 다른 두 날에 38, 43 mmol/L였다. 낭성섬유증 평가의 다음 단계는?

## 선택지

A. 땀 염소가 60 미만이므로 낭성섬유증 평가를 끝낸다
B. 전문기관에서 확장 CFTR 유전자 분석과 필요시 기능 검사를 검토한다
C. 기관지확장만으로 낭성섬유증을 확진한다
D. 대변 잠혈검사로 CFTR 기능을 확인한다

## 해설

땀 염소 30–59 mmol/L는 중간 범위다. 임상 의심이 높고 반복해서 이 범위라면 CFTR 변이를 평가하고 필요시 전문기관에서 기능 검사로 보완한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: NPD를 보편적 최고 민감도 검사로 단정하지 않고 전문기관 CFTR 기능검사로 명확화.
- https://www.cff.org/medical-professionals/cf-diagnosis-clinical-care-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007220
