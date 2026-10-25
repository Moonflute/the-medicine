---
type: qbank
schema_version: 1
id: medqa-us-validation-000653
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a1fa01bc9aca4ed8ead75225b1d9f16a007ef5f066b20d893612ba3c63ca8d99
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "쿠싱증후군"
  - "코르티솔 과다"
  - "저칼륨혈증"
related_disease_slugs:
  - MDQg64K067aE67mEL-y_oOyLsSDspp3tm4TqtbAgKEN1c2hpbmcncyBTeW5kcm9tZSkubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
question_type: investigation
difficulty: standard
answer: C
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

44세 남성이 심한 요통, 피로, 체중증가, 간헐적 두통으로 진료를 받으러 왔다. 혈압 155/102 mmHg, 얼굴이 붉고 몸통 비만이며 사지에 멍이 많고 요추 압박골절이 있다. 추가 평가에서 가장 가능성 높은 소견은?

## 선택지

A. 혈청 포도당 감소
B. 뇌 MRI에서 안장위 종괴
C. 심전도에서 T파 평탄화
D. Chvostek 징후 양성

## 해설


정답 C. 중심성 비만·멍·고혈압·취약골절은 Cushing syndrome을 시사한다. 심한 cortisol 과다는 mineralocorticoid 작용으로 저칼륨혈증을 동반할 수 있고 그 경우 ECG의 T파 평탄화 등이 나타날 수 있다. 모든 Cushing 환자가 저K 또는 저전압을 보인다는 뜻은 아니다. 뇌하수체 선종도 원인일 수 있으나 전형적으로 작은 안장내 병변이 많아 안장위 종괴가 보편적 소견은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000653 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 쿠싱에서 저K가 동반될 때 T평탄화 C 가능; 무조건 저전압/뇌하수체MRI 무관이라는 오류 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000653
