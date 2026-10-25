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

25세 여성이 한 달 동안 이른 아침에 주 2~3회 발생하는 간헐적 흉통으로 진료를 받으러 왔다. 흡연하지 않고 이전에 흉통을 겪은 적도 없으며 조기 심근경색 가족력도 없다. 12유도 심전도와 CK, 트로포닌 I는 정상이다. 다음 중 양성일 가능성이 가장 높은 검사는?

## 선택지

A. 에르고노빈 유발검사
B. 즉시 심전도 반복
C. 운동부하검사
D. 케르 징후

## 해설

이른 아침 안정 시 반복되는 흉통은 혈관연축성 협심증을 의심하게 한다. A의 에르고노빈 유발검사에서 관상동맥 연축이 유도될 수 있다. 아세틸콜린도 별도의 유발 약제이지만 같은 약물은 아니다. 실제 검사는 위험도 평가 후 숙련된 기관에서 감시하에 시행하며, 발작 사이의 정상 ECG와 효소만으로 진단이 확정되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 에르고노빈과 아세틸콜린을 동일 약물로 표현한 오류를 구별하고 전문기관 유발검사임을 명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001168

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000332
