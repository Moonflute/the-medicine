---
type: qbank
schema_version: 1
id: medqa-us-train-004855
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ab568defe625675036bf6b56ba5f25614f439a7597845d697b6dd7375c32e04a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "췌장암"
  - "나쁜 소식 전달"
  - "SPIKES 의사소통"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_st4zsnqXslZQgKFBhbmNyZWF0aWMgQ2FuY2VyKS5tZA
question_type: communication
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

64세 여자가 피로, 체중 감소, 황달로 평가받던 중 CT 결과를 들으러 왔다. 영상에서 췌장 머리에 3×3 cm 종괴가 보인다. 다음 중 이 환자에게 나쁜 소식의 검사 결과를 전달하는 가장 적절한 방법은?

## 선택지

A. 방해받지 않을 시간을 따로 예약해 차분히 설명한다
B. 배우자나 가까운 가족을 진료에 오게 해 먼저 나쁜 소식을 설명하고, 더 가까운 관계인 가족이 환자에게 전달하도록 요청한다
C. 전화로 나쁜 소식을 전하고, 원하면 외래 방문을 할 수 있다고 안내한다
D. 간호 인력을 교육하여 이 일을 그들의 직무 중 하나로 위임한다

## 해설


나쁜 소식 전달 시 환자와 충분히 대화할 수 있는 방해받지 않는 시간을 별도로 예약해 차분히 설명하는 것이 가장 적절한 의사소통 방법이다. 급히 전달하거나 가족에게만 알리는 것은 환자 중심 원칙에 어긋난다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004855 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: B·C·D가 원문과 다른 선택지로 번역된 오류를 실제 가족중계·전화통보·간호사위임 선택지로 복구. 정답 A와 의도 보존.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004855
