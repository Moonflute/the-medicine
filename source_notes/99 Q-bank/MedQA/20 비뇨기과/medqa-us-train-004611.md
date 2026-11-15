---
type: qbank
schema_version: 1
id: medqa-us-train-004611
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:16748adaf7f806c26fe3a1d87b64df44aa8b4742559071378151dcb1c8224d74
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "요관결석"
  - "신장산통"
  - "폐쇄성 요로병증"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxNCDqt7zqs6jqsqnCt-2GteymncK366eI7LeoL0tldG9yb2xhYy5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

33세 여성이 옆구리 산통으로 내원했다. 비조영 CT에서 원위 요관에 12 mm 결석이 있다. 열이나 농뇨는 없고 신기능은 안정적이다. 자연 배출을 기다리기 어려울 때 결석을 직접 제거할 방법은?

## 선택지

A. 요관경 결석 제거술
B. 요관 스텐트만 삽입
C. 탐스로신 처방 후 장기간 관찰
D. 티아지드 처방

## 해설

12 mm 원위 요관 결석은 저절로 나오기 어려워 적극적 제거를 고려한다. 요관경으로 결석을 직접 제거할 수 있다. 감염이 동반된 폐쇄라면 결석 제거에 앞서 감압과 항균치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 12mm 결석을5–10mm로 바꾸고 관찰 B라고 결론낸 명백한 정답모순 해설 교체. A 요관경 치료 유지.
- 공식/학회 근거: https://uroweb.org/guidelines/urolithiasis/chapter/guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004611
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/
