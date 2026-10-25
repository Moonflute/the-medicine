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

27세 여성이 2개월간 반복되는 손목과 목 통증으로 진료를 받으러 왔다. 아침에 손가락이 뻣뻣하고 하루가 지나면 호전되며 양쪽 중수지절관절이 붉고 압통이 있었다. 가장 진단에 도움이 되는 검사는?

## 선택지

A. 활액 분석
B. 항CCP 항체
C. 류마티스인자
D. 경추 X선

## 해설


양쪽 중수지절관절의 부종·압통과 아침 강직은 류마티스 관절염을 시사하며, 항CCP 항체는 질환 특이도가 높아 진단에 가장 도움이 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-001176` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 소관절 대칭성 염증·아침강직에서 anti-CCP B의 높은 특이도 설명과 원문 답이 일치. 질환 특이 표지에 대한 내용검토.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001176
