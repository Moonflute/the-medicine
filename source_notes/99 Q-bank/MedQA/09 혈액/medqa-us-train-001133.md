---
type: qbank
schema_version: 1
id: medqa-us-train-001133
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4d370dfb16f7703ae0a04ff50e3fa4bbce7ae9b51ce76fce2e5d429bacb6e50d
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "sickle cell disease"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 남아가 지난 3일간 진행성 피로, 복통, 식욕 부진으로 어머니와 함께 응급실에 내원하였다. 환아는 작년에 손과 발이 부어 응급실에서 한 차례 치료받은 적이 있다. 수단에서 입양되었으며 가족력은 알려진 바 없다. 복용 중인 약물은 없다. 환아는 기면 상태이다. 체온은 37.5°C, 맥박은 141회/분, 호흡수는 25회/분, 혈압은 68/40 mmHg이다. 진찰상 창백하고 건조한 점막과 공막 황달이 관찰된다. 검사실 검사 결과는 다음과 같다: 혈색소 7.1 g/dL, 평균 적혈구 용적(MCV) 93 fL, 망상적혈구 수 11%. 혈청 검사: 젖산탈수소효소(LDH) 194 IU/L, 총 빌리루빈 6.4 mg/dL, 직접 빌리루빈 0.5 mg/dL, 합토글로빈 21 mg/dL (정상 범위 41–165). 이 환자에 대한 추가 평가에서 가장 나타날 가능성이 높은 소견은 무엇인가?

## 선택지

A. 쿰스 검사(Coombs test)에서 항적혈구 항체 양성
B. 초음파상 비장비대
C. 생검상 세포가 적은 골수(hypocellular bone marrow)
D. 혈청 내 낮은 페리틴 수치

## 해설


이전 손발 종창(dactylitis), 아프리카 출신, 간접 고빌리루빈혈증과 망상적혈구증가는 겸상적혈구병을 시사한다. 어린 환자에서 복통·급성 빈혈·저혈압이 함께 있으면 급성 비장 격리 위기를 의심하며 비장비대(B)가 예상된다. 이때 혈액이 비장에 급격히 저류되어 순환혈액량이 감소한다. 원문 LDH194 IU/L를 참고범위 없이 고LDH라고 단정하지 않는다. 보상성 망상적혈구증가는 골수저형성보다 용혈/격리에 맞는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001133 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 단순 용혈성 빈혈 일반론 대신 소아 SCD의 비장 격리 가능성과 실제 검사 단서를 연결했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001133
