---
type: qbank
schema_version: 1
id: medqa-us-train-007500
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bfdd3b2712189dc9e4a5f458873b2fa4a8a977251ae9c4e8651d8afab0514904
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "총비골신경 마비"
  - "족하수"
  - "비골신경 압박"
  - "발 내번 보존"
question_type: diagnosis
difficulty: standard
answer: C
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

36세 여자가 새로 발생한 절뚝거림으로 내원했다. 2주 동안 왼쪽 다리를 더 높이 들어 올리지 않으면 왼발이 걸려 넘어지는 경향이 있다. 다리 외상은 없었다. 승무원으로 일하며 근무할 때 압박스타킹을 신는다. 활력징후는 정상이다. 신체검사에서 최소한의 저항에도 왼발 발등굽힘이 약하고, 왼발 등쪽과 첫째·둘째 발가락 사이의 피부를 가볍게 만질 때 감각이 감소되어 있다. 추가 평가에서 다음 중 어떤 소견이 나타날 가능성이 가장 높은가?

## 선택지

A. 발목 반사 감소
B. 발 외번 정상
C. 발 내번 정상
D. 고관절 굴곡 약화

## 해설


총비골신경 마비는 발등 굽힘 약화와 1·2번 사이 감각 감소를 일으키며, 발 내번(발가락 내전) 근육은 보존된다. 따라서 발 내번이 정상인 것이 특징이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007500
