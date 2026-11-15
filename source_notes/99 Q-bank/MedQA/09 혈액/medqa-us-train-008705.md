---
type: qbank
schema_version: 1
id: medqa-us-train-008705
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d0e0bab7b2c80551f52e199afc1c20143d1a5b8edb607aac51e7b2df9e16cbb8
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "paroxysmal nocturnal hemoglobinuria"
  - "intravascular hemolysis"
  - "venous thrombosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
  - MDkg7ZiI7JWhL-2YiOq0gCDrgrQg7Jqp7ZiIIChJbnRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
question_type: prevention
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
---

# MedQA US 임상문제

## 문제

발작성 야간혈색소뇨증 환자에게 에쿨리주맙 투여를 계획 중이다. 약과 관련된 중증 세균 감염을 줄이기 위해 미리 확인할 예방접종은?

## 선택지

A. A형간염 백신만 확인한다
B. 백신을 맞아도 효과가 없으므로 접종력을 확인하지 않는다
C. 수막구균 ACWY형과 B형 백신 접종력을 확인한다
D. 계절 인플루엔자 백신만 확인한다

## 해설


말단 보체를 억제하면 침습성 수막구균 감염 위험이 증가한다. 두 유형의 백신을 지침에 맞게 준비하고, 접종 후에도 고열이나 급격한 전신 증상이 있으면 즉시 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008705 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: DAT 음성 혈관내 용혈, 혈구감소와 정맥혈전의 조합은 PNH C에 일치. 항체성 용혈 및 다른 선지와 기전 대조.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008705
- https://www.cdc.gov/meningococcal/hcp/clinical-guidance/complement-inhibitor.html
