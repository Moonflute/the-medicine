---
type: qbank
schema_version: 1
id: medqa-us-train-000550
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:876a21c1b659e61691a230557b7fb988af7e7d04ae758cb2d666d5de082ff434
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "HIV infection"
  - "pregnancy"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

23세 초임부 여성이 임신 36주에 첫 산전 진찰을 위해 내원하였다. 몇 달 전 가정용 소변 임신 테스트기로 임신을 확인했으나 아직 의사의 진료를 받은 적은 없다. 복용 중인 약물은 없다. 활력 징후는 정상 범위 내에 있다. 골반 검사상 자궁 크기는 임신 36주에 부합한다. 검사실 검사 결과는 다음과 같다: 혈색소 10.6 g/dL, 혈청 포도당 88 mg/dL, B형 간염 표면 항원 음성, C형 간염 항체 음성, HIV 항체 양성, HIV 바이러스 부하 11,000 copies/mL (정상 < 1000 copies/mL). 초음파 검사상 자궁 내 태아 크기는 임신 36주에 부합한다. 이 환자의 관리로 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 분만 중 지도부딘(zidovudine) 투여 및 진통 시 질식 분만
B. 복합 항레트로바이러스 요법(cART) 시작 및 임신 38주에 제왕절개 분만 예정
C. 복합 항레트로바이러스 요법(cART) 시작 및 임신 38주에 질식 분만 준비
D. 즉시 제왕절개 분만 시행

## 해설


임신 36주에 HIV 양성이고 바이러스 부하가 높은 경우, 임신 38주에 제왕절개를 계획하며 cART를 시작하는 것이 태아 감염 위험을 최소화한다. 분만 시 zidovudine 단독 투여는 충분하지 않다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000550
