---
type: qbank
schema_version: 1
id: medqa-us-train-007606
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7240141c70bd82693feb48121d51d893a1a1aa6758a01414662208be120f4a06
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "임균성 관절염"
  - "파종성 임균 감염"
  - "그람음성 쌍구균"
  - "세프트리악손"
related_disease_slugs:
  - MDgg6rCQ7Je8L-yehOq3oCDqsJDsl7wgKEdvbm9jb2NjYWwgSW5mZWN0aW9uKS5tZA
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
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvT3hhY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTmFmY2lsbGluLm1k
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

22세 환자가 열과 한쪽 무릎 부종으로 내원했다. 관절액에서 감수성 있는 임균이 확인됐고 클라미디아 검사는 음성이다. 감염 관절의 배액과 함께 투여할 항생제는?

## 선택지

A. 아지트로마이신 단독
B. 세파졸린
C. 반코마이신
D. 세프트리악손

## 해설


임균성 화농성 관절염은 세프트리악손과 필요한 관절 배액으로 치료한다. 클라미디아가 배제되지 않았을 때는 동시 치료를 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007606 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임균 관절염의 ceftriaxone/배액 D 유지; chlamydia 미배제 시 추가 치료 필요성 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/std/treatment-guidelines/gonorrhea-adults.htm

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007606
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10789534/
