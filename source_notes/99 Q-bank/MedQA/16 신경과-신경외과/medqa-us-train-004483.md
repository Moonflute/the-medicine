---
type: qbank
schema_version: 1
id: medqa-us-train-004483
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc1b1a5cb79bdca3d410714b0965f56f40d685b70e0a5f4a763b383879c3e7c7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "삼차신경통"
  - "안면 전기통증"
  - "제5뇌신경 신경통"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sgrzssKjsi6Dqsr3thrUgKFRyaWdlbWluYWwgbmV1cmFsZ2lhKS5tZA
difficulty: complex
answer: D
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

43세 환자의 오른쪽 뺨에 전기가 오는 듯한 심한 통증이 20초씩 반복된다. 양치하거나 뺨을 가볍게 만지면 유발되고 발작 사이에는 감각이 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 군발두통
B. 발작성 편측두통
C. 턱관절장애
D. 삼차신경통

## 해설

삼차신경 분포에서 수초에서 수분 이내의 발작적 전기통이 가벼운 자극으로 유발되는 것이 삼차신경통의 특징이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 삼차신경통이 무감각을 동반하는 것이 전형이라는 해설 오류를 교정했다. 자극유발 전기충격성 통증과 C를 유지하며 원문 검사 측성 한계를 숨기지 않는다.
- 공식/학회 근거: https://ichd-3.org/13-painful-cranial-neuropathies-and-other-facial-pains/13-1-trigeminal-neuralgia/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004483
- https://pubmed.ncbi.nlm.nih.gov/30860637/
