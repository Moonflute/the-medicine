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
answer: D
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

64세 환자가 갑자기 왼팔 힘이 빠졌고, 양쪽에서 동시에 소리를 내면 왼쪽 자극을 놓친다. 자신의 왼팔이 마비됐다는 사실도 알아차리지 못한다. 얼굴과 팔의 위약이 다리보다 심하다. 어느 혈관 영역의 뇌졸중이 가장 의심되는가?

## 선택지

A. 왼쪽 중대뇌동맥
B. 오른쪽 전대뇌동맥
C. 왼쪽 후대뇌동맥
D. 오른쪽 중대뇌동맥

## 해설

왼쪽 공간의 무시와 병식 저하는 오른쪽 대뇌의 주의 네트워크 손상을 시사한다. 왼쪽 얼굴·팔 우세 위약이 동반되면 오른쪽 중대뇌동맥 영역에 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설이 우측 팔다리 마비를 좌측으로 뒤집은 측성 오류를 교정했다. 원문에서 상지 우세 근력저하와 심방세동 의심 소견을 복원하여 좌측 MCA 병변 B를 설명했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003358
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
