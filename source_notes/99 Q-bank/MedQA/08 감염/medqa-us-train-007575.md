---
type: qbank
schema_version: 1
id: medqa-us-train-007575
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbe48e59ca91708a818c0cec9c5117f880da9de74f01b81efafbc275e9653e65
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "HIV 노출 후 예방요법"
  - "주사침 손상"
  - "3제 항레트로바이러스 치료"
  - "직업적 노출"
related_disease_slugs:
  - MDgg6rCQ7Je8L-q4ieyEsSBISVYg6rCQ7Je8IChBY3V0ZSBISVYgSW5mZWN0aW9uKS5tZA
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
---

# MedQA US 임상문제

## 문제

26세 여대생이 주사침 손상으로 산업보건과에 내원했다. HIV 양성 환자에게서 채혈하다 바늘을 씌우는 과정에서 피부를 찔렀다. 즉시 베타딘으로 상처를 씻었다. 2년 전 의과대학 입학 당시 HIV 혈청검사는 음성이었고 한 명의 남성 파트너와만 지내며 정맥주사 약물 사용은 없다. 원인 환자는 최근 HIV를 진단받았고 CD4 수는 550/µL, 최근 바이러스량은 1,800,000 copies/mL이며 3일 전 HAART를 시작했다. 이 여학생의 노출을 관리하는 가장 적절한 다음 단계는 무엇인가?

## 선택지

A. 원인 환자의 유전자형 검사를 시행하고 결과에 맞춘 항레트로바이러스 치료를 시작한다
B. 여학생의 HIV 혈청검사를 반복하고 음성이면 3제 항레트로바이러스 치료를 시작한다
C. 여학생의 HIV 혈청검사를 반복하고 양성이면 3제 항레트로바이러스 치료를 시작한다
D. 여학생의 HIV 혈청검사를 채취하고 즉시 3제 항레트로바이러스 치료를 시작한다

## 해설


노출자의 baseline HIV 검사 등을 채취하면서 결과를 기다리지 않고 즉시3제 PEP D를 시작한다.2025 직업 노출 지침은 가능한 빨리, 통상72시간 이내 시작하여28일간 투여하며 늦은 고위험 노출은 전문가와 상의한다.2시간은 절대 배제 cutoff가 아니다. Baseline 검사는 지금 시행하고 후속 검사는 현행 검사법/노출·복약상황에 맞춰 추적한다. Source genotype 결과 때문에 초기 투약을 지연하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007575 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 직업적 HIV PEP D 유지;2시간이 지나면 무효/혈청검사는6주에만이라는 잘못된 시간표 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://stacks.cdc.gov/view/cdc/258795/cdc_258795_DS1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007575
