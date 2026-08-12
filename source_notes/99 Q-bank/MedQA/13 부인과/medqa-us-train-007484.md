---
type: qbank
schema_version: 1
id: medqa-us-train-007484
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00e9889cbd74383d132309502a5b81d2a94617f302af03de04c5f3e31f9f6b4e
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "BRCA 유전자"
  - "유전성 유방난소암"
  - "젊은 여성 유방 종괴"
  - "유방 초음파"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

환자 1 – 26세 여자가 연례검진을 위해 일차진료의를 찾아왔다. 급성 증상은 없고 전반적으로 건강하다고 한다. 천식이 있어 알부테롤 흡입기로 관리한다. 최근 자궁경부 세포검사는 정상이었다. 한 명의 남성과 성생활을 하며 콘돔을 꾸준히 사용한다. 가끔 마리화나를 피우고 일주일에 한 번 와인을 마신다. 어머니가 최근 진행성 난소암으로 사망했고 37세인 언니가 최근 유방암과 난소암을 진단받았다.
환자 2 – 27세 여자가 연례검진을 위해 내원했다. 가까운 친구 두 명이 최근 유방암을 진단받아 자신도 검사를 받고 싶어 한다. 왼쪽 유방에 작고 움직이는 종괴가 있으며 월경 전후로 커지고 압통이 생긴다. 아버지는 고혈압이 있다. 진찰에서 왼쪽 유방에 작고 경계가 명확하며 움직이고 압통이 없는 종괴가 만져진다.
환자 1과 2에 대한 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 환자 1 – BRCA 검사. 환자 2 – 유방 초음파
B. 환자 1 – 유방 초음파. 환자 2 – 3개월 후 임상 유방검사
C. 환자 1 – 유방 및 난소 초음파. 환자 2 – 유방촬영술
D. 환자 1 – CA-125 검사. 환자 2 – BRCA 검사

## 해설


가족력이 강하고 젊은 여성인 경우 BRCA 유전자 검사가 1차 선별에 적합하다. 환자 2는 양성 종괴가 있어 초음파가 필요하지만, 질문은 두 환자에 대한 가장 적절한 다음 단계이므로 환자 1에 대한 BRCA 검사가 핵심이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007484
