---
type: qbank
schema_version: 1
id: medqa-us-train-005731
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1386e355e169ee22f5662f20914916b2b40e798bf6613a833fa5981e668d38f4
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "비알코올성 지방간염"
  - "간세포 풍선변성"
  - "대사증후군"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ruYTslYzsvZTsmKzshLEg7KeA67Cp6rCE7Je8IChOb24tYWxjb2hvbGljIFN0ZWF0b2hlcGF0aXRpcykubWQ
  - MDQg64K067aE67mEL-uMgOyCrOymne2bhOq1sCAoTWV0YWJvbGljIFN5bmRyb21lKS5tZA
question_type: diagnosis
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

45세 남성이 제2형 당뇨병과 비만으로 진료 중이다. 유의한 음주나 바이러스 간염은 없다. 필요한 평가를 마친 뒤 간 조직을 검사했더니 지방 축적, 간세포 풍선변성과 소엽 염증이 보였다. 간경변 소견은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 염증이 없는 단순 대사이상 관련 지방간
B. 만성 바이러스 간염
C. 대사이상 관련 간경변
D. 대사이상 관련 지방간염(MASH)

## 해설

대사이상 관련 지방간질환에서 지방 축적과 함께 소엽 염증 및 간세포 풍선변성이 확인되면 지방간염에 부합한다. 염증과 세포 손상만으로 간경변이라고 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 매일 맥주1캔을 간헐적 고알코올섭취로 바꾼 설명을 제거하고 대사성 지방간염 D로 정리.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005731
- https://doi.org/10.3350/cmh.2025.0045
