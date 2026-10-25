---
type: qbank
schema_version: 1
id: medqa-us-validation-001091
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:9cec692b48aa9af189a4f3859b91c594544fb175377b858aca20bb0f2c78a0fe
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "팔꿈치 아탈구"
  - "간호사 팔꿈치"
  - "윤상인대 아탈구"
  - "Radial head subluxation"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

이전에 건강하던 3세 여아가 아침에 어머니 손을 잡고 가다가 돌에 걸렸지만 땅에 부딪히지는 않은 뒤 왼팔을 사용하지 않아 진료를 받으러 왔다. 팔꿈치나 전완에 부종과 멍은 없고, 전완이 부분 신전과 회내 자세로 몸에 붙어 있으며 근위 요골을 누르면 아파하고 수동 회외 시 운다. 가장 적절한 다음 처치는?

## 선택지

A. 이부프로펜과 얼음찜질
B. 팔을 강제로 과회내
C. 아동보호기관에 신고
D. 신경전도검사와 근전도검사

## 해설


어머니 손을 잡은 채 비틀거리며 견인된 뒤 팔을 쓰지 않고 전완을 회내한 자세로 유지하는 유아는 pulled elbow(요골두 아탈구)가 의심된다. 요골두와 윤상인대의 관계가 어긋난 것으로 전완의 과회내 정복(B) 또는 회외-굴곡법을 의료진이 시행할 수 있다. B를 과회외라고 설명하지 않는다. 뚜렷한 부종·멍·변형이나 골절 의심 압통이 있으면 먼저 골절을 평가하고 정복 실패 시 재평가한다. 무리한 힘으로 반복 조작하라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001091 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요골두 아탈구의 회내 자세와 과회내 정복 B를 과회외로 뒤집은 해설을 교정하고 실제 낙상충격이 없다는 원문을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.rch.org.au/clinicalguide/guideline_index/Pulled_Elbow/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001091
