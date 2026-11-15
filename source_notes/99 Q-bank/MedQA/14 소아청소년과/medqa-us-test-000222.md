---
type: qbank
schema_version: 1
id: medqa-us-test-000222
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:adf1bb31e4b1313ce1d143b53799e428251ec96a32eac233a92dcf27ed445011
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "주산기 HIV 감염"
  - "HIV 노출 신생아"
  - "지도부딘"
question_type: management
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

HIV 감염 산모가 임신 중 치료를 받았지만 분만 1주 전 바이러스량은 678 copies/mL였다. 신생아는 겉보기에 건강하다. 출생 직후 항레트로바이러스 약제는 어떻게 시작할까?

## 선택지

A. 신생아 바이러스 검사가 양성이 될 때까지 미룬다
B. 노출 위험에 관계없이 지도부딘 단독으로 시작한다
C. 전파 고위험으로 보고 가능한 한 빨리 3제 추정 치료를 시작한다
D. 산모가 치료 중이었으므로 신생아 약제는 생략한다

## 해설

분만에 가까운 시점에 산모의 바이러스혈증이 확인되면 신생아 전파 고위험으로 본다. 국제 지침에서는 출생 시 바이러스 검사를 하면서 항레트로바이러스 3제 추정 치료를 지체 없이 시작한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HIV 노출아에서 ZDV 시작 A 유지하되 678 copies/mL 고위험 노출은 단독 1회 요법으로 불충분하므로 3제·검사 병행을 명시.
- https://clinicalinfo.hiv.gov/en/news/update-guidelines-use-antiretroviral-agents-pediatric-hiv-infection-2
- https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/diagnosis-hiv-infection-infants-and-children?view=full

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000222
- https://clinicalinfo.hiv.gov/en/guidelines/perinatal/management-infants-utero-intrapartum-breastfeeding-hiv-exposure?view=brief
