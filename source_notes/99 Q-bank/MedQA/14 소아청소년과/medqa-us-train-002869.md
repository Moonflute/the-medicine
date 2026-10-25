---
type: qbank
schema_version: 1
id: medqa-us-train-002869
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:517c0c6b07f89facfe439108a2624357e0045b532f99d70279e7b090f7556177
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "Turner syndrome"
  - "45,X monosomy"
  - "streak ovaries"
  - "coarctation of aorta"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7YSw64SIIOymne2bhOq1sCAoVHVybmVyIFN5bmRyb21lKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv64yA64-Z66elIOy2leywqSAoQ29hcmN0YXRpb24gb2YgdGhlIEFvcnRhKS5tZA
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

15세 여아가 학교 신체검사를 위해 내원했다. 특별한 증상은 없고 학교 성적도 좋다. 키 147 cm, 체중 60 kg, BMI 27.6 kg/m²이다. 체온은 37°C, 맥박 82회/분, 호흡수 16회/분이며 혈압은 왼팔 138/82 mmHg, 왼쪽 다리 110/74 mmHg이다. 진찰에서 비정상적으로 짧고 넓은 목, 어깨까지 이어지는 양측 과잉 피부주름, 낮게 위치한 귀가 보인다. 팔을 옆으로 완전히 폈을 때 운반각이 증가되어 있고 흉부 X선에서 하부 늑골 패임이 보인다. 다음 중 추가로 나타날 가능성이 가장 높은 소견은?

## 선택지

A. 복부 CT에서 말발굽 모양 부신(horseshoe adrenal gland)
B. 활성화 부분 트롬보플라스틴 시간 연장
C. 유전자검사에서 FBN1 돌연변이
D. 골반 초음파에서 줄무늬 난소

## 해설

익상경·저신장·외반주와 상하지 혈압 차/늑골 패임은 터너증후군 및 대동맥축착을 시사한다. 성선 발달부전에 따른 띠모양(줄무늬) 난소(D)가 적절하다. 늑골 패임은 측부혈행과 관련된 뼈 가장자리 변화이지 갈비뼈 골절이 아니다. 문제는 성조숙 부재가 아니라 난소기능 저하와 사춘기 발달 지연이다. 원문 A는 horseshoe adrenal gland(부신)로, 터너증후군과 연관될 수 있는 말발굽콩팥으로 임의 번역하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 원문의 horseshoe adrenal을 말발굽콩팥으로 오역해 선택지를 바꾼 오류를 원문대로 복원하고 늑골 패임/성선발달 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002869
