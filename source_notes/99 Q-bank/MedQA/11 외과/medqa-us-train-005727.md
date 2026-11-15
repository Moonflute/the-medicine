---
type: qbank
schema_version: 1
id: medqa-us-train-005727
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8367ff14e483d575501e88b0eeb9938cdbfa71d7de63765225fea492e475e9ff
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복부 대동맥류"
  - "주머니 모양 대동맥류"
  - "혈관 내 동맥류 복원술"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uzteu2gCDrjIDrj5nrp6XrpZggKEFiZG9taW5hbCBBb3J0aWMgQW5ldXJ5c20pLm1k
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
---

# MedQA US 임상문제

## 문제

72세 여성의 신장동맥 아래 복부 대동맥류가 1년 사이 3.8 cm에서 4.9 cm로 커졌다. 초음파에서 낭상 형태이며 지금 증상은 없다. 다음 계획은?

## 선택지

A. 1년 뒤 초음파만 반복
B. 크기가 5.5 cm 미만이므로 추가 평가 없이 관찰
C. 신속히 혈관외과에 의뢰해 해부학과 조기 복구 가능성을 평가
D. 해부학 확인 없이 바로 혈관내 복구술을 예약

## 해설


낭상 형태와 빠른 성장은 절대 직경만 보고 기다릴 상황이 아니다. 대한혈관외과학회는 낭상 복부 대동맥류에서 조기 복구를 고려하도록 한다. 정확한 크기와 해부학을 확인하고 혈관내 치료와 개방술 중 적절한 방법을 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005727 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 4.9cm를5cm 이상이라고 바꾼 오류를 제거하고 빠른 성장·낭상 형태 및 수술 전 해부평가를 근거로 설명했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://esvs.org/wp-content/uploads/2024/02/ESVS-2024-AAA-Guidelines.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005727
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12775968/
