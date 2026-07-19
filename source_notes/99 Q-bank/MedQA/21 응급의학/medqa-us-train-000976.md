---
type: qbank
schema_version: 1
id: medqa-us-train-000976
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a02ff28147ebee4a4a14cb770ff08c5a76bb523b948e4f7b781f546f01ca3034
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "hemorrhagic shock"
question_type: diagnosis
difficulty: complex
answer: B
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

27세 남성이 응급의료서비스(EMS)에 의해 응급실로 이송되었다. 환자는 15분 전 발생한 정면충돌 사고 당시 안전벨트를 착용하지 않은 동승자였으며 현재 의식이 없다. 체온은 99.5°F(37.5°C), 혈압은 60/33 mmHg, 맥박은 180회/분, 호흡은 17회/분, 실내 공기 상태에서 산소 포화도는 95%이다. 초음파를 이용한 외상 평가(FAST)에서 모리슨 주머니(Morrison’s pouch)에 액체가 확인되었다. 응급실 내원 시 혈액 검사가 시행되어 의뢰되었다. 환자에게 정맥 수액 투여가 시작되었고 초기 외상 평가가 시작되었다. 20분 후, 혈압은 95/65 mmHg, 맥박은 110회/분이었다. 환자는 추가적인 안정화 조치를 받았으며 응급 수술이 예정되었다. 다음 중 이 환자의 가장 가능성 높은 초기 혈액 검사 수치를 가장 잘 나타낸 것은 무엇인가?

## 선택지

A. 헤모글로빈: 19 g/dL, 헤마토크릿: 55%, MCV: 95 µm^3
B. 헤모글로빈: 15 g/dL, 헤마토크릿: 45%, MCV: 90 µm^3
C. 헤모글로빈: 10 g/dL, 헤마토크릿: 30%, MCV: 110 µm^3
D. 헤모글로빈: 7 g/dL, 헤마토크릿: 21%, MCV: 75 µm^3

## 해설


환자는 저혈압, 빈맥, FAST에서 복강액을 확인한 급성 출혈성 쇼크 상태이다. 초기 혈액 검사는 저혈색소·저헤마토크리트가 특징이며, 선택지 중 가장 흔한 출혈성 쇼크 수치는 Hb 10 g/dL, Hct 45%이다. 따라서 해당 수치가 가장 적절하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000976
