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

65세 간경변 환자가 대량 토혈로 내원했다. 순환과 기도 평가를 시작했고 정맥류 출혈을 의심한다. 예방적 항생제와 긴급 내시경을 준비하면서 문맥 혈류를 줄이기 위해 먼저 시작할 수 있는 약은?

## 선택지

A. 정맥 판토프라졸 단독
B. 정맥 옥트레오타이드
C. 경구 메토프롤롤
D. 경구 락툴로스

## 해설

정맥류 출혈이 의심되면 내시경으로 확진될 때까지 기다리지 않고 옥트레오타이드 등 혈관작용약을 시작할 수 있다. 이는 수액·수혈, 예방적 항생제와 내시경 지혈을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조기 octreotide B는 유지하되 소생·필요수혈보다 무조건 우선한다는 설명 교정.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005154
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
