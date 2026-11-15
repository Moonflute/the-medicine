---
type: qbank
schema_version: 1
id: medqa-us-train-007291
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:26e7d34ebb8658c39966eac80bdd1bf6e61813554ec0d8b627b126e9ba8a9ee4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "골반염"
  - "난관 반흔"
  - "난관 인자 난임"
  - "불임"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-u2iOyehCAoSW5mZXJ0aWxpdHkpLm1k
difficulty: complex
answer: A
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

27세 여성이 1년간 임신을 시도했지만 임신되지 않았다. 배란과 배우자의 정액검사는 정상이고, 과거 골반염 치료력이 있다. 현재 감염이나 임신 소견은 없다. 난관 요인을 평가하기 위한 검사는?

## 선택지

A. 자궁난관조영술
B. AMH 측정으로 난관 개통 여부 확인
C. 난관 치료를 위해 바로 복강경 수술
D. 자궁경부 세포검사

## 해설

골반염 후 난관 흉터나 폐쇄가 생길 수 있다. 초기 평가에서 자궁난관조영술 등으로 난관 개통을 확인하며 복강경을 모든 난임 환자의 첫 검사로 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: nulligravid→미혼 오역 및 임신력이 없는 환자를 이차 난임이라고 단정한 해설을 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007291
- https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2026
