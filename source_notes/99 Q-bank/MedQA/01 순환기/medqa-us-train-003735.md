---
type: qbank
schema_version: 1
id: medqa-us-train-003735
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:88a00f0396c1add23df84668c8ea92a5d8aba5a2632d8ef86fa71aa6bcfd130e
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chronic venous insufficiency"
  - "varicose veins"
  - "dependent edema"
  - "compression stockings"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2VmOyngCDsoJXrp6XrpZggKFZhcmljb3NlIFZlaW4pLm1k
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

52세 여성이 오래 서 있으면 양쪽 다리가 붓고 무거워진다고 한다. 종아리에 정맥류가 보이고 초음파에서 표재정맥 역류가 확인됐다. 발목–상완지수는 양쪽 1.05이고 환자는 우선 시술 없이 증상을 줄이고 싶어 한다. 적절한 방법은?

## 선택지

A. 저용량 루프 이뇨제를 매일 복용한다
B. 압박 없이 하지 운동을 제한한다
C. 알맞은 압력의 의료용 압박스타킹을 착용한다
D. 혈전 예방을 위해 치료 용량의 항응고제를 시작한다

## 해설

동맥 관류가 충분한 만성 정맥질환 환자가 보존 치료를 원한다면 의료용 압박스타킹으로 부종과 무거움을 줄일 수 있다. 걷기와 다리 올리기를 함께 권할 수 있다. 환자가 원하고 정맥 역류가 치료 대상이라면 중재도 별도로 고려한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정맥부전 압박 C는 초기 증상완화에 가능하나 모든 환자에서 장기 압박만 1차라는 해설을 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11523430/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003735
