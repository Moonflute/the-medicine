---
type: qbank
schema_version: 1
id: medqa-us-train-005649
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3df82da30a500e041d980f1d571c3c01a4ec9a26a6d52c59a53f202e746e24f5
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "국소 발작"
  - "토드 마비"
  - "일측성 경련"
  - "Focal seizure"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rsJzsnpEgKFNlaXp1cmUpLm1k
difficulty: complex
answer: C
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

8세 아이가 의식이 보존된 채 오른팔만 2분간 규칙적으로 떨었다. 경련이 끝난 직후 같은 팔의 힘이 빠졌고 1시간에 걸쳐 완전히 회복했다. 급성 병변을 평가한 뒤, 발작 직후의 일과성 위약을 설명하는 용어는?

## 선택지

A. 발작 사이 근긴장이상
B. 경련성 실신
C. 토드 마비
D. 전신 탈력발작

## 해설


국소 운동발작 직후 같은 부위에서 일시적 위약이 생길 수 있는데 이를 토드 마비라고 한다. 새로 생긴 국소 결손을 처음부터 발작 후 증상으로 단정하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005649
- https://pubmed.ncbi.nlm.nih.gov/40264351/
