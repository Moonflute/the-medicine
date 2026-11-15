---
type: qbank
schema_version: 1
id: medqa-us-train-003077
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a08cb405e502deaa9fbbe5b641e9baedf52833f7bfb4622d5e89b5d0a4c0a670
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "gastroesophageal reflux disease"
  - "heartburn"
  - "empiric proton-pump inhibitor"
  - "no alarm symptoms"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: investigation
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
  - ZHJ1ZzowMyDshoztmZTquLAvTGFuc29wcmF6b2xlLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvUmFuaXRpZGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 남성이 이전 내시경으로 LA C등급 역류성 식도염을 진단받았다. PPI를 하루 두 번 식전에 제대로 복용해 점막은 아물었으나 역류 증상은 남았다. 남은 증상이 역류 때문인지 평가할 검사는?

## 선택지

A. PPI 유지 중 바륨 연하검사
B. PPI 유지 중 24시간 식도 pH-임피던스 검사
C. PPI 중단 후 위배출 신티그래피
D. 상복부 초음파

## 해설

이미 객관적으로 확인된 역류질환에서 충분한 산 억제에도 증상이 남으면 치료 중 pH-임피던스로 산성·비산성 역류와 증상의 관계를 평가한다. 과거 객관적 근거가 없는 환자의 진단 목적 검사와 상황이 다르다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 심장성 역류성 식도염이라는 잘못된 용어를 GERD로 교정. 경고소견 없는 PPI B 시험치료.
- https://doi.org/10.14309/ajg.0000000000001538

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003077
- https://doi.org/10.1136/gutjnl-2023-330616
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12780910/
