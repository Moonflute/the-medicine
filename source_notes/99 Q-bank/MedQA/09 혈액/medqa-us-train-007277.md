---
type: qbank
schema_version: 1
id: medqa-us-train-007277
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ff6e23f7dba25f069009d320097c06647ad430160e479bae1109643a2d9d4ec6
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "베타 지중해빈혈 보인자"
  - "표적세포"
  - "경미한 소구성 빈혈"
  - "안심"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yngOykke2VtCDruYjtmIggKFRoYWxhc3NlbWlhKS5tZA
question_type: management
difficulty: complex
answer: C
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

4세 남아가 일주일 전 남아프리카공화국에서 가족을 방문하고 돌아온 뒤 피로해져 부모와 함께 내원했다. 귀국 다음 날부터 3일 동안 발열, 오한, 전신 관절통이 있었고 아세트아미노펜으로 호전되었다. 만삭으로 태어났고 건강했으며 예방접종은 최신 상태이다. 체온은 37.6°C(99.68°F), 맥박 100회/분, 혈압 100/60 mmHg이다. 결막이 창백하고 나머지 진찰은 정상이다. 검사에서 헤모글로빈 10.8 g/dL, 평균 적혈구 용적 68 µm³, 적혈구분포폭 14%(정상 13~15%), 헤모글로빈 A2 6%(정상 <3.5%)이다. 말초혈액도말에서 소구성 저색소성 적혈구와 중앙에 진하게 염색된 부분 및 주변 테두리, 그 사이의 창백한 고리가 있는 세포들이 보인다. 다음 중 가장 적절한 치료 단계는 무엇인가?

## 선택지

A. 엽산 치료
B. 경구 석시머
C. 안심시키기
D. 철분 보충

## 해설


HbA2 6%·소구성·정상 RDW와 경한 빈혈은 beta-thal trait에 부합하여 자체에는 설명/안심 C가 적절하며 결핍 확인 없이 철을 투여하지 않는다. 유전 상담도 고려한다. 다만 남아공 방문 뒤 발열·오한은 trait가 원인이 아니므로 여행 장소·노출과 지속/재발 증상에 따라 malaria 등 감염을 따로 평가해야 한다. 안심은 보인자 상태에 대한 판단이지 여행 후 발열을 무시하는 지시가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007277 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: beta-thal trait 자체의 안심 C 유지; 귀국 후 발열을 모두 보인자로 설명해 무시하지 않도록 분리.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.nhs.uk/conditions/thalassaemia/carriers/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007277
