---
type: qbank
schema_version: 1
id: medqa-us-train-004757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52854f8536b50dd5642b6c28781d146ea3ef5e51a2b7969ee696a7784b83fc8a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "알약 유발 식도염"
  - "알렌드로네이트 식도염"
  - "흉통"
  - "Pill-induced esophagitis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rtoDsi50g7Iud64-E7Je8IChDb3Jyb3NpdmUgRXNvcGhhZ2l0aXMpLm1k
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9BbGVuZHJvbmF0ZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2hsb3JvcXVpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

알렌드로네이트를 물 한 모금과 함께 먹고 바로 누운 32세 여성이 이튿날부터 삼킬 때 가슴이 아프다. 내시경에서 식도 중간부에 경계가 뚜렷한 궤양이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 역류성 식도염
B. 칸디다 식도염
C. 호산구성 식도염
D. 알약 유발 식도염

## 해설

적은 물과 함께 알렌드로네이트를 먹은 뒤 바로 누우면 약이 식도에 머물러 국소 궤양을 일으킬 수 있다. 원인 약을 중단하고 손상을 평가한다. 부적절한 복용 직후의 연하통과 중부 식도 병변이 역류와 구별되는 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Alendronate 복용 식도염 D 해설의 무관한 naloxegol 연결을 제거.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=14e931fd-2c5f-4d90-b7db-5980706f4a56

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004757
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=815a87c4-e489-4eb9-9a2e-fb7a16642f01
