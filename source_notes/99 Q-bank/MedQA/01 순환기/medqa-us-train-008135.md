---
type: qbank
schema_version: 1
id: medqa-us-train-008135
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b75f6091eb341d0f0e147580fbcc67a1df8559a469839d1a2e5f20578ed75094
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "stable angina"
  - "chronic coronary syndrome"
  - "beta-blocker"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yViOyglSDtmJHsi6zspp0gKFN0YWJsZSBBbmdpbmEpLm1k
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSXNvc29yYmlkZU1vbm9uaXRyYXRlLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남자가 4개월 동안 계단을 오를 때 발생하고 쉬면 호전되는 압박감 있는 흉통으로 내원했다. 고혈압과 제2형 당뇨병이 있고 아버지는 50세에 심근경색으로 사망했다. 맥박 85회/분, 호흡수 12회/분, 혈압 140/90 mm Hg이며 심음은 정상이고 심잡음, 마찰음, 말발굽리듬은 없다. 심전도에서 V3 유도의 S파 진폭이 높고 운동부하검사는 4분 후 흉통으로 중단했다. 검사 중 심전도에서 동성빈맥과 V1~V4 ST분절 하강이 보였다. 증상 빈도를 줄이기 위한 가장 적절한 장기 약물치료는?

## 선택지

A. 이소소르비드 모노니트레이트
B. 아스피린
C. 메토프롤롤
D. 클로피도그렐

## 해설


운동 유발 협심증 환자에게 증상 완화를 위해 심박수를 감소시켜 산소소모를 줄이는 것이 핵심이다. 베타 차단제인 메토프롤롤은 심박수와 혈압을 낮추어 협심증 발작을 예방한다. 따라서 장기 약물치료로 메토프롤롤이 가장 적절하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동성 협심증의 증상 빈도를 줄이는 메토프롤롤 C의 심박수·산소요구량 감소 기전이 일치.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001168

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008135
