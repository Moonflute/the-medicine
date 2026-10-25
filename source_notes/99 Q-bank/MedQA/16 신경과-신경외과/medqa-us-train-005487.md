---
type: qbank
schema_version: 1
id: medqa-us-train-005487
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1bd251d074b87346d77ee8d1fff1f4c568d6a93bd569390aaac1d1cf3a89704
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "혈관성 치매"
  - "다발성 열공경색"
  - "심혈관 위험인자"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2YiOq0gOyEsSDsuZjrp6QgKFZhc2N1bGFyIERlbWVudGlhKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남자가 4개월 동안 건망증, 혼돈과 기분 변화로 내원했다. 물건을 잃어버리고 재정관리를 못 하며 집에 돌아오는 길을 잃었다. 무감정하고 오른쪽 다리 감각저하와 불안정한 보행, 눈을 감고 팔을 뻗게 하면 오른팔 회내가 보이며 양측 심부백질 병변이 MRI에서 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 혈관성 치매
B. 전두측두엽 치매
C. 알츠하이머병
D. 비타민 B12 결핍

## 해설

인지·실행기능 저하에 국소 감각결손·오른팔 회내와 보행장애가 동반되고 혈관 위험인자 및 다발성 심부백질 병변이 있어 혈관성 인지장애/치매(A)가 가장 합당하다. 본문은4개월의 진행 경과이지 특정 급성 뇌졸중을 확진한 것이 아니다. 백질 병변 하나만으로 원인을 단정하지 않고 양상·부하와 임상 일치를 평가한다. 알츠하이머병과 혼합 병리가 함께 있을 수 있으며 다른 치매가 모두 언어·시공간 장애만으로 나타나는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 4개월 진행 경과를 급성 혈관사건이 확인된 것으로 설명한 오류를 제거했다. 실제 국소 신경소견·심부백질 병변과 A를 연결한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005487
