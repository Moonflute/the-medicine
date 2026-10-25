---
type: qbank
schema_version: 1
id: medqa-us-validation-000818
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:29c9b3e6f4cfc1c751df0a0edd7c230fc32fb9700bece379148305ee6c8d0c3c
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전치태반"
  - "무통성 질출혈"
  - "임신 3기 출혈"
question_type: diagnosis
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
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

임신 29주인 28세 여성(임신 2회, 출산 1회)이 일주일간 지속된 통증 없는 소량의 질출혈로 진료를 받으러 왔다. 복부는 압통이 없고 자궁경부는 닫혀 있다. 가장 가능성 높은 진단은?

## 선택지

A. 관통태반(placenta percreta)
B. 전치태반
C. 태반조기박리
D. 자궁파열

## 해설


임신 3기 무통성 질출혈은 전치태반이 가장 흔한 원인이다. 자궁경부가 닫혀 있고 통증이 없으므로 정답은 B이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 정답 전치태반은 유지하고 오답 선지 placenta percreta를 단순 유착태반으로 번역한 오류를 관통태반으로 바로잡았다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000818
