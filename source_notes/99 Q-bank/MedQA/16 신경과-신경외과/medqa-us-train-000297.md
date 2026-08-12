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
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-2.5-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

26세 여성이 갑자기 시작된 허리 통증을 호소합니다. 몇 시간 전 헬스장에서 운동을 하던 중 날카로운 통증을 느꼈다고 말합니다. 통증은 다리 옆면을 따라 발까지 방사됩니다. 신체 검진 시 활력 징후는 다음과 같습니다: HR 95, BP 120/70, T 37.2°C. 다리를 들어 올릴 때(straight leg raise) 다리를 따라 극심한 통증이 발생합니다. 가벼운 촉감과 핀으로 찌르는 감각은 모두 정상입니다. 다음 중 가장 가능성이 높은 진단은 무엇입니까?

## 선택지

A. 추간판 탈출증 (Disc herniation)
B. 골수염 (Osteomyelitis)
C. 척추관 협착증 (Spinal stenosis)
D. 강직성 척추염 (Ankylosing spondylitis)

## 해설


급성 요통에 다리까지 방사되는 통증과 직각 다리 올림 시 통증이 나타나는 것은 좌골신경 압박을 의미한다. 이는 급성 추간판 탈출증에서 흔히 보이는 양상이며, 감염이나 염증 징후가 없으므로 골수염과는 구별된다. 따라서 가장 가능성 높은 진단은 추간판 탈출증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000297
