---
type: qbank
schema_version: 1
id: medqa-us-train-005244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f91f379324200e2ef756050807dd335a67d77a9a828b06ecd8d8c88cac4541e6
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "급성 천식 악화"
  - "중증 천식 발작"
  - "흡입 알부테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGhlb3BoeWxsaW5lLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 여아가 급성 천식 악화로 응급실에 왔다. 한 문장을 이어 말하기 어렵고 보조근을 쓰며 양쪽 폐에 심한 천명이 있다. 실내 공기 산소포화도는 87%이다. 산소와 전신 스테로이드 치료를 준비하면서 기도를 신속히 확장할 흡입 처치는?

## 선택지

A. 살부타몰을 반복 흡입시키고 중증이므로 이프라트로피움을 병용한다
B. 살메테롤만 한 번 흡입시킨다
C. 흡입 스테로이드만 투여하고 기다린다
D. 테오필린을 경구 투여한다

## 해설

심한 천식 악화에는 속효성 베타₂작용제(살부타몰)를 반복 흡입시키고 이프라트로피움을 병용한다. 산소와 조기 전신 스테로이드도 함께 쓰며, 호흡 노력과 의식, 산소화 악화 여부를 신속히 재평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A와 B를 정답으로 쓴 해설 불일치를 중증악화의 반복 SABA로 교정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005244
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
