---
type: qbank
schema_version: 1
id: medqa-us-train-009221
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8e1872a25c5a67c1d7789fce8a9d2fbef2132d683bd1b6c59036b55b8940c842
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "tricyclic antidepressant"
  - "삼환계 항우울제"
  - "anticholinergic effects"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9NaXJ0YXphcGluZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

68세 남자가 1주일 동안 지속된 요폐로 내원했다. 우울증 치료를 위해 새 약을 처방받은 직후 증상이 서서히 시작되었다고 한다. 호전될까 하여 수분 섭취를 늘렸지만 효과가 없었다. 변비와 입마름도 있다. 6개월 전 주요우울장애를 진단받았고 흡연, 음주, 기분전환용 약물 사용은 부인한다. 열은 없고 활력징후는 정상이며 신체검사도 특이사항이 없다. 소변검사는 정상이다. 우울증에 어떤 약물을 처방받았을 가능성이 가장 큰가?

## 선택지

A. 페넬진
B. 미르타자핀
C. 아미트립틸린
D. 벤라팍신

## 해설

새 약물 후의 요폐·변비·구강건조는 항콜린성 부작용 양상이며 제시된 선택지 중 삼환계 항우울제 아미트립틸린이 가장 적절하다. 정상 소변검사만으로 구조적 폐쇄 등 다른 요폐 원인이 배제되거나 기능성으로 확정되지 않는다. 페넬진도 우울증에 사용하는 MAOI이므로 항우울 치료에 쓰이지 않는다는 기존 설명은 잘못이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009221

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정상 소변검사로 기능성 요폐라 확정하고 페넬진이 항우울제가 아니라고 한 오류 교정. 아미트립틸린 항콜린 정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=7cc62309-cb23-4888-afba-bb774658a748&type=display
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=513a41d0-37d4-4355-8a6d-a2c643bce6fa
