---
type: qbank
schema_version: 1
id: medqa-us-test-000496
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:697083720a38972e6c2d393d2e0d94ac5f7dcb2a352db34fb1179322a133d38f
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "타목시펜"
  - "유방암"
  - "심부정맥혈전증"
related_disease_slugs:
  - MTMg67aA7J246rO8L-ycoOuwqeyVlCAoQnJlYXN0IENhbmNlcikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

55세 폐경 후 여성이 ER 양성·HER2 음성 조기 유방암 수술을 마쳤다. 폐색전증 병력이 있고 골밀도는 정상이다. 보조 내분비치료로 가장 적절한 약은?

## 선택지

A. 타목시펜
B. 고세렐린 단독
C. 트라스투주맙
D. 레트로졸

## 해설


폐경 후 ER 양성 유방암에는 레트로졸 같은 아로마타제 억제제를 사용할 수 있다. 타목시펜은 정맥혈전색전증 위험을 높이므로 이 환자에서는 아로마타제 억제제를 우선한다. 치료 중 골 건강도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000496 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: tamoxifen의 VTE 위험 A 유지. 단순 에스트로겐 억제제로 부른 기전을 SERM으로 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/about-cancer/treatment/drugs/tamoxifencitrate

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000496
- https://doi.org/10.1016/j.esmoop.2024.102974
