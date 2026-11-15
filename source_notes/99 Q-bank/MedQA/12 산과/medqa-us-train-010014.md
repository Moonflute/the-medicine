---
type: qbank
schema_version: 1
id: medqa-us-train-010014
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a318adb18512fda3d0606dc9f4212ebc90316651eb6571e7c261134d82fce654
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "절박유산"
  - "생존 태아"
  - "임신 중 질출혈"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-ygiOuwlSDsnKDsgrAgKFRocmVhdGVuZWQgQWJvcnRpb24pLm1k
  - MTIg7IKw6rO8L-yehOyLoCDspJEg7KeI7Lac7ZiILm1k
difficulty: complex
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

임신 8주 산모가 이전에 유산을 두 번 했고 이번에 소량의 질출혈이 있다. 초음파로 자궁내 태아의 심박을 확인했다. 경부는 닫혀 있고 혈역학적으로 안정적이다. NICE 지침에서 추가로 권하는 치료는?

## 선택지

A. 질 미세화 프로게스테론
B. 저용량 아스피린을 모든 경우에 추가
C. 주사 황산마그네슘
D. 태아 심박이 있어도 예방적으로 자궁 흡인술

## 해설

NICE는 자궁내 임신이 확인된 초기 출혈 환자에게 유산 과거력이 있으면 질 미세화 프로게스테론을 권고한다. 태아 심박이 확인된 경우 16주까지 계속하는 지침이며, 유산력이 없는 절박유산과 구분한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 폐쇄된 자궁경부와 생존 태아가 있는 출혈의 절박유산 진단을 유지하고, 원문에 서술된 일률적 안정 처방을 유산 예방 근거로 오인하지 않도록 구분했다.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010014
- https://www.nice.org.uk/guidance/ng126/chapter/management-of-miscarriage
