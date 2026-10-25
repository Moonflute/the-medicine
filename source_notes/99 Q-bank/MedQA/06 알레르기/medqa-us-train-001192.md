---
type: qbank
schema_version: 1
id: medqa-us-train-001192
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5983b3c1ba6188936742af438e14235960b4a2b19647cbc2a39130d75c73a724
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "allergic rhinitis"
  - "asthma"
  - "eczema"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sCDruYTsl7wgKEFsbGVyZ2ljIFJoaW5pdGlzKS5tZA
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

17세 소년이 알레르기 비염으로 내원하였다. 환자는 매년 9월 학기가 시작될 때마다 재채기, 코막힘, 가려움증, 후비루 증상이 나타난다고 보고하였다. 환자는 소아기 천식과 습진의 가족력이 있다. 환자는 알레르기에 대해 어떠한 약물도 시도해 본 적이 없다. 환자의 증상을 관리하기 위한 다음 단계로 가장 적절한 약물은 무엇인가?

## 선택지

A. 비강 내 항히스타민제
B. 비강 내 크로몰린 나트륨(cromolyn sodium)
C. 비강 내 충혈완화제
D. 비강 내 코르티코스테로이드

## 해설


계절성 알레르기 비염의 1차 치료는 염증 억제를 위한 비강 스테로이드제이다. 이는 증상 완화와 장기 관리에 가장 효과적이다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001192`와 직접 대조했다.
- 판정: 계절성 비염의 코막힘·재채기와 선택지 D의 비강 스테로이드가 일치. 원문과 답을 보존하고 비염 약물 선택 근거 확인.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.aaaai.org/Aaaai/media/Media-Library-PDFs/Allergist%20Resources/Statements%20and%20Practice%20Parameters/Rhinitis-2020-A-practice-parameter-update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001192
