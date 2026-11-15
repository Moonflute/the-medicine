---
type: qbank
schema_version: 1
id: medqa-us-train-006827
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9de0adf3a15a6c0729b8fdca153cbc6e8fb94a7b49eed6e1cb9bba1062134869
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "급성 췌장염"
  - "알코올성 췌장염"
  - "초기 수액 소생"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_quInshLEg7LeM7J6l7Je8IChBY3V0ZSBQYW5jcmVhdGl0aXMpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EYWJpZ2F0cmFuLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

46세 남성이 급성 췌장염으로 응급실에 왔다. 잦은 구토가 있었고 빈맥, 점막 건조와 핍뇨가 있다. 헤마토크릿과 BUN이 높다. 폐울혈은 없다. 적절한 초기 수액 계획은?

## 선택지

A. 수액 없이 경구 섭취만 유지한다
B. 장기부전을 막기 위해 재평가 없이 대량 수액을 계속한다
C. 포도당 수액만 투여해 혈관 내 용적을 회복한다
D. 젖산 링거액으로 용적을 보충하고 혈압·소변량과 과부하를 재평가한다

## 해설

저혈량 소견이 있는 급성 췌장염에는 등장성 결정질 수액을 투여한다. 젖산 링거액을 우선 고려하고 초기 반응에 따라 투여량을 조절한다. 재평가 없이 공격적으로 수액을 계속하면 과부하가 생길 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 췌장염 D 수액을 무제한보충이 아닌 신기능/과부하 감시하 등장성결정질로 한정.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13221274/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006827
- https://pmc.ncbi.nlm.nih.gov/articles/PMC9840919/
- https://pubmed.ncbi.nlm.nih.gov/38857482/
