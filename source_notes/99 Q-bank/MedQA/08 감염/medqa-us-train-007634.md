---
type: qbank
schema_version: 1
id: medqa-us-train-007634
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:628866fa1509b8208dc1e651aa5f7ebf2939be3b4e6fb180461ad274194d2784
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "크립토스포리디움증"
  - "HIV 감염"
  - "CD4 감소"
  - "만성 물 설사"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: diagnosis
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

48세 남자가 수 주 동안 지속된 물 설사와 발열을 동반한 오른쪽 상복부 통증으로 내원했다. 권태감, 오심, 식욕부진도 있다. HIV 양성으로 항레트로바이러스 치료 중이지만 약을 잘 복용하지 않는다. 체온은 37°C(98.6°F), 호흡수 15회/분, 맥박 70회/분, 혈압 100/84 mmHg이다. 신체검사는 정상이다. 혈액검사에서 헤모글로빈 11 g/dL, 백혈구 수 3,400/mm³, 호중구 70%, 림프구 25%, 단핵구 5%, CD4+ 세포 수 88/mm³이다. 대변 현미경검사는 진행 중이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 크립토스포리디움증
B. 과민성 장 증후군
C. 노로바이러스 감염
D. ETEC에 의한 여행자 설사

## 해설


CD4 88/µL와 지속적인 물설사·복통은 선택지 중 cryptosporidiosis A에 가장 부합한다. 진행 면역저하에서는 담도 침범으로 우상복부 증상이 생길 수도 있다. 다만 현재 체중감소는 본문에 없고 병원체 검사도 대기 중이므로 임의 추가하거나 확진되었다고 하지 않는다. 대변의 적절한 항원/분자/염색 검사로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007634 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 없는 체중감소를 추가한 해설 교정; advanced HIV watery diarrhea/RUQ의 Crypto A 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007634
