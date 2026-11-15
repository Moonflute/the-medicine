---
type: qbank
schema_version: 1
id: medqa-us-train-009931
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a86115316a5cdd35621bb3ecbbe791e93c10cc5b47467e5d50dc8b5c9b3cc988
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "지주막하출혈"
  - "벼락두통"
  - "비조영 두부 CT"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sp4Dso7zrp4ntlZgg7Lac7ZiIIChTdWJhcmFjaG5vaWQgaGVtb3JyaGFnZSkubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

53세 환자가 갑자기 시작해 수초 안에 최고 강도에 이른 두통과 구토로 왔다. 혈압은 165/89 mmHg이고 목이 뻣뻣하다. 지주막하출혈을 의심할 때 우선 시행할 검사는?

## 선택지

A. 조영증강 뇌 MRI
B. 비조영 뇌 CT
C. 요추천자를 영상보다 먼저 시행
D. 경동맥 초음파

## 해설


벼락두통과 경부강직은 지주막하출혈의 경고다. 비조영 CT를 우선 시행하고, 음성이어도 발병 시점과 임상적 의심에 따라 추가 검사한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009931
- https://pubmed.ncbi.nlm.nih.gov/37212182/
