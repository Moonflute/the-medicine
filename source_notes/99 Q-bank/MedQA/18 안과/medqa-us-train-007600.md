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
related_disease_slugs:
  - MTgg7JWI6rO8L-yLnOyLoOqyveyXvCAob3B0aWMgbmV1cml0aXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
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

안구운동통, 색각저하 및 안경으로 교정되지 않는 아급성 단안 시력저하는 D, 시신경염에 합당하다. 과거 반대쪽 눈의 호전된 유사 에피소드도 이를 지지한다. 정상 세극등·두부 CT만으로 시신경염을 배제할 수 없고, 실제 안저가 정상이라고 본문에 제시된 것은 아니다. 다발성경화증과 연관될 수 있으나 이 문항만으로 MS를 확진하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 원문에 정상 안저검사가 없고 정상 CT가 시신경염의 양성 근거가 되는 것은 아니므로 설명 정리.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007600
