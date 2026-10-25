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
question_type: monitoring
difficulty: simple
answer: C
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

침윤성 유방암으로 수술과 방사선치료 후 사이클로포스파미드와 독소루비신 보조항암요법을 시작하는 54세 여성에서 치료를 모니터링하기 위해 정기적으로 시행해야 하는 검사는?

## 선택지

A. 심장 MRI
B. 심전도
C. 심초음파
D. 정기 모니터링이 필요하지 않다

## 해설


Doxorubicin은 누적량 관련 심근독성과 좌심실 기능저하를 일으킬 수 있다. 치료 전 기저치와 치료 중/후 위험도에 따른 심초음파(C)로 LVEF 및 가능한 경우 GLS를 평가한다. 검사 간격은 누적량·기저 심혈관 위험·증상에 따라 조절하며 모든 환자가 동일한 간격은 아니다. 심전도만으로 수축기 기능을 평가할 수 없지만 심장 MRI는 정확한 대체 평가법으로, 심초음파 영상이 불충분할 때 고려한다. MRI가 민감하지 않아 제외되는 것이 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003868 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 좌심실 구획이라는 오역과 심장 MRI는 민감하지 않다는 잘못된 배제를 교정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://academic.oup.com/ehjcimaging/article/23/10/e333/6675075
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1fd148fb-0fbc-4b6f-b790-23546fb46a71

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003868
