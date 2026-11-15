---
type: qbank
schema_version: 1
id: medqa-us-train-005914
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:52de9509d87174d25f8fc6eadc0cf35d662447f8fb32874e4d0969cdd1a522df
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "HIV 임신"
  - "고강도 항레트로바이러스 치료"
  - "모자간 HIV 전파 예방"
  - "HIV infection"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: simple
answer: D
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

임신 12주 산모가 HIV에 처음 확진됐다. 무증상이고 CD4 수는 470/μL지만 HIV RNA가 검출된다. 모자감염을 줄이기 위한 치료는?

## 선택지

A. CD4 수가 200/μL 미만이 될 때까지 대기
B. 임신 3삼분기까지 항바이러스 치료를 미룸
C. 분만 때 지도부딘 단독만 투여
D. 임신 초기부터 적절한 병합 항레트로바이러스 치료 시작

## 해설

임신 중 확인된 HIV는 CD4 수나 증상과 무관하게 신속히 병합 치료한다. 혈중 바이러스 억제를 추적하고 결과에 맞춰 분만과 신생아 예방 계획을 세운다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ART는 CD4와 무관하게 모든 HIV 임신에 적응됨을 명료화.
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care?view=brief

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005914
- https://kdca.go.kr/bbs/kdca/55/305040/download.do
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/introduction
