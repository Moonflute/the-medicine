---
type: qbank
schema_version: 1
id: medqa-us-train-008343
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfe2e8f42b918b806ddda2f15e465fedb73bf0e626858e59edfed2b939f86540
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "liver hematoma"
  - "blunt abdominal trauma"
  - "hemorrhagic shock"
related_disease_slugs:
  - MTEg7Jm46rO8L-uRlOyDgSDrs7XrtoDsmbjsg4EgKEJsdW50IEFiZG9taW5hbCBUcmF1bWEpLm1k
  - MjEg7J2R6riJ7J2Y7ZWZL-yHvO2BrCAoU2hvY2spLm1k
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

37세 여성이 계단에서 떨어진 지 15분 후 응급실에 왔다. 호흡곤란, 우측 흉통, 우상복부 통증, 우측 어깨 통증이 있고 창백해 보인다. 체온 37°C(98.6°F), 맥박 115회/분, 호흡수 20회/분, 혈압 85/45 mm Hg이다. 우측 흉부에 여러 멍과 흉벽 및 우상복부 압통이 있지만 목정맥은 평평하다. 가장 가능성 높은 진단은?

## 선택지

A. 비장 열상
B. 기흉
C. 간 혈종
D. 십이지장 혈종

## 해설


복부 타박에 의한 간 손상은 간 혈종을 일으키며, 저혈압과 복부·흉부 통증이 동반된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008343 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 우측 흉복부 둔상·RUQ/우측 어깨통증과 출혈성 쇼크 양상은 선택지 중 간 손상/혈종 C에 가장 맞는다. 원문·해설 대조; 증상만으로 손상등급을 확정하지 않았다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008343
