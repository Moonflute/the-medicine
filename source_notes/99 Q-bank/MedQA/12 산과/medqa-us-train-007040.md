---
type: qbank
schema_version: 1
id: medqa-us-train-007040
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:995d2894ae3862319e5dea90fbae8237c27a9d0eac8fc1ab3922102d6b979bd5
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 오조"
  - "임신 초기 오심과 구토"
  - "독실아민"
  - "hyperemesis gravidarum"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDsnoXrjacgKEh5cGVyZW1lc2lzIEdyYXZpZGFydW0pLm1k
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 10주 산모가 오심·구토로 일상생활이 어렵다. 물은 마실 수 있고 기립성 저혈압이나 전해질 이상은 없다. 피리독신만으로 증상이 남으면 추가할 수 있는 약은?

## 선택지

A. 메티마졸
B. 독실아민
C. 리토드린
D. 옥시토신

## 해설

독실아민과 피리독신의 조합은 임신 초기 오심·구토에 사용할 수 있다. 탈수나 경구 섭취 불가, 전해질 이상이 생기면 별도로 수액 치료와 입원 필요성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 독실아민과 비타민 B6를 동일 약물로 쓴 오류 수정.
- https://www.acog.org/womens-health/faqs/morning-sickness-nausea-and-vomiting-of-pregnancy

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007040
- https://pubmed.ncbi.nlm.nih.gov/38311315/
