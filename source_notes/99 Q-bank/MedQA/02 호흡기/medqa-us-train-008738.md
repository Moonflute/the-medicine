---
type: qbank
schema_version: 1
id: medqa-us-train-008738
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4199442dc91e357d4fa311fdd02b600b196d110f8566fe73cd60c6f49e73064
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "bronchopulmonary dysplasia"
  - "prematurity"
  - "chronic lung disease of prematurity"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2YuO2doeq4sOyEuO2PrOycte2VqeuwlOydtOufrOyKpCDqsJDsl7wgKFJlc3BpcmF0b3J5IFN5bmN5dGlhbCBWaXJ1cyBJbmZlY3Rpb24pLm1k
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 26주에 태어난 남아가 출생 후 한 달 동안 기계환기를 받았다. 감염이나 새로운 심장 이상은 없지만 월경후연령 36주가 된 지금도 비강 지속적 양압과 산소가 필요하다. 미숙아의 지속적인 호흡 보조 필요를 가장 잘 설명하는 것은?

## 선택지

A. 신생아 일과성 빈호흡
B. 기관지폐이형성증
C. 급성 세기관지염
D. 태변흡인증후군

## 해설


극소 미숙아가 월경후연령 36주에도 호흡 보조가 필요하면 기관지폐이형성증을 고려한다. 신생아 초기의 일과성 호흡곤란보다는 오래 지속되는 경과가 결정적인 단서다. 이 시점의 호흡 보조 방식은 중증도 분류에도 사용된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 26주 미숙아의 5주 이상 산소·환기 의존과 만성 폐변화는 기관지폐이형성증 B와 일치.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008738
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8692520/
