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

52세 남성이 6개월 동안 호흡곤란과 마른기침이 있어 진료를 받으러 왔다. 최근 3기 고환 배아세포암 진단을 받고 고환절제술 후 화학요법을 시작했다. 심폐 진찰에서 양쪽 폐에 미세 흡기 수포음이 들렸고 양손가락에 곤봉지가 있었다. 폐기능검사에서 FVC는 예상치의 78%, FEV1/FVC는 92%였다. 흉부 CT가 제시되었다. 다음 중 어떤 약물이 환자 상태의 원인인가?

## 선택지

A. 블레오마이신
B. 카보플라틴
C. 시스플라틴
D. 이포스파마이드

## 해설


블레오마이신은 폐렴/폐섬유화 등의 폐독성을 일으킬 수 있다. 고환암 화학요법 뒤 기침·호흡곤란·미세 수포음과 제한성으로 의심되는 폐기능 양상은 선지 중 A를 지지한다. CT 그림이 실제로 없어 특정 방사선 형태를 확인했다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000882 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고환암 약물·제한성 양상에서 bleomycin A 유지. 누락 CT 소견을 실제 본 것처럼 기술하지 않도록 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.eviq.org.au/clinical-resources/side-effect-and-toxicity-management/respiratory/1792-pulmonary-toxicity-associated-with-anti-cance

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000882
