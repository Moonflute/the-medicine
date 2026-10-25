---
type: qbank
schema_version: 1
id: medqa-us-validation-000523
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:54059176ee87614bd09dff77ab86e4b48e36920985dc4fe19ca5092c0092e55c
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "양성 전립선비대증"
  - "폐쇄성 요로병증"
  - "수신증"
question_type: diagnosis
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yWkeyEsSDsoITrpr3sg5gg67mE64yA7KadIChCZW5pZ24gUHJvc3RhdGljIEh5cGVycGxhc2lhKS5tZA
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

72세 남성이 빈뇨와 야간뇨로 진료를 받으러 왔다. 직장수지검사에서 매끈하고 압통 없이 균일하게 커진 전립선이 만져지고, 초음파에서 양측 수신증, BUN/크레아티닌 비 20 초과, FENa 1% 미만, 소변 나트륨 20 미만, 소변 삼투질농도 450 초과, 배뇨 후 잔뇨 100 mL 초과가 보인다. 다음 중 같은 진단 소견이 가장 나타나기 어려운 환자는?

## 선택지

A. 무통성 혈뇨, 18.1 kg 체중감소, 주혈흡충 감염이 확인된 55세 이집트 남성
B. 간헐적인 핵간 안근마비, 단속성 구음(scanning speech), 시신경염이 있는 27세 여성
C. 유치도뇨관이 꺾인 중환자
D. 왼쪽 옆구리로 방사되는 심한 산통이 있는 35세 여성

## 해설

본문의 양측 수신증과 잔뇨는 방광출구/하부요로 장애로 인한 폐색성 신장 손상을 시사한다. 방광 종양, MS 관련 신경인성 방광이나 꺾인 카테터는 양측 배출 장애를 만들 수 있다. 반면 D의 일측 요관 결석 양상은 반대 신장이 정상이라면 같은 양측 폐색·질소혈증 소견을 가장 덜 유발한다. 여성이 BPH를 덜 앓는다는 이유로 고르는 문항이 아니며 초기 폐색의 소변 지표는 신전성 양상과 겹칠 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 질문의 핵심은 BPH가 아니라 양측 폐색성 신기능 이상이라는 점과 scanning speech 오역을 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000523
