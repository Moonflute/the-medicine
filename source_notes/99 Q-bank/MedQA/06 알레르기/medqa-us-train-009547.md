---
type: qbank
schema_version: 1
id: medqa-us-train-009547
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:483e08f7fc4fccf8f838849660d8dce3df097fa440922a6c13d23cf272a3992c
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "ACE inhibitor angioedema"
  - "ACE 억제제 혈관부종"
  - "bradykinin metabolism"
  - "ACE inhibitor-induced angioedema"
related_disease_slugs: []
question_type: mechanism
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

44세 여성이 잠에서 깬 후 얼굴 부종과 말하기·삼키기 어려움으로 응급실에 왔다. 알레르기나 최근 곤충에 물린 적은 없고 고혈압과 제2형 당뇨병으로 약물치료 중이다. 맥박 110회/분, 호흡수 20회/분, 혈압 140/90 mmHg, 실내 공기 산소포화도 97%이다. 입술과 혀가 뚜렷하게 부어 있고 혈청 C4 수치는 정상이다. 증상의 가장 가능성 높은 기전은 무엇인가?

## 선택지

A. 제2형 과민반응
B. 아나필락시양 반응
C. 면역복합체 침착
D. 브래디키닌 대사 장애

## 해설


고혈압 약물치료 중 생긴 두드러기 없는 입술·혀 부종은 ACE 억제제 관련 브래디키닌 분해 저하를 의심하게 한다. 선지 중 D가 가장 타당하다. 다만 실제 약물을 확인해야 하며 정상 C4 하나만으로 모든 면역성 원인을 배제하거나 원인을 확정할 수는 없다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009547`와 직접 대조했다.
- 판정: 브래디키닌 대사 장애 D 유지. 정상 C4만으로 면역복합체 반응을 배제한다는 과도한 해석 제거.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9023902/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009547
