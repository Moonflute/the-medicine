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

66세 여자가 4시간 전 넘어져 의식을 잃은 뒤 응급실에 왔다. 복용약은 bisoprolol, doxazosin, aspirin, erythropoietin, insulin, rosuvastatin, calcitriol이다. 2주 동안 일어설 때 간헐적인 어지럼이 있었고, 누워 있을 때 혈압은 111/74 mmHg, 일어섰을 때 84/60 mmHg, 심박수는 48회/분이다. 두부 CT는 정상이고 심전도에서 PR 간격이 250 ms이다. 다음 중 관리에서 가장 적절한 조치는?

## 선택지

A. 뇌파검사
B. 홀터 모니터링
C. 항고혈압제 중단
D. 기립경사검사

## 해설

Bisoprolol·doxazosin은 서맥·기립저혈압에 기여하므로 C의 원인 항고혈압제 중단/감량을 검토한다. PR250ms만으로 2도 방실차단이라 할 수 없고 탈락 QRS가 없다면 1도 전도지연이다. 모든 항고혈압제를 영구중단한다는 의미는 아니며 혈역학과 서맥을 감시한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Bisoprolol/doxazosin 복원을 통해 약물 원인을 명시하고 PR250ms를 2도차단이라 한 오류 교정.
- https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005022
