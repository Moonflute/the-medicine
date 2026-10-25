---
type: qbank
schema_version: 1
id: medqa-us-train-001281
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d894d6e4b5b5c55db270c1657467e2644f33a376cb4e4ecca7e3767cec060286
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "giardiasis"
  - "waterborne infection"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
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

16세 남성이 최근 캠핑 여행 후 새로 발생한 증상으로 소아과에 내원했다. 친구들과 함께 갔고, 다른 일행 1명도 비슷한 증상을 겪고 있다. 지난 5일 동안 심한 복부 가스, 오심, 기름지고 악취 나는 설사를 호소한다. 뒤무직, 급박변 및 혈성 설사는 없다. 혈압은 118/74 mm Hg, 심박수는 88회/분, 호흡수는 14회/분, 체온은 37.0°C (98.6°F)이다. 신체검사에서 경미하고 광범위한 복부 압통이 있다. 직장 내에 혈액은 없다. 환자는 캠핑 활동에 대해 다음 중 무엇을 보고할 가능성이 가장 높은가?

## 선택지

A. 끓이거나 화학적으로 처리하지 않은 채 개울물을 식수로 사용했다
B. 이 증상이 수개월 동안 지속되었다
C. 유람선 여행 중 부수 활동으로 캠핑했다
D. 멕시코에서 캠핑했다

## 해설


캠핑 뒤 발생한 심한 가스와 기름지고 악취 나는 비혈성 설사는 Giardia 감염을 시사한다. 오염된 미처리 개울물의 낭포를 섭취하는 것이 대표적 노출이므로 A가 가장 타당하다. 갑상선기능·TSH 검사는 이 문항의 설명과 관련이 없다.

## 검수 근거

- 검수일: 2026-10-25. 본문·선택지·정답·해설을 영어 원문 `medqa-us-train-001281`와 직접 대조했다.
- 판정: 캠핑 후 지방변·가스의 Giardia 사례에 TSH 해설이 붙은 명백한 오연결. 미처리 개울물 A 유지 및 원인·전파 해설로 교체.
- 검수 범위: 아래 1차 근거로 해당 쟁점을 확인(evidence-reviewed). 모든 가능한 임상 쟁점의 전면 검증을 뜻하지 않는다.
- https://www.cdc.gov/giardia/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001281
