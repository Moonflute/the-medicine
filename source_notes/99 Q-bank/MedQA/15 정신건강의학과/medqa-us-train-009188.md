---
type: qbank
schema_version: 1
id: medqa-us-train-009188
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b2d2069a79d7a7b32fbf562fa5561d41a934b9842e07ed1e676b869f7afc7ff4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tardive dyskinesia"
  - "지연성 운동이상증"
  - "metoclopramide"
  - "Tardive dyskinesia"
question_type: risk_factor
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQW1sb2RpcGluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9HYWJhcGVudGluLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

당뇨병성 위마비가 있는 54세 환자에게 반복적으로 입술을 오므리고 혀를 내미는 움직임이 생겼다. 수개월간 처방 약을 유지했다. 어떤 약을 지연성 운동이상증의 원인으로 가장 먼저 검토해야 하는가?

## 선택지

A. 글리메피리드
B. 가바펜틴
C. 판토프라졸
D. 메토클로프라미드

## 해설

메토클로프라미드는 도파민 수용체를 차단하며, 오래 사용하면 지연성 운동이상증 위험이 커진다. 국내 허가사항을 확인하고 원인 약의 중단과 대안을 검토한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009188
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=198800560

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 메토클로프라미드의 TD 위험을 단순히 흔하다고 과장하지 않고 누적 노출·장기 사용과 연결; 장기투여 경고 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2017/017854s062lbl.pdf?ref=1b3p6k
