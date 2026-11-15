---
type: qbank
schema_version: 1
id: medqa-us-train-001194
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f5645ea8c19e22f80eb586c011626972d06e6c45f0e2667e987acd4280a761d
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases: []
related_disease_slugs: []
question_type: prevention
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신을 준비하는 24세 여성이다. 신경관결손 임신력이나 항경련제 복용 등 고위험 요인은 없다. 신경관결손 예방을 위해 임신 전부터 권할 것은?

## 선택지

A. 철분 60 mg/일
B. 엽산 400 μg/일
C. 비타민 B12 500 μg/일
D. 고위험군에 쓰는 고용량 엽산을 일률적으로 복용

## 해설

평균위험군은 보통 임신 최소 1개월 전부터 엽산 400 μg/일을 복용하고 임신 초기에 계속한다. 이전 신경관결손 임신 등 고위험군은 별도로 용량을 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 엽산 권고는 유지하되 다른 보충제는 필요 없다는 일괄 단정 삭제.
- https://www.cdc.gov/folic-acid/about/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001194
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=7019
- https://www.cdc.gov/folic-acid/hcp/clinical-overview/
