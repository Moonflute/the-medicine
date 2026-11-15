---
type: qbank
schema_version: 1
id: medqa-us-train-009966
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:edc4b79464fe907d9e63d3808569889b58517415ea99eccd66343954df2972e3
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "당뇨병성 신장병증"
  - "만성콩팥병"
  - "ACE 억제제"
related_disease_slugs:
  - MDUg7Iug7J6lL-unjOyEsSDsvantjKXrs5EgKENLRCkgKENocm9uaWMgS2lkbmV5IERpc2Vhc2UgKENLRCkpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvantjKXrs5Hspp0gKERpYWJldGljIE5lcGhyb3BhdGh5KS5tZA
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRGlsdGlhemVtLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUGVyaW5kb3ByaWwubWQ
curation_status: "revised"
curation_reason: "비교 약물의 혈압 효과가 일률적으로 열등하다는 설명을 제거하고 RAS차단의 조건·감시 명시."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

고혈압과 알부민뇨가 있는 제2형 당뇨병 환자가 ACE 억제제를 시작했다. 2주 뒤 크레아티닌은 1.5에서 1.7 mg/dL, K는 4.5 mmol/L이다. 탈수나 증상성 저혈압은 없고 혈압은 호전됐다. 약제를 어떻게 관리할까?

## 선택지

A. 크레아티닌이 조금 올랐으므로 즉시 영구 중단
B. 같은 용량을 유지하며 크레아티닌과 칼륨을 추적
C. ARB를 추가해 크레아티닌을 낮춘다
D. 검사를 중단하고 바로 최대 용량으로 증량

## 해설

ACE 억제제 시작 직후 크레아티닌이 소폭 오를 수 있다. 4주 이내 상승 폭이 30% 이하이고 고칼륨혈증·증상성 저혈압이 없다면 추적하며 유지할 수 있다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009966
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/
- https://doi.org/10.1016/j.kint.2023.10.016

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 비교 약물의 혈압 효과가 일률적으로 열등하다는 설명을 제거하고 RAS차단의 조건·감시 명시.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf
