---
type: qbank
schema_version: 1
id: medqa-us-validation-000052
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:c52be376e01b5e271324efc9fe2a9e466cb3dd1dd73fe6ae1241549a43333a4b
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "바르덴부르크 증후군"
  - "선천성 감각신경성 난청"
  - "홍채 이색증"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7IaM7JWEIOycoOyghOyniO2ZmC5tZA
difficulty: simple
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
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

35세 임산부가 태아 아버지가 바르덴부르크 증후군이 있어 관련 소견을 물었다. 다음 중 바르덴부르크 증후군과 관련되지 않는 특징은?

## 선택지

A. 홍채 이색증
B. 전음성 난청
C. 내안각 외측 전위
D. 넓은 콧등

## 해설

바르덴부르크 증후군은 감각신경성 난청, 홍채 이색증 및 색소 이상과 관련되며 아형에 따라 내안각 외측 전위와 넓은 콧등이 나타날 수 있다. 따라서 관련되지 않는 특징을 묻는 답은 B, 전음성 난청이다. 전음성 난청과 감각신경성 난청은 서로 다른 유형이며 다른 세 선지는 관련 특징에 해당한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 해설이 전음성과 감각신경성을 같은 뜻처럼 쓰고 다른 세 선지도 관련 없다고 반대로 설명한 오류 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000052
