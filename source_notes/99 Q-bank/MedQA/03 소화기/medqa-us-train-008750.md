---
type: qbank
schema_version: 1
id: medqa-us-train-008750
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f13596aba7aec33a5c8b5b23ccc5497c90bd07b6ba80215f5d759e323a6ab2a3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "acute cholecystitis"
  - "biliary colic"
  - "gallbladder ultrasound"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7JO46rCc7Je8IChBY3V0ZSBDaG9sZWN5c3RpdGlzKS5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

47세 여성이 식후 발생하던 오른쪽 윗배 통증이 이번에는 10시간째 지속되고 열도 난다. 깊게 들이쉴 때 우상복부 촉진으로 통증이 심해지며 황달은 없다. 첫 영상검사는?

## 선택지

A. 복부 단순 X선
B. 우상복부 초음파
C. 자기공명 담췌관조영술
D. 복부 혈관조영 CT

## 해설


급성 담낭염이 의심되면 우상복부 초음파로 담석, 담낭벽과 담낭 주위 변화를 먼저 확인한다. 초음파가 불확실하면 임상 상황에 따라 다른 영상을 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008750 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 담낭염 의심의 초기 초음파 B 유지. 초음파를 모든 검사 중 가장 민감하다고 한 오류 교정하고 복막자극·빈맥은 신속평가 필요.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://gravitas.acr.org/ACPortal/GetDataForOneTopic?topicId=132

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008750
- https://www.jshbps.jp/modules/en/index.php?content_id=47
