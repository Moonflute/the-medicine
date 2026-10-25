---
type: qbank
schema_version: 1
id: medqa-us-validation-000148
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:bd03ad59facac71863886716dd55df3123f78daf90337c7772bdb6dca65594ae
exam: USMLE Step 2/3
language: ko
specialty: 17 이비인후과
related_diseases:
  - "급성 세균성 비부비동염"
  - "부비동염"
  - "화농성 콧물"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67aA67mE64-Z7Je8IChTaW51c2l0aXMpLm1k
difficulty: complex
answer: B
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

30세 건강한 남성이 3주간의 안면 압박감과 콧물로 진료를 받으러 왔다. 감기 후 양쪽 볼과 이마의 압박감이 악화되고 일주일 이상 녹색 콧물이 지속되며 비강에서 부어 있는 비갑개와 화농성 분비물이 보였다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 바이러스성 비부비동염
B. 급성 세균성 비부비동염
C. 알레르기 비염
D. 만성 비부비동염

## 해설

감기 뒤 호전되었다가 악화된 얼굴 압박감과 3주 지속된 증상은 B, 급성 세균성 비부비동염을 지지한다. 진단 단서는 지속기간과 악화 경과의 조합이지 콧물 색 하나가 아니다. 바이러스 감염에서도 화농성·색 있는 콧물이 생길 수 있다. 만성 비부비동염을 진단할 정도의 장기간 경과는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 농성/녹색 콧물만으로 바이러스와 세균을 구분한다는 설명을 지속기간·이중악화 중심으로 교정.
- 공식/학회 근거: https://aao-hnsfjournals.onlinelibrary.wiley.com/doi/10.1002/ohn.1342

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000148
