---
type: qbank
schema_version: 1
id: medqa-us-train-008417
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:02b0f8eeb6424b7fcb2fd030090ba660ac5efb119f5404236fea22941d2d3a53
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "diabetic ketoacidosis"
  - "hypokalemia"
  - "type 1 diabetes mellitus"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDUg7Iug7J6lL-yggOy5vOulqO2YiOymnSAoSHlwb2thbGVtaWEpLm1k
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: C
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

제1형 당뇨병 병력이 있는 22세 여성이 하루 동안 지속된 오심, 구토, 졸림으로 응급실에 내원했다. 체온 98.3°F(36.8°C), 혈압 114/74mmHg, 맥박 120회/분, 호흡수 27회/분, 실내 공기 산소포화도 100%이다. 신체검사에서 혼란스럽고 기면 상태인 젊은 여성이다. 초기 검사 결과는 다음과 같다.

혈청:
Na⁺ 139mEq/L
Cl⁻ 100mEq/L
K⁺ 2.9mEq/L
HCO₃⁻ 9mEq/L
BUN 20mg/dL
포도당 599mg/dL
크레아티닌 1.1mg/dL
Ca²⁺ 10.2mg/dL
AST 12U/L
ALT 10U/L

초기 심전도에서 동성 빈맥이 관찰된다. 다음 중 이 환자에게 시행할 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 인슐린과 칼륨
B. 생리식염수와 인슐린
C. 생리식염수와 칼륨
D. 생리식염수, 인슐린, 칼륨

## 해설


정답 C. 심한 고혈당·고음이온차 산증과 의식 변화는 DKA를 시사한다. K 2.9mEq/L로 인슐린을 먼저 투여하면 치명적 저칼륨혈증이 악화될 수 있다. 초기 등장성 수액과 칼륨 보충을 시작하고 K가 >3.5mmol/L로 회복된 뒤 인슐린을 시작한다. 신기능·소변량과 심전도/전해질을 추적한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008417 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: K2.9 DKA에서 수액만 먼저가 아니라 K 보충 후 인슐린이라는 핵심 C 근거 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008417
