---
type: qbank
schema_version: 1
id: medqa-us-train-001786
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ae1aa5889d111e34f55eedc8ebc8f87a276d2644449fb1b7102f074a48870ff8
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "muscle-invasive bladder cancer"
  - "urothelial carcinoma"
  - "radical cystectomy"
question_type: management
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-uwqeq0keyVlCAoQmxhZGRlciBjYW5jZXIpLm1k
difficulty: standard
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

61세 남성이 지난 2주 동안 여러 차례 발생한 짙은 소변 때문에 내원했다. 배뇨통이나 옆구리 통증은 없다. 염료를 생산하는 공장에서 일하며 5년 전 직장 사고 이후 양측 중등도 청력저하가 있다. 복용약은 없고 29년 동안 하루 한 갑의 담배를 피웠으며 매일 술 한 잔을 마신다. 활력징후는 정상이다. 소변은 분홍색이고 요검사에서 적혈구 80/hpf, 백혈구는 없다. 방광경에서 방광 점막의 3-cm 종괴가 보였고 절제했다. 병리에서 근육층을 침범한 요로상피암이 확인되었다. 흉부 X선과 조영증강 복부·골반 CT에서 상부요로와 림프절은 정상이다. 다음 중 가장 적절한 관리 단계는 무엇인가?

## 선택지

A. 방광 내 화학요법을 포함한 경요도 종양절제
B. 방사선치료
C. 근치적 방광절제술
D. 고식적 다제 화학요법

## 해설

근육층을 침범한 국소 요로상피암에서는 C, 근치적 방광절제술이 적절한 근치 치료 선택이다. 단순 TURBT와 방광 내 약물만으로 근육침범암을 치료하지 않으며 방사선 단독도 표준적인 보존 복합치료와 다르다. 선택된 환자는 최대 TURBT와 동시 항암방사선의 삼중요법으로 방광 보존을 고려할 수 있으므로 모든 보존치료가 부적절하다고 단정하지 않는다. 주술기 전신 치료 여부는 중증도·청력 등 적합성과 최신 치료 계획에 따라 다학제로 결정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 근육침범암의 C를 유지하고 방광 보존 복합치료 불가능이라는 단정 및 청력저하의 cisplatin 적합성 의미를 보완.
- 공식/학회 근거: https://uroweb.org/guidelines/muscle-invasive-and-metastatic-bladder-cancer/chapter/disease-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001786
