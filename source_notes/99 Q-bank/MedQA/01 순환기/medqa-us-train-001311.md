---
type: qbank
schema_version: 1
id: medqa-us-train-001311
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:753d6a4d444330e2016a02a67da6edba385c28ee65d9a5a259edaa3b5904eb7c
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "peripheral artery disease"
  - "intermittent claudication"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uPmeunpeqyve2ZlOyEsSDrp4zshLEg64-Z66elIO2PkOyDiSAoQXRoZXJvc2NsZXJvdGljIENocm9uaWMgQXJ0ZXJpYWwgT2NjbHVzaW9uKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9Fbm94YXBhcmluLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 수개월 동안 점점 심해지는 양측 다리의 작열통으로 내원했다. 걸을 때 악화되고 쉬면 호전된다. 과거력과 수술력에 고혈압, 고지혈증, 당뇨병이 있고 40갑년의 흡연력이 있다. 체온은 99.0°F (37.2°C), 혈압은 167/108 mm Hg, 맥박은 88회/분, 호흡수는 13회/분, 실내 공기 산소포화도는 95%이다. 하지 진찰에서 양측 후경골동맥과 발등동맥의 맥박은 만져지지만 약하다. 다음 중 이 증상에 대한 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 운동과 금연
B. 대퇴-슬와동맥 우회술
C. 리시노프릴과 아토르바스타틴
D. 에녹사파린과 아토르바스타틴

## 해설

정답은 A이다. 보행 때 생기고 휴식하면 호전되는 통증과 약한 발맥은 PAD의 파행을 시사한다. 초기 증상 개선에 구조화 운동과 금연이 중요하여 A가 적합하다. 다만 statin·필요한 항혈소판제 및 BP/DM 관리는 처음부터 함께 시행할 위험 감소 치료이며 운동 실패 후에만 시작하는 2차 치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: PAD 약물치료를 운동 다음의 2차 단계로 미룬 설명 교정.
- https://www.ahajournals.org/doi/full/10.1161/CIR.0000000000001251

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001311
