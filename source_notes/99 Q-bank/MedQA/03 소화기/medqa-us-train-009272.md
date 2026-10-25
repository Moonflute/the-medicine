---
type: qbank
schema_version: 1
id: medqa-us-train-009272
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ade3d436373a89f7655d00ad5717fcfe25c7d0076f842c464cb1125a54a41c63
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "niacin deficiency"
  - "나이아신 결핍"
  - "pellagra"
  - "Niacin deficiency"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
question_type: prognosis
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

58세 여성이 2개월 동안 간헐적인 비혈성 설사로 내원했다. 체중 감량을 위해 6개월 동안 생식 식단을 따르고 있다. 불안으로 플루복사민을 복용하며 골감소증이 있다. 어머니는 유당불내증이 있고 최근 골다공증을 진단받았다. 흡연과 음주는 하지 않는다. 최근 여행에 대해 묻자 3개월 전 우간다 봉사여행에서 돌아왔다고 한다. 체온 99°F(37.2°C), 혈압 130/78 mmHg, 맥박 70회/분, 호흡수 14회/분, 산소포화도 98%이다. 진찰에서 새로 발생한 수축기 박출 잡음이 왼쪽 두 번째 늑간에서 가장 크게 들린다. 이 환자에게 발생할 수 있는 것은 무엇인가?

## 선택지

A. 혈소판 수 감소
B. 양성 수소 호기검사
C. 크로모그라닌 A 수치 감소
D. 나이아신 결핍

## 해설


정답 D. 만성 설사와 폐동맥판 협착을 시사하는 새 심잡음은 carcinoid syndrome 및 우심장 판막병을 고려하게 한다. 종양의 serotonin 생성에 tryptophan이 많이 사용되면 niacin 합성이 감소하여 pellagra 위험이 높아질 수 있다. 이 문항은 이 기전을 묻는다. 생식 식단만으로 niacin 결핍을 확진하는 것은 아니며, carcinoid의 확진 검사 결과도 본문에 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009272 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 폐동맥판 병변과 만성 설사를 carcinoid syndrome의 tryptophan 소모–niacin 결핍에 연결; 생식 식단만의 결핍으로 오해한 해설 교체.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9539661/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009272
