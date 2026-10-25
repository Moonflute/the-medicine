---
type: qbank
schema_version: 1
id: medqa-us-train-009231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4fb986bdcd25bffea1b410f5b5956749f168e20274077bd8ef4edcd0aa071a8b
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "physiologic changes in pregnancy"
  - "임신의 생리적 변화"
  - "diastolic murmur"
question_type: diagnosis
related_disease_slugs: []
difficulty: complex
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

28세 초임부가 밤에 침대에 누우면 속쓰림이 있고 몇 주 전부터 경미한 변비가 있어 내원했다. 마지막 월경으로 계산한 임신 주수는 10주이다. 초경은 13세였고 항상 28일 주기의 규칙적인 월경을 했다. 과거력은 특이사항이 없다. 담배와 술을 하지 않고 약물도 복용하지 않는다. 아버지는 70세에 대장암으로 사망했고 어머니는 당뇨병과 고혈압이 있다. 체온 36.9℃, 혈압 98/52 mmHg, 맥박 113회/분, 산소포화도 99%, 호흡수 12회/분이다. 진찰은 정상이지만 심첨부에서 이완기 잡음이 들린다. 다음 중 이 여성에게 비정상인 소견은 무엇인가?

## 선택지

A. 혈관 저항 감소
B. 심박출량 증가
C. 이완기 잡음
D. 낮은 혈압

## 해설

임신에서는 전신혈관저항 감소, 심박출량 증가와 혈압 감소가 생리적으로 나타날 수 있다. 혈류 증가에 따른 수축기 유출성 잡음도 들릴 수 있으나 이완기 잡음(C)은 정상 임신 변화로 설명하지 않고 심장질환을 평가해야 한다. 기존 해설은 이완기 잡음을 정상이라고 하면서 비정상 정답으로 선택해 논리가 뒤집혀 있었다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 이완기잡음이정상생리라는반대해설교정. C비정상,다른선지정상임신혈역학.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009231
