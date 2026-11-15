---
type: qbank
schema_version: 1
id: medqa-us-validation-000829
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:64261a526172b90a80f342140b41ab0b4c4c06b36b9611c674ccfb485631ae39
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "후두개염"
  - "기도 응급"
  - "Haemophilus influenzae type b"
question_type: management
related_disease_slugs: []
difficulty: complex
answer: A
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

성인 환자가 고열, 심한 연하통과 먹먹한 목소리로 왔다. 침을 삼키지 못하고 흡기 때 협착음이 나며 숨이 점차 가빠진다. 후두개염이 의심될 때 우선 조치는?

## 선택지

A. 기도를 위협하는 상태로 보고 즉시 전문팀과 안전한 기도 확보를 준비한다
B. 눕힌 채 혀누르개로 인두를 반복해서 확인한다
C. 경부 일반 X선을 본 뒤 기도 평가를 시작한다
D. 경구 항균제를 주고 귀가시킨다

## 해설

후두개염에서 협착음과 호흡 악화는 기도 폐쇄 위험을 뜻한다. 자극하거나 영상검사를 하느라 전문 기도 평가를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Hib를 현행 성인 후두개염의 일률적 최다 원인이라고 단정한 설명을 교정하고 선지 내 대표적 원인으로 한정.
- 공식/학회 근거: https://www.cdc.gov/hi-disease/hcp/clinicians/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000829
- https://pubmed.ncbi.nlm.nih.gov/38230383/
