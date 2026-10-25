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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9SaXZhcm94YWJhbi5tZA
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9FdGhpbnlsZXN0cmFkaW9sLm1k
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 여성이 피임 방법의 여러 선택지를 상담하기 위해 내원했다. 과거력으로 고혈압, 윌슨병 및 변비 우세형 과민성장증후군이 있다. 리바록사반과 폴리에틸렌글리콜을 복용한다. 혈압은 152/98 mm Hg이다. 신체진찰에서 의식은 명료하고 지남력은 정상이다. 심장 청진에서 규칙적인 속도와 리듬이 들리며 심잡음은 없다. 양쪽 폐는 천명음 없이 깨끗하게 청진된다. 마지막 월경 첫날은 12일 전이었고 소변 hCG는 음성이다. 병력과 신체진찰을 고려할 때 다음 중 가장 적절한 피임 방법은?

## 선택지

A. 레보노르게스트렐
B. 에티닐에스트라디올
C. 구리 자궁내장치
D. 데포 메드록시프로게스테론 아세테이트

## 해설

혈압 152/98에서 에스트로겐 포함 피임은 불리하며 윌슨병에서는 구리 IUD를 피한다. 리바록사반 사용 맥락도 확인해야 한다. 제시된 LNG(A)를 장기 피임용 프로게스틴 방법으로 해석하면 적절하지만 제형이 명시되지 않아 실제 처방에는 IUD 등 방법을 구체화해야 한다. 응급피임 LNG 한 번 복용으로 지속 피임을 대신하는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 윌슨병 자체를 혈전 위험으로 묶은 설명 수정 및 LNG 제형 한계 명시.
- https://www.cdc.gov/mmwr/volumes/73/rr/rr7304a1.htm/
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/018680Orig1s074lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006278
