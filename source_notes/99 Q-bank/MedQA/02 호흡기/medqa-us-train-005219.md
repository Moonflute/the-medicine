---
type: qbank
schema_version: 1
id: medqa-us-train-005219
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1a9aa250761fda14788199c5902553dbbd159962e01af5ed6f064261847624b
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "폐쇄성 수면무호흡증"
  - "지속적 양압환기"
  - "비만"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yImOuptCDrrLTtmLjtnaHspp0gKFNsZWVwIEFwbmVhIFN5bmRyb21lKS5tZA
question_type: management
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

55세 남성이 코골이와 목격된 무호흡으로 수면다원검사를 받았다. 무호흡–저호흡지수는 시간당 22회다. 낮에 심하게 졸려 운전 중에도 졸 뻔했다. 체중 관리와 함께 수면 중 기도 폐쇄를 조절할 일차 치료는?

## 선택지

A. 지속적 양압기(CPAP) 사용
B. 산소만 공급한다
C. 수면제를 추가한다
D. 체중이 줄 때까지 직접 치료를 미룬다

## 해설


증상이 있는 중등도 폐쇄성 수면무호흡에는 양압기가 기도 폐쇄와 주간 졸림을 줄이는 일차 치료다. 체중 관리도 병행하되, 졸림이 조절될 때까지 운전을 피하도록 안내한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: AHI8의 경증이라도 심한 주간졸림과 운전위험은 PAP A 권고 근거.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6374094/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005219
