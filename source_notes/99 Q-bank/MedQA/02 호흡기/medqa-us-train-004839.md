---
type: qbank
schema_version: 1
id: medqa-us-train-004839
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7343eff4a0118ea16f1402e3375df415d3b6304ac7c9ba17bd9426f76d47ac8
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "천식"
  - "소아 천식"
  - "알레르기성 천식"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 남아가 지난 석 달 동안 감기와 무관하게 밤이나 뛰어놀 때 기침과 천명을 반복했다. 평소에는 잘 뛰어놀고 성장도 정상이다. 아토피피부염이 있으며, 이번 진찰에서 양측 호기성 천명이 흡입 기관지확장제 투여 뒤 뚜렷이 줄었다. 가장 가능성 높은 진단은?

## 선택지

A. 천식
B. 선천성 심부전
C. 원발성 섬모운동이상증
D. 기관지 내 이물

## 해설


어린 소아에서 감기가 없을 때도 반복되는 야간·활동 관련 천명, 아토피 소인, 기관지확장제에 대한 개선은 천식을 지지한다. 이 연령에서는 폐활량검사가 어려울 수 있어 반복되는 양상과 치료 반응을 보며 다른 원인을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 아토피 소아의 반복 야간 천명과 정상 CXR는 천식 A에 부합.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004839
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
