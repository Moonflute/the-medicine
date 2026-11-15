---
type: qbank
schema_version: 1
id: medqa-us-train-006885
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9e1dded482abfdcdb8c337e04e3e7309f0358a27f93d41561f1ff416d9a5ef4f
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "포도당-6-인산탈수소효소 결핍증"
  - "약물 유발 용혈성 빈혈"
  - "하인즈 소체"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yaqe2YiOyEsSDruYjtmIggKEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

감염 뒤 급성 용혈이 발생한 환자의 도말에 깨물린 적혈구가 보인다. G6PD 결핍을 의심하지만 용혈이 한창일 때 검사한 효소 활성은 정상 범위였다. 다음 판단은?

## 선택지

A. 정상 결과 한 번으로 결핍을 배제한다
B. 급성기 수치만으로 유전형을 확정한다
C. 회복 뒤 정량 G6PD 활성 검사를 반복한다
D. 비타민 B12 농도로 G6PD 결핍을 확인한다

## 해설


용혈 때 효소 활성이 낮은 늙은 적혈구가 먼저 파괴되고 망상적혈구가 많아져 검사값이 위정상일 수 있다. 의심이 높으면 적혈구 상태가 안정된 뒤 검사를 반복한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006885 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 산화성 용혈의 bite cell/Heinz body와 LDH 상승 C가 원문·기초 기전에 일치함을 직접 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006885
- https://b-s-h.org.uk/guidelines/guidelines/laboratory-diagnosis-of-g6pd-deficiency
