---
type: qbank
schema_version: 1
id: medqa-us-train-009906
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:75f20b08eef7a91860cef25d93d4142ee0f8bcbd2d01bda9de0af7dc80077ba1
exam: USMLE Step 2/3
language: ko
specialty: 22 정형외과
related_diseases:
  - "척추전방전위증"
  - "척추분리증"
  - "청소년 허리 통증"
question_type: diagnosis
related_disease_slugs:
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lOyghOuwqeyghOychOymnSAoU3BvbmR5bG9saXN0aGVzaXMpLm1k
  - MjIg7KCV7ZiV7Jm46rO8L-yymey2lOu2hOumrOymnSAoU3BvbmR5bG9seXNpcykubWQ
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

허리 젖히는 동작을 반복하는 14세 체조 선수가 수개월간 요통을 호소한다. 측면 X선에서 제5요추가 제1천추보다 앞쪽으로 밀려 있다. 이 영상 소견의 이름은?

## 선택지

A. 요추 추간판 탈출증
B. 척추전방전위증
C. 척추관 협착증
D. 척추 압박골절

## 해설

아래 척추에 대해 위 척추가 앞으로 이동한 소견은 척추전방전위증이다. 성장기에는 협부 피로 손상인 척추분리증이 원인이 될 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 성장판 연골 약화가 직접 기전이라는 해설을 청소년의 pars 피로손상과 전위로 교정했다.
- 공식/학회 근거: https://www.orthoinfo.org/diseases--conditions/spondylolysis-and-spondylolisthesis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009906
