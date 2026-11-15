---
type: qbank
schema_version: 1
id: medqa-us-train-006070
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:5164e546582bf47cba2eed1016fbc4cace9e2a796adf51d037ee3a525c20f860
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "전척수동맥 증후군"
  - "경추 방출성 골절"
  - "운동 및 통각 소실"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_soIQg7LKZ7IiYIOymne2bhOq1sCAoQW50ZXJpb3IgY29yZCBzeW5kcm9tZSkubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_sspnsiJgg7Jm47IOBIChTcGluYWwgY29yZCB0cmF1bWEpLm1k
difficulty: complex
answer: C
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

경추 손상 뒤 사지 마비가 지속되는 환자에서 목 아래의 통각과 온도감각이 소실됐다. 진동감각과 관절 위치감각은 남아 있다. 가장 잘 맞는 척수 병변은?

## 선택지

A. 척수 후주에 국한된 병변
B. 오른쪽 척수 반쪽만 침범한 병변
C. 척수 앞부분을 주로 침범한 병변
D. 요천추 신경근 다발 병변

## 해설

앞척수증후군은 운동로와 척수시상로를 침범해 운동, 통각과 온도감각을 떨어뜨린다. 뒤쪽 후주가 보존돼 진동·위치감각은 남을 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전척수동맥 증후군에서 모든 감각이 소실된다는 오류를 후주 감각 보존으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006070
