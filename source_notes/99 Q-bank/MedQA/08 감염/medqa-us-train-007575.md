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
question_type: prevention
difficulty: standard
answer: A
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

채혈 직후 간호사가 사용한 속빈 주사침에 찔렸다. 노출 환자는 HIV 치료를 막 시작했고 혈중 바이러스량이 높다. 간호사는 1시간 이내에 진료를 받았다. 기본 검체를 채취한 뒤 다음 조치는?

## 선택지

A. 기초 검사 결과를 기다리지 않고 3제 HIV 노출 후 예방요법을 시작한다
B. 노출자의 HIV 항체가 양성일 때만 예방요법을 시작한다
C. 노출 환자의 내성 유전자검사가 나올 때까지 약을 보류한다
D. 상처를 세척하고 72시간 뒤에 시작 여부를 결정한다

## 해설


직업 노출 후 예방요법은 적응증이 있으면 가능한 한 빨리 시작하고 보통 28일간 투여한다. 기초검사를 같이 진행하되 결과 확인 때문에 첫 투약을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-007575 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 직업적 HIV PEP D 유지;2시간이 지나면 무효/혈청검사는6주에만이라는 잘못된 시간표 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://stacks.cdc.gov/view/cdc/258795/cdc_258795_DS1.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007575
- https://kdca.go.kr/bbs/kdca/55/305040/download.do
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12616222/
