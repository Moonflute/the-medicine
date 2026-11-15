---
type: qbank
schema_version: 1
id: medqa-us-train-004122
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96e8c391c74b28256a63bff0a5abac35b4289e812bb9b4e07dd70203eee7f1ab
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "소장폐색"
  - "수술 후 유착"
  - "마약성 진통제 유발 변비"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shozsnqUg7Y-Q7IeEIChTbWFsbCBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 과거 개복술을 받았다. 오늘 복부팽만, 담즙성 구토와 대변·가스 배출 중단으로 왔다. 갑자기 통증이 계속 심해지고 복막 자극 징후가 나타났다. CT에서 폐쇄고리와 장벽 조영 감소가 보인다. 적절한 처치는?

## 선택지

A. 변비약을 투여하고 귀가시킨다
B. 비위관 감압만 하고 이틀간 관찰한다
C. 대장내시경 예약으로 대신한다
D. 장 허혈이 의심돼 소생과 함께 응급 수술을 의뢰한다

## 해설


수술 후 유착은 소장폐색을 일으킬 수 있다. 폐쇄고리, 장벽 조영 저하와 복막 자극은 교액·허혈을 시사해 보존치료를 기다리지 않고 수술을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 명확한 transition point의 유착SBO는20년전 개복술 D에서 원인 유착형성이 시작; opioid1주만으로 설명 안 됨.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004122
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/
