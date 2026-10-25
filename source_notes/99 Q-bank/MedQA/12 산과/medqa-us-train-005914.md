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
answer: C
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

27세 G2P1 여성이 정기 산전 혈액검사에서 HIV 감염으로 진단되었다. 임신 초기 초음파로 추정한 임신주수는 12주이다. CD4 수는 150 cells/mm³, 바이러스량은 126,000 copies/mL이며 HIV 감염 증상은 없다. 다음 중 이 임신의 적절한 관리는 무엇인가?

## 선택지

A. 항생제 예방요법을 피한다
B. 모유수유
C. 고강도 항레트로바이러스 치료(HAART)
D. 질식분만

## 해설

모든 HIV 감염 임신에서 병합 ART(C)를 신속히 시작해 산모 건강과 수직감염 예방을 도모한다. CD4 150 및 높은 바이러스량은 특히 면역억제와 전파 위험을 강조하지만 ART 적응증을 CD4 ≤150으로 제한하지 않는다. 기회감염 예방 필요성을 별도로 평가하고 분만·수유 방식은 이후 바이러스 억제 상태와 지침에 따라 상담한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ART는 CD4와 무관하게 모든 HIV 임신에 적응됨을 명료화.
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/intrapartum-care?view=brief

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005914
