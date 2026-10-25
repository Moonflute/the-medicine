---
type: qbank
schema_version: 1
id: medqa-us-test-000939
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2f682ce2e2912d77264ff272c8ce208d8368e3cc633a53a4a35e33e6314969a6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "G6PD 결핍"
  - "약물 유발 용혈"
  - "글리피지드"
  - "G6PD deficiency"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: mechanism
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
---

# MedQA US 임상문제

## 문제

44세 비만 흑인 남성이 3일간 피로와 짙은 소변으로 진료를 받으러 왔다. 출생 이후 비슷한 에피소드가 여러 번 있었지만 모두 저절로 호전되었다. 조절이 잘 되지 않는 제2형 당뇨병이 5년간 있었고 일주일 전 글리피지드를 시작했다. 증상 전에는 상기도나 위장관 증상이 없이 건강했다. 주로 패스트푸드를 먹지만 한 달 전 새 레바논 식당을 방문했다. 증상의 가장 가능성 높은 원인은?

## 선택지

A. 세균 감염
B. 음식
C. 약물
D. 특발성

## 해설


출생 이후 반복된 용혈 의심 증상과 새 glipizide 복용 뒤 짙은 소변은 G6PD 결핍의 약물 유발 용혈(C)을 시사한다. Glipizide는 설포닐우레아제이고 GLP 계열 약물이 아니다. 음식·감염도 용혈을 유발할 수 있지만 이 사례의 시간관계는 약물과 맞는다. 급성 신부전은 본문에 제시되지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000939 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: glipizide 후 G6PD 용혈 C 유지. 글루카곤 유사체라는 약물군 오류, 미제시 신부전, 감염/음식은 유발 불가라는 오류 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17d1f383-170e-4e5e-a97e-d346ee026166

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000939
