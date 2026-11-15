---
type: qbank
schema_version: 1
id: medqa-us-train-006022
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2cab82e372dd80f562ede2f17e582fec1ac5e1444a6d43a4b140f06363293af3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "마미증후군"
  - "안장부 감각소실"
  - "요실금과 하지마비"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4jrr7jspp3tm4TqtbAgKENhdWRhIEVxdWluYSBTeW5kcm9tZSkubWQ
difficulty: complex
answer: D
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

57세 여성이 양쪽 다리로 뻗치는 요통 뒤 하지 위약이 진행한다. 회음부 감각이 둔해졌고 새로 소변을 잘 못 본다. 마미증후군이 의심될 때 다음 조치는?

## 선택지

A. 진통제를 주고 일주일 뒤 진찰한다
B. 일반 요추 X선만 찍고 귀가시킨다
C. 먼저 근전도검사 예약을 잡는다
D. 응급 요추 MRI와 척추 전문팀 평가를 진행한다

## 해설

요통·하지 위약과 새로운 안장 감각 이상 또는 배뇨장애는 마미 압박의 경고다. 즉시 MRI와 전문팀 평가를 진행하고 외래 경과관찰로 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 마미증후군을 전신 마비로 설명한 오류 교정. 응급 의뢰 D를 현행 영상평가와 대조.
- 공식/학회 근거: https://acsearch.acr.org/docs/69483/Narrative/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006022
- https://pubmed.ncbi.nlm.nih.gov/38496349/
