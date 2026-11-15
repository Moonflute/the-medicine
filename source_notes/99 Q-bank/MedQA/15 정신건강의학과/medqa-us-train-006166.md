---
type: qbank
schema_version: 1
id: medqa-us-train-006166
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e43b5c0c56c234db0d8672c7273c1f9643cb1cb184b786cb24d4f0000c9143d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "품행장애"
  - "반사회성 인격장애"
  - "아동 공격행동"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2SiO2WiSDsnqXslaAgKENvbmR1Y3QgRGlzb3JkZXIpLm1k
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

9세 아이가 여러 달 동안 학교와 동네에서 또래를 위협하고 물건을 훔쳤다. 평가에서 품행장애가 확인됐고 당장의 안전은 확보했다. 아이와 보호자가 참여할 수 있을 때 우선 권할 치료는?

## 선택지

A. 강한 처벌을 늘리고 행동 목표는 따로 세우지 않는다
B. 항정신병약을 모든 사례에서 먼저 시작한다
C. 아이에게만 주의를 주고 보호자나 학교와는 논의하지 않는다
D. 보호자 행동관리 훈련을 연결하고 가정·학교와 일관된 계획을 세운다

## 해설


학령기 품행장애에는 보호자가 문제 행동에 대응하고 바람직한 행동을 강화하는 방법을 연습하는 프로그램이 도움이 된다. 안전, 학습과 동반 문제도 살피며 약물을 일률적으로 사용하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006166
- https://www.nice.org.uk/guidance/cg158/chapter/recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·답·해설 대조. 동물 학대·폭력·절도의 품행장애와 성인 반사회성 인격장애 위험을 연결하며 성인에서 반드시 발생한다고 확정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
