---
type: qbank
schema_version: 1
id: medqa-us-train-007722
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:07f7f77c953d72f4e13f5ec96f1585b9e439a10b8a6f5cc3472e78af03d49ec9
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "benign prostatic hyperplasia"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNiDruYTrh6jCt-yLoOyepS9GaW5hc3RlcmlkZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 남성이 3개월간 지속된 빈뇨를 주소로 내원하였다. 낮 동안 1~2시간마다 소변을 보아야 하며 밤에도 최소 2~3회 소변을 보기 위해 잠에서 깬다. 또한 지난 2개월 동안 배뇨 시작이 어렵고 소변 줄기가 약하며 배뇨 끝에 소변이 방울져 떨어지는 증상이 지속된다고 한다. 맥박은 분당 72회, 혈압은 158/105 mmHg이다. 직장수지검사상 전립선은 매끄럽고 대칭적으로 커져 있으며 압통이나 결절은 없다. 전립선특이항원(PSA)은 정상 범위 내에 있고 소변검사상 이상 소견은 없다. 배뇨 후 초음파 검사에서 잔뇨량은 110 mL이다. 다음 중 가장 적절한 다음 치료 단계는 무엇인가?

## 선택지

A. 방광 도뇨
B. 테라조신(Terazosin) 치료
C. 피나스테리드(Finasteride) 치료
D. 방광경 검사

## 해설

BPH에 합당한 배뇨 증상이 일상·수면을 방해하며 감염이나 급성 완전 요폐 소견은 없다. B, terazosin 같은 alpha 차단제는 전립선·방광경부 평활근 긴장을 줄여 비교적 빠르게 증상을 완화한다. Finasteride는 큰 전립선에서 진행 위험을 줄이는 데 사용할 수 있으나 효과가 느리다. 고령·혈압 치료 맥락에서 기립저혈압 등 부작용을 고려하며 PSA 정상만으로 약제를 결정하는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 괴로운 LUTS를 경증으로 단정한 설명을 교정하고 alpha blocker의 빠른 완화 및 부작용을 명시.
- 공식/학회 근거: https://uroweb.org/guidelines/management-of-non-neurogenic-male-luts/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007722
