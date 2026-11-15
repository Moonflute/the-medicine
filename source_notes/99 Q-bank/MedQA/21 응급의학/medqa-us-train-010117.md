---
type: qbank
schema_version: 1
id: medqa-us-train-010117
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:69eef6e65a208771cfc4898d1b8a4d5be056ba2b5fa037c1f24c4bfefd484c93
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "횡문근융해증"
  - "압궤손상"
  - "급성 신손상"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: B
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

잔해에 다리가 오래 눌렸던 28세 환자의 소변이 갈색이고 CK는 29,700 U/L다. 탈수 상태이고 소변이 나오며 폐울혈은 없다. 신손상을 줄이기 위한 초기 치료는?

## 선택지

A. 모든 환자에게 만니톨을 먼저 투여한다
B. 등장성 정질액을 시작하고 소변량과 체액 상태를 보며 조절한다
C. 예방적으로 혈액투석을 바로 시작한다
D. 소변 색이 정상으로 돌아올 때까지 수액을 제한한다

## 해설

압궤에 의한 횡문근융해증에는 조기 정질액이 도움이 된다. 칼륨·신기능과 소변량을 감시하며, 무뇨가 지속되면 수액만 무한히 늘리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 압궤성 횡문근융해증의 IV 수액 D 유지. 이미 핍뇨성 AKI인 환자에 무조건 대량 수액이 아니라 목표지향 소생/수액과다·고칼륨 감시 필요 보완.
- 공식/학회 근거: https://tsaco.bmj.com/content/7/1/e000836

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010117
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8804685/
