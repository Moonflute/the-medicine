---
type: qbank
schema_version: 1
id: medqa-us-validation-001055
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:82a363dd822007946cb24fc5aba6f1e9e08a08ae5246f37954f830cdde84bd02
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "프리드라이히 운동실조"
  - "GAA 반복 확장"
  - "척수소뇌성 변성"
  - "Friedreich ataxia"
question_type: mechanism
related_disease_slugs: []
difficulty: simple
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

17세 여아가 9세부터 시작된 보행 곤란, 운동실조와 잦은 넘어짐이 점차 악화되어 휠체어를 타고 왔다. 심한 실조성 보행, 안진, 심부건반사 소실과 진동·고유수용감각 소실이 있다. 이 유전질환의 가장 가능성 높은 유전적 병태생리는?

## 선택지

A. GAA 삼염기 반복
B. 미토콘드리아 DNA 돌연변이
C. NOTCH3 돌연변이
D. PMP22 유전자 중복

## 해설

소아기에 시작한 진행성 실조, 심부건반사 소실과 후주 감각저하는 Friedreich 운동실조를 시사한다. 흔한 유전적 원인은 FXN 유전자의 GAA 삼염기 반복 확장(A)으로 frataxin 발현이 감소하는 것이다. GAA라는 별도 유전자의 반복이나 alanine-glutamate transaminase 결핍으로 설명하는 것은 잘못이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Friedreich 실조의 GAA 반복을 GAA 유전자/전이효소 결핍으로 설명한 오류 교정.
- 공식/학회 근거: https://medlineplus.gov/download/genetics/condition/friedreich-ataxia.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001055
