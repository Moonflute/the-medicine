---
type: qbank
schema_version: 1
id: medqa-us-train-008485
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:54ae7d1ce8e1b958fa6f40f71cf902d7ce2fa56c9a7395cb44492881a60d36a4
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hairy cell leukemia"
  - "tartrate-resistant acid phosphatase"
  - "cladribine"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uwse2YiOuzkSAoTGV1a2VtaWEpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

60세 남성이 가벼운 외상이나 하루 중 아무 때나 발생하는 반복적인 코피로 내원했다. 지난 6개월 동안 쇠약감과 피로를 느꼈고 체중이 10kg(22파운드) 감소했다. 식욕이 저하되었고 복부 불편감을 호소한다. 야간 발한은 없다. 맥박 72회/분, 혈압 130/70mmHg, 체온 37.5°C(99.5°F)이다. 비장이 왼쪽 늑골연에서 10cm 아래까지 만져진다. 양쪽 상지에 여러 멍이 보인다. 검사 결과 혈색소 9.8g/dL, 헤마토크릿 29.9%, 백혈구 4,500/mm³, 호중구 30%, 혈소판 74,000/mm³, 혈청 LDH 410IU/L이다. 말초혈액 도말에서 주석산 저항성 산성인산분해효소 활성이 검출된다. 다음 중 이 환자의 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 농축 적혈구 수혈
B. 혈소판 수혈
C. 멜팔란
D. 클라드리빈

## 해설


TRAP 양성, 범혈구감소와 비장비대는 털세포백혈병을 시사한다. 증상성 빈혈·혈소판감소가 있어 선택지 중 cladribine(D)이 적절하다. Cladribine은 퓨린 유사체로 백혈병 세포를 억제하지만 초기 골수억제와 감염 위험도 있으므로 혈구 수와 감염을 감시한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008485 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: TRAP 양성 범혈구감소·비장비대의 털세포백혈병과 cladribine D는 일치한다. 질환명 오역과 약물이 골수억제를 즉시 회복시킨다는 잘못된 설명을 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/hairy-cell-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008485
