---
type: qbank
schema_version: 1
id: medqa-us-train-008096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:044c0e8b1c56889cc747a7b4a6f74ac3b2f43955f688e5090a9b43545b0bc0a1
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "intrauterine fetal demise"
  - "second-trimester fetal death"
  - "labor induction"
  - "Intrauterine fetal death"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 28주 산모에게 자궁내 태아사망이 확인됐다. 산모는 안정적이며 이전 자궁 수술은 없고 질식분만 금기도 없다. 아기를 만나고 부검도 원한다. 함께 상의할 분만 방법은?

## 선택지

A. 태아사망만을 이유로 제왕절개가 필수
B. 산모에게 알리지 않고 처치 방법을 결정
C. 산모 상태 평가 없이 자연 배출까지 무기한 대기
D. 산모의 선호와 임신 주수에 맞춰 질식 유도분만을 계획

## 해설

태아사망만을 이유로 제왕절개하지 않는다. 질식분만이 가능하면 유도분만 방법과 시점을 산모와 상의하고, 검사·부검과 정서적 지원 선택지도 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 유도분만과 D&E를 혼동한 해설 수정.
- https://www.acog.org/clinical/clinical-guidance/obstetric-care-consensus/articles/2020/03/management-of-stillbirth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008096
- https://pubmed.ncbi.nlm.nih.gov/39467688/
