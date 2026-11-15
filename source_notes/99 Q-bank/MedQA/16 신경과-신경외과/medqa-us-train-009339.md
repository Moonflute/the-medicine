---
type: qbank
schema_version: 1
id: medqa-us-train-009339
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:05235f073b757b99cf2aa1809a97761ec6a5d1dcb0a4d45a95bd19da2cc29d1f
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "transient ischemic attack"
  - "일과성 허혈발작"
  - "transient focal neurologic deficit"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_snbzqs7zshLEg7ZeI7ZiIIOuwnOyekSAoVHJhbnNpZW50IGlzY2hlbWljIGF0dGFjaykubWQ
difficulty: complex
answer: D
publication_status: "withheld"
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

68세 여성이 갑자기 왼쪽 다리에 힘이 빠졌다가 40분 만에 완전히 회복됐다. 진찰에서 신경학적 이상은 없고 확산강조 MRI에서 급성 경색은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 사지 허혈
B. 허혈성 뇌졸중
C. 지주막하출혈
D. 일과성 허혈발작

## 해설

뇌의 국소 허혈에 합당한 신경학적 증상이 일시적으로 나타났지만 급성 경색의 증거가 없으므로 일과성 허혈발작에 해당한다. 증상이 사라져도 조기 뇌졸중 위험이 있으므로 원인 평가와 예방 치료를 서두른다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 임상적으로 D가 가장 가능하나 보이지 않는 CT가 정상이라고 한 허위 관찰과 시간만으로 TIA 확정 오류 제거.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/secondary-prevention-of-stroke/anti-platelet-therapy-in-ischemic-stroke-and-tia

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009339
