---
type: qbank
schema_version: 1
id: medqa-us-test-000882
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:d24f4ab853c18faa70a5594c7dbb289c8ab24a118096d645661e1c709db2e749
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "블레오마이신 폐독성"
  - "간질성 폐렴"
  - "고환암 화학요법"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-qzoO2ZmCDsooXslpEgKFRlc3RpY3VsYXIgY2FuY2VyKS5tZA
  - MDIg7Zi47Z2h6riwL-u5hO2KueydtCDqsITsp4jshLEg7Y-Q66C0IChOU0lQKSAoTm9uc3BlY2lmaWMgSW50ZXJzdGl0aWFsIFBuZXVtb25pYSkubWQ
question_type: mechanism
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvQ2FyYm9wbGF0aW4ubWQ
  - ZHJ1ZzoxMCDsooXslpEvQ2lzcGxhdGluLm1k
---

# MedQA US 임상문제

## 문제

52세 남성이 고환 생식세포종으로 복합 항암치료를 받던 중 마른기침과 점차 심해지는 숨참이 생겼다. 양쪽 폐기저부에서 미세 수포음이 들린다. 흉부 CT에서 양측 폐기저부에 간유리음영과 그물 모양 음영이 보이고 폐확산능이 떨어졌다. 제시된 약제 중 이 폐독성과 가장 관련 있는 것은?

## 선택지

A. 블레오마이신
B. 카보플라틴
C. 시스플라틴
D. 이포스파마이드

## 해설


블레오마이신은 간질성 폐렴과 폐섬유화를 일으킬 수 있다. 약제 치료 중 새로 발생한 마른기침, 양측 간질성 음영과 폐확산능 저하가 단서이며 감염 등 다른 원인도 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000882 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고환암 약물·제한성 양상에서 bleomycin A 유지. 누락 CT 소견을 실제 본 것처럼 기술하지 않도록 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/respiratory/1792-pulmonary-toxicity-associated-with-anti-cance

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000882
