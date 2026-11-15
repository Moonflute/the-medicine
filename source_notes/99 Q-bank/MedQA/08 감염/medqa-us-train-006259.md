---
type: qbank
schema_version: 1
id: medqa-us-train-006259
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:6e052e48de0c609744e006f2d74f84012b5b225951d8c27c2b9ba1ad95567b14
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "구강 칸디다증"
  - "비호지킨 림프종"
  - "항암화학요법"
related_disease_slugs:
  - MDgg6rCQ7Je8L-y5uOuUlOuLpOymnSAoQ2FuZGlkaWFzaXMpLm1k
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: management
difficulty: standard
answer: D
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
  - ZHJ1ZzowOCDqsJDsl7wvQWN5Y2xvdmlyLm1k
---

# MedQA US 임상문제

## 문제

흡입 코르티코스테로이드를 사용하는 환자가 입안 불편감으로 왔다. 혀의 소수 흰 반점이 닦이고, 목에 걸리는 느낌이나 삼킴통증은 없다. 국소로 시작할 수 있는 치료는?

## 선택지

A. 리도카인 가글
B. 클로르헥시딘 가글
C. 트리암시놀론 구강연고
D. 니스타틴 현탁액

## 해설


가볍고 구강에 국한된 칸디다증에는 니스타틴 등 국소 항진균제를 사용할 수 있다. 흡입기 사용 후에는 입안을 헹구고 물을 뱉도록 교육한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006259 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 국소 구강칸디다의 nystatin B 유지; 항암 환자 모두에 국소제가 보편 일차라는 과장 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/candidiasis/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006259
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/candidiasis
