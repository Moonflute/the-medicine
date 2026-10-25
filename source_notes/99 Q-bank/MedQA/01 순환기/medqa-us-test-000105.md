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
explanation_status: machine-generated
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

66세 남성이 3개월 동안 점점 심해지는 호흡곤란으로 일차진료의에게 내원했다. 잔디를 깎거나 집 계단을 오를 때 특히 심하다. 고혈압은 리시노프릴로 잘 조절된다. 혈압 136/58 mmHg, 맥박 분당 88회, 호흡수 분당 18회, 산소포화도 97%이다. 진찰에서 좌측 흉골연의 초기 이완기 고음성 감소형 잡음, 우측 상부 흉골연의 중수축기 잡음, 심첨부의 후기 이완기 저음성 잡음과 S3 심음, 양측 요골동맥의 도약맥이 있다. 가장 가능성 높은 진단은?

## 선택지

A. 승모판 역류
B. 대동맥판 역류
C. 대동맥판 협착
D. 승모판 탈출증

## 해설


청진에서 좌측 이완기 고음성 감소형 잡음과 우측 상부 중수축기 잡음, S3와 도약맥은 대동맥판 역류를 나타낸다. 대동맥판 역류는 좌심실 부하 증가와 연관된 잡음이다. 따라서 가장 가능성 높은 진단은 대동맥판 역류이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/선지/정답 B/해설 읽음. 초기 이완기 감소형 잡음, 넓은 맥압과 도약맥, Austin Flint에 합당한 심첨부 잡음은 대동맥판 역류와 일치. 처치 지침 검증 아님.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000105
