---
type: qbank
schema_version: 1
id: medqa-us-train-005022
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:51bc131ed07b2fd3f2ca480eca2ec0410f585242db773098432e7a913c4eb626
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "기립성 저혈압"
  - "약물 유발 실신"
  - "방실전도 지연"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
question_type: management
difficulty: complex
answer: C
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

66세 여성이 최근 독사조신 용량을 올린 뒤 일어설 때마다 어지럽다. 누운 혈압은 112/72 mmHg, 선 지 2분 뒤 증상이 나타났을 때는 84/56 mmHg이다. 과거 같은 증상은 없었고 심전도에서 급성 이상은 없다. 재발을 줄이기 위해 우선 검토할 조치는?

## 선택지

A. 장기 항경련제를 시작한다
B. 혈압 목표를 낮춰 약을 추가한다
C. 증상과 관련된 독사조신의 감량 또는 중단을 검토한다
D. 영구 심박동기를 우선 삽입한다

## 해설

일어난 뒤 혈압이 뚜렷이 떨어지면서 증상이 재현되어 기립성 저혈압에 합당하다. 최근 증량된 알파차단제가 원인일 수 있어 처방을 재검토한다. 모든 혈압약을 일률적으로 끊는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Bisoprolol/doxazosin 복원을 통해 약물 원인을 명시하고 PR250ms를 2도차단이라 한 오류 교정.
- https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005022
