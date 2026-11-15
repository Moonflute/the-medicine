---
type: qbank
schema_version: 1
id: medqa-us-validation-000884
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:2b9a71409709f324adda4fa16b9d2f92807aa83c60ed31b3876b9ba00735d104
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "신경성 폭식증"
  - "폭식 후 보상행동"
  - "치아 부식"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEse2PreyLneymnSAoQnVsaW1pYSBOZXJ2b3NhKS5tZA
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 청소년이 지난 5개월간 매주 두 차례 정도 먹는 것을 멈출 수 없을 만큼 많이 먹었다. 이후 체중이 늘까 두려워 반복적으로 보상 행동을 했다. 체형이 자기 평가에 큰 영향을 주고, 성장곡선상 현재 뚜렷한 저체중은 아니다. 가장 가능성 높은 진단은?

## 선택지

A. 폭식장애
B. 신경성 식욕부진증의 폭식·제거형
C. 신경성 폭식증
D. 회피·제한적 음식섭취장애

## 해설

반복되는 통제 상실 폭식과 부적절한 보상 행동, 과도한 체중·체형 평가가 핵심이다. 폭식장애에는 규칙적인 보상 행동이 없다. 신경성 식욕부진증의 폭식·제거형에서는 의미 있는 저체중이 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000884
- https://pubmed.ncbi.nlm.nih.gov/36722117/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문의 BMI17백분위수를 저체중/BMI감소로 잘못 축약해 신경성 식욕부진증과 혼동시킨 번역·해설 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
