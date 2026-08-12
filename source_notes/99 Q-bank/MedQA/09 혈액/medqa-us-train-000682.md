---
type: qbank
schema_version: 1
id: medqa-us-train-000682
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:56a1e82c8c1f3f0366f01b9069d0a6ceef3c8b3ec5d54a1e66e0b0311cff5521
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Glanzmann thrombasthenia"
  - "Immune thrombocytopenia"
  - "Hemophilia"
  - "Bernard-Soulier syndrome"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
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
---

# MedQA US 임상문제

## 문제

이전에 건강하던 17세 소년이 사랑니 발치 후 추가 평가를 위해 어머니와 함께 응급실에 내원했다. 시술 중 환자는 치아 주변 잇몸에서 지속적인 출혈이 있었다. 여러 개의 거즈 팩을 적용했으나 효과는 미미했다. 환자는 쉽게 멍이 드는 병력이 있다. 어머니는 자신의 남자 형제가 사랑니를 발치했을 때 비슷한 문제를 겪었으며, 그 역시 쉽게 멍이 들고 관절이 붓는 병력이 있다고 말한다. 환자는 복용 중인 약물이 없다. 체온은 37°C, 맥박은 90회/분, 혈압은 108/74 mm Hg이다. 검사실 검사 결과는 다음과 같다: 헤마토크릿 35%, 백혈구 수 8,500/mm3, 혈소판 수 160,000/mm3, 프로트롬빈 시간(PT) 15초, 부분 트롬보플라스틴 시간(PTT) 60초, 출혈 시간 6분, 섬유소 분해 산물(FSP) 음성, 혈청 요소 질소 20 mg/dL, 크레아티닌 1.0 mg/dL, 빌리루빈 총 1.0 mg/dL, 직접 0.5 mg/dL, 젖산 탈수소효소(LDH) 90 U/L. 말초 혈액 도말 검사에서 정상 크기의 혈소판이 관찰된다. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 글란즈만 혈소판무력증(Glanzmann thrombasthenia)
B. 면역 혈소판감소증(Immune thrombocytopenia)
C. 혈우병(Hemophilia)
D. 베르나르-술리에 증후군(Bernard-Soulier syndrome)

## 해설


출혈 시간 연장, PT는 정상, PTT가 현저히 연장된 경우는 내인성 혈액응고인자 VIII·IX 결핍, 즉 혈우병을 시사한다. 따라서 혈우병이 가장 가능성 높은 진단이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000682
