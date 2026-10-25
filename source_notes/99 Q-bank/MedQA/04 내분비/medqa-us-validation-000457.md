---
type: qbank
schema_version: 1
id: medqa-us-validation-000457
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fd6e3e54337cfe497ff2b6322674caf759a3448df8f53a72ff21b7d94ced5c9d
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "그레이브스병"
  - "갑상선 안병증"
  - "방사성 요오드 치료"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: prognosis
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

45세 여성이 6개월간 진행되는 과민성, 심계항진, 더위 불내성, 잦은 배변, 6.8 kg 체중감소로 진료를 받으러 왔다. 목 앞쪽에 매끈하게 균일하게 커진 종괴와 눈꺼풀 후퇴를 동반한 안구돌출이 있다. TSH는 검출되지 않고 유리 T3·T4와 TSH 수용체 자가항체가 상승해 그레이브스병으로 진단되었다. 방사성 요오드 치료를 시작했다. 이 환자에서 발생 위험이 가장 높은 합병증은?

## 선택지

A. 안구돌출 악화
B. 무과립구증
C. 성대마비
D. 갑상선암

## 해설


정답 A. RAI는 Graves 안병증의 악화 위험인자이며 기존 안구돌출이 있는 이 환자에서 선택지 중 가장 관련된 합병증이다. 기전은 단순히 눈이 직접 방사선에 자극받는 것이 아니라 갑상선 항원 방출과 면역반응 변화 등이 관여한다. 위험인자·안병증 활동도에 따라 다른 치료나 예방적 glucocorticoid를 고려한다. 무과립구증은 thionamide, 성대마비는 수술과 더 관련된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000457 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: greatest risk를 가장 위험한 합병증으로 오역한 질문 정정; RAI가 눈을 직접 방사선 자극한다는 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/34297684/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000457
