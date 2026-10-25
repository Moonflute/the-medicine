---
type: qbank
schema_version: 1
id: medqa-us-train-005340
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:03eae4e76297e65001c02475de552729d0d8f200295e6c575204d457668c7aa3
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "경막외혈종"
  - "두개내압 상승"
  - "만니톨"
  - "Epidural hematoma"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rp4nsmbgg7Lac7ZiIIChFcGlkdXJhbCBoZW1vcnJoYWdlKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 남자가 야구방망이에 머리를 맞아 의식불명으로 응급실에 왔다. 이송 중에는 깨어 말했으나 현재 왼쪽 동공이 산동되고 빛에 반응하지 않는다. 기관삽관과 수액소생을 시행했으며 비조영 두부 CT에서 병변이 보인다. 다음 중 가장 적절한 약물치료는?

## 선택지

A. 만니톨
B. PaCO₂를 24 mmHg로 유지
C. 뇌실복강 단락술
D. 아세타졸아미드

## 해설

의식 악화·단측 고정산동과 외상 병력은 두개내압 상승/탈출을 우려하게 하므로 보기 중 mannitol(A)을 임시 고삼투 치료로 고려한다. 기도·순환을 유지하고 긴급 신경외과적 원인 제거를 지연하지 않는다. 과호흡은 ICP를 낮출 수 있지만 PaCO2 24를 일상적으로 유지하면 뇌허혈 위험이 있어 장기 표준 치료가 아니다. 누락 CT의 모양을 실제 관찰한 것으로 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 탈출 위험에서 mannitol A를 수술 전 임시조치로 설명. 다른 선택지가 ICP에 전혀 효과 없다는 오류 제거.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005340
