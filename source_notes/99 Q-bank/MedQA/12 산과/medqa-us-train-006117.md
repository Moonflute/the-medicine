---
type: qbank
schema_version: 1
id: medqa-us-train-006117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f272fe1457efb5d4974637794ba890a51e36044f4513bda466e2f57e35bcc67f
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "전치태반"
  - "태아 서맥"
  - "응급 제왕절개"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOy5mO2DnOuwmCAoUGxhY2VudGEgUHJldmlhKS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주 산모가 양막이 파열되자마자 통증 없는 질출혈을 보였다. 산모 혈압은 정상이지만 태아 심박수가 분당 75회로 떨어져 회복되지 않는다. 전치혈관 파열이 의심된다. 가장 적절한 조치는?

## 선택지

A. 태아 출혈 가능성을 알리고 즉시 응급 제왕절개한다
B. 태아 혈액 확인 검사 결과가 나온 뒤 분만한다
C. 스테로이드를 완료할 때까지 이틀 동안 기다린다
D. 경부가 닫혀 있어도 유도분만을 우선 시작한다

## 해설

양막파수 직후 출혈과 지속적인 태아 서맥은 전치혈관의 태아 혈액 소실을 시사한다. 검사 확정을 기다리지 말고 즉시 분만을 진행하며 신생아팀에 수혈 가능성을 알린다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 무자궁·태아탈출이라는 해설 오류를 파수 후 출혈 및 태아 급성 저산소증으로 교체.
- https://www.rcog.org.uk/guidance/browse-all-guidance/green-top-guidelines/vasa-praevia-diagnosis-and-management-green-top-guideline-27b/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006117
- https://pubmed.ncbi.nlm.nih.gov/26292048/
