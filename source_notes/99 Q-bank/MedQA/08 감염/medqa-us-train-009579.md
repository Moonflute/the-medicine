---
type: qbank
schema_version: 1
id: medqa-us-train-009579
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7c594413834cd245f5ab42144102c00584c92f1977d047c7a1e67089f8880f14
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "Yersinia enterocolitica"
  - "여시니아 엔테로콜리티카"
  - "yersiniosis"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yLneykkeuPhSDrsI8g7Iud7ZKI66ek6rCcIOqwkOyXvC5tZA
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

16세 남자가 4일간의 고열, 인후통, 혈성 설사로 내원했다. 오심과 지난 2일간 여러 차례 구토도 있다. 최근 여행이나 외식은 없었고 최근 개 산책 사업을 시작했는데 개 두 마리가 아팠다고 한다. 체온 37°C, 호흡수 16회/분, 맥박 77회/분, 혈압 100/88 mmHg이다. 복부를 포함한 진찰은 정상이다. 백혈구 13,100/mm³(호중구 80%, 림프구 15%, 단핵구 5%)이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 여시니아증
B. C. difficile 대장염
C. 바실루스 세레우스 감염
D. 로타바이러스 감염

## 해설


발열·혈성 설사와 인후통은 Yersinia 장염에서 나타날 수 있어 선택지 중 A가 가장 부합한다. 검사상 호중구 80%로 호중구 우세이며 림프구 우세가 아니다. 개 접촉은 장내세균 노출의 단서일 수 있으나 Yersinia에만 특이적이지 않으며 Campylobacter 등 다른 원인은 실제 대변검사로 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009579 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 주어진 선지 중 혈성 설사·인후통을 일으킬 수 있는 Yersinia A 유지. 실제 감별은 더 넓고 CBC는 림프구가 아닌 호중구 우세임을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yersinia/hcp/clinical-overview/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009579
