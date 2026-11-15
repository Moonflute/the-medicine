---
type: qbank
schema_version: 1
id: medqa-us-train-003606
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aa98887d37e88c773b2d799e7b0703c3008c3af1c9f3d609923c3c694dfbc694
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "vitamin A toxicity"
  - "pseudotumor cerebri"
  - "alopecia"
  - "hepatomegaly"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67mE7YOA66-8IEEg64-F7ISx7KadIChWaXRhbWluIEEgVG94aWNpdHkpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

35세 여성이 수주간 두통과 시야 흐림을 겪고 양쪽 시신경유두부종이 관찰됐다. 최근 탈모와 피부 건조가 생겼고 수개월간 온라인 보충제를 복용했다. 이차성 두개내압 상승을 평가할 때 복용 내역에서 확인할 성분은?

## 선택지

A. 고용량 레티놀(비타민 A)
B. 비타민 B12
C. 비타민 C
D. 비타민 K

## 해설


고용량의 미리 형성된 비타민 A는 두개내압 상승과 피부·모발 변화를 일으킬 수 있다. 제품 성분을 확인하되 유두부종의 다른 원인과 시력 위협도 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 보조제노출·두개내압상승 양상 두통·탈모·간비대는 비타민A 독성 A의 일관된 조합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003606
- https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/
