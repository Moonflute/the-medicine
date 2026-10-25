---
type: qbank
schema_version: 1
id: medqa-us-train-000305
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:719886a938f1779f9c141ccf48343b990829c7f0ce65e7bddd8470a955f1ab06
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "Irritable bowel syndrome"
  - "Crohn’s disease"
  - "Giardiasis"
  - "Laxative abuse"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_qs7zrr7zshLEg7J6lIOymne2bhOq1sCAoSUJTKSAoSXJyaXRhYmxlIEJvd2VsIFN5bmRyb21lIChJQlMpKS5tZA
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_tgazroaDrs5EgKENEKSAoQ3JvaG4ncyBEaXNlYXNlIChDRCkpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

31세 여성이 지난 4개월 동안 거의 매일 지속되는 만성 설사로 내원하였다. 환자는 또한 하복부 불편감과 경련을 호소하며, 이는 설사를 하고 나면 완화된다. 최근 체중 변화는 없다고 한다. 배변 전에는 급박감이 느껴지고 점액 배출이 동반되며, 배변 후에는 잔변감이 있다. 환자는 몇 달 전 캠핑을 다녀왔으며, 함께 캠핑을 갔던 일행 중 한 명이 최근 아팠던 적이 있다. 체온은 37°C, 호흡수는 15회/분, 맥박은 67회/분, 혈압은 122/98 mm Hg이다. 신체 검진상 특이 소견은 없다. 일반적인 대변 검사는 정상 범위 내에 있으며 혈액 검사 결과는 다음과 같다: Hb 13 gm/dL, 백혈구 수(WBC) 11,000/mm3, 백혈구 감별 계산(중성구 70%, 림프구 25%, 단핵구 5%), 적혈구 침강 속도(ESR) 10 mm/hr. 가장 가능성이 높은 진단은 무엇인가?

## 선택지

A. 과민성 장 증후군(Irritable bowel syndrome)
B. 크론병(Crohn’s disease)
C. 지아르디아증(Giardiasis)
D. 하제 남용(Laxative abuse)

## 해설

정답은 A이다. 배변과 관련해 호전되는 만성 복통·점액변·급박감과 정상 체중/낮은 염증 지표는 제시된 선택지 중 IBS에 가장 합당하다. 다만 캠핑 노출이 있고 일반 대변검사 한 번이 정상이어도 Giardia를 완전히 배제하지 못하므로 실제 평가에서는 적절한 항원/PCR 검사와 경고 증상을 고려한다. 확정 진단을 위한 만성 증상 기간도 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 정상 일반 대변검사만으로 Giardia를 완전히 배제한다는 인상을 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000305
