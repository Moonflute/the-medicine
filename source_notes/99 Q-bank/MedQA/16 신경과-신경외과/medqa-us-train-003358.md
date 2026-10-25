---
type: qbank
schema_version: 1
id: medqa-us-train-003358
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f21828aa865057525c963f2510c6fccaa5f6d90758431b838844583056741e66
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "middle cerebral artery stroke"
  - "cardioembolic stroke"
  - "atrial fibrillation"
  - "contralateral hemiplegia"
question_type: diagnosis
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOuwqSDsobDrj5kt7IS464-ZIChBdHJpYWwgRmx1dHRlci1GaWJyaWxsYXRpb24pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 갑자기 오른팔과 오른다리에 힘이 빠지고 말이 어눌해져 응급실에 왔다. 이마의 움직임은 보존된 채 오른쪽 안면마비가 있었고 오른팔 근력은 0/5, 오른다리는 2/5였으며 오른쪽 몸에 저림이 있었다. 맥박은 불규칙하게 불규칙했다. 혈관조영술에서 병변이 발견될 가능성이 가장 높은 혈관은?

## 선택지

A. 전대뇌동맥
B. 중대뇌동맥
C. 후대뇌동맥
D. 기저동맥

## 해설

오른쪽 하안면 마비와 오른팔 우세의 오른쪽 팔다리 위약·감각저하는 좌측 대뇌반구 병변을 시사하며 주어진 선지에서는 중대뇌동맥(B)이 가장 합당하다. 이마 움직임 보존은 중추성 안면마비에 맞는다. 불규칙하게 불규칙한 맥박은 심방세동에 의한 색전 가능성을 뒷받침한다. 좌측 팔다리 마비라고 한 기존 설명은 본문과 반대이므로 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설이 우측 팔다리 마비를 좌측으로 뒤집은 측성 오류를 교정했다. 원문에서 상지 우세 근력저하와 심방세동 의심 소견을 복원하여 좌측 MCA 병변 B를 설명했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003358
