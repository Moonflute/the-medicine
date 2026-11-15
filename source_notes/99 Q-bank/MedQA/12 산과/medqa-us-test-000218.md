---
type: qbank
schema_version: 1
id: medqa-us-test-000218
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:81a32114701a6a10e5a31fc09580a1965379ed86a9d6370da1248f0da3c2e396
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "계류유산"
  - "불완전 유산"
  - "임신 초기 유산"
related_disease_slugs:
  - MTIg7IKw6rO8L-qzhOulmCDsnKDsgrAgKE1pc3NlZCBBYm9ydGlvbikubWQ
  - MTIg7IKw6rO8L-u2iOyZhOyghCDsnKDsgrAgKEluY29tcGxldGUgQWJvcnRpb24pLm1k
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 11주 여성이 많은 질출혈로 내원했다. 자궁내 태아 심박동은 없고 자궁경부가 열려 있다. 혈압은 84/53 mmHg, 맥박은 123회/분이다. 혈액제제 준비와 소생을 하면서 할 처치는?

## 선택지

A. 응급 흡인술로 자궁내용물을 제거한다
B. 외래에서 미소프로스톨을 복용하고 집에서 기다린다
C. 임신 조직이 저절로 나올 때까지 관찰한다
D. 메토트렉세이트를 투여한다

## 해설

혈역학적으로 불안정한 초기 유산은 출혈을 조절하기 위해 신속히 수술적으로 자궁내용물을 제거한다. 안정적일 때 논의할 수 있는 기대·약물 치료 때문에 응급 조치를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 불완전유산=계류유산 혼동 수정, 저혈압·빈맥에서 소생과 신속 자궁내용물 제거 C의 이유 명시.
- https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000218
- https://doi.org/10.1097/AOG.0000000000002899
