---
type: qbank
schema_version: 1
id: medqa-us-train-003143
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:874d4a454d69d370c78614ec528fdd196802fc8747fdad0d5927ee034ed88713
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "vitamin K deficiency bleeding"
  - "newborn prophylaxis"
  - "exclusive breastfeeding"
  - "late vitamin K deficiency"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEsg6rKw7ZWN7KadIChWaXRhbWluIEsgRGVmaWNpZW5jeSkubWQ
difficulty: standard
answer: A
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

생후 5주 영아가 갑자기 멍이 들고 혈변을 봤다. 출생 때 비타민 K 주사를 받지 않았고 완전 모유수유 중이다. 혈소판 수와 피브리노겐은 정상이나 프로트롬빈시간이 크게 늘어났다. 가장 가능성 높은 진단은?

## 선택지

A. 후기 비타민 K 결핍 출혈
B. 면역성 혈소판감소증
C. 혈우병 A
D. 파종성 혈관내 응고

## 해설

예방 주사를 받지 않은 영아의 출혈과 뚜렷한 프로트롬빈시간 연장은 후기 비타민 K 결핍 출혈을 시사한다. 두개내 출혈도 가능해 응급 평가와 치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 가정분만 자체를 비타민 K 미투여의 확정 증거로 삼지 않으면서 실제 예방 여부가 출혈 위험 판단의 핵심임을 분리했다.
- https://www.cdc.gov/breastfeeding-special-circumstances/hcp/diet-micronutrients/vitamin-k.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003143
- https://doi.org/10.1542/peds.2021-056036
