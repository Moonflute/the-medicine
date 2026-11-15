---
type: qbank
schema_version: 1
id: medqa-us-train-000074
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:76a0e71ab98f3ba4323edded74f475d1364c351c58e247da85b9a22a468fae57
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "조기 양막 파열"
  - "자궁 수축"
  - "조산"
  - "Premature rupture of membranes"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yhsOq4sCDslpHrp4kg7YyM7IiYIChQcmVtYXR1cmUgUnVwdHVyZSBvZiBNZW1icmFuZXMpLm1k
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주 산모의 진통 전 양막파수가 확인됐다. 체온은 정상이고 자궁 압통과 태아 심박 이상은 없으며 분만은 진행하지 않는다. 적절한 초기 관리 계획은?

## 선택지

A. 감염이 없어도 즉시 제왕절개
B. 경부 봉축술로 양막파수를 치료
C. 입원해 산모·태아를 감시하며 산전 스테로이드와 잠복기 항생제를 투여한다
D. 항생제 없이 수축억제제를 장기간 쓰고 귀가시킨다

## 해설

32주 PPROM에 감염이나 태아 위험 등 분만 적응증이 없으면 입원 감시와 기대요법을 고려한다. 산전 스테로이드와 지침에 맞는 잠복기 항생제를 함께 쓰고 감염 또는 태아 상태 악화 시 분만을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 스테로이드가 감염 예방 약물이라는 혼동 수정 및 기대요법 조건 보강.
- https://www.rcog.org.uk/for-the-public/browse-our-patient-information/when-your-waters-break-prematurely/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000074
- https://www.nice.org.uk/guidance/ng25/chapter/recommendations
