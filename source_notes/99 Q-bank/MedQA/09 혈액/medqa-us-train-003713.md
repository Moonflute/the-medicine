---
type: qbank
schema_version: 1
id: medqa-us-train-003713
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fe2534ab56ccd7bdee36c6ed0be87898c7d6e25f086db6bac422d52e839e2e13
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "G6PD deficiency"
  - "oxidative hemolysis"
  - "trimethoprim-sulfamethoxazole"
  - "hemoglobinuria"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwnOyekeyEsSDslbzqsIQg7ZiI7IOJ7IaM64eo7KadIChQYXJveHlzbWFsIE5vY3R1cm5hbCBIZW1vZ2xvYmludXJpYSkubWQ
question_type: mechanism
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
---

# MedQA US 임상문제

## 문제

8세 남아가 갑작스러운 복통과 짙은 소변으로 내원했다. 3일 전 요로감염으로 트리메토프림-설파메톡사졸을 복용했고, 총 빌리루빈과 간접 빌리루빈이 상승했으며 합토글로빈이 감소하고 소변에서 혈액이 검출되었다. 다음 중 증상의 가장 가능성 높은 원인은?

## 선택지

A. 헤모글로빈 S 생성
B. 한랭응집소
C. 납 중독
D. 포도당-6-인산탈수소효소 결핍

## 해설


감염/약물 노출 뒤 황달·간접 bilirubin 상승·낮은 haptoglobin과 어두운 소변은 급성 용혈에 부합하고 선택지 중 G6PD 결핍 D가 가장 가능하다. NADPH·환원 glutathione 방어가 부족하여 산화 손상에 취약하다. 소변 heme 3+에 비해 적혈구가2–3/hpf로 적어 헤모글로빈뇨가 중요하며 단순 적혈구성 혈뇨와 구별해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003713 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 용혈성 헤모글로빈뇨를 혈뇨와 혼동한 설명 교정; 산화스트레스 취약 G6PD 결핍 D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003713
