---
type: qbank
schema_version: 1
id: medqa-us-train-001992
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7ddd8b598361a057dfcbfbeb03b6044cfc684aa74a4938c9a930ccd8777e88a2
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "carpal tunnel syndrome"
  - "median nerve entrapment"
  - "nerve conduction studies"
question_type: investigation
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yImOq3vOq0gCDspp3tm4TqtbAgKENhcnBhbCBUdW5uZWwgU3luZHJvbWUpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 남성이 3개월 전 시작된 오른손 통증, 저림과 무감각으로 내원했다. 밤에 악화되어 자주 깨고 손을 흔들면 호전되지만 곧 재발한다. 물건을 잡을 때 특히 오른손 힘이 약하다. 제2형 당뇨병이 있으며 metformin과 sitagliptin을 복용한다. 4개월 전 캠핑을 갔고 8년간 조경업에 종사했다. 오른손을 2분간 머리 위로 들면 증상이 재현된다. 다음 중 진단을 확진할 검사는 무엇인가?

## 선택지

A. 경추 CT
B. 신경전도검사
C. 두부 MRI
D. 동맥 도플러 초음파

## 해설

야간 손 저림이 손을 털면 완화되고 당뇨가 있는 병력은 정중신경 압박에 의한 손목터널증후군을 시사한다. 주어진 선지 중에서는 신경전도검사(B)가 압박성 말초신경병증을 확인하고 중증도를 평가하는 데 적절하다. 다만 모든 환자에게 전기진단검사가 필수인 것은 아니며 AAOS 2024 지침은 임상도구 CTS-6를 일상적인 전기진단검사 대신 사용할 수 있다고 한다. 경추 CT·두부 MRI·동맥 도플러를 일률적으로 우선할 근거는 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 손목터널증후군에서 주어진 검사 중 신경전도검사 B가 적절하지만 이를 항상 필수 또는 최고 민감도·특이도라고 단정한 해설을 현행 AAOS 권고에 맞게 제한했다.
- 공식/학회 근거: https://www.aaos.org/globalassets/quality-and-practice-resources/carpal-tunnel/carpal-tunnel-2024/cts-cpg.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001992
