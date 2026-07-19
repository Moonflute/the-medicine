---
type: qbank
schema_version: 1
id: medqa-us-train-003524
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:98078ba6930c3ee8b8265aedb2baf78a9b03b7389b4aa1227bb706b21271e39d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ventricular septal defect"
  - "holosystolic murmur"
  - "handgrip maneuver"
  - "left-to-right shunt"
question_type: diagnosis
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 여아가 건강검진을 받으러 왔다. 심장 청진에서 잡음이 들렸고, 주먹을 지속적으로 세게 쥐면 잡음의 강도가 증가했다. 다음 중 이 청진 소견의 가장 가능성 높은 원인은?

## 선택지

A. 우관상동맥과 좌관상동맥 판막엽의 융합
B. 심방중격 결손
C. 심실중격 결손
D. 동맥관 폐쇄 실패

## 해설


심실중격 결손(VSD)은 좌우 단락 전류를 통해 전신 순환에 지속적인 혈류를 만들며, 전수축기 잡음이 발생한다. 손을 꽉 쥐면 후부하가 증가해 좌심실 압력이 상승하고 잡음이 강화된다. 따라서 가장 가능성 높은 원인은 심실중격 결손이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003524
