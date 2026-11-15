---
type: qbank
schema_version: 1
id: medqa-us-train-005737
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1eb56128136edb944afd4f1f04327902334d435a14ef79cb4ba3bbfaf3e8e67b
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병 진단 확인"
  - "재발성 요로감염"
  - "HbA1c 재검"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7JqU66GcIOqwkOyXvCAoVXJpbmFyeSBUcmFjdCBJbmZlY3Rpb24pLm1k
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

47세 여성이 배뇨통으로 진료받았다. 요로감염 외에 체중 감소, 다갈이나 다뇨는 없다. 이전 당뇨 진단이 없고 정맥혈 HbA1c가 처음 8.5%로 나왔다. 당뇨병을 확증하려면?

## 선택지

A. 한 번의 결과로 확진하고 확증 검사는 생략
B. 일주일간 소변 당만 측정
C. 공복 인슐린만 측정
D. HbA1c를 신속히 재검하거나 다른 혈당 진단 검사로 확인

## 해설

명백한 고혈당 증상이나 위기가 없으면 진단 범위의 검사 결과를 하나 더 확인한다. 같은 검사를 반복하거나 다른 진단 검사에서도 기준을 충족하면 된다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: A1c 재검 D의 목적을 이미 당뇨환자 추적이 아닌 신규진단 확증으로 교정.
- https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005737
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
