---
type: qbank
schema_version: 1
id: medqa-us-train-004232
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf5460ba3a60ede0d6d5f60629f9a77ccdfc5bfd250a741730b4e5e19f79b762
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "혼합 한랭글로불린혈증"
  - "C형간염"
  - "저보체혈증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: D
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

45세 남성이 치료하지 않은 만성 C형간염이 있고 반복적인 하지 촉지자색반과 관절통으로 내원했다. 혈청 C4는 낮고 혈소판은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 현미경적 다발혈관염
B. 면역성 혈소판감소증
C. 베체트병
D. 혼합 한랭글로불린혈관염

## 해설


C형간염, 촉지자색반·관절통, 낮은 C4는 혼합 한랭글로불린혈관염을 시사한다. 한랭글로불린과 바이러스 상태, 콩팥 등 장기 침범을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004232 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈소판감소를 만들어낸 설명을 제거하고 HCV 혼합 한랭글로불린혈관염과 주로 C4 소비를 설명했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004232
- https://kdigo.org/guidelines/hepatitis-c-in-ckd/
