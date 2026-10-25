---
type: qbank
schema_version: 1
id: medqa-us-train-002315
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4459fec14021403e9ffc6ffc1f644b3decc6c76db50c5dff0ff75c16be7e598c
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "acute rheumatic fever without carditis"
  - "secondary prophylaxis"
  - "benzathine penicillin"
related_disease_slugs:
  - MDgg6rCQ7Je8L-unpOuPhSAoU3lwaGlsaXMpLm1k
question_type: prevention
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
---

# MedQA US 임상문제

## 문제

14세 여아가 1주간의 발열, 권태감, 흉통으로 내원했다. 통증은 10점 만점에 6점이고 깊게 숨쉴 때 악화된다. 흉부 중앙에 국한되고 방사되지 않는다. 3주 전 치료 없이 호전된 인후통이 있었다. 중대한 질환 병력은 없다. 체온 38.7°C이며 양쪽 팔꿈치와 손목에 피하결절이 있고 심첨부에서 부드러운 초기 수축기 잡음이 들린다. 혈색소 12.6 g/dL, 백혈구 12,300/mm³, 혈소판 230,000/mm³, ESR 40 mm/시간, ASO 역가 327 U/mL이다. 아스피린과 페니실린 치료 후 증상이 호전되었고 14일 후 심초음파는 정상이다. 다음 중 가장 적절한 치료의 다음 단계는?

## 선택지

A. 근육주사 벤자틴 페니실린을 4주마다 10년간 투여한다
B. 근육주사 벤자틴 페니실린을 4주마다 40세까지 투여한다
C. 근육주사 벤자틴 페니실린을 4주마다 21세까지 투여한다
D. 근육주사 벤자틴 페니실린을 4주마다 5년간 투여한다

## 해설


발병 당시 흉막성 흉통과 심첨부 잡음은 류마티스성 심장염을 시사하고 추적 심초음파가 정상인 것은 잔여 판막병이 없다는 맥락이다. 심장염이 있었으나 잔여 판막병이 없는 경우 AHA 기준 마지막 발작 후 10년 또는 21세까지 중 더 긴 기간 이차예방을 하므로 14세의 이 환자에서는 10년 A가 해당한다. 심장염이 전혀 없었다면 통상 5년 또는 21세까지 중 더 긴 기간이므로 이를 같은 범주라고 설명하면 안 된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002315 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 심장염 없는 류마티스열이라면서 10년 예방을 설명한 오류 교정. 이 사례의 일시적 심장 침범·잔여 판막병 없음으로 A 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://professional.heart.org/en/science-news/-/media/PHD-Files-2/Science-News/Clinical-Update-Slides/2021-AHA-Clinical-Update-Valvular-Heart-Disease-PDF.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002315
