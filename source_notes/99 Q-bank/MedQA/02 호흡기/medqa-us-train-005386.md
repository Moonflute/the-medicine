---
type: qbank
schema_version: 1
id: medqa-us-train-005386
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9d6b4b9903e5302807e274aae379223f1795c3c6d1fca3f387402921b5ff4d0f
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "곤봉지"
  - "폐암 관련 비대성 골관절병증"
  - "호너증후군"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: association
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여자가 18개월 동안 손가락 끝이 점점 커지고 2개월 동안 쉰 목소리가 생겨 내원했다. 식욕 감소와 8 kg 체중감소가 있고 손발톱 주름의 볼록함 증가, 손가락과 발목 연조직의 통증성 부종, 우상폐야의 경한 천명이 있다. 이 상태와 관련된 소견은?

## 선택지

A. 축동
B. 혈청 ACE 증가
C. 흉부 X선의 망상 음영
D. 말초 청색증

## 해설

곤봉지·통증성 골관절병증·체중감소·쉰목소리는 폐종양을 의심하게 한다. 상부 종양의 교감신경 경로 침범은 Horner의 축동 A와 연관될 수 있다. 축동은 동공 수축이지 뼈의 방사선상 축소가 아니다. 모든 곤봉지가 Horner를 동반하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 축동을 손가락뼈 축소로 오역한 해설을 폐첨부종양-Horner miosis로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005386
