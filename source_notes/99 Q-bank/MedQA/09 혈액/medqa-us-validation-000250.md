---
type: qbank
schema_version: 1
id: medqa-us-validation-000250
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ecf09ef9b9eb3fd315a912cb3f93ad9edfb0d54062e6b49f2b6d7a4f28f2524a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "면역성 혈소판감소증"
  - "혈소판감소증"
  - "C형간염"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: investigation
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

31세 여성이 2주 동안 반복되는 코피와 잇몸 출혈로 진료를 받으러 왔다. 심각한 질환의 병력이나 복용 약물은 없다. 두 남성과 성관계를 하고 콘돔은 일관되게 사용하지 않는다. 활력징후는 정상이다. 진찰에서 흉부에 눌러도 창백해지지 않는 점상 반점이 보였고 다른 이상은 없다. 혈색소 13.1 g/dL, 백혈구 6,600/mm³, 혈소판 28,000/mm³이며 말초혈액도말에서 형태가 정상인 혈소판 감소가 보였다. HIV 검사는 음성이다. 다음 중 가장 적절한 처치는?

## 선택지

A. 혈액배양
B. D-이합체 검사
C. C형간염 항체 검사
D. 항혈소판 항체 검사

## 해설


고립된 심한 혈소판감소와 점막출혈은 ITP를 시사한다. 이차 원인 평가에 HIV와 HCV 검사가 포함되므로 HIV 음성인 이 사례에서는 HCV 항체 검사(C)가 적절하다. 항체 양성이면 RNA로 현재 감염 여부를 확인한다. 항혈소판 항체 검사는 민감도 등 한계로 통상적인 확진 필수검사가 아니며, HCV 감염이 본문에서 이미 확인된 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000250 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고립 혈소판감소의 이차 원인 HCV 항체 C 평가 유지. HCV가 이미 확정되거나 모든 급성 혈소판감소의 흔한 원인이라고 일반화하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6963252/
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000250
