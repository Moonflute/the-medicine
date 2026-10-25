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
  - "deep peroneal nerve palsy"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

발등굽힘 약화와 발등·첫째 발가락 사이 감각저하는 총비골신경 손상에 맞는다. 후경골근은 경골신경 지배이므로 발 내번(C)이 보존된다. 발 내번은 발바닥이 안쪽을 향하는 동작으로 발가락 내전과 다르다. 총비골신경의 표재 분지는 외번근을 지배하므로 외번은 약해질 수 있고, 경골신경 관련 발목반사는 대개 보존된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 총비골신경병증에서 발 내번과 발가락 내전을 혼동한 해설 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007500
