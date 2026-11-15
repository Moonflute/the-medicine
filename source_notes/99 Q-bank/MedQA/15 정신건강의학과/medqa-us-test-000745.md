---
type: qbank
schema_version: 1
id: medqa-us-test-000745
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:610d66ea8fe2a499dec662f84f9cb45ad4ceaf0439b841adc5c4f0dc2058a597
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기면증"
  - "탈력발작"
  - "과다수면"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 환자가 야간 수면과 전문 검사를 거쳐 기면증을 진단받았다. 규칙적으로 자고 계획된 낮잠을 자도 주간졸림 때문에 수업에 계속 지장이 있다. 주간졸림 자체를 줄이기 위한 약은?

## 선택지

A. 클로미프라민
B. 모다피닐
C. 졸피뎀
D. 프라미펙솔

## 해설

성인 기면증에서 모다피닐은 과도한 주간졸림을 줄이는 치료 선택이다. 탈력발작은 별도로 치료할 수 있으며, 졸림이 조절되기 전에는 운전 등 안전 문제도 다룬다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000745
- https://pubmed.ncbi.nlm.nih.gov/34743789/
- https://pubmed.ncbi.nlm.nih.gov/34173695/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 모다피닐 정답 유지. 각성제와의 절대 우열·탈력발작까지 단일 약으로 치료하는 인상을 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://aasm.org/wp-content/uploads/2022/03/Treatment_Central_Disorders_Hypersomnolence_Guideline_at_a_Glance.pdf
