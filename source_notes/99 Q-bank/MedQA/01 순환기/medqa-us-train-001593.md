---
type: qbank
schema_version: 1
id: medqa-us-train-001593
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:43841bbeed1d89a28a6a4dfeca05dcefb2aec6a6da813d45c5a4d501e0f86ee3
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cholesterol embolization syndrome"
  - "blue toe syndrome"
  - "acute kidney injury"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
question_type: diagnosis
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

관상동맥조영술을 받은 지 일주일 뒤 68세 여성의 양쪽 발가락에 통증을 동반한 청자색 반점이 생겼다. 발등동맥은 양쪽 모두 만져지지만 혈청 크레아티닌은 계속 오르고 있다. 두 소견을 함께 설명하는 원인은?

## 선택지

A. 콜레스테롤 결정에 의한 소동맥 색전
B. 조영제 관련 급성 신손상
C. 대동맥 분지부의 급성 혈전 폐색
D. 급성 약물 유발 간질성 신염

## 해설


혈관 시술 뒤 원위부 맥박이 보존된 청색 발가락과 신기능 악화가 함께 나타나면 콜레스테롤 색전을 의심한다. 죽상경화반에서 떨어진 결정이 피부와 콩팥의 작은 동맥을 막는다. 조영제 관련 신손상만으로는 발가락의 색전 소견을 설명하기 어렵다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 도관술 뒤 양측 blue toe인데 큰 동맥맥박은 유지되어 콜레스테롤 미세색전 의심. 동반 신색전에 의한 AKI A 위험 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001593
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7981600/
