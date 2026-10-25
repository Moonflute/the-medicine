---
type: qbank
schema_version: 1
id: medqa-us-train-006165
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d8500501f263fd2415b65bb79c4448b90d80d53368a5e6ae04abd00ff489e23e
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "후부 요도판막"
  - "신생아 요로폐색"
  - "내시경적 판막 절제"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuhnCDtj5Dsg4kgKFVyaW5hcnkgdHJhY3Qgb2JzdHJ1Y3Rpb24pLm1k
difficulty: complex
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

생후 12일 된 남아가 3일 동안 지속된 고열로 응급실에 왔다. 무기력하고 잘 먹지 못하며 소변을 볼 때 계속 운다. 가족력은 없고 임신 37주에 태어났으며 경한 양수과소증이 있었다. 체온은 39°C(102.2°F), 맥박은 분당 165회, 호흡수는 분당 60회, 혈압은 55/30 mmHg이다. 앞·뒤 숫구멍이 열려 있고 치골결합 위 2~3cm까지 정중선 하복부 종괴가 만져진다. 요로감염으로 진단되어 광범위 항생제를 시작했다. 다음 중 가장 도움이 될 중재는 무엇인가?

## 선택지

A. 요도 게실 절제술
B. 내시경적 덱스트라노머 겔 주입
C. 방광루 조성술
D. 후부 요도판막 절제술

## 해설

남아 신생아의 양수과소증, 팽창 방광과 요로감염은 후부 요도의 판막성 막에 의한 방광출구 폐쇄를 시사한다. 외요도구가 닫혀 있는 상태를 뜻하지 않는다. 원인에 대한 확정 치료는 D, 내시경적 판막 절제/소작이다. 다만 이 아이는 패혈증·혈역학 이상이 의심되므로 항생제와 소생, 방광 배액으로 안정화한 뒤 확정 처치를 진행하며 충분한 배액이 어렵다면 일시 요로전환을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 후부 요도판막을 외요도구가 열리지 않는 병변으로 잘못 설명한 오류 교정, 안정화·방광 배액 선행을 보완.
- 공식/학회 근거: https://uroweb.org/guidelines/paediatric-urology/chapter/congenital-lower-urinary-tract-obstruction

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006165
