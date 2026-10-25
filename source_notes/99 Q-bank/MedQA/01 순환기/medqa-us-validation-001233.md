---
type: qbank
schema_version: 1
id: medqa-us-validation-001233
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6d8a693d0ba980cc86a445e40851569bfcef9756357601a1c1d735e60d9d5b3f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "승모판 협착"
  - "류마티스성 심장질환"
  - "개방음"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yKueuqqO2MkOuniSDtmJHssKkgKE1pdHJhbCBTdGVub3NpcykubWQ
  - MDEg7Iic7ZmY6riwL-2MkOunieyniO2ZmC5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

49세 여성이 피로와 호흡곤란으로 진료를 받으러 왔다. 3년 전 멕시코에서 이주했고 운동능력이 크게 감소했으며 간헐적 객혈, 불규칙한 빈맥과 양측 폐기저부 수포음이 있다. 심장 청진에서 가장 가능성 높은 소견은?

## 선택지

A. 강도 증가-감소형 수축기 박출성 잡음
B. 고음의 초기 이완기 감소형 잡음
C. 좌측 하부 흉골연에서 가장 크게 들리는 고음의 범수축기 잡음
D. 개방음과 중기~후기 이완기 잡음

## 해설

객혈, 운동 호흡곤란과 불규칙 빈맥은 승모판 협착에 따른 폐정맥 울혈과 심방세동을 의심하게 한다. 경직된 판막이 이완기에 갑자기 열리면서 개방음이 나고, 좁은 판막을 통과하는 난류가 중기~후기 이완기 잡음을 만들어 D가 적합하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: MS 개방음과 이완기 잡음의 기전을 단순 혈류 감소가 아닌 경직 판막 개방과 난류로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001233
