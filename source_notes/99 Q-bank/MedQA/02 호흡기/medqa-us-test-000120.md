---
type: qbank
schema_version: 1
id: medqa-us-test-000120
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1d4c30178dd5fc7ed7d8de045c98c8bc5c42154487db8305b866828ccac962cf
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "과민성 폐렴"
  - "조류 사육자 폐"
  - "항원 회피"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-qzvOuvvOyEsSDtj5DsnqXsl7wgKEh5cGVyc2Vuc2l0aXZpdHkgUG5ldW1vbml0aXMpLm1k
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQmVjbG9tZXRhc29uZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvSXNvbmlhemlkLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 동물원 사육사가 한 달 동안 지속된 마른기침, 발열, 오한으로 내원했다. 근무일이 끝날 때마다 증상이 몇 시간씩 반복되고 항상 피곤하다고 한다. 다양한 조류를 돌보는 일을 하며 그 외에는 건강하고 여행이나 외상은 없다. 과거력과 복용 약물은 없고 흡연과 음주도 하지 않는다. 땅콩, 먼지, 꽃가루 알레르기가 있고 가족 중 소아 천식이 있다. 흉부 X선에서 양쪽 하폐야에 미만성 혼탁이 보이고 PPD 피부검사는 음성이다. 가장 적절한 치료는?

## 선택지

A. 흉강천자
B. 흡입 베클로메타손
C. 조류 노출 회피
D. 6개월간 이소니아지드

## 해설


조류 사육자 폐는 조류 항원에 대한 과민반응으로 발생하며, 증상은 항원 회피만으로 호전된다. 따라서 가장 적절한 치료는 조류 노출 회피이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 조류 노출 근무일 말 반복하는 기침·발열과 미만성 폐음영은 과민폐렴을 지지. 원인 항원 회피 C와 해설의 연결 확인.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000120
