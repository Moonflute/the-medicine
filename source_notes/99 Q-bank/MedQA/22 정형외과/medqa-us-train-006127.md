---
type: qbank
schema_version: 1
id: medqa-us-train-006127
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b8e10e62ddd4878e30f269ceb45372d18d078631b2cbd25c17e1e387afe2fa32
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "중족골 피로골절"
  - "달리기 관련 과사용 손상"
  - "휴식과 소염진통제"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-qzqOygiCDstJ3roaAgKEZyYWN0dXJlIEdlbmVyYWwgUHJpbmNpcGxlcykubWQ
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

달리기 훈련량을 갑자기 늘린 19세 남성의 둘째 중족골에 국소 압통이 있다. 초기 X선은 정상이었고 부하를 줄였는데도 압통이 지속된다. 피로골절을 조기에 확인할 검사는?

## 선택지

A. 혈청 요산
B. 관절초음파만
C. 발 단순촬영으로 골절을 이미 배제했다
D. 발 비조영 MRI

## 해설

중족골 피로골절은 초기에 X선에서 안 보일 수 있다. 부하를 줄인 상태에서 MRI로 골수 부종과 골절선을 확인할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 피로골절에서 고정이 필요 없고 MRI는 확진 후에만 한다는 반대 설명을 교정했다. 저위험 제2중족골의 초기 활동 제한·진통 C를 유지한다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/stress-fractures/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006127
- https://acsearch.acr.org/docs/69435/Narrative/
