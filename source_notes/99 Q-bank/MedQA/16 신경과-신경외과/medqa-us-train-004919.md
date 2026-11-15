---
type: qbank
schema_version: 1
id: medqa-us-train-004919
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:dc7cc76a467ba0cc14d4d2a87ab64148702c7ed5685b63dedd1a7a280e9390ab
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "신경성 쇼크"
  - "경수 손상"
  - "사지마비"
question_type: diagnosis
related_disease_slugs:
  - MTEg7Jm46rO8L-yLoOqyveyEsSDsh7ztgawgKE5ldXJvZ2VuaWMgU2hvY2spLm1k
difficulty: standard
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

경수 손상으로 사지 위약이 생긴 환자의 혈압은 82/40 mmHg, 맥박은 분당 52회다. 손발 피부는 따뜻하고 출혈과 다른 쇼크 원인을 평가했다. 가장 가능성 높은 쇼크 유형은?

## 선택지

A. 출혈성 쇼크
B. 신경성 쇼크
C. 폐쇄성 쇼크
D. 아나필락시스 쇼크

## 해설


높은 척수 손상으로 교감신경 긴장이 줄면 저혈압에 서맥과 말초 혈관 확장이 동반될 수 있다. 외상 초기에는 출혈 등 다른 원인을 먼저 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004919
- https://www.facs.org/media/3iknlu30/acs-tqip-best-practices-spine-injury-guidelines.pdf
