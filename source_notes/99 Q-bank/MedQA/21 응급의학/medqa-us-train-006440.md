---
type: qbank
schema_version: 1
id: medqa-us-train-006440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:04af59d1c4e8b5a6a04aee719cb61c36f8f4fcb0e743bfa86b0755ba9d4888e1
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "운동성 열사병"
  - "고체온증"
  - "의식 변화"
  - "Exertional heat stroke"
question_type: diagnosis
related_disease_slugs:
  - MjEg7J2R6riJ7J2Y7ZWZL-yXtOyniO2ZmCAoSGVhdCBJbGxuZXNzKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9IYWxvcGVyaWRvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 남성이 급성 혼돈 상태로 응급실에 내원했다. 동료들이 지역 건설현장에서 쓰러져 있는 것을 발견했다. 과거력으로 경련장애와 조현병이 있으며 현재 할로페리돌을 복용한다. 2개월 전 염증이 생긴 충수를 제거하는 수술을 받았다. 체온은 105°F(40.6°C), 혈압은 120/84 mmHg, 맥박은 분당 150회, 호흡수는 분당 19회, 실내 공기에서 산소포화도는 99%이다. 질문에 답하지 못하는 혼돈된 상태이고 옷은 땀에 흠뻑 젖어 있다. 사지를 목적 있게 움직이지 않지만 뚜렷한 국소 신경학적 결손은 없다. 다음 중 가장 가능성 높은 진단은?

## 선택지

A. 운동으로 인한 열사병
B. 열탈진
C. 악성 고열증
D. 신경이완제 악성 증후군

## 해설

40.6°C의 고체온과 혼돈은 열탈진보다 열사병(A)을 시사하며, 건설 작업이라는 상황도 이를 지지한다. 운동성 열사병에서는 땀이 많이 날 수 있으므로 피부가 건조하지 않다는 이유로 배제할 수 없다. 다만 실제 주변 온도나 운동 강도가 수치로 제시된 것은 아니다. 할로페리돌 복용은 신경이완제 악성증후군의 감별 단서이므로 근육 강직, 약물 변경과 CK 등을 평가해야 하며, 수개월 전 마취만으로 악성 고열증을 설명하기는 어렵다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 고체온과 중추신경계 이상이라는 열사병의 핵심을 설명한다. 땀을 흘리므로 배제하거나 원문에 없는 환경·운동 강도를 만들어 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006440
