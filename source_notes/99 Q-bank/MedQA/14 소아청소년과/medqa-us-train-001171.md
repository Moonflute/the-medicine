---
type: qbank
schema_version: 1
id: medqa-us-train-001171
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:869427635bb72524e7b710bc541cb73a60c581127a7fd37eebf08b2a0a94eb76
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "scald wound"
  - "burn infection"
question_type: management
related_disease_slugs:
  - MTEg7Jm46rO8L-2ZlOyDgSAoQnVybikubWQ
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmZXBpbWUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

화상(scald wound)으로 입원한 2세 남아가 입원 5일째에 체온 40.2°C를 보였다. 호흡 곤란, 기침, 배뇨통은 없다. 환아는 어머니가 저녁 식사를 준비하던 중 끓는 물을 몸통에 쏟아 1시간 후 처음 내원하였다. 수액 소생술, 영양 지원, 통증 관리 및 상처 치료를 위해 입원하였으며 오늘까지 경과는 양호했다. 다른 기저 질환은 없다. 이번 입원 기간 중 진통제 외에 복용 중인 약물은 없다. 환아는 불편해 보이나 급성 고통(acute distress) 상태는 아니다. 맥박은 분당 150회, 호흡은 분당 41회, 혈압은 90/50 mmHg이다. 실내 공기 상태에서 맥박 산소 포화도는 99%이다. 신체 검진상 앞가슴에 화살 모양의 불규칙하고 비대칭적인 화상 부위가 관찰되며 주변에 홍반과 화농성 분비물이 있다. 그 외 신체 검진상 이상 소견은 없다. 혈색소는 13.4 g/dL, 혈소판 수는 200,000/mm3, 백혈구 수는 13,900/mm3이다. 이 환자에게 가장 적절한 초기 약물 치료는 무엇인가?

## 선택지

A. Amoxicillin/clavulanic acid 및 ceftriaxone
B. Piperacillin/tazobactam 및 cefepime
C. Vancomycin 및 metronidazole
D. Vancomycin 및 cefepime

## 해설

입원 중 화농성 화상 부위와 고열·빈맥은 감염을 시사한다. 보기 중 반코마이신과 세페핌(D)은 MRSA 및 녹농균 포함 호기성 그람음성균을 겨냥하는 경험적 조합이다. 배양·감염원 제거와 지역 내성을 반영한다. 세페핌을 신뢰할 만한 혐기성균 단독 치료제로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 고열·화농성 화상감염의 MRSA+그람음성 경험치료 D 유지. 세페핌을 혐기성균 치료제로 설명한 오류 수정.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001171
