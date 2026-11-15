---
type: qbank
schema_version: 1
id: medqa-us-validation-000392
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:07b943ccb9d1872b9fb1997df894422c0410e3ccf4b73bbc30efa9c279ab2a6a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ACE 억제제 유발 기침"
  - "고칼륨혈증"
  - "리시노프릴"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
question_type: management
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 당뇨병과 알부민뇨 때문에 리시노프릴을 시작한 뒤 지속적인 마른기침이 생겼다. 신기능과 혈청 칼륨은 정상이고, 평가에서 다른 원인은 찾지 못했다. 레닌–안지오텐신계 차단의 이점은 유지하면서 바꿀 약은?

## 선택지

A. 로사르탄
B. 히드로클로로티아지드
C. 아지트로마이신
D. 로라타딘

## 해설

ACE 억제제는 브래디키닌 분해를 줄여 마른기침을 유발할 수 있다. ARB인 로사르탄으로 바꾸면 이 기전의 기침 가능성이 낮다. ARB도 칼륨과 신기능을 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACE기침의 ARB 변경 A는 지지하되 로사르탄도 고칼륨혈증을 일으킬 수 있음을 명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000392
