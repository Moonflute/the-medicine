---
type: qbank
schema_version: 1
id: medqa-us-test-000838
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9e9fc465b54fad7b344ac1712f845ab3b686d637a785e9b31d451c65ef13bfd6
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간성뇌증"
  - "알코올성 간경변"
  - "TIPS 합병증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITshLEg64eM7KadIChIZXBhdGljIEVuY2VwaGFsb3BhdGh5KS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTGFjdHVsb3NlLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 여성이 간경변으로 경정맥 간내 문맥전신단락술(TIPS)을 받은 한 달 뒤 수면 리듬이 바뀌고 혼돈과 날개떨림이 생겼다. 사흘째 배변이 없고 혈당은 정상이다. 감염이나 출혈 등 유발 요인을 확인하면서 시작할 간성뇌증 치료는?

## 선택지

A. 처음부터 TIPS를 폐쇄한다
B. 수면제를 투여해 수면 리듬을 바꾼다
C. 의식이 회복될 때까지 단백질을 완전히 금지한다
D. 락툴로스를 투여한다

## 해설

TIPS 후 문맥혈이 간을 우회하면서 간성뇌증이 생길 수 있고 변비도 이를 유발한다. 명백한 간성뇌증의 초기 치료로 락툴로스를 사용하고 유발 요인을 교정한다. TIPS 축소는 치료에 반응하지 않는 사례에서 검토한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간성 및 폐성 뇌증이라는 오연결을 간성뇌증으로 교정하고 원문 복부 소견 오역 수정.
- https://doi.org/10.14309/ajg.0000000000003899

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000838
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
