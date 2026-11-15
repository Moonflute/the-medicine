---
type: qbank
schema_version: 1
id: medqa-us-train-007006
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f5d4a16070891cc522106053820159f308985c73f06f36e3f910f85ab8d7786d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "제2형 당뇨병"
  - "당뇨병성 신장질환"
  - "미세알부민뇨"
  - "고혈압"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDEg7Iic7ZmY6riwL-qzoO2YiOyVlSAoSHlwZXJ0ZW5zaW9uKS5tZA
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

42세 제2형 당뇨병 환자의 혈압은 반복해서 148/94 mmHg다. 소변 알부민/크레아티닌 비는 두 차례 170 mg/g 전후이고 혈중 칼륨은 정상이다. 혈압과 알부민뇨를 함께 고려해 우선 선택할 약은?

## 선택지

A. 암로디핀
B. 로사르탄
C. 아테놀롤
D. 푸로세미드

## 해설

당뇨병 환자에게 고혈압과 지속성 알부민뇨가 함께 있으면 ACE 억제제나 안지오텐신 수용체차단제를 우선 고려한다. 시작하거나 증량한 뒤 크레아티닌과 칼륨을 확인한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복HTN+당뇨/단백뇨 B는 지지하되 ACE억제제가 모든당뇨의유일최강약이라는 과장 한정.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007006
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
