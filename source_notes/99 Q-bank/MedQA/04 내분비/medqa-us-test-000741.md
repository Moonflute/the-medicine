---
type: qbank
schema_version: 1
id: medqa-us-test-000741
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:aae951c7af95e4a338f13d8fe28b9c119539c8449a33fdcfcff1c2c4342e39e5
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "소모기 현상"
  - "야간 저혈당"
  - "인슐린 과다"
related_disease_slugs:
  - MDQg64K067aE67mEL-yGjOuqqOq4sCDtmITsg4EgKFNvbW9neWkgUGhlbm9tZW5vbikubWQ
question_type: management
difficulty: simple
answer: D
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

제1형 당뇨병으로 인슐린을 복용하는 42세 남성이 추적 진료를 받으러 왔다. 자다가 자주 깨며 깰 때 심한 발한, 손 떨림, 쇠약을 느낀다. 반복 측정한 아침 혈당은 높았다. 가장 적절한 처치는?

## 선택지

A. 안심시킨다
B. 프람린타이드를 추가한다
C. 하루 인슐린 용량을 늘린다
D. 하루 인슐린 용량을 줄인다

## 해설

정답은 D이다. 밤중 발한·손떨림·쇠약은 인슐린 관련 야간 저혈당을 의심하게 한다. 선택지 중 단순 증량이나 추가 혈당강하제보다 저혈당 위험을 줄이도록 인슐린을 감량·재조정하는 D가 적합하다. 다만 아침 고혈당 자체가 반동성 고혈당을 입증하지는 않는다. 야간 혈당 측정 또는 CGM으로 실제 저혈당과 시간대를 확인하고 기저/저녁 인슐린 등 원인 용량을 조정하며, 모든 일일 인슐린을 일률적으로 줄이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아침 고혈당만으로 야간 과량 인슐린을 확정하지 않고 야간 저혈당 확인 및 해당 용량 재평가를 설명.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000741
