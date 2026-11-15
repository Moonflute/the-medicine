---
type: qbank
schema_version: 1
id: medqa-us-train-004812
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf2dfe82e39178756bb36ea2a9bf345b51a70a80a46c8909e332f97ecfd7bad6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "고혈압성 뇌병증"
  - "가역적 후뇌 병증 증후군"
  - "뇌 MRI"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
difficulty: standard
answer: D
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

조절되지 않는 고혈압이 있는 53세 남성이 갑작스러운 심한 두통과 혼돈으로 왔다. 혈압은 206/132 mmHg다. 국소 신경학적 결손이 없고 비조영 두부 CT에서 출혈은 확인되지 않았다. 후방가역뇌병증증후군(PRES)이 의심될 때 뇌부종을 확인할 검사는?

## 선택지

A. 뇌 CT 혈관조영술
B. 목 CT 혈관조영술
C. 요추천자
D. 뇌 MRI

## 해설

심한 혈압 상승과 급성 뇌병증은 후방가역뇌병증증후군 가능성을 높인다. 뇌 MRI는 혈관성 부종의 분포를 확인하는 데 도움이 된다. 검사를 기다리는 동안에도 고혈압성 응급 평가와 초기 처치를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 특정 CT 저음영을 보았다고 하는 오류와 PRES는 확산제한이 뚜렷하다는 기전 오류를 수정했다. 임상적으로 의심되는 PRES 평가 MRI D는 유지한다.

- 공식/학회 근거: https://www.ajnr.org/content/ajnr/23/6/1038.full.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004812
