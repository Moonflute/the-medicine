---
type: qbank
schema_version: 1
id: medqa-us-train-007574
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:594e6e22e469537a35966ee2423a7a3b6d0250ee31c8a06cc507637ef8f01294
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "치매"
  - "시각 환각"
  - "요실금"
  - "MRI"
question_type: investigation
related_disease_slugs:
  - MTMg67aA7J246rO8L-yalOyLpOq4iCAoVXJpbmFyeSBJbmNvbnRpbmVuY2UpLm1k
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-y5mOunpCAoRGVtZW50aWEpLm1k
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

75세 여자가 딸과 함께 내원했다. 환자는 자신이 완전히 건강하고 왜 왔는지 모르겠다고 한다. 딸은 수년 동안 건망증이 심해졌고 최근 손주의 이름과 사 오기로 한 식료품을 잊었으며 지난주 집에서 10마일 떨어진 곳에서 길을 잃은 채 발견되었다고 한다. 최근 몇 달 동안 요실금이 있고 아침에 실제로 없는 어린아이들을 본다고 한다. 최근 낙상은 없다. 활력징후는 정상이고 국소 신경학적 결손은 없다. 간이정신상태검사는 22/30점이다. 이 환자에게 가장 정확한 검사는 무엇인가?

## 선택지

A. 머리 MRI
B. 머리 CT
C. 머리 PET
D. 머리 CT 혈관조영술

## 해설

점진적인 인지·일상기능 저하가 있어 치매 원인 평가가 필요하다. 보기 중 뇌 MRI(A)는 혈관성 병변, 종양, 수두증 등 구조적 원인을 평가하는 데 적합하다. 정상 MRI가 치매를 배제하거나 MRI만으로 알츠하이머병/루이소체치매를 확진하는 것은 아니다. 환각을 포함한 임상 양상과 인지평가를 종합하고, PET 등의 추가검사는 진단 불확실성과 결과가 치료에 미칠 영향에 따라 선택한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. MRI A는 구조적 원인 감별 검사로 유지. 치매 전반에 가장 민감/특이적인 확진검사라는 해설 오류 제거.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng97/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007574
