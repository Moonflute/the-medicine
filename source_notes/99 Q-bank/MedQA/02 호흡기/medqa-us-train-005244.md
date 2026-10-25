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

12세 여아가 20분 전 시작된 심한 호흡곤란으로 응급실에 왔다. 중등도 용량 흡입 코르티코스테로이드와 베타작용제 흡입기를 사용 중이지만 호전되지 않는다. 보조근을 사용하고 산소포화도는 87%이며 모든 폐야에 심한 호기성 천명이 있다. 100% 산소를 비재호흡 마스크로 투여하고 동맥혈가스를 채취했다. 다음 중 가장 적절한 다음 단계는?

## 선택지

A. 흡입 알부테롤
B. 정맥 코르티코스테로이드
C. 흡입 이프라트로피움 브로마이드
D. 흡입 테오필린

## 해설

산소와 함께 반복/집중 흡입 albuterol A를 신속 시행한다. 가정에서 한번 흡입했어도 적절한 용량·전달 방식의 응급 SABA를 생략하지 않는다. 중증에서는 ipratropium·조기 전신 steroid도 병행하지만 steroid가 즉각 기관지확장제를 대신하지 않는다. 산소화·환기·피로를 감시한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 A와 B를 정답으로 쓴 해설 불일치를 중증악화의 반복 SABA로 교정.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005244
