---
type: qbank
schema_version: 1
id: medqa-us-train-002714
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a7162506ef46edf869369484660ca105c835832df80d71afa9d3217c739fee3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "neurofibromatosis type 1"
  - "von Recklinghausen disease"
  - "cafe-au-lait macules"
  - "axillary freckling"
  - "Lisch nodules"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug6rK9IOyErOycoOyiheymnSAoTmV1cm9maWJyb21hdG9zaXMpLm1k
difficulty: complex
answer: D
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

9세 여아가 최근 발생한 발작을 평가받기 위해 어머니와 함께 소아과에 왔다. 지난 3일 동안 전신 강직간대발작을 2회 했으며, 각 발작은 1~2분간 지속되다가 저절로 멈췄다. 발열, 두통, 행동 변화, 설사, 구토 또는 이전 발작의 병력은 없다. 과거력은 특이사항이 없다. 혈압은 102/64 mmHg, 심박수 89회/분, 호흡수 16회/분, 체온 37.0°C이다. 불안해 보이지만 시간과 장소에 대한 지남력은 정상이다. 몸 전체에 지름 5 mm가 넘는 여러 편평한 과색소침착 반점이 있고 겨드랑이 주근깨가 보인다. 뇌신경은 정상이며 사지 근력과 감각검사도 정상이다. 보행은 정상이다. 안과검사 소견이 제시되어 있다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 제2형 신경섬유종증
B. 스터지-웨버병
C. 결절성 경화증
D. 폰 레클링하우젠병

## 해설

다수의 카페오레 반점과 겨드랑이 주근깨는 제1형 신경섬유종증(NF1), 즉 폰 레클링하우젠병(D)을 강하게 시사한다. 사춘기 전에는 5 mm를 넘는 카페오레 반점들이 진단 단서가 된다. 리쉬 결절도 NF1에서 관찰될 수 있으나 현재 안과 사진을 확인할 수 없으므로 이 환자에서 관찰되었다고 단정하지 않는다. NF2 관련 질환은 양측 전정신경초종 등이 대표적이며 결절성 경화증의 저색소반과는 구별된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 사진에서 리쉬 결절을 보았다고 단정하지 않도록 수정했다. 본문의 다수 5 mm 초과 색소반과 겨드랑이 주근깨만으로도 NF1 D를 충분히 시사하여 이미지 부재만으로 보류하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002714
