---
type: qbank
schema_version: 1
id: medqa-us-train-002489
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:892642b7366852cde50a6c2ddc8a454664d4a6a976d80970efd430c054ead8f0
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal spasm"
  - "esophageal motility disorder"
  - "esophageal manometry"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rr7jrp4zshLEg7Iud64-EIOyXsOy2lSAoRGlmZnVzZSBFc29waGFnZWFsIFNwYXNtKS5tZA
question_type: investigation
difficulty: complex
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

34세 여성이 흉통으로 응급실에 왔다. 중앙 흉부에 무언가 걸린 느낌이 있고 최근 한 달 동안 세 번째 episode이다. 이전 두 번은 체육관에서 스포츠 음료를 마실 때 발생해 3~4분 휴식 후 호전되었다. 이번에는 아버지가 69세에 심장마비를 겪었다는 소식을 들은 후 시작되어 15분간 지속되고 있다. 수개월간 간헐적으로 삼키기 어렵지만 두근거림, 발한, 호흡곤란은 없다. 어머니는 피부경화증이 있다. 다음 중 이 상태를 확진하기 위한 가장 적절한 검사는?

## 선택지

A. 내시경
B. 식도 내압검사
C. 심전도
D. 트로포닌 I

## 해설

간헐적 연하곤란과 음료 섭취로 유발되는 흉통은 식도운동장애를 시사하며, 해당 운동장애의 확진 검사로 식도 내압검사 B가 적절하다. 다만 급성 흉통에서는 먼저 심장성 원인을 평가해야 하고 운동이나 정서적 스트레스 유발만으로 이를 배제할 수 없다. 내시경 등으로 구조적 원인을 배제하는 평가도 별도이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 식도운동장애의 확진 검사 B는 유지하되 운동/스트레스 흉통만으로 ACS를 배제한 듯한 설명을 보완.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002489
