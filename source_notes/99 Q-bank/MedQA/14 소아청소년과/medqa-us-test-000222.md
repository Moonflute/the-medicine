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
question_type: prevention
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
difficulty: complex
answer: A
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

체중 2,300 g(5 lb)의 남아가 29세 초임부에게서 태어났다. 산모는 HIV 감염이 있고 임신 중 3제 항레트로바이러스 치료를 받았다. 분만 1주 전 HIV 바이러스량은 678 copies/mL였다. 진통은 합병증 없이 진행되었다. 아프가 점수는 1분과 5분에 각각 7점과 8점이었다. 신생아 진찰에서 이상은 없었다. 이 신생아 관리에서 다음 중 가장 적절한 조치는?

## 선택지

A. 지도부딘 투여
B. HIV DNA 검사
C. HIV RNA 검사
D. 안심시키고 추적 관찰

## 해설

분만 전 1주에 모체 HIV RNA가 678 copies/mL이면 고위험 노출로 평가한다. 출생 직후 가능한 빨리, 보통 6시간 이내에 지도부딘을 포함한 3제 추정치료를 시작한다. A는 구성 약제의 투여로 해석하며 ZDV 단독 1회 요법을 뜻하지 않는다. 출생 NAT를 치료 전 또는 직후 채취하되 치료를 지연하지 않는다. 용량·기간은 재태연령·체중·위험도에 맞춘다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: HIV 노출아에서 ZDV 시작 A 유지하되 678 copies/mL 고위험 노출은 단독 1회 요법으로 불충분하므로 3제·검사 병행을 명시.
- https://clinicalinfo.hiv.gov/en/news/update-guidelines-use-antiretroviral-agents-pediatric-hiv-infection-2
- https://clinicalinfo.hiv.gov/en/guidelines/pediatric-arv/diagnosis-hiv-infection-infants-and-children?view=full

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000222
