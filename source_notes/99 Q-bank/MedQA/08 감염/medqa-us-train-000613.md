---
type: qbank
schema_version: 1
id: medqa-us-train-000613
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d9987416304e0f9f4ac4880c1c14a5bcadac5bdea5ef7bbcfa9945c163ea7ac1
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "pneumonia"
  - "bacteremia"
  - "splenomegaly"
  - "HIV"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: diagnosis
difficulty: complex
answer: C
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

39세 여성이 발열, 기침, 호흡곤란을 주소로 응급실에 내원하였다. 환자는 7일 전 독감과 유사한 증상이 시작되었으나 점차 악화되어 현재는 운동 시 호흡곤란을 겪고 있다고 보고하였다. 기침과 함께 소량의 황색 가래가 동반된다. 과거력상 4개월 전 폐렴으로 입원한 적이 있고, 6주 전에는 균혈증(bacteremia)으로 입원한 적이 있다. 또한 과거 정맥 주사 헤로인 남용력이 있으나, 마지막 사용은 3년 전이다. 체온은 101.2°F(38.4°C), 혈압은 104/70 mmHg, 맥박은 102회/분, 호흡수는 20회/분이다. 신체 검진상 우측 하폐야에서 거친 상기도 호흡음이 들린다. 우측 제1늑간에서 방사되지 않는 1/6도의 미세한 수축기 유출성 심잡음이 청진된다. 복부 검진상 중등도의 비장비대가 확인된다. 손목과 손가락을 촉진 시 압통이 있으며 관절 가동 범위가 제한되어 있다. 환자는 관절 가동 범위와 통증이 시간이 지남에 따라 보통 호전된다고 언급하였다. 이 환자에서 발견될 가능성이 가장 높은 검사 이상은 무엇인가?

## 선택지

A. 음이온 차이(anion gap) 감소
B. 좌방사(left-shift)를 동반한 백혈구 증가증
C. 호중구 감소증
D. HIV 혈청 검사 양성

## 해설


하루가 지나면 좋아지는 손목·손가락 통증과 운동 제한은 RA 양상의 염증성 관절염을 시사한다. 이와 비장비대·반복 세균감염이 함께 있어 Felty 증후군과 호중구감소(C)를 고려하는 것이 출제 의도이다. 실제로 CBC 감별계산·관절질환 평가가 필요하며 RA가 확인되지 않았으므로 이 사례만으로 Felty를 확진하는 것은 아니다. 과거 정맥주사 약물사용력 때문에 HIV 검사도 필요할 수 있지만 그것만으로 D를 가장 가능성 높은 결과라고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000613 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정답 C 호중구감소와 달리 HIV 양성을 결론으로 제시한 해설을 Felty 임상상으로 교체했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000613
