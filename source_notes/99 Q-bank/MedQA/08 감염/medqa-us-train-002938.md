---
type: qbank
schema_version: 1
id: medqa-us-train-002938
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5acc90d1f1aa0626dd7c1c5817b895526681a9f9cf11af89cf8c60805cc70ead
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "tuberculosis screening"
  - "BCG vaccination"
  - "interferon-gamma release assay"
  - "latent tuberculosis infection"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yeoOuztSDqsrDtlbUgKOyEseyduCkgKExhdGVudCBUdWJlcmN1bG9zaXMgKEFkdWx0KSkubWQ
question_type: investigation
difficulty: complex
answer: D
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
---

# MedQA US 임상문제

## 문제

43세 여성이 간호사로 새 직장을 시작하기 전 정기검진을 받으러 왔다. 지난 1년 동안 가벼운 호흡곤란과 특히 아침에 흰 가래가 나오는 기침이 있었다. 40년 전 부모와 함께 남아프리카공화국에서 미국으로 이민했다. 소아기에 경구 소아마비 백신과 BCG를 포함한 모든 예방접종을 받았다. 30년 동안 하루 두 갑의 담배를 피웠고 가끔 와인 한 잔을 마신다. 양쪽 폐야에 천명이 들리고 혈액검사는 정상이다. 다음 중 이 환자에서 결핵을 평가하기 위한 가장 적절한 다음 단계는?

## 선택지

A. 투베르쿨린 피부검사
B. 객담 배양
C. 객담 PCR
D. 인터페론-감마 방출검사

## 해설


취업 전 결핵 감염 선별의 맥락에서 BCG 영향을 받지 않는 IGRA D가 TST보다 적절한 선택이다. 다만 환자는 만성 기침이 있어 흡연 관련 기도질환 외에도 활동성 결핵을 임상적으로 평가해야 한다. IGRA는 감염 여부를 뒷받침할 뿐 잠복과 활동성 결핵을 구분하거나 활동성 질환을 배제하는 검사는 아니다. 증상·진찰에 따라 흉부 영상과 객담 분자검사/배양이 필요할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002938 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: BCG 접종자의 감염 선별 IGRA D 유지; 만성 기침에서 활동성 TB를 IGRA 하나로 배제할 수 없다는 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/tb/hcp/testing-diagnosis/clinical-and-laboratory-diagnosis.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002938
