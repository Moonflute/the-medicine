---
type: qbank
schema_version: 1
id: medqa-us-train-003281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a2cc3140c7813f0920f8920a9ae639dad140fa452ad2f6d1b51d905605a8f02f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "informed consent"
  - "decision-making capacity"
  - "advance directive"
  - "surrogate decision maker"
related_disease_slugs: []
question_type: ethics
difficulty: standard
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
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

32세 여성이 2시간 전 토혈을 한 뒤 남편과 함께 응급실에 왔다. 2년 동안 소화불량이 있었고 두통에 가끔 이부프로펜을 복용한다. 초기 안정화 후 상부내시경 및 대체 치료의 위험과 이득을 충분히 설명하자 환자는 자신의 상태와 내시경 치료 및 합병증을 이해하고 출혈 원인을 찾아 궤양을 치료하기 위해 내시경을 원한다고 결정했다. 3년 전 서명한 사전의료지시서와 간호사인 언니의 의료 지속 대리권이 있다. 사전 동의에 대해 가장 정확한 결론은?

## 선택지

A. 치료 전에 환자의 결정을 문서화해야 한다
B. 추가 조치 없이 내시경 치료를 시행할 수 있다
C. 내시경을 받겠다는 결정은 자발적이지 않다
D. 언니가 동의서에 서명해야 한다

## 해설

현재 의사결정능력이 있고 설명을 이해해 자발적으로 동의한 환자의 결정이 우선한다. 사전지시서나 대리권은 지금 환자의 결정을 대신하지 않는다. 동의 과정과 결정을 의무기록에 문서화해야 하므로 A가 적절하다. 이는 모든 상황에서 같은 형식의 서면 서명이 법적으로 필수라는 단정이 아니며 적용 법규와 기관 절차는 별도로 따른다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 현재 능력 있는 환자가 결정하며 대리인 서명 불필요. 기록과 반드시 서면 서명해야 한다는 법적 단정을 구분.
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003281
