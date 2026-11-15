---
type: qbank
schema_version: 1
id: medqa-us-train-004134
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:209072ba897ca700d2c87d9cb68e948fd209225ac9bd675b770783675fb37280
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "기면증"
  - "탈력발작"
  - "수면마비"
  - "입면 환각"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOuptOymnSAoTmFyY29sZXBzeSkubWQ
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9SaXNwZXJpZG9uZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 학생이 밤에 충분히 자도 수업 중 자주 잠든다. 크게 웃을 때 의식은 그대로인데 턱과 목에 힘이 빠지는 일이 있다. 잠들 무렵에만 생생한 환각이 보이기도 한다. 수면 부족과 약물 영향을 점검한 뒤 기면증을 확인할 검사는?

## 선택지

A. 각성 상태의 일반 뇌파만 시행
B. 뇌 MRI와 근전도검사
C. 야간 수면다원검사에 이어 다음 날 다중수면잠복기검사
D. 수면 설문지만으로 확진

## 해설

감정에 유발되고 의식이 보존되는 짧은 근력 소실은 탈력발작에 합당하다. 전문 수면검사 전 충분한 수면을 확인하고, 야간 수면다원검사와 다음 날 다중수면잠복기검사를 연결한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004134
- https://pubmed.ncbi.nlm.nih.gov/34423768/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 16세 기면증에서 모다피닐을 성인과 동일한 일률 1차로 설명하지 않도록 소아청소년 조건부 근거·탈력발작 표적을 구별.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://aasm.org/wp-content/uploads/2022/03/Treatment_Central_Disorders_Hypersomnolence_Guideline_at_a_Glance.pdf
