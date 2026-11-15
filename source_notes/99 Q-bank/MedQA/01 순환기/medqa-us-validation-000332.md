---
type: qbank
schema_version: 1
id: medqa-us-validation-000332
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:f4b9b8d28bd894489e433267190b4867a069eaa21bdd5540a65474fc92376076
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "변이형 협심증"
  - "관상동맥 혈관연축"
  - "에르고노빈 검사"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzgOydtO2YlSDtmJHsi6zspp0gKFZhcmlhbnQgQW5naW5hKS5tZA
question_type: investigation
difficulty: simple
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

25세 여성이 한 달째 새벽에 10분가량 지속되는 안정 시 흉통을 반복해서 경험한다. 발작 사이 심전도와 트로포닌은 정상이다. 최근 야간 관찰 중 평소와 같은 통증이 다시 시작됐다. 관상동맥 연축이 의심될 때 이 순간 가장 먼저 도움이 되는 검사는?

## 선택지

A. 통증 중 12유도 심전도 기록
B. 통증이 사라진 다음 날 안정 심전도만 기록
C. 즉시 운동부하검사
D. 폐기능검사

## 해설

혈관연축에 따른 ST분절 변화는 발작 때만 나타날 수 있다. 통증 중 12유도 심전도를 기록하는 것이 우선이다. 지속되는 허혈 변화는 급성 관상동맥증후군 경로로 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 에르고노빈과 아세틸콜린을 동일 약물로 표현한 오류를 구별하고 전문기관 유발검사임을 명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001168

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000332
- ESC 만성 관상동맥증후군 진료지침(2024): https://doi.org/10.1093/eurheartj/ehae177
