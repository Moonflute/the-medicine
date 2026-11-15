---
type: qbank
schema_version: 1
id: medqa-us-train-005440
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7a8f6c746e9ff4607add11e237b1f7e2a63587c1128e5711980249eef7ba16d3
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "유착태반"
  - "전치태반"
  - "제왕절개 자궁절제술"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: B
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

제왕절개를 두 번 받은 임신 34주 산모의 태반이 이전 자궁 흉터에 걸쳐 있고, 여러 열공과 태반 뒤 경계 소실이 보인다. 산모는 향후 임신을 원하지 않는다. 태반유착스펙트럼이 강하게 의심될 때 분만 계획은?

## 선택지

A. 태반이 저절로 떨어질 때까지 40주 이후로 분만을 미룬다
B. 다학제 전문센터에서 태반을 억지로 떼지 않는 제왕절개 자궁절제술을 계획한다
C. 일반 병동에서 질식분만 후 태반을 손으로 떼어낸다
D. 제왕절개 때 태반을 먼저 긁어낸 뒤 출혈 여부를 확인한다

## 해설

유착이 강하게 의심되면 수혈과 수술팀을 준비할 수 있는 센터에서 분만을 계획한다. 표준 접근은 태반을 분리하지 않은 상태로 제왕절개 자궁절제술을 진행하는 것이며, 억지 분리는 대량출혈을 초래할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 1.5cm를 태반–자궁벽 거리·자궁파열 기준으로 오해한 해설 수정.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2018/12/placenta-accreta-spectrum

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005440
