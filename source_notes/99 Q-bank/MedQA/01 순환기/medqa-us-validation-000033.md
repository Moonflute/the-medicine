---
type: qbank
schema_version: 1
id: medqa-us-validation-000033
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e826d2eec2bd55168467ff83a89fe4c6d12a85cf3f9f996497eda969aa9c9c77
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "드레슬러 증후군"
  - "심근경색 후 증후군"
  - "심낭염"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwLyjquInsgqzspp3tm4TqtbApLm1k
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

55세 남성이 심근경색으로 관상동맥중재술을 받은 지 6주 뒤 발열과 흉통으로 내원했다. 통증은 깊게 숨쉴 때와 누울 때 심하고 앞으로 숙이면 줄어든다. 심낭 마찰음이 들리고 심전도에서 미만성 ST분절 상승과 PR분절 하강이 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 스텐트 혈전증
B. 심실중격 파열
C. 폐색전증
D. 심근경색 후 지연성 심낭염(드레슬러 증후군)

## 해설

심근경색 수주 뒤 체위성·흉막성 통증, 마찰음과 여러 유도의 ST 상승·PR 하강이 나타나는 것은 면역매개 심낭염을 시사한다. 재경색이라면 보통 특정 관상동맥 영역의 변화가 더 뚜렷하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Dressler 기전을 스텐트 부위의 국소 염증이 아닌 심장손상 후 면역 염증으로 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000033
