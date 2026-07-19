---
type: qbank
schema_version: 1
id: medqa-us-train-007600
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4a8526e5ed763d641e490db27a0e20c978d4d2bc8800dcb7f207e2db877ce86e
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "시신경염"
  - "다발성 경화증"
  - "통증성 시력저하"
  - "색각 이상"
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

33세 여자가 2주 동안 오른쪽 눈의 시력저하로 내원했다. 오른쪽 눈으로 색을 구별하지 못하고 눈을 움직일 때 통증이 있다. 복시는 없다. 때때로 두통이 있지만 이부프로펜으로 호전된다. 1년 전 왼쪽 눈에 비슷한 에피소드가 있었으나 저절로 호전되었다. 심각한 질환 병력은 없다. 활력징후는 정상이며 동공은 양측 동일하고 둥글며 빛과 조절에 반응한다. 교정하지 않은 시력은 왼쪽 20/50, 오른쪽 20/100이고 안경을 쓰면 왼쪽 20/20, 오른쪽 20/100이다. 세극등검사는 정상이고 머리 CT에도 이상이 없다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 망막박리
B. 협우각 녹내장
C. 황반변성
D. 시신경염

## 해설


통증을 동반한 급성 시력 저하와 색각 이상, 정상 안저와 CT는 시신경염을 암시한다. 시신경염은 다발성 경화증과 연관이 있다. 따라서 가장 가능성 높은 진단은 시신경염이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007600
