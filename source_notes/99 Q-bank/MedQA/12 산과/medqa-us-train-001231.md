---
type: qbank
schema_version: 1
id: medqa-us-train-001231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6aaed227041de4482442369676309deb2c128dc488a4880c0decd4396a0ab027
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "breast engorgement"
  - "breastfeeding"
  - "vitamin D deficiency"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yCsOyaleq4sCDsnKDrsKkg7Jq47ZiIIChQdWVycGVyYWwgQnJlYXN0IEVuZ29yZ2VtZW50KS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv67mE7YOA66-8IEQg6rKw7ZWN7KadIChWaXRhbWluIEQgRGVmaWNpZW5jeSkubWQ
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 초산 1회·분만 1회인 여성이 유방 압통으로 병원에서 진료를 받고 있다. 환자는 양쪽 유방이 부어 있고 압통이 있다고 말한다. 또한 신생아가 유방에 제대로 물지 못하는 데 어려움을 겪고 있다. 환자는 4일 전 합병증 없는 질식 분만을 했다. 임신 중 임신성 당뇨병이 발생했으나 그 외에는 건강했다. 엽산과 인슐린을 복용했고, 모든 산전 진료 예약에 참석했다. 진찰에서 미열이 있으나 다른 활력징후는 모두 안정적이다. 양쪽 유방은 울혈되어 보이고 촉진 시 압통이 있다. 발적, 열감 또는 경결은 없다. 수유 간호사가 환자와 신생아가 더 효과적인 수유 자세를 취하도록 돕기 위해 불려 왔다. 환자는 이웃이 모유에는 실제로 영양소가 부족하다고 말했다며, 신생아 건강을 위한 최선의 선택이 무엇인지 묻는다. 모유는 다음 중 어떤 성분의 공급원으로 부족한가?

## 선택지

A. 리소자임
B. 인
C. 비타민 D
D. 유청 단백질

## 해설

출산 4일째의 양측 울혈과 젖물림 곤란은 수유 초기에 생기는 유방울혈을 시사하며 비타민 D 부족이 원인은 아니다. 모유는 대체로 영아에게 적합한 영양을 제공하지만 비타민 D 공급은 충분하지 않다(C). 모유수유 또는 부분 모유수유 영아는 출생 직후부터 일반적으로 비타민 D 400 IU/일 보충이 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유방울혈을 모유 비타민D 부족 탓으로 연결한 오류 수정.
- https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-d.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001231
