---
type: qbank
schema_version: 1
id: medqa-us-train-006401
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43f5cabdb31ccf56d8c44b03675740b1f5cb3e663d08aec97df554371f448fe2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "세로토닌 증후군"
  - "시탈로프람-트라마돌 상호작용"
  - "과다반사"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9EaWF6ZXBhbS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9UcmFtYWRvbC5tZA
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 여성이 초조와 발한으로 응급실에 내원했다. 현재 우울증으로 시탈로프람 치료를 받고 있으며 허리 통증으로 트라마돌도 복용한다. 체온은 38.6°C(101.5°F; 원문 화씨 환산 오류 교정), 맥박은 분당 108회, 호흡수는 분당 18회, 혈압은 165/110 mm Hg이다. 신체진찰에서 네 사지 모두에 과다반사와 경미한 떨림이 있다. 다음 중 처치의 다음 단계로 사용해야 하는 것은?

## 선택지

A. 시프로헵타딘
B. 디아제팜
C. 트라마돌과 시탈로프람 중단
D. 셀레길린

## 해설


시탈로프람(SSRI)과 트라마돌(오피오이드)의 병용은 세로토닌 축적을 초래해 세로토닌 증후군을 일으킬 수 있다. 증후군이 의심될 때 가장 중요한 조치는 원인 약물을 즉시 중단하는 것이다. 따라서 두 약물을 중단하는 것이 다음 단계이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006401

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문에도 있는 체온 단위 불일치(38.6°C/97.9°F)를 섭씨 기준 101.5°F로 산술 교정. 세로토닌 독성에서 원인약 중단 답·해설 일치.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
