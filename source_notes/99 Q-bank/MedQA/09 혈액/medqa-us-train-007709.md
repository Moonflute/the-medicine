---
type: qbank
schema_version: 1
id: medqa-us-train-007709
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f2876c792f5b852941d84e1240fc00763e0ea0991f6941ead52562be18d6e52
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "scurvy"
  - "vitamin C deficiency"
  - "gingival bleeding"
  - "Vitamin C deficiency"
related_disease_slugs: []
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

5세 남아가 어머니와 함께 진료실에 왔다. 아버지가 최근 사망했고 어머니는 직장을 잃었다. 정기적으로 식량을 살 수 없어 삶거나 보존한 채소를 먹어야 했다. 아이에게 과거 질환은 없지만 양치할 때 잇몸에서 피가 난다고 한다. 활력징후는 정상이나 영양실조로 보인다. 잇몸 비대와 머리에 작고 말린 곱슬 모발이 관찰된다. 전혈구검사에서 헤모글로빈 9.5 g/dL, MCV 85 fL이며 PT, aPTT, 출혈시간은 모두 정상이다. 가장 가능성 높은 원인은?

## 선택지

A. 비타민 K 결핍
B. 비타민 C 결핍
C. 비타민 B12 결핍
D. 비타민 B3 결핍

## 해설


잇몸 출혈, 치아 주위 출혈, 잇몸 비대, 피부에 점상 출혈이 동반된 영양실조는 비타민 C(아스코르브산) 결핍인 괴혈병의 특징이다. 따라서 가장 가능성 높은 원인은 비타민 C 결핍이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007709 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 영양부족·잇몸 출혈·꼬인 모발과 정상 응고검사의 scurvy C결핍 B를 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007709
