---
type: qbank
schema_version: 1
id: medqa-us-train-008324
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4508e5208f34122423118b05013135285ed4eb84f830241740b05808641a5042
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "reinfarction"
  - "CK-MB"
  - "recurrent myocardial infarction"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2XiO2YiOyEsSDsi6zsp4jtmZgubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: B
answer_change_reason: "2026 제5차 심근경색 보편적 정의는 재발 허혈 증상에서 연속 심장 트로포닌 검사를 우선하며, CK-MB는 트로포닌 검사가 불가능할 때의 대안이다. 원정답 B를 C로 변경하여 현행 기준 및 해설과 일치시킴."
---

# MedQA US 임상문제

## 문제

66세 남성이 심근경색 치료 사흘 뒤 새로운 흉통과 ST분절 하강을 보인다. 앞선 심근경색 때 상승했던 고감도 트로포닌은 어제까지 감소 중이었다. 재경색을 평가할 때 적절한 검사 방법은?

## 선택지

A. 트로포닌은 이미 상승한 적이 있으므로 측정하지 않는다
B. CK-MB 단일 결과만으로 판단한다
C. 고감도 심장 트로포닌을 즉시 측정하고 반복해 다시 상승하는지 본다
D. 젖산탈수소효소가 정상이라면 재경색을 배제한다

## 해설

앞선 심근경색으로 트로포닌이 계속 높을 수 있으므로 단일 양성값만으로 재경색을 진단하지 않는다. 이전 감소 추세에서 다시 유의하게 상승하는지 확인하고, 새 허혈 증상과 심전도 소견을 함께 해석한다. 진행성 허혈이 의심되면 연속 채혈 때문에 필요한 관상동맥 평가를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 재경색의 현행 검사는 연속 심장 트로포닌이며 원정답 B와 기존 해설 C의 불일치를 C로 정정.
- https://www.jacc.org/doi/10.1016/j.jacc.2026.07.025

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008324
- https://doi.org/10.1093/eurheartj/ehag101
