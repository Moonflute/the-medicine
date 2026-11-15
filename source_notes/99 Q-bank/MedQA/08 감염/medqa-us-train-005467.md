---
type: qbank
schema_version: 1
id: medqa-us-train-005467
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6cf484f751ff7a90c439fb3abcfdf28d91e8ba687f9c1dc93ace8af725357f17
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "삼첨판 심내막염"
  - "정맥주사 약물 사용"
  - "폐색전증"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
  - MDEg7Iic7ZmY6riwL-qwkOyXvCDsi6zrgrTrp4nsl7wgKEluZmVjdGl2ZSBFbmRvY2FyZGl0aXMpLm1k
question_type: complication
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

삼첨판 감염성 심내막염 환자에게 흉막성 흉통과 혈담이 생겼다. 흉부 CT에서 양쪽 폐 말초에 공동을 동반한 결절이 여러 개 보인다. 가장 가능성 높은 합병증은?

## 선택지

A. 패혈성 폐색전
B. 심부정맥혈전증에 의한 일반 폐색전
C. 심부전으로 인한 폐부종
D. 석회화된 폐 육아종

## 해설


우측 판막 증식물에서 떨어져 나온 감염성 물질은 폐로 갈 수 있다. 폐 말초의 다발성 결절과 공동은 패혈성 폐색전에 부합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005467 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기존 폐렴·심내막염 병력을 만들어낸 설명 제거; 삼첨판 IE의 감염성 폐색전 A 기전 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005467
- https://doi.org/10.1093/eurheartj/ehad193
