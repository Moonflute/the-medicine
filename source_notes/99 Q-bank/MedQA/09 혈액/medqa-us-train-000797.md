---
type: qbank
schema_version: 1
id: medqa-us-train-000797
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a101dca390cb1dd18823bc5fed0bfd8c51caaff35ff266e49579bf79d87f885b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hepatic vein thrombosis"
  - "paroxysmal nocturnal hemoglobinuria"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: investigation
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

짙은 소변과 복통을 반복하던 환자에게 간정맥혈전이 확인됐다. LDH는 높고 합토글로빈은 낮으며 직접항글로불린검사는 음성이다. 발작성 야간혈색소뇨증을 확인할 검사는?

## 선택지

A. 혈색소 전기영동
B. 과립구·단핵구의 FLAER와 GPI 결합 단백을 평가하는 유세포분석
C. 적혈구 삼투취약성검사
D. 혈청 페리틴

## 해설


비전형적인 부위의 정맥혈전에 비면역성 혈관내 용혈이 동반되면 발작성 야간혈색소뇨증을 의심한다. 혈액 유세포분석으로 GPI 결합 단백이 결핍된 클론을 찾는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000797 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PNH 질환명 오역을 발작성 야간혈색소뇨증으로 바로잡고 flow cytometry B의 목적을 명확히 했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://onlinelibrary.wiley.com/doi/10.1002/cyto.b.20525

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000797
- https://doi.org/10.1111/ejh.70294
