---
type: qbank
schema_version: 1
id: medqa-us-train-008773
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:27484d72789c9b9de675a7d775848798b569d701b9042f1b3a8341246dc13dcb
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "vitiligo"
  - "autoimmune melanocyte destruction"
  - "depigmentation"
question_type: mechanism
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseuwmOymnSAoVml0aWxpZ28pLm1k
difficulty: standard
answer: A
publication_status: "withheld"
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

14세 남아에게 몸통, 손발과 입 주위의 경계가 뚜렷한 탈색반이 수년에 걸쳐 넓어졌다. 통증이나 가려움이 없고 병변의 감각도 정상이다. 가장 가능성 높은 기전은?

## 선택지

A. 자가면역성 멜라닌세포 파괴
B. mTOR 신호 증가
C. Mycobacterium leprae 감염
D. 염증 후 탈색

## 해설

감각이 보존된 무증상 탈색반이 손발과 입 주위에도 생기는 양상은 백반증에 합당하다. 면역 반응에 의한 멜라닌세포 소실이 주요 기전이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 백반증의 자가면역 멜라닌세포 파괴 A는 맞으며 본문에 없는 비대칭을 핵심 관찰 소견처럼 추가한 부분을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008773
