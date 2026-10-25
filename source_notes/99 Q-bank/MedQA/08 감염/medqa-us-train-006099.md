---
type: qbank
schema_version: 1
id: medqa-us-train-006099
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d85f2a08d0f789ed69fd8d8e231019ca6026c4bfa8e80d43f61ed1f0fad72b92
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "크립토코쿠스 수막염"
  - "AIDS"
  - "두개내압 상승"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waG90ZXJpY2luQi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
---

# MedQA US 임상문제

## 문제

AIDS(CD4 47)인 26세 여성이 일주일 동안 피로, 점점 심해지는 두통과 발열이 지속되어 응급실에 왔다. 요추천자에서 개방압 285mmH₂O, 림프구 증가, 단백 상승 및 포도당 감소가 확인되었다. 정맥 내 암포테리신 B와 경구 플루시토신을 시작했다. 다음 중 급성기에 추가로 필요한 치료는 무엇인가?

## 선택지

A. 플루코나졸
B. 반복적인 요추천자
C. 만니톨
D. 아세타졸아미드

## 해설


AIDS 환자에서 크립토코쿠스 수막염은 두개내압 상승을 일으키며, 압력 감소를 위해 반복적인 요추천자가 필요하다. 다른 선택지는 항진균제 추가나 삼투압제 사용이지만, 급성 압력 관리에 가장 직접적인 방법은 요추천자 반복이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006099 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 두통과 개방압28.5cmH₂O의 cryptococcal 수막염에서 치료적 반복 LP B를 공식 권고와 원문 대조 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/cryptococcosis/treatment/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006099
