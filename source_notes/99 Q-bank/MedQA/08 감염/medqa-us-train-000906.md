---
type: qbank
schema_version: 1
id: medqa-us-train-000906
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:09784c0e3e04c27a456913a55f17a130da798ed530ec102792125b7c400e603b
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "depression"
  - "hypertension"
  - "diabetes"
  - "Parkinson disease"
  - "serotonin syndrome"
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uFuOuFhOq4sCDsmrDsmrjspp0gKEdlcmlhdHJpYyBEZXByZXNzaW9uKS5tZA
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tjIztgqjsiqgg7Kad7ZuE6rWwIChQYXJraW5zb25pc20pLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yEuOuhnO2GoOuLjCDspp3tm4TqtbAgKFNlcm90b25pbiBTeW5kcm9tZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRmb3JtaW4ubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PeHljb2RvbmUubWQ
---

# MedQA US 임상문제

## 문제

65세 남성이 혼란과 행동 변화를 주소로 응급실에 내원하였다. 환자는 3일 전까지 평소 건강 상태를 유지하였다. 오늘 아침부터 혼란과 초조함이 심해져 내원하게 되었다. 환자의 과거력은 우울증, 고혈압, 당뇨병, 파킨슨병이며 현재 fluoxetine, lisinopril, 인슐린, metformin, selegiline(최근 파킨슨 증상 악화로 약물 요법에 추가됨)을 복용 중이다. 또한 통증과 불안을 위해 oxycodone과 clonazepam을 복용하고 있으나, 어젯밤 이 약들이 떨어졌다. 체온은 101°F(38.3°C), 혈압은 111/78 mmHg, 맥박은 117회/분, 호흡수는 22회/분, 실내 공기에서 산소 포화도는 99%이다. 신체 검진상 과민하고 땀을 흘리며 혼란스러워하는 노인 남성이 관찰된다. 신경학적 검진에서 하지의 과반사(hyperreflexia)와 간대성 경련(clonus)이 나타난다. 이 환자 증상의 원인으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 세균 감염
B. 전해질 이상
C. 약물 합병증
D. 바이러스 감염

## 해설


환자는 fluoxetine, selegiline, clonazepam, oxycodone 등 다수의 중추신경계 작용 약물을 복용했으며, 최근 약물 공급이 중단돼 급성 금단 및 약물 상호작용이 발생할 수 있다. 혼란, 고열, 고혈압, 고심박, 근육 경련·클로누스는 세로토닌 증후군이나 약물 과다복용에 흔히 나타난다. 가장 가능성 높은 원인은 약물 합병증이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000906
