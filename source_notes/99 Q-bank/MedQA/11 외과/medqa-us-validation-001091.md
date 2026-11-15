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
answer: D
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

3세 여아가 어른의 손에 팔을 잡아당겨진 뒤 왼팔을 쓰지 않는다. 팔을 회내한 채 몸에 붙이고 있고 멍·부종·변형이나 뼈에 국한된 압통은 없다. 다음 조치는?

## 선택지

A. 상완골 X선 촬영 후 상완 전체를 석고로 고정
B. 진통제만 주고 1주 뒤 재진
C. 신경전도검사
D. 요골두 아탈구로 보고 정복한 뒤 팔 사용을 재평가

## 해설


견인 뒤 팔 사용을 거부하는 전형적 요골두 아탈구는 의료진이 정복하고 팔 사용이 돌아오는지 확인한다. 뼈 압통이나 부종이 뚜렷하거나 정복이 실패하면 골절 등 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001091 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 요골두 아탈구의 회내 자세와 과회내 정복 B를 과회외로 뒤집은 해설을 교정하고 실제 낙상충격이 없다는 원문을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.rch.org.au/clinicalguide/guideline_index/Pulled_Elbow/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001091
