---
type: qbank
schema_version: 1
id: medqa-us-train-000297
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9a30bfc3c0cfb1e9e8bbbb7193a650dc6ae88dd373a0c23e5959bc0dc7471d62
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Disc herniation"
  - "Osteomyelitis"
  - "Spinal stenosis"
  - "Ankylosing spondylitis"
question_type: diagnosis
related_disease_slugs:
  - MDgg6rCQ7Je8L-qzqOyImOyXvCAoT3N0ZW9teWVsaXRpcykubWQ
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lO2YkeywqeymnSAoU3BpbmFsIFN0ZW5vc2lzKS5tZA
  - MDcg66WY66eI7Yuw7IqkL-qwleyngeyEsSDsspnstpTsl7wgKEFua3lsb3NpbmcgU3BvbmR5bGl0aXMpLm1k
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

26세 환자가 운동 중 생긴 요통이 한쪽 종아리 가쪽과 발까지 뻗친다고 한다. 무릎을 편 채 다리를 들어 올리면 같은 다리의 방사통이 재현된다. 발열은 없고 보행과 배뇨는 정상이다. 가장 가능성 높은 원인은?

## 선택지

A. 요추 척추관협착증
B. 척추 경막외 농양
C. 요추 추간판 탈출에 의한 신경근 자극
D. 요추 주변 근육 염좌만

## 해설

급성 요통과 발까지 이어지는 방사통이 하지직거상으로 유발되면 신경근 자극을 시사한다. 새 운동 마비나 배뇨 이상이 있으면 다시 응급 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 직각 다리검사라는 오역과 말초 좌골신경 압박 단정 수정. 신경근성 방사통의 디스크 A 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000297
- https://www.nice.org.uk/guidance/ng59/chapter/recommendations
