---
type: qbank
schema_version: 1
id: medqa-us-train-010093
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b14f0c3b419196ee812aaf7dbf7c62f19b5a9c5d049cda3db02c7784095831d1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "지아르디아증"
  - "Giardia lamblia"
  - "오염된 물"
  - "Giardia infection"
related_disease_slugs: []
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

29세 남성이 며칠 동안 지속된 복부 팽만과 기름지고 악취 나는 설사로 내원했다. 지난주 캠핑을 다녀온 뒤 증상이 시작되었고, 개울에서 물을 떠왔지만 끓이거나 화학적으로 처리하지 않았다고 한다. 오심, 체중 감소, 복부 경련 뒤 갑작스러운 설사도 있다. 뒤무직, 요절박, 혈성 설사는 부인한다. 체온 37°C, 호흡수 분당 15회, 맥박 분당 107회, 혈압 89/58 mmHg이며 점막이 건조하다. 정맥 수액을 시작하고 대변을 검사했더니 현미경에서 운동성 원충이 보이고 난자는 없으며 혈액세포와 고름세포도 없다. 가장 가능성 높은 진단은?

## 선택지

A. 지아르디아증
B. C. difficile 대장염
C. 과민성대장증후군
D. 노로바이러스에 의한 여행자 설사

## 해설


처리하지 않은 개울물 노출, 악취 나는 지방변과 복부팽만은 Giardia 감염(A)을 지지한다. 현미경에서 운동성 영양형이 확인될 수 있다. Giardia는 원충이므로 연충의 알(ova)을 만들지 않지만, 알이 없다는 소견만으로 Giardia를 확진하거나 포낭이 없다고 결론내리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010093 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 처리 안 된 물·지방변·팽만과 운동성 원충은 Giardia A. Ova 음성 자체를 Giardia의 특이 진단 근거로 오해하지 않도록 수정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010093
