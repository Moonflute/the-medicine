---
type: qbank
schema_version: 1
id: medqa-us-train-004211
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1b47321c627da112344c7ae053c2c33a6212054b6f5856bd5f57cc9f14901281
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 말초신경병증"
  - "신경병성 통증"
  - "벤라팍신"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsi6Dqsr3rs5Hspp0gKERpYWJldGljIE5ldXJvcGF0aHkpLm1k
question_type: investigation
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

메트포르민을 오래 복용한 63세 여성이 최근 양발 저림과 걷기 불안정을 호소한다. 발의 진동·위치감각이 떨어지고 혈액검사에서 거대적혈구 빈혈이 새로 발견됐다. 당뇨병성 신경병증으로 단정하기 전에 할 검사는?

## 선택지

A. 발목-상완지수
B. 혈청 알도스테론
C. 혈청 비타민 B12
D. 대변 칼프로텍틴

## 해설

장기간 메트포르민은 비타민 B12 저하와 관련된다. 감각 이상과 새 거대적혈구 빈혈이 동반되면 교정 가능한 B12 결핍을 먼저 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Venlafaxine D는 SNRI 선택지이나 유일1차약이라는 표현을 교정.
- https://doi.org/10.1212/WNL.0000000000013038

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004211
- https://doi.org/10.2337/dc26-s012
