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

14세 남아가 몸통과 허벅지에 주변 피부보다 밝은 반점이 여러 개 있어 내원했다. 손과 발, 입 주변에도 비슷한 탈색 병변이 있다. 반점은 2년 동안 점차 커졌으며 가려움, 발적, 감각저하, 통증은 없다. 가족은 8년 전 인도네시아에서 이주했다. 피부 병변 사진이 제시되어 있다. 다음 중 이 환자 피부 소견의 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 자가면역성 멜라닌세포 파괴
B. mTOR 신호 증가
C. Mycobacterium leprae 감염
D. 염증 후 탈색

## 해설

수년에 걸쳐 커진 무증상 탈색반이 손·발·입 주위에도 있고 감각이 보존되어 백반증을 지지한다. 병인은 자가면역성 멜라닌세포 파괴(A)이다. 감각소실이 흔한 나병, 동반 신경피부 소견이 있는 결절경화증의 저색소반과 구분하며 실제 사진의 대칭성을 가정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 백반증의 자가면역 멜라닌세포 파괴 A는 맞으며 본문에 없는 비대칭을 핵심 관찰 소견처럼 추가한 부분을 제거한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008773
