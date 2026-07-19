---
type: qbank
schema_version: 1
id: medqa-us-train-008653
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:15756549c6cc4d47e27afd00feb06508eca43b2bd4c114e127b366db5859ab85
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "SIADH"
  - "small cell lung cancer"
  - "euvolemic hyponatremia"
question_type: mechanism
difficulty: standard
answer: A
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

39세 여성이 혼란으로 내원했다. 남편은 환자가 현재 위치와 날짜를 모르고 기억하지 못한다고 말한다. 최근 소세포폐암 진단을 받았다. 활력징후는 체온 37°C, 심박수 80회/분, 혈압 120/80mmHg, 호흡수 14회/분, 실내 공기 산소포화도 99%이다. 기립성 변화는 없고 점막은 촉촉하며 모세혈관 재충만도 정상이다. 기본 대사검사에서 혈청 나트륨 129mEq/L이다. 이 환자의 질환에 대해 옳은 설명은 무엇인가?

## 선택지

A. 소변 삼투질농도는 100 초과이며 생리식염수 주입으로 교정되지 않는다
B. 소변 나트륨은 20 초과, 나트륨 분획배설은 1% 초과이다
C. 소변 나트륨은 10 미만, 나트륨 분획배설은 1% 미만이다
D. 소변 나트륨은 20 초과이며 이 질환의 다른 원인은 신부전이다

## 해설


소세포폐암과 연관된 저혈량성 저나트륨혈증은 SIADH가 가장 흔한 원인이다. SIADH에서는 수분 재흡수가 증가해 혈청 삼투압이 낮아지지만, 체액량은 정상(유보혈량)이며, 소변 삼투질농도는 100 mOsm/kg 이상이고 식염수 투여로 교정되지 않는다. 따라서 ‘소변 삼투질농도는 100 초과이며 생리식염수 주입으로 교정되지 않는다’가 옳다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008653
