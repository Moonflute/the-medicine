---
type: qbank
schema_version: 1
id: medqa-us-train-000254
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3015c8228fbc72a1e8088cb8356901bf7b7d6c1c8ad9d26494c65f44709a7387
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "lymphoma"
  - "hypertension"
  - "kidney transplant"
  - "lymphadenopathy"
  - "splenomegaly"
  - "Non-Hodgkin’s lymphoma"
related_disease_slugs:
  - MDkg7ZiI7JWhL-umvO2UhOyihSAoTHltcGhvbWEpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRnVyb3NlbWlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
---

# MedQA US 임상문제

## 문제

65세 남성이 지난 일주일간 발생한 통증 없는 목 부종으로 내원하였다. 환자는 또한 다음 날 옷과 침구류를 갈아입어야 할 정도의 심한 야간 발한을 호소하였다. 과거력상 오래된 고혈압이 있다. 6년 전 신장 이식을 받았다. 현재 복용 중인 약물은 암로디핀(amlodipine), 메토프롤롤(metoprolol), 푸로세미드(furosemide), 아스피린(aspirin), 타크로리무스(tacrolimus), 마이코페놀레이트(mycophenolate)이다. 가족력상 여동생이 작년에 림프종으로 사망하였다. 계통적 문진에서 지난 2개월간 6kg(13.2lb)의 의도치 않은 체중 감소가 확인되었다. 활력징후는 체온 37.8℃, 혈압 120/75 mm Hg이다. 신체 검진상 목의 양측 전방 및 후방 삼각 부위에서 평균 직경 2cm의 통증 없는 다발성 림프절이 촉진된다. 우측 겨드랑이와 서혜부 림프절병증이 촉진된다. 복부 검진상 타진 시 늑골 하단 아래로 16cm 크기의 비장이 확인된다. 검사실 검사 결과는 다음과 같다: 혈색소 9 g/dL, 평균 적혈구 용적(MCV) 88 μm3, 백혈구 수 12,000/mm3, 혈소판 수 130,000/mm3, 크레아티닌 1.1 mg/dL, 젖산탈수소효소(LDH) 1,000 U/L. 말초혈액 도말검사는 특이 소견이 없다. 이 환자에서 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 약물 유발 림프절병증
B. 거대세포바이러스(Cytomegalovirus) 감염
C. 다발골수종(Multiple myeloma)
D. 비호지킨 림프종(Non-Hodgkin’s lymphoma, NHL)

## 해설


이식 후 면역억제 상태에서 전신성 림프절 비대, 비장 비대, 체중 감소, LDH 상승은 비호지킨 림프종을 강하게 시사한다. 따라서 비호지킨 림프종이 가장 가능성 높은 진단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000254
