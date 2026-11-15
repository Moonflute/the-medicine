---
type: qbank
schema_version: 1
id: medqa-us-train-007935
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:442e20d58b0f52bf84a9a4970cd8fb6109c9de5650a436cd8dbad4bd9399dd6a
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "cirrhosis"
  - "hepatocellular carcinoma surveillance"
  - "abdominal ultrasound"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLjtj6zslZQgKEhlcGF0b2NlbGx1bGFyIENhcmNpbm9tYSkubWQ
question_type: prevention
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUmFtaXByaWwubWQ
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
---

# MedQA US 임상문제

## 문제

금주 중인 55세 알코올 관련 간경변 환자의 간 초음파에서 국소 결절은 없고 AFP도 정상이다. 초음파 영상의 질은 충분하다. 국내 지침에 따른 다음 간세포암 감시 계획은?

## 선택지

A. 3개월 뒤 AFP만 검사
B. 6개월 뒤 복부 CT만 시행
C. 6개월 뒤 간 초음파와 혈청 AFP
D. 1년 뒤 간 초음파만 시행

## 해설


간경변 환자는 간세포암 고위험군이다. 국내 지침은 간 초음파와 혈청 AFP를 6개월마다 함께 검사하도록 권고한다. 정상 AFP나 금주로 감시를 중단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007935 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간경변 HCC 감시6개월 초음파 C 유지, AASLD AFP 병행 보완. 원문 vodka1pint를 한잔으로 축소한 오역 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10663390/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007935
- https://doi.org/10.3348/kjr.2022.0822
