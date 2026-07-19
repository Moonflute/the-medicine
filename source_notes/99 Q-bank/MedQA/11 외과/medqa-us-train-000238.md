---
type: qbank
schema_version: 1
id: medqa-us-train-000238
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:565c6b8691ce1fde4a49471c05e2cd0282f2f95a156582605f4912326927fd3d
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "diverticulitis"
  - "post-operative anemia"
  - "febrile non-hemolytic transfusion reaction"
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

일반외과 인턴이 재발성 게실염 치료를 위해 성공적으로 S자결장절제술(sigmoidectomy)을 받은 59세 남성 환자의 병실로 호출되었습니다. 담당 간호사는 환자의 체온이 38.7 C로 측정되었으며 환자가 오한을 호소하고 있다고 보고했습니다. 수술은 8시간 전에 완료되었으며, 1,700 mL의 추정 실혈량으로 인한 대량 출혈의 합병증이 있었습니다. 헤모글로빈 수치가 5.9 g/dL로 확인되어 수술 후 빈혈로 진단되었고, 농축적혈구 2단위가 처방되어 90분 전에 수혈이 시작되었습니다. 환자의 활력징후는 다음과 같습니다: 체온 38.7 C, 심박수 88회/분, 혈압 138/77 mmHg, 호흡수 18회/분, 산소포화도 98%. 신체 검진상 이상 소견은 없습니다. 즉시 수혈을 중단한 후, 이 환자의 상태에 대한 가장 적절한 처치는 무엇입니까?

## 선택지

A. 환자를 관찰하고 아세트아미노펜(acetaminophen)을 투여한다
B. 디펜히드라민(diphenhydramine)을 처방한다
C. 비강 캐뉼라를 통해 산소 보충을 시작한다
D. 광범위 항생제 투여를 시작한다

## 해설


수혈 후 1시간 이내에 발열과 오한이 나타났으며 혈압·심박동이 안정적인데, 이는 비용혈성 발열 반응으로 가장 흔히 관찰된다. 치료는 증상 완화와 관찰이며, 해열제로 아세트아미노펜을 투여한다. 따라서 환자를 관찰하고 아세트아미노펜을 투여하는 것이 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000238
