---
type: qbank
schema_version: 1
id: medqa-us-train-007805
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:34426a57090b0bbdde8c137e9ad359626de5f10cd6681fc646fe24f3ae155eff
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "17-alpha-hydroxylase deficiency"
  - "46,XX disorder of sex development"
  - "hypokalemic hypertension"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: diagnosis
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

15세 청소년이 초경이 없고 유방과 음모 발달도 거의 없다. 혈압 160/90 mmHg, 칼륨 2.9 mmol/L이며 레닌·알도스테론과 안드로겐이 모두 낮다. 어떤 효소 결핍이 가장 잘 설명하는가?

## 선택지

A. 21-수산화효소 결핍
B. 5α-환원효소 결핍
C. 11β-수산화효소 결핍
D. 17α-수산화효소 결핍

## 해설


17α-수산화효소 결핍은 성호르몬 합성을 줄이면서 무기질코르티코이드 작용을 하는 전구체를 늘려 저칼륨성 고혈압을 일으킨다. 11β-수산화효소 결핍도 고혈압을 일으킬 수 있지만 안드로겐은 증가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007805 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 경부 부재를 46XX로 확정한 오류 제거. CYP17A1 결핍은 DOC/corticosterone 증가로 저칼륨성 고혈압, 성호르몬 부족.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://medlineplus.gov/genetics/condition/17-alpha-hydroxylase-17-20-lyase-deficiency/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007805
- https://doi.org/10.1210/er.2017-00054
