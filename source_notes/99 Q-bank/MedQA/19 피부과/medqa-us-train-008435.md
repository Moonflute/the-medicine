---
type: qbank
schema_version: 1
id: medqa-us-train-008435
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:074538f969d24cf73e835c08dc4e6f26a11d16871e5446981b44c8d1488379a6
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "dermatitis herpetiformis"
  - "celiac disease"
  - "gluten-sensitive enteropathy"
question_type: diagnosis
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shYDrpqzslYXrs5EgKENlbGlhYyBEaXNlYXNlKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

중등도의 얼굴 여드름과 경미한 천식 외에는 특별한 병력이 없는 19세 남성이 새로운 발진으로 일차진료를 받으러 왔다. 주로 팔꿈치 뒤쪽에 생겼고 가렵다고 한다. 또한 6개월 동안 악취 나는 설사를 해 왔다. 사회력과 가족력에는 특이사항이 없다. 혈압 109/82mmHg, 맥박 66회/분, 호흡수 16회/분, 체온 36.7°C(98.0°F)이다. 신체검사에서 홍반과 부종을 바탕으로 한 팔꿈치의 딱지성 수포 군집이 보인다. 가장 가능성 높은 기저 질환은 무엇인가?

## 선택지

A. 식품 알레르기
B. 제2형 당뇨병
C. 셀리악병
D. IgA 신병증

## 해설

팔꿈치 폄면의 심한 소양성 군집 수포·가피와 만성 악취성 설사는 포진상피부염(dermatitis herpetiformis) 및 연관 celiac disease(C)를 지지한다. 이는 단순 두드러기와 다르며 피부 유두부 IgA 침착이 특징이다. Gluten 관련 장 점막 손상과 흡수장애가 설사·영양결핍에 기여할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Celiac C의 피부 표현을 두드러기로 잘못 적은 설명을 포진상피부염으로 교정한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008435
