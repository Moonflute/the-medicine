---
type: qbank
schema_version: 1
id: medqa-us-train-001733
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:95243d12cf3e0574cc8e54ad25e87b2514d55410254b096ec0df1387e73edbf5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "Tourette syndrome"
  - "autism spectrum disorder"
  - "motor and vocal tics"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yekO2PkCDsiqTtjpntirjrn7wg7J6l7JWgIChBdXRpc20gU3BlY3RydW0gRGlzb3JkZXIpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uanOugmyDsnqXslaAgKFRvdXJldHRlIERpc29yZGVyKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

9세 남아가 학교 행동문제로 내원했다. 부모는 지난 1년 동안 이유 없이 손을 흔드는 행동을 자주 한다고 하고 학교에서 큰 끙끙 소리를 내 다른 학생과 교사를 방해한다. 천식과 아토피피부염 병력이 있으며 진찰 중에도 소리를 내고 의사를 불신하며 질문에 답하거나 눈을 맞추지 않는다. 다음 중 함께 나타날 가능성이 가장 높은 소견은 무엇인가?

## 선택지

A. 환청
B. 밤에만 발생하는 기침
C. 손을 과도하게 씻음
D. 의사소통 능력 저하

## 해설

1년간 반복 운동 틱과 발성 틱이 있어 투렛증후군을 시사한다. 투렛증후군은 강박장애 및 ADHD와 흔히 동반되므로 선지 중 반복 손씻기 강박행동(C)이 적합하다. 이를 자폐스펙트럼장애에 특이한 강박행동이라고 설명하는 것은 부정확하다. 눈맞춤이나 진료실 답변만으로 자폐 진단을 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Tourette-OCD동반을자폐강박으로잘못연결한해설교정. C유지.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001733
