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
question_type: mechanism
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

32세 남성이 HIV 병력과 여러 성 파트너가 있는 사회력으로 새로 생긴 피부 병변 때문에 내원했다. 과거 수술력과 가족력은 특이하지 않다. 혈압은 129/75 mm Hg, 맥박은 분당 66회, 호흡수는 분당 16회, 체온은 37.5°C (99.6°F)이다. 신체검사에서 음경 몸통과 항문 주위에 통증 없는 피부색의 납작하고 유두 모양인 병변이 많이 보인다. 5% 아세트산 용액을 바르자 병변이 하얗게 변한다. 이 병변의 원인은 무엇인가?

## 선택지

A. HPV 6형 및 11형
B. 임균
C. HPV 16형 및 18형
D. HSV 2형

## 해설


무통성 피부색 유두상 항문생식기 병변은 condyloma acuminatum이며 흔한 원인형은 HPV6·11 A이다. Acetic acid 후 백색화는 비특이적이어서 HPV6/11에 특이적이라고 할 수 없고 일반적인 확진/선별검사로 일률 권장되지 않는다. HIV 환자의 비전형·경결·궤양·출혈 병변은 악성/고등급 병변 감별을 위한 조직검사를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004537 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HPV6/11 사마귀 A 유지; acetic acid 백색화가 유전자형 특이적 진단이라는 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004537
