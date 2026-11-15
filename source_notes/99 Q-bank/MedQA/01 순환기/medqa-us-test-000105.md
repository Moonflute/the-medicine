---
type: qbank
schema_version: 1
id: medqa-us-test-000105
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:87d511f4d5ef1771a671b581e004b389fe4817a3acaec2b8011dac1cb03e6479
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "대동맥판 역류"
  - "도약맥"
  - "이완기 잡음"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uMgOuPmeunpe2MkOuniSDsl63rpZggKEFvcnRpYyBSZWd1cmdpdGF0aW9uKS5tZA
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 점차 심해지는 운동 시 호흡곤란으로 내원했다. 혈압 136/58 mmHg이며 양쪽 요골동맥에서 강하게 뛰었다가 빠르게 떨어지는 맥박이 만져진다. 좌측 흉골연에서 고음의 초기 이완기 감소성 잡음이 들린다. 가장 가능성 높은 진단은?

## 선택지

A. 승모판 역류
B. 대동맥판 역류
C. 대동맥판 협착
D. 승모판 협착

## 해설


대동맥판이 이완기에 완전히 닫히지 않으면 혈액이 좌심실로 역류한다. 초기 이완기 감소성 잡음과 낮은 이완기 혈압으로 인한 넓은 맥압·도약맥이 단서다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 초기 이완기 감소형 잡음, 넓은 맥압과 도약맥, Austin Flint에 합당한 심첨부 잡음은 대동맥판 역류와 일치. 처치 지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000105
