---
type: qbank
schema_version: 1
id: medqa-us-train-006278
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d0dcdab3b50cf8614e0ea0d4495dae33ee98b3c43f7cc0c361402bc611b9155
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "피임"
  - "고혈압"
  - "윌슨병"
question_type: prevention
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snIzsiqjrs5EgKFdpbHNvbidzIERpc2Vhc2UpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9FdGhpbnlsZXN0cmFkaW9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 여성이 장기 피임을 원한다. 혈압은 반복 측정에서 165/103 mmHg이고 이전 심부정맥혈전증으로 항응고제를 복용 중이며 월경량이 많다. 임신과 자궁내장치 금기는 없다. 적절한 피임법은?

## 선택지

A. 에스트로겐·프로게스틴 복합 경구피임약
B. 레보노르게스트렐 자궁내장치
C. 에스트로겐이 포함된 피임 패치
D. 고용량 에스트로겐 단독

## 해설

중증 고혈압과 혈전 병력에선 에스트로겐 포함 피임을 피한다. 레보노르게스트렐 자궁내장치는 장기 피임에 쓸 수 있고 항응고 치료 중 많은 월경량을 줄이는 데도 도움이 될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 윌슨병 자체를 혈전 위험으로 묶은 설명 수정 및 LNG 제형 한계 명시.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018680Orig1s074lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006278
- https://www.cdc.gov/contraception/hcp/usmec/intrauterine-devices.html
- https://www.cdc.gov/contraception/hcp/usmec/combined-hormonal-contraceptives.html
