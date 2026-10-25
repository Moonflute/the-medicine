---
type: qbank
schema_version: 1
id: medqa-us-train-001022
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68bb3a60a0c3256e53cbda9ea1bc7ea28d15014bb81fca22c7ef58a73943950a
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "hypertension"
  - "coarctation of the aorta"
  - "Turner syndrome"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

소아 심장학 팀의 의대생이 원인 불명의 고혈압으로 일차 진료 의사에게 의뢰된 9세 여아를 진찰하고 있다. 아이는 어머니와 함께 내원하였으며, 어머니는 아이가 전반적으로 건강하지만 지난 1년간 또래보다 활동량이 현저히 적었다고 말한다. 신체 검진에서 의대생은 아이가 말랐고 겉보기에 고통스러운 기색은 없으며 실제 나이보다 약간 어려 보인다고 기록했다. 활력 징후는 혈압 160/80 mmHg, 심박수 80회/분, 호흡수 16회/분이다. 신체 검진상 수축기 무렵에 들리는 클릭음 외에는 심장 검진 결과는 정상이다. 발등 맥박(pedal pulses)은 촉지되지 않았다. 다음 중 의대생과 일차 진료 의사가 놓쳤을 가능성이 가장 높은 신체 검진 소견은 무엇인가?

## 선택지

A. 구개열
B. 돌출된 후두골
C. 긴 인중
D. 익상경(webbed neck)

## 해설

상지 고혈압과 촉지되지 않는 발 맥박은 대동맥 축착을 시사한다. 대동맥 축착과 이첨 대동맥판은 터너 증후군과 연관되므로 익상경(D)이 추가 소견일 수 있다. 수축기 클릭은 동반 판막 이상을 고려하게 하지만 본문에 청진 위치는 없으며 ‘좌측 상부’라고 만들어 넣지 않는다. 혈관의 축착과 판막 협착은 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 대동맥축착과판막협착혼동/잡음위치창작교정. Turner익상경D.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001022
