---
type: qbank
schema_version: 1
id: medqa-us-train-004804
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:115f685dd0b4b9d3a2dbede2d08ea9f794edf0c769a89f6143fb73d1d89aa3e4
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "항정신병약 유발 정좌불능"
  - "아리피프라졸"
  - "프로프라놀롤 치료"
  - "Schizophrenia"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

아리피프라졸을 증량한 뒤 환청은 줄었지만 환자가 ‘몸 안이 안절부절해서 앉아 있을 수 없다’며 계속 서성인다. 의식은 명료하고 체온은 정상이다. 가장 적절한 다음 조치는?

## 선택지

A. 정신병이 다시 악화됐다고 보고 아리피프라졸을 더 늘린다
B. 지연성 운동이상증으로 판단해 곧바로 발베나진을 시작한다
C. 약물 유발 정좌불능을 의심해 아리피프라졸의 감량·변경 가능성을 검토한다
D. 하지불안증후군으로 판단해 도파민 효능제를 시작한다

## 해설

정좌불능은 몸 안의 불편한 안절부절못함과 반복해서 움직이는 행동이 특징이다. 항정신병약 시작·증량 뒤 생겼다면 원인 약을 검토한다. 지속되면 금기를 확인하고 프로프라놀롤 등을 고려할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004804
- https://pubmed.ncbi.nlm.nih.gov/29685069/

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정좌불능을 일반 불안으로 단순화한 해설 수정. 프로프라놀롤 원정답 유지하면서 파록세틴의 CYP2D6 억제-아리피프라졸 노출 증가도 평가하도록 명시.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=bf3cf835-4c4e-47cb-be9c-bcb7c2e11cbe&type=pdf
