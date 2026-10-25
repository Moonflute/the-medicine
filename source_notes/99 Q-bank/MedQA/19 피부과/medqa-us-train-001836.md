---
type: qbank
schema_version: 1
id: medqa-us-train-001836
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f28f287d81e722146d96c5bbaf0f58e1c5ae7adc131bacd728c442ae97b5bdc9
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "Stevens-Johnson syndrome"
  - "toxic epidermal necrolysis"
  - "trimethoprim-sulfamethoxazole"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvU3VsZmFtZXRob3hhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVHJpbWV0aG9wcmltLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 5일간의 발진, 구강 병변 및 시야 문제로 내원했다. 얼굴과 상체의 화끈거림으로 시작해 같은 부위에 붉은 반점이 생겼고 점점 커져 상지로 퍼졌다. 병변은 아프지만 가렵지는 않다. 발진과 비슷한 시기에 통증성 구강 병변이 나타났고 최근 3일간 복시와 건조하고 가려운 눈이 있다. 가벼운 상기도 감염 후 증상이 시작되었으며 3주 전 중증 요로감염으로 trimethoprim-sulfamethoxazole을 복용 중이다. 체온 38.3℃ (101.0℉), 혈압 110/60 mm Hg, 호흡 20/min, 맥박 108/min이다. 심한 구강점막 미란과 상체·상지 신전면에 지름 약 3 mm의 수포와 물집, 홍반성 고리가 있으며 일부는 터져 표피가 벗겨졌다. 결막충혈과 양측 각막 찰과상이 있다. 백혈구 8,500/mm3, 적혈구 4.20 x 106/mm3, 헤마토크릿 41.5%, 혈색소 14.0 g/dL, 혈소판 215,000/mm3, CRP 86 mg/L이다. 다음 중 가장 가능성 높은 진단을 확진할 소견은 무엇인가?

## 선택지

A. 피부 검체의 그람염색과 배양
B. 피부 병변 생검 및 조직병리검사
C. 병변 주변 피부 생검의 직접 면역형광검사
D. 유세포분석

## 해설

TMP-SMX 노출 뒤 통증성 피부 병변과 구강·안구 침범은 SJS/TEN을 의심하게 한다. 선지 중 병변 생검 및 조직병리검사(B)가 표피 괴사와 표피-진피 분리를 확인하고 유사 질환을 감별하는 데 가장 적절하다. 임상 경과·약물력·피부 소견과 함께 해석하며, 직접면역형광은 면역성 수포질환 감별에 유용하다. 박리 면적이 제시되지 않아 SJS/TEN 세부 등급은 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. SJS/TEN 의심에서 병변 조직검사 B를 유지하되 병리검사만으로 확진을 전적으로 결정한다는 표현을 제한한다.
- 공식/학회 근거: https://academic.oup.com/bjd/article/174/6/1194/6617016?login=false

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001836
