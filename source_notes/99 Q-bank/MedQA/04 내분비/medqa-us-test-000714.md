---
type: qbank
schema_version: 1
id: medqa-us-test-000714
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:533c449f2a367a4fa639183431d23e0c6dff2474d16f4945796e26692afd9884
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "제1형 당뇨병"
  - "고혈당"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: A
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

16세 남아가 오늘 시작된 급성 구토와 복통으로 응급실에 왔다. 이틀 전부터 몸이 좋지 않아 인슐린을 중단했다. 체온 37°C(98.6°F), 호흡 33회/분으로 얕고 빠르며 맥박 107회/분, 혈압 101/68 mmHg였다. 심한 탈수와 피로, 피부긴장도 저하가 있었고 입에서 과일 냄새가 났다. 혈당은 691 mg/dL, 혈액 pH 7.21, pCO₂ 32 mmHg, HCO₃⁻ 15.2 mEq/L, 나트륨 122 mEq/L, 칼륨 5.8 mEq/L였으며 요검사에서 케톤체가 양성이었다. 다음 중 가장 적절한 즉시 처치는?

## 선택지

A. 정맥 수액과 인슐린 투여
B. 정맥 항생제 투여
C. 정맥 수액과 경구 혈당강하제 투여
D. 칼륨과 마그네슘 투여

## 해설

정답은 A이다. 인슐린 중단 뒤 고혈당·케톤뇨·대사산증과 탈수가 있어 DKA이다. 소아/청소년에서는 초기 정맥 수액으로 순환을 회복시킨 뒤, 통상 수액 시작 최소 1시간 후 칼륨을 확인하면서 인슐린 주입을 시작한다. 인슐린 정맥 bolus는 사용하지 않는다. 초기 K 5.8이라도 총체내 칼륨은 부족할 수 있어 반복 검사에 따라 보충한다. 따라서 수액과 인슐린을 포함한 A가 맞지만 두 치료를 반드시 동시에 시작한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 소아 DKA의 수액과 인슐린을 동시에 시작한다는 해설을 초기 수액 뒤 인슐린 원칙으로 교정.
- https://cps.ca/en/documents/position/current-recommendations-for-management-of-paediatric-diabetic-ketoacidosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000714
