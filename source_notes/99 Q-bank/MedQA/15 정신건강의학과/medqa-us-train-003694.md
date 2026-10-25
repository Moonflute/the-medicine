---
type: qbank
schema_version: 1
id: medqa-us-train-003694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f6edfd1be8a3ea9d32769c1aea94d6a6bc19df9c31309b2fdc66d3c577a7b036
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "acute mania"
  - "bipolar disorder"
  - "renal impairment"
  - "valproate and quetiapine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG96YXBpbmUubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

40세 남성이 공공장소에서 부적절한 행동을 해 경찰에 의해 응급실로 이송되었다. 최근 2주간 하루 3~4시간만 자고 말이 빨라지며 사고가 비약했다. 양극성장애와 당뇨병 병력이 있고 지난 1년간 기분 불안정으로 3회 입원했다. 현재 리튬과 인슐린을 복용하며 혈청 크레아티닌은 2.5 mg/dL였다. 행동에 대한 가장 적절한 다음 치료는?

## 선택지

A. 카바마제핀 단독
B. 클로자핀 단독
C. 리튬과 발프로산
D. 발프로산과 쿠에티아핀

## 해설

현재 리튬을 복용하는데 조증이 재발했고 신기능도 저하되어 리튬 축적·독성 위험을 평가하며 대체 치료를 고려해야 한다. 제시된 선택지 중 발프로산과 쿠에티아핀 조합이 적절하다. 발프로산의 간·혈액학적 부작용과 쿠에티아핀의 진정·기립저혈압·대사 위험을 모니터링해야 하며, 특히 당뇨병이 있는 환자에게 부작용이 적거나 무조건 안전하다고 설명하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003694

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문 현재 리튬·인슐린과 반복 입원 병력을 복원. 신기능 저하에서 대안 병합 선택 유지, 쿠에티아핀 무조건 안전 단정 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b839ff4b-f62d-41ab-a823-550a756d58ec
