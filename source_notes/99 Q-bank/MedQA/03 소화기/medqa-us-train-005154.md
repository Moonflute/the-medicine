---
type: qbank
schema_version: 1
id: medqa-us-train-005154
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:917ccf65a9a82cdecfe4c2cd94a479e304bb937aef8a27616bab715c36b35337
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도정맥류 출혈"
  - "비대상성 간경변"
  - "옥트레오타이드"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvUGFudG9wcmF6b2xlLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

C형간염으로 인한 비대상성 간경변이 있는 65세 남자가 2시간 전 시작된 대량 토혈 두 차례로 응급실에 왔다. 혈압은 누워서 110/85 mmHg, 앉은 지 3분 후 90/70 mmHg, 맥박 110회/분이다. 정맥로 두 개를 확보하고 생리식염수를 시작했다. 다음 중 가장 중요하게 투여할 정맥 치료는?

## 선택지

A. 신선동결혈장
B. 옥트레오타이드
C. 농축적혈구
D. 판토프라졸

## 해설

간경변 대량 토혈의 정맥류 출혈을 의심해 octreotide B를 조기 시작한다. 이는 기도·순환 소생, 필요 적혈구수혈, 예방항생제·신속 내시경지혈을 대체하지 않는다. 생명을 위협하는 출혈에서 검사 전이라는 이유로 수혈을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조기 octreotide B는 유지하되 소생·필요수혈보다 무조건 우선한다는 설명 교정.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005154
