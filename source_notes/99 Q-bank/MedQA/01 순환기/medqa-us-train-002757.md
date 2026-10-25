---
type: qbank
schema_version: 1
id: medqa-us-train-002757
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:10bb27c752f9dd2c0d792fdc2abae30159a07e88d09c5c2b155393e3f082b9d6
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hypertension in diabetes"
  - "ACE inhibitor"
  - "renin-angiotensin-aldosterone system"
  - "lisinopril pharmacodynamics"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
question_type: mechanism
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: "content-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정."
curation_status: "revised"
curation_reason: "이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
curation_disposition: "selected"
---

# MedQA US 임상문제

## 문제

52세 여성이 정기 검진을 받는다. 제2형 당뇨병으로 metformin을 복용하며 혈압은 162/96 mmHg, 맥박 85회/분이다. 이 환자에게 ACE 억제제를 선택한다고 할 때, 투여 초기에 예상되는 변화의 조합은? 순서는 나트륨 배설 / 알도스테론 / 안지오텐신 II / 말초혈관저항 / 레닌이다.

## 선택지

A. 증가 / 감소 / 감소 / 감소 / 증가
B. 증가 / 감소 / 감소 / 감소 / 감소
C. 증가 / 증가 / 증가 / 증가 / 증가
D. 증가 / 감소 / 증가 / 감소 / 증가

## 해설

ACE 억제는 angiotensin II 생성을 감소시키고 aldosterone과 말초혈관저항을 낮춘다. 음성 되먹임 감소로 renin은 증가한다. 치료 초기에는 나트륨 배설이 증가하지만, 만성 정상상태에서 배설량이 계속 늘어난다는 뜻은 아니다. ARB는 angiotensin II 농도가 오를 수 있으므로 ACE 억제와 구분한다. 당뇨병이 있다는 사실만으로 모든 환자에게 ACEI만 유일한 약이라고 뜻하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 이름 없는 약제 때문에 생긴 ACEI·ARB 중복정답을 조건부 ACEI 기전 질문으로 교정.
- 검수 범위: content-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002757

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
