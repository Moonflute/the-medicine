---
type: qbank
schema_version: 1
id: medqa-us-train-004537
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:889be6b0847e0b7723badb289fed99b8a68d5f70b5b166630de2798a056e0ef6
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "콘딜로마 첨형"
  - "인유두종바이러스 6·11형"
  - "생식기 사마귀"
  - "Genital warts"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yDneyLneq4sCDsnbjqsIQg7Jyg65GQ7KKFIOuwlOydtOufrOyKpCAoR2VuaXRhbCB3YXJ0cykubWQ
question_type: investigation
difficulty: complex
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
---

# MedQA US 임상문제

## 문제

HIV 환자에게 항문 주위 사마귀 모양 병변이 있다. 그중 하나는 단단하게 고정돼 있고 궤양과 출혈을 동반한다. 첨형 콘딜로마처럼 보이더라도 우선 할 일은?

## 선택지

A. 비전형 병변의 조직검사를 시행한다
B. HPV 유전자형 결과만으로 암을 배제한다
C. 아세트산을 발라 희게 변하면 양성으로 판정한다
D. 모든 병변에 냉동요법을 먼저 시행한다

## 해설


경결, 고정, 궤양이나 출혈을 보이는 병변은 특히 면역저하 환자에서 조직검사로 고등급 병변이나 악성종양을 배제한다. 아세트산에 희게 변하는 소견은 특이적이지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004537 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HPV6/11 사마귀 A 유지; acetic acid 백색화가 유전자형 특이적 진단이라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004537
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10789539/
