---
type: qbank
schema_version: 1
id: medqa-us-train-000810
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:322e5783111402e2e893ffde631d613bbe9ec6c16cc9bc9d47ef5f2955f0fee2
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Mycoplasma pneumoniae"
  - "pneumonia"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uvuOy9lO2UjOudvOyKpOuniCAoTXljb3BsYXNtYSkubWQ
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Y-Q66C0IChQbmV1bW9uaWEpLm1k
question_type: mechanism
difficulty: complex
answer: D
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

12세 남아가 발열, 마른기침, 호흡곤란을 주소로 응급실에 내원하였다. 증상은 약 5일 전 체온이 38.7°C(101.7℉)까지 오르는 발열, 두통, 근육통, 콧물과 함께 시작되었다. 발병 3일 후 환자는 비생산성 기침을 시작하였고 이후 호흡곤란이 발생하였다. 활력징후는 혈압 100/70 mm Hg, 심박수 91회/분, 호흡수 29회/분, 체온 38.1℃(100.6℉)이다. 진찰 결과 산소포화도는 88%이다. 환자는 경미한 인두 발적과 경부 림프절병증을 보인다. 폐 청진상 특이 소견은 없다. 흉부 X선 촬영상 폐문 주위에서 가장 잘 보이는 반점상 망상 음영이 관찰된다. 객담 배양 검사에서 Mycoplasma pneumoniae 양성이다. 다음 중 환자의 상태와 일치하는 것은 무엇인가?

## 선택지

A. 정상 A-a 경사도(A-a gradient), 증가된 확산 거리
B. 감소된 A-a 경사도(A-a gradient), 증가된 확산 거리
C. 감소된 A-a 경사도(A-a gradient), 감소된 확산 거리
D. 증가된 A-a 경사도(A-a gradient), 증가된 확산 거리

## 해설


간질성 폐렴에서 폐포-모세혈관 사이의 염증과 간질 비후는 산소의 확산거리를 늘리고 가스교환을 저하시킬 수 있다. 저산소혈증은 환기-관류 불균형 및 확산 장애와 연관되어 A-a 산소분압차가 증가한다. 따라서 D이다. 확산거리가 증가한다는 것은 확산용량이 증가한다는 뜻이 아니며, 오히려 산소 전달에 불리하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000810 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 확산거리 증가를 확산용량 증가로 잘못 기술한 생리 설명을 교정; 정답 D 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000810
