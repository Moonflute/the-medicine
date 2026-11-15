---
type: qbank
schema_version: 1
id: medqa-us-train-003868
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:46e5bfcaa82d989acd1d9722294b78d21d93f9c53405ba22e9c2977f23e685d8
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "doxorubicin cardiotoxicity"
  - "anthracycline therapy"
  - "left ventricular ejection fraction"
  - "echocardiography"
  - "Anthracycline cardiotoxicity"
related_disease_slugs: []
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvRG94b3J1YmljaW4ubWQ
---

# MedQA US 임상문제

## 문제

54세 유방암 환자가 독소루비신 항암치료 중 새로 휴식 시 호흡곤란과 폐울혈을 보인다. 심초음파에서 좌심실 박출률이 61%에서 30%로 감소했다. 당장의 항암·심장 치료 계획은?

## 선택지

A. 독소루비신을 중단하고 심부전을 치료한다
B. 독소루비신을 절반 용량으로 계속한다
C. 다음 주기 독소루비신 전에 덱스라족산만 추가한다
D. 독소루비신을 유지하며 영상검사만 반복한다

## 해설


안정 시에도 증상이 있는 중증 심부전과 박출률 저하가 나타났다면 독소루비신을 중단하고 심부전을 치료한다. 이후 항암계획은 심장 상태와 암 치료 이득을 함께 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003868 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 좌심실 구획이라는 오역과 심장 MRI는 민감하지 않다는 잘못된 배제를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/ehjcimaging/article/23/10/e333/6675075
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1fd148fb-0fbc-4b6f-b790-23546fb46a71

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003868
- https://academic.oup.com/eurheartj/article/43/41/4229/6673995
