---
type: qbank
schema_version: 1
id: medqa-us-train-001986
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9eb02006bd8949ba1f22c8fea3188884b28fc841a25e57d0dde81e4ef3ca7e9c
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "giant cell arteritis"
  - "temporal arteritis"
  - "tongue ischemia"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-2YiOq0gOyXvCAoVmFzY3VsaXRpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QYXJhY2V0YW1vbC5tZA
---

# MedQA US 임상문제

## 문제

67세 남성이 극심한 혀 병변 통증으로 내원했다. 한 달간 왼쪽 관자놀이에 국한되어 간헐적으로 오른쪽 눈으로 방사되는 두통이 선행되었고 며칠 전 혀 병변이 급성으로 발생해 지속적으로 아프다. 고혈압과 반복적인 편두통 병력이 있고 관자놀이에 결절성 종창이 여러 개 보인다. ESR 45 mm/h이다. 다음 중 최선의 관리 단계는 무엇인가?

## 선택지

A. CT
B. 용해요법
C. 고용량 전신 corticosteroid
D. Paracetamol

## 해설


고령에서 새 측두부 두통, 결절성 측두동맥과 심한 혀 통증은 거대세포동맥염에 의한 허혈을 의심하게 한다. 제시된 선택지 중 고용량 전신 corticosteroid(C)를 신속히 시작하는 것이 적절하다. 시력 소실 등 비가역적 손상을 막기 위해 확진 검사 완료까지 치료를 미루지 않으며 측두동맥 생검/적절한 혈관영상을 병행한다. 제공되지 않은 혀 사진의 세부 모양이나 괴사 범위를 확인했다고 주장하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001986 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: temporal을 일시적으로 오역한 부분을 바로잡고 GCA 의심 시 확진을 기다리지 않는 치료를 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://acrjournals.onlinelibrary.wiley.com/doi/10.1002/acr.24632

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001986
