---
type: qbank
schema_version: 1
id: medqa-us-train-008168
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cfa8f6e701fff5172bb5367823ab33990cd3ceaf23f614fc4ca3900a8f67365
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Kaposi sarcoma"
  - "HHV-8"
  - "AIDS"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

HIV 치료를 중단한 환자에게 통증이 없는 자주색 피부 판이 여러 개 생겨 카포시육종이 의심된다. 병변을 확진하는 방법은?

## 선택지

A. 혈액 HHV-8 항체 양성만으로 확진
B. 치료 반응만 보고 카포시육종으로 확진
C. 피부 표면 일반 세균배양
D. 피부 조직검사와 HHV-8 관련 면역조직화학염색

## 해설


카포시육종은 병변 조직에서 특징적인 혈관성 증식과 HHV-8 잠복 핵항원 염색을 확인해 진단한다. 바이러스에 노출된 적이 있다는 혈액검사만으로는 확진할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008168 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문에도 있는 HIV용 RPR이라는 잘못된 검사명을 임의 HIV항체로 바꾸지 않고 오류를 명시; Kaposi-HHV8 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/hiv.htm
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7301a1.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008168
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/human-herpesvirus
