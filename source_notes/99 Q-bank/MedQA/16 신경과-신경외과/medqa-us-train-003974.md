---
type: qbank
schema_version: 1
id: medqa-us-train-003974
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20ba04a1c15aba167e2cdc2878a73b7fa042795924ebae86ba2683d49fb3c376
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "강직인간증후군"
  - "종양딸림증후군"
  - "암피피신 항체"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_si6Dqsr3qt7zsnKHsp4jtmZgubWQ
  - MTAg7KKF7JaRL-u2gOyiheyWkSDspp3tm4TqtbAgKFBhcmFuZW9wbGFzdGljIFN5bmRyb21lKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 환자가 몸통과 다리가 서서히 굳고 갑작스러운 소리에 통증성 경련이 생긴다. 요추 전만이 두드러지며, 근전도에서 휴식 중에도 서로 반대 작용을 하는 근육의 운동단위 활동이 지속된다. 가장 가능성 높은 진단은?

## 선택지

A. 강직인간증후군
B. 경추 척수병증
C. 파킨슨병
D. 램버트–이튼 근무력 증후군

## 해설

몸통에 두드러진 강직, 자극으로 유발되는 통증성 연축 및 휴식 중 지속되는 운동단위 활동은 강직인간증후군의 주요 단서다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문의 본문·선지·정답 및 한국어 해설을 개별 대조하였다. 원정답과 케이스를 유지하고 잘못 연결된 해설을 교체하였다.
- 공식/학회 근거: https://www.ninds.nih.gov/health-information/disorders/stiff-person-syndrome

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003974
- https://pubmed.ncbi.nlm.nih.gov/37212351/
