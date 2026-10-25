---
type: qbank
schema_version: 1
id: medqa-us-train-000457
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:084ab369b4a159abdcd29494a56f030c98027a18638c70d6385023b43c3ecca4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "Chronic myeloid leukemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDqs6jsiJjshLEg67Cx7ZiI67ORIChDTUwpIChDaHJvbmljIE15ZWxvaWQgTGV1a2VtaWEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

59세 여성이 2개월간 지속된 피로감과 복부 불편감으로 내원하였다. 지난 6개월 동안 5.4kg(12lb)의 체중 감소가 있었다. 복용 중인 약물은 없다. 체온은 37.8°C, 맥박은 분당 70회, 호흡은 분당 13회, 혈압은 125/80 mmHg이다. 심폐 검사상 이상 소견은 없다. 비장은 왼쪽 늑골 하단 3cm 아래에서 촉지된다. 검사실 검사 결과는 다음과 같다: 혈색소 9.4 g/dL, 평균 적혈구 용적(MCV) 86 μm3, 백혈구 수 58,000/mm3, 분엽핵 호중구 54%, 간상핵 호중구 8%, 림프구 7%, 골수구 5%, 후골수구 10%, 전골수구 4%, 모세포 5%, 단핵구 1%, 호산구 4%, 호염기구 2%, 혈소판 수 850,000/mm3, 혈청 크레아티닌 0.9 mg/dL, LDH 501 U/L. 골수 생검에서 과립구 증가를 동반한 과형성 골수 조혈이 관찰된다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 시타라빈(Cytarabine) 및 다우노루비신(daunorubicin)
B. 혈청 단백 전기영동(Serum protein electrophoresis)
C. 세포유전학적 검사(Cytogenetic studies)
D. 올-트랜스 레티노산(All-trans retinoic acid)

## 해설


백혈구증가와 다양한 성숙 단계의 과립구, 호염기구증가·혈소판증가·비장비대는 CML을 의심하게 한다. 세포유전학적 검사(C)로 Philadelphia 염색체 t(9;22) 등과 동반 이상을 평가하고 BCR::ABL1 융합을 RT-PCR/FISH 등으로 확인한다. 임상상과 과형성 골수만으로 확진한 뒤 치료하는 순서가 아니다. Cytarabine/daunorubicin이나 ATRA를 이 소견만으로 곧바로 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-000457 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CML이 이미 확진됐다는 표현을 BCR::ABL1 확인을 위한 진단검사로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12310532/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000457
