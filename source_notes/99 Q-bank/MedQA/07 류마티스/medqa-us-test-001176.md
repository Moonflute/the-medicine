---
type: qbank
schema_version: 1
id: medqa-us-test-001176
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d6d965b7425a8778feeff4ea2d6f0728bb14edb95f33ef1ba2b4c98d0c9b823f
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "류마티스관절염"
  - "항CCP 항체"
  - "염증성 관절염"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpCDqtIDsoIjsl7wgKFJoZXVtYXRvaWQgQXJ0aHJpdGlzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-ulmOuniO2LsOyKpC5tZA
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

27세 여성이 2개월간 양쪽 손목과 중수지관절의 부종, 한 시간 넘는 아침 강직을 겪는다. 류마티스인자가 음성이지만 활막염이 확인됐다. 류마티스관절염을 뒷받침하는 데 가장 특이적인 혈청검사는?

## 선택지

A. 항핵항체
B. 항CCP 항체
C. 혈청 요산
D. 항이중가닥 DNA 항체

## 해설


항CCP 항체는 류마티스관절염에 특이도가 높은 검사다. 류마티스인자가 음성이어도 검사할 수 있으며, 두 항체가 모두 음성이어도 지속적인 염증성 활막염은 전문 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001176` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소관절 대칭성 염증·아침강직에서 anti-CCP B의 높은 특이도 설명과 원문 답이 일치. 질환 특이 표지에 대한 내용검토.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001176
- https://www.nice.org.uk/guidance/ng100/chapter/recommendations
