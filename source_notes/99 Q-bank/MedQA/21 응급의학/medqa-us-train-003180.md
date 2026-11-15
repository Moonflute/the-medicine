---
type: qbank
schema_version: 1
id: medqa-us-train-003180
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef36d9574347f32959d47903077da6453d9b5edc5107b868c74ddbe3d7ef53ac
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "isolated rib fractures"
  - "blunt chest trauma"
  - "conservative management"
  - "analgesia"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-qwiOu5hOu8iCDqs6jsoIggKFJpYiBGcmFjdHVyZSkubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

60세 남성의 흉부 X선에 어긋나지 않은 갈비뼈 골절 두 개가 있다. 기흉·혈흉은 없고 산소포화도는 정상이다. 통증 때문에 깊게 숨 쉬기 어렵다. 초기 관리는?

## 선택지

A. 흉곽을 단단히 감아 움직이지 않게 한다
B. 모든 경우에 갈비뼈 고정술을 한다
C. 호흡이 편해질 때까지 금식만 한다
D. 충분히 진통하고 심호흡과 기침을 돕는다

## 해설

고립성 비전위 갈비뼈 골절에서는 진통과 호흡 운동으로 무기폐와 폐 합병증을 줄인다. 기저 폐질환과 호흡 상태에 따라 입원이나 더 강한 진통이 필요한지 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 두 개 갈비뼈 골절을 단일 골절이라 한 오류와 ICU/수술 절대 불필요 단정 교정.
- 공식/학회 근거: https://pmc.ncbi.nlm.nih.gov/articles/PMC12522690/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003180
