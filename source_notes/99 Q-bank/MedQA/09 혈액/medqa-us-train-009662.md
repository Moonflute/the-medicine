---
type: qbank
schema_version: 1
id: medqa-us-train-009662
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ef075bb13535fd434c5c63411e5ed99d43156bc056ca0d9c08e3a82f7168db52
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
  - "겸상적혈구병"
  - "priapism"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

14세 소말리아 남아가 3시간 전부터 지속된 통증성 발기로 응급실에 왔다. 가족은 최근 난민캠프에서 미국으로 이주했고 과거력은 모른다. 피로와 잦은 질병, 관절통 에피소드가 있으며 음경은 울혈되고 팽창되어 있다. 흉부 전반에서 박출성 수축기 잡음이 들린다. 가장 가능성 높은 원인은 무엇인가?

## 선택지

A. 겸상적혈구병
B. 헤로인 남용
C. 비호지킨 림프종
D. 실데나필 복용

## 해설


통증성 발기는 겸상적혈구병에서 혈관 내 겸상 적혈구가 막힘을 일으켜 발생한다. 헤로인 남용·비호지킨 림프종·실데나필 복용은 다른 메커니즘을 가진다. 따라서 가장 가능성 높은 원인은 겸상적혈구병이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009662 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 반복 관절통·빈혈성 잡음과 통증성 발기의 기저질환은 SCD A. 인종만이 아닌 동반 임상 단서와 혈관폐쇄 기전을 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009662
