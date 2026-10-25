---
type: qbank
schema_version: 1
id: medqa-us-train-002571
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1bfbdd9791ce57db277754c53543d0960a77cc35ad553c745da6187ca188cf47
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "neonatal fever"
  - "neonatal meningitis"
  - "lumbar puncture"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Iug7IOd7JWEIOuHjOyImOunieyXvCAoTmVvbmF0YWwgTWVuaW5naXRpcykubWQ
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

생후 16일 남아가 2일간 발열과 수유불량으로 응급실에 왔다. 전날 밤 매우 보채고 대부분의 밤 동안 울었다. 임신 36주에 2,430 g으로 태어났고 임신과 분만은 순조로웠다. 체온 38.6°C, 맥박 180회/분, 혈압 82/51 mmHg이며 황달과 심한 보챔이 있다. 혈액배양을 채취하고 수액 소생을 시작했으며 카테터로 채취한 소변검사는 정상이다. 다음 중 진단의 가장 적절한 다음 단계는?

## 선택지

A. 머리 MRI
B. 안심시키고 관찰
C. 머리 CT
D. 요추천자

## 해설

16일 신생아의 발열·보챔·수유불량은 수막염·패혈증을 배제해야 한다. 상태가 허용하면 요추천자(D)로 뇌척수액을 검사한다. 대천문·목이 정상이어도 수막염을 배제하지 못한다. 검사 때문에 경험적 항생제를 지연하지 않으며 본문은 저혈압·의식저하를 제시하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생후16일 발열·수유불량의 요추천자 D 유지. 없는 저혈압·의식저하 소견 창작 제거.
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002571
