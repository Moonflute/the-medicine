---
type: qbank
schema_version: 1
id: medqa-us-train-005132
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ce24db7f288d5fa06a3322792fcfd805a4bcc9a73b45651936269510928ab21a
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "객혈"
  - "폐암 의심"
  - "흡연 관련 기도질환"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: investigation
difficulty: standard
answer: A
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

57세 여자가 수개월 동안 점점 많아지는 객혈과 호흡곤란으로 내원했다. 30년간 하루 2갑을 흡연했고 발열, 야간발한, 체중감소는 없다. 산소포화도는 98%이고 호기성 천명이 들린다. 다음 중 가장 적절한 초기 처치는?

## 선택지

A. 흉부 방사선촬영
B. CT 스캔
C. 내시경
D. 기관지경검사

## 해설

안정 객혈의 초기 흉부 X선 A는 가능하다. 다만 높은 흡연력·진행 객혈에서는 정상 X선으로 악성이 배제되지 않으므로 CT 등 추가평가가 필요할 수 있다. X선이 종양 위치/크기를 최종 확정하는 검사는 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 객혈 초기 CXR A가 악성을 배제하거나 종양 크기를 확정한다는 과장 교정.
- https://acsearch.acr.org/list/TopicNarrativePdf?topicId=107

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005132
