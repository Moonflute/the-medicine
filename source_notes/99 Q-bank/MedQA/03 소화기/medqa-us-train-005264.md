---
type: qbank
schema_version: 1
id: medqa-us-train-005264
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:173cbacaea072e86d72eb95e56640f401bd0cfa9ebf022b0d7efcd8d6c1bb0f9
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "약물 유발 식도염"
  - "식도 점막 손상"
  - "연하통"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtoDsi50g7Iud64-E7Je8IChDb3Jyb3NpdmUgRXNvcGhhZ2l0aXMpLm1k
question_type: diagnosis
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

55세 여자가 철분제를 포함한 약을 저녁에 복용한 뒤 갑자기 시작되고 삼킬 때 악화되는 흉골 뒤 통증으로 내원했다. 운동과 관련이 없고 심전도는 동율동이다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 식도 파열
B. 식도염
C. 심근경색
D. 폐색전증

## 해설

취침 직전 철분제 등 복용 후 연하통성 흉통은 알약 유발 식도염 B를 시사한다. 정상 동율동만으로 ACS가 배제되지는 않아 위험도·troponin 등을 함께 평가한다. 물과 복용후 자세 등 투여 습관을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원문의 철분제 단서 복원과 정상 동율동만으로 ACS 배제한 듯한 설명 교정.
- https://www.jacc.org/doi/10.1016/j.jacc.2021.07.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005264
