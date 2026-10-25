---
type: qbank
schema_version: 1
id: medqa-us-train-008107
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:67450daf0ac1685ecaf1774d3fc0a3581a300e99fd0dc1977ff558768761fea5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "splenic laceration"
  - "hemoperitoneum"
  - "blunt abdominal trauma"
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-ywveyDgSDrsI8g7Je07IOBIChXb3VuZHMgYW5kIExhY2VyYXRpb25zKS5tZA
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
question_type: diagnosis
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
---

# MedQA US 임상문제

## 문제

24세 남자가 정면충돌 교통사고 후 구급차로 응급실에 왔다. 현재 의식이 없고 과거력은 최근 상기도감염 때 아목시실린을 투여받고 발진이 생긴 알레르기 외에는 특이사항이 없다. 소생술 후 FAST 검사에서 모리슨 주머니에 복강 내 유리액체가 보였고 초기에는 경미한 멍과 찰과상만 있었다. 추가 소생 후 반응이 돌아오면서 구토하기 시작했다. 가장 가능성 높은 진단은?

## 선택지

A. 십이지장 혈종
B. 비장 열상
C. 내부 외상 소견 없음
D. 하대정맥 파열

## 해설


둔상 후 FAST의 복강내 자유액은 출혈성 복부 장기손상을 의심하게 한다. 선택지 중 비장 열상(B)이 가장 가능한 원인이며 내부 손상이 없다는 C는 맞지 않는다. 그러나 Morrison 주머니의 액체는 혈액의 저류 위치이지 비장 손상의 직접 증거가 아니며 구토도 장기를 특정하지 못한다. 실제 손상 위치·정도는 혈역학에 따른 추가 영상 또는 수술에서 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008107 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: FAST 자유액과 구토만으로 출혈장기를 확정한다는 표현을 선택지 내 가장 가능한 비장 열상으로 제한했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008107
