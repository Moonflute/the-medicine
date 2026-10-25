---
type: qbank
schema_version: 1
id: medqa-us-train-002282
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6323e7b1b760495e2b5412c8537d9a4969e936c2ccde9ce85d518dce1a8d9511
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal spasm"
  - "motility disorder"
  - "esophageal manometry"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_rr7jrp4zshLEg7Iud64-EIOyXsOy2lSAoRGlmZnVzZSBFc29waGFnZWFsIFNwYXNtKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

32세 여성이 반복되는 흉골 뒤 흉통으로 가정의학과를 방문했다. 7개월 동안 비슷한 증상이 있었고 고형식과 액체를 모두 삼키기 어렵다. 최근 8주간 양성자펌프억제제를 복용했지만 음식이 식도에 걸리는 느낌이 계속된다. 통증은 운동과 관련이 없고 위산 역류병 병력도 없다. 현재 통증은 없다. 바륨 연하 X선은 정상이다. 다음 중 이 환자 상태의 진단에 도움이 되는 검사는?

## 선택지

A. 심전도
B. 상부위장관 내시경
C. 식도 내압검사
D. 양성자펌프억제제를 추가로 치료한다

## 해설


연하곤란과 흉통이 지속되고 바륨 검사까지 정상인 경우, 식도 운동 이상을 의심한다. 식도 내압검사는 식도 연동운동과 비정상적인 수축을 평가하는 표준 검사이다. 따라서 진단에 도움이 되는 검사는 식도 내압검사이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 질문은 다음 순서가 아니라 진단에 도움이 되는 검사. 고형·액체 연하곤란의 운동장애 평가 manometry C; 정상바륨이 운동장애를 배제하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002282
