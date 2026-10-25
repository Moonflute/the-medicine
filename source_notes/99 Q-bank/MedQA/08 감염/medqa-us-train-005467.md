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
question_type: prognosis
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

HIV가 있는 43세 남자가 15일 동안 발열, 야간발한, 두통과 전신쇠약으로 내원했다. 정맥주사 약물 사용력이 있고 흡기 시 커지는 좌측 흉골연의 전수축기 잡음이 들린다. 백혈구 12,800/mm³, ESR 52 mm/h, CD4 450 cells/mm³이다. 이 질환의 가장 가능성 높은 후유증은?

## 선택지

A. 폐색전증
B. 손가락 끝 패드의 통증성 결절
C. 손발톱 밑 출혈
D. 망막출혈

## 해설


주사약물 사용·지속 발열과 흡기 시 커지는 전수축기 잡음은 우측 삼첨판 감염성 심내막염을 시사한다. 우심계 감염 식생이 떨어져 폐혈관으로 이동하는 패혈성 폐색전 A가 중요한 합병증이다. 단순 하지 DVT의 비감염성 혈전색전이나 기존 폐렴 병력이 확정된 것처럼 설명하지 않는다. 손끝 결절·Roth 반점 등은 IE에서 가능하지만 이 사례의 우심계 색전 경로와 구별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005467 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 기존 폐렴·심내막염 병력을 만들어낸 설명 제거; 삼첨판 IE의 감염성 폐색전 A 기전 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005467
