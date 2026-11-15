---
type: qbank
schema_version: 1
id: medqa-us-test-000869
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:05e61a128de6006c4e7dab7d87e735ad079ec18d9e77d1734175460016143864
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "2도 방실차단"
  - "Mobitz II"
  - "서맥성 쇼크"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uwqeyLpOywqOuLqCAoQVYgYmxvY2spLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9idXRhbWluZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

80세 남성이 어지럼과 의식 저하로 응급실에 왔다. 혈압 80/48 mmHg, 맥박 36회/분이고 피부가 차갑다. 심전도에서 PR 간격은 일정하지만 전도되지 않는 P파가 반복된다. 아트로핀 투여에도 상태가 호전되지 않았다. 약물 외에 즉시 시행할 처치는?

## 선택지

A. 동기화 심율동전환
B. 제세동
C. 경피 심장 조율
D. 전극도자 절제술

## 해설


저혈압과 의식 저하를 일으키는 불안정 서맥이 아트로핀에 반응하지 않으면 경피 조율을 즉시 시작할 수 있다. 맥박이 있는 서맥에서 심율동전환이나 제세동을 시행하지 않는다. 지속되면 경정맥 조율과 가역 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 일정 PR과 간헐적 비전도 P파·서맥/저관류는 위험한 2도 AV block. 제시된 처치 중 조율 C가 적합하고 ECG가 글로 충분히 기술됨.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000869
- AHA 성인 맥박 있는 서맥 알고리즘(2025): https://cpr.heart.org/-/media/CPR-Files/CPR-Guidelines-Files/2025-Accessible/Algorithm-ACLS-Bradycardia-LngDscrp-250725-Ed.pdf
