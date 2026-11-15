---
type: qbank
schema_version: 1
id: medqa-us-train-008806
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9ff268f7e9016bd0f2c8a1e0d0bdbd28b6f82a818a0a7642e21c568e873b2d42
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "secondary adrenal insufficiency"
  - "glucocorticoid withdrawal"
  - "hyponatremia"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOywqOyEsSDrtoDsi6Ag6riw64ql7KCA7ZWY7KadIChTZWNvbmRhcnkgQWRyZW5hbCBJbnN1ZmZpY2llbmN5KS5tZA
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
---

# MedQA US 임상문제

## 문제

프레드니솔론을 1년 복용한 69세 여성이 기저 질환 호전 후 생리적 용량까지 감량했다. 현재 안정적이고 완전 중단을 고려한다. 시상하부–뇌하수체–부신 축의 회복 여부를 먼저 평가할 검사는?

## 선택지

A. 자정 타액 코르티솔
B. 1mg 덱사메타손 억제검사
C. 부신 CT
D. 마지막 복용 시간을 고려한 오전 8~9시 혈청 코르티솔

## 해설


장기 복용 후 생리적 용량까지 줄였고 검사를 통해 중단 여부를 판단한다면 오전 코르티솔을 먼저 사용할 수 있다. 프레드니솔론은 의료진 계획에 따라 채혈 전 최소 24시간 보류하고, 결과에 따라 중단 여부나 재검을 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008806 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: cortisol 결핍의 ADH 증가/자유수 배설 저하를 반대로 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008806
- https://academic.oup.com/jcem/article/109/7/1657/7667842
