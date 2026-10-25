---
type: qbank
schema_version: 1
id: medqa-us-train-009900
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8881a2a3400669b62d7b7a88defe72660ddb541098a7549be01930b519398bbd
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "운동 유발 기관지수축"
  - "운동 유발 천식"
  - "알부테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yatOuPmSDsnKDrsJwg7LKc7IudIChFeGVyY2lzZS1JbmR1Y2VkIEFzdGhtYSkubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvTW9udGVsdWthc3QubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 여성이 건강검진을 위해 일차진료의에게 내원했다. 현재는 잘 지내지만 천식 때문에 운동을 할 수 없다고 한다. 평소 천식은 잘 조절되고, 일주일에 한 번 배구 연습에서 운동하려 할 때만 증상이 나타난다. 현재 알부테롤 흡입기를 한 달에 한 번만 사용한다. 폐 진찰에서 양측 공기 유입은 양호하고 천명음은 없다. 다음 중 가장 적절한 처치는?

## 선택지

A. 천식 치료에 흡입 플루티카손 추가
B. 천식 치료에 몬테루카스트 추가
C. 운동 중단 권고
D. 운동 전에 알부테롤 흡입기 사용 권고

## 해설

운동 전에 흡입 알부테롤을 사용하는 D는 운동유발 기관지수축 예방에 도움이 된다. 운동을 일괄적으로 중단할 이유는 없다. 다만 성인 천식의 장기 관리는 SABA만으로 끝내지 않고 ICS 포함 치료를 평가하며, 필요시 ICS/포르모테롤을 쓰는 전략도 있다. 운동 제한이 지속되면 진단, 사용법과 조절 상태를 다시 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 운동 전 알부테롤 D는 유지하되 성인 천식의 장기 SABA 단독치료를 승인하지 않음.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009900
