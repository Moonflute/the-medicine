---
type: qbank
schema_version: 1
id: medqa-us-train-009367
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:70ddbe320d3778fa9e163d7a0bd8a4db422bf8482eff3b1d7c61c0c801b665b3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cardiac arrest"
  - "심정지"
  - "pulseless electrical activity"
  - "Cardiac arrest"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQ2xvcGlkb2dyZWwubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmVyYXBhbWlsLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

심근경색으로 입원 중인 70세 여성이 갑자기 반응을 잃고 정상적으로 숨 쉬지 않는다. 모니터에는 동성 리듬이 보이지만 10초 이내에 경동맥 맥박을 확인할 수 없다. 동료가 심정지 대응팀을 호출했다. 지금 가장 먼저 할 일은?

## 선택지

A. 정맥으로 에피네프린을 투여한다
B. 가슴압박을 시작한다
C. 침상 심초음파로 심장압전을 확인한다
D. 동기화 심율동전환을 시행한다

## 해설


맥박 없이 조직화된 전기활동이 보이면 무맥성 전기활동(PEA)으로 보고 즉시 가슴압박을 시작한다. 비충격 리듬이므로 제세동을 하지 않고, 소생술을 진행하며 에피네프린을 신속히 투여하고 가역적 원인을 찾는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 무맥박인데 조직화 전기활동이 남은 PEA에서는 즉시 흉부압박 B가 우선이며 동기화 전환은 적응증 아님.
- https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009367
- https://www.kdca.go.kr/injury/biz/injury/recsroom/ruleNdManual/ruleNdManualView.do?no=213
