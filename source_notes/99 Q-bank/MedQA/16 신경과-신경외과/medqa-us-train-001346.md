---
type: qbank
schema_version: 1
id: medqa-us-train-001346
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6b622ea37af9d735b65249b87ccfa15ec57d5796d65477535eb7151365f976c
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "brain death"
  - "brainstem reflexes"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsgqwgKEJyYWluIGRlYXRoKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

22세 남성이 자동차 사고 1시간 후 구급차로 응급실에 이송되었다. 현장에서 순환기 소생술은 필요하지 않았지만 반응이 없어 삽관되었다. 중증 질환 병력은 없다. 진정제 없이 인공호흡기를 사용 중이다. 혈압은 121/62 mm Hg, 맥박은 68회/분, 체온은 36.5°C (97.7°F)이다. 글래스고 혼수척도(GCS)는 3점이다. 초기 검사실 결과는 정상이다. 주 장기기증 등록부를 확인하니 장기기증자로 등록되어 있었다. 다음 중 평가의 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 무호흡 검사
B. 뇌혈관조영술
C. 뇌파검사
D. 뇌간 반사 평가

## 해설

제시된 다음 평가로 뇌간반사를 포함한 신경학적 진찰(D)이 적절하다. 그러나 GCS3 또는 장기기증등록 자체는 뇌사의 증거가 아니다. 뇌사판정은 알려진 파괴적 뇌손상의 영구성, 약물·체온·대사교란 배제 등 전제가 충족되어야 하며, 이 사고1시간후 정보만으로 뇌사판정 준비가 완료되었다고 단정할 수 없다. 무호흡검사나 보조검사도 적응/안전전제를 충족한 뒤 시행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. GCS3/사고1시간/기증등록만으로 뇌사평가를 자동시작하는 해설 완화. 임상신경평가 D와 뇌사전제 구분.
- 공식/학회 근거: https://www.neurology.org/doi/10.1212/WNL.0000000000207740

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001346
