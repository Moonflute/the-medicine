---
type: qbank
schema_version: 1
id: medqa-us-train-005981
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b136985a1b1142b5e5adf6e819ec888d981f9b97d032bab57d18921a0b4f762e
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "뇌정맥동혈전증"
  - "경구피임약 관련 혈전"
  - "달테파린"
question_type: management
related_disease_slugs:
  - MTMg67aA7J246rO8L-qyveq1rO2UvOyehOyVvSAoT3JhbCBDb250cmFjZXB0aXZlcykubWQ
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

36세 여성이 진행하는 두통과 유두부종으로 내원했다. MR 정맥조영술에서 가로정맥동 혈전이 보이고, 영상에 혈전과 관련된 작은 출혈성 정맥경색도 있다. 다른 항응고 금기는 없다. 초기 치료는?

## 선택지

A. 치료 용량의 저분자량헤파린을 시작한다
B. 작은 출혈이 완전히 사라질 때까지 모든 항응고를 미룬다
C. 항응고 대신 아스피린을 시작한다
D. 모든 환자에서 카테터 혈전용해술을 먼저 한다

## 해설

뇌정맥동혈전증의 기본 급성기 치료는 비경구 항응고다. 정맥혈전으로 생긴 출혈성 경색 자체는 일반적으로 항응고 금기가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. CVT 항응고 선택 A는 유지. Dalteparin을 직접 트롬빈 억제제로 분류한 약리 오류 교정.
- 공식/학회 근거: https://www.ahajournals.org/doi/pdf/10.1161/STR.0000000000000456

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005981
- https://pubmed.ncbi.nlm.nih.gov/38284265/
