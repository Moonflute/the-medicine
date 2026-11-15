---
type: qbank
schema_version: 1
id: medqa-us-train-007594
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:181c7b156f8b9916654172c029f87b6128060b26ea64e6bb307ef14773dc8bea
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "호모시스틴뇨증"
  - "마르팡 유사 체형"
  - "혈전색전증"
  - "혈청 호모시스테인"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIOuwjyDtj5Dsg4nsoITspp0gKERlZXAgVmVpbiBUaHJvbWJvc2lzIGFuZCBQdWxtb25hcnkgRW1ib2xpc20pLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

30세 남성이 폐색전증 진단을 받고 치료 중이다. 어릴 때 수정체 탈구가 있었으며 키가 크고 학습장애가 있었다. 호모시스틴뇨증을 평가할 우선 검사는?

## 선택지

A. 혈청 항핵항체
B. 혈청 크레아틴키나아제
C. 혈청 칼시토닌
D. 혈장 총 호모시스테인

## 해설


수정체 탈구, 마르팡 유사 체형과 이른 나이의 혈전이 겹치면 호모시스틴뇨증을 의심한다. 혈장 총 호모시스테인과 관련 대사검사로 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007594 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 관절통으로 오해한 다리 종창/혈전 위험을 homocystinuria D에 연결; 기저질환 검사가 급성 PE 평가 대체하지 않음.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.medlineplus.gov/genetics/condition/homocystinuria/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007594
- https://pubmed.ncbi.nlm.nih.gov/27778219/
