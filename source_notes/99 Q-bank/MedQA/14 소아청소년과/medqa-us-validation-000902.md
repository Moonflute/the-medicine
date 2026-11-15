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
answer: A
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

5개월 영아의 머리둘레가 짧은 기간에 성장곡선 두 구간을 넘어 빠르게 커졌다. 대천문이 팽팽하고 눈이 아래로 치우치지만 의식과 순환은 안정적이다. 다음 조치는?

## 선택지

A. 경천문 초음파로 뇌실을 신속히 평가하고 신경외과 평가를 연결한다
B. 발달이 늦어질 때까지 머리둘레만 연 1회 잰다
C. 두개내압이 높을 수 있어도 요추천자를 먼저 시행한다
D. 영상으로 확인하지 않고 뇌실 션트를 바로 삽입한다

## 해설

머리 성장 가속, 팽팽한 대천문과 일몰안 증상은 수두증의 경고 신호다. 대천문이 열려 있으면 초음파로 뇌실의 크기를 확인하고 필요시 MRI로 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 초음파의 음향창을 열린 봉합이 아닌 대천문으로 교정하고 신속 평가의 중요성 명시.
- https://www.sciencedirect.com/science/article/pii/S1546144026001596
- https://choosingwiselycanada.org/recommendation/pediatric-neurosurgery/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000902
