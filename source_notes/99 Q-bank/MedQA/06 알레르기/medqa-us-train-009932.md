---
type: qbank
schema_version: 1
id: medqa-us-train-009932
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f038a99651cca7bd28f00f4b990b3edd7f3c8b64af8ea668f20000cfd8302aa1
exam: USMLE Step 2/3
language: ko
specialty: 06 알레르기
related_diseases:
  - "인플루엔자 예방접종"
  - "달걀 알레르기"
  - "백신 알레르기"
related_disease_slugs:
  - MDYg7JWM66CI66W06riwL-yVjOugiOultOq4sC5tZA
  - MDgg6rCQ7Je8L-yduO2UjOujqOyXlOyekCAoSW5mbHVlbnphKS5tZA
question_type: prevention
difficulty: simple
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvT3NlbHRhbWl2aXIubWQ
---

# MedQA US 임상문제

## 문제

의사는 환자에게 인플루엔자 백신을 맞으라고 권고했다. 환자는 긴장하며 달걀 알레르기가 있어 지금까지 인플루엔자 예방접종을 한 적이 없다고 말한다. 수년 전 스크램블드에그를 먹은 뒤 두드러기가 생겨 알레르기를 진단받았다. 다음 중 가장 적절한 처치는?

## 선택지

A. 불활화 인플루엔자 백신 투여
B. 인플루엔자 면역글로불린 투여
C. 추가 조치 없이 진료 종료
D. 응급 시 사용할 오셀타미비르 처방

## 해설


달걀 알레르기만으로 인플루엔자 백신을 피할 필요는 없다. 연령·건강상태에 맞는 백신을 사용할 수 있어 A가 적절하다. 과거 인플루엔자 백신 자체에 대한 중증 반응이나 다른 성분 금기는 별도로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-009932`와 직접 대조했다.
- 판정: 달걀 알레르기만으로 인플루엔자 접종을 미루지 않는 A 유지. 불활화만 안전하다는 오해 방지 및 다른 금기 구별.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/flu/vaccines/egg-allergies.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009932
