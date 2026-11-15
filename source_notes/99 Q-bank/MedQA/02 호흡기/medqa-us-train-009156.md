---
type: qbank
schema_version: 1
id: medqa-us-train-009156
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a9c29be3d7e2aaec0b0d721a9d26969dd34b6f641d549b8d2511c9c84101b02
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "asthma"
  - "천식"
  - "inhaled corticosteroid"
  - "흡입 코르티코스테로이드"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: prevention
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvQmVjbG9tZXRhc29uZS5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

12세 여아가 저용량 베클로메타손 정량분무식 흡입기를 시작한 뒤 입안에 닦이는 흰 반점이 생겨 구강 칸디다증으로 진단됐다. 병변을 치료하면서 흡입 스테로이드의 국소 부작용 재발을 줄일 방법은?

## 선택지

A. 스페이서를 사용하고 흡입 뒤 입을 헹군 물은 뱉는다
B. 정량분무기를 털지 않고 쓰기만 한다
C. 천식이 조절되므로 흡입 스테로이드를 항상 중단한다
D. 흡입기 사용 후 물을 헹구지 않고 바로 삼킨다

## 해설


흡입 스테로이드가 구강에 남으면 칸디다증이 생길 수 있다. 정량분무식 흡입기에 적절한 스페이서를 사용하고 흡입 후 입을 헹군 다음 뱉으면 구강 내 약물 침착을 줄일 수 있다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 흡입 베클로메타손의 국소 면역 억제는 구인두 칸디다증 A와 일치하며 다른 선지는 부적합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009156
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
