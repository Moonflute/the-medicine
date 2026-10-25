---
type: qbank
schema_version: 1
id: medqa-us-train-003899
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa6a07b004b1b5356a3e8e8dba1a3b4acd45cda072ff787e92e016a50154052f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "osteoporosis"
  - "calcium supplementation"
  - "vitamin D supplementation"
  - "bone mineral density"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzqOuLpOqzteymnSAoT3N0ZW9wb3Jvc2lzKS5tZA
question_type: prevention
difficulty: simple
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

67세 여성이 DEXA에서 T점수 -3.0으로 골다공증이 확인되었다. 칼슘, 인, 비타민 D, PTH는 정상이었다. 다음 중 골다공증 발생 위험을 줄였을 조치는?

## 선택지

A. 낙상 위험을 줄이기 위해 신체활동을 줄인다
B. 주 3회 수영운동을 시작한다
C. 칼슘과 비타민 D를 보충한다
D. 체중을 줄인다

## 해설

선택지 C는 부족한 칼슘·vitaminD 섭취를 보완해 골건강을 유지하는 취지로 가장 적절하다. 다만 영양상태가 충분한 지역사회 모든 성인에게 일률적 보충제를 주면 골절이 예방된다는 근거는 일관되지 않다. 체중부하·저항운동과 금연 등도 중요하고 수영이 건강상 이득이 전혀 없는 것은 아니다. 이미 T-score−3인 환자는 별도의 골다공증 약물치료 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 칼슘/vitD의 충분한 섭취와 일률적 보충제의 골절예방 효과를 구분. T-score-3의 치료를 영양만으로 대체하지 않음.
- https://ods.od.nih.gov/factsheets/Calcium-Healthprofessional/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003899
