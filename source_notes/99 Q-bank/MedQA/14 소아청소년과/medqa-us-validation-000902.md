---
type: qbank
schema_version: 1
id: medqa-us-validation-000902
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6c5a95ccc684f523997a80420028e5838e8fcc9abd2fa043aaa53e50658616dc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "수두증"
  - "대천문 팽창"
  - "두부 초음파"
  - "Hydrocephalus"
question_type: investigation
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 5개월 남아가 머리둘레가 점점 커져 진료를 받으러 왔다. 긴장된 대천문과 아래쪽으로 편위된 눈, 눈꺼풀 후퇴가 있다. 가장 적절한 처치는?

## 선택지

A. 연속 요추천자
B. 두부 CT
C. 뇌척수액 션트 삽입
D. 두부 초음파

## 해설

긴장된 대천문·머리 성장 가속·sunsetting은 수두증/두개내압 상승을 의심한다. 열린 대천문을 통한 두부 초음파(D)는 뇌실 크기를 신속히 확인하는 방사선 없는 검사이다. 원인 규명에는 MRI 등이 추가로 필요할 수 있으며, 신경학적 악화 시 긴급 영상·신경외과 평가를 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파의 음향창을 열린 봉합이 아닌 대천문으로 교정하고 신속 평가의 중요성 명시.
- https://www.sciencedirect.com/science/article/pii/S1546144026001596
- https://choosingwiselycanada.org/recommendation/pediatric-neurosurgery/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000902
