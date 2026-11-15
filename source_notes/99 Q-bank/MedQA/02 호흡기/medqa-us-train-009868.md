---
type: qbank
schema_version: 1
id: medqa-us-train-009868
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:20380acaed0b37b4033dffcb5ff2db5977c5c38820cf991662538657eefeb5b5
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "특발성 폐섬유증"
  - "벌집모양 폐"
  - "곤봉지"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2KueuwnOyEsSDtj5DshKzsnKDspp0gKElQRikgKElkaW9wYXRoaWMgUHVsbW9uYXJ5IEZpYnJvc2lzKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남성이 1년간 점차 심해지는 마른기침과 운동 시 호흡곤란으로 내원했다. 양쪽 폐기저부에서 가는 흡기 수포음이 들리고 제한성 환기장애가 있다. 결합조직질환과 관련 약물·직업성 노출은 확인되지 않았다. 고해상도 CT에서 통상형 간질폐렴(UIP)을 지지하는 소견은?

## 선택지

A. 가슴 가운데에 있는 단일 폐결절
B. 양측 폐첨부에만 위치한 기종성 수포
C. 호기 영상의 공기포획만 관찰됨
D. 양측 하엽 흉막하 망상음영에 벌집모양 변화가 동반됨

## 해설

하엽·흉막하 우세의 망상음영과 벌집모양 변화는 전형적인 UIP 영상 패턴이다. UIP는 특발폐섬유증 외에도 나타날 수 있으므로 병력과 감별 결과를 함께 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 항암치료력을 무시하고 IPF를 확진하는 오용을 막고 벌집모양 D의 구조를 설명.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009868
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13646841/
