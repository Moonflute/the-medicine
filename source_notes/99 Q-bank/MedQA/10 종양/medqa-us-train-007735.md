---
type: qbank
schema_version: 1
id: medqa-us-train-007735
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:468c417ab2ae48dbff16e1579a8354d4dbfbf50d09a0c275bb67060da9582032
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "copy-and-paste error"
  - "electronic health record"
  - "patient safety"
related_disease_slugs: []
question_type: prevention
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

43세 여성이 유방암 국소 재발 후 화학요법을 위해 입원했다. 이전 화학요법에 종양이 잘 반응했기 때문에 처방 의사는 전자의무기록의 이전 권고를 복사하여 새 처방에 붙여넣었다. 이후 환자에게 약물 관련 독성이 발생해 입원 기간이 연장되었다. 원인을 조사한 결과 마지막 화학요법 이후 체중이 8 kg 감소했지만 최근 기록의 다른 정보는 과거와 동일했다. 향후 유사한 오류의 재발을 줄이기 위한 가장 적절한 권고는?

## 선택지

A. 전자의무기록에서 복사 및 붙여넣기 금지
B. 복사 및 붙여넣은 자료를 쉽게 식별할 수 있게 함
C. 작성자 식별 방지
D. 환자 인구학적 정보에만 복사 및 붙여넣기 사용

## 해설


복사·붙여넣기 오류를 방지하려면 전자차트에서 복사된 내용이 쉽게 식별되도록 표시해야 한다. 이는 동일한 오류가 재발하는 것을 줄이는 실용적인 예방책이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007735
