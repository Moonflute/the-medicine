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

만삭 출생한 생후 16일 신생아가 38.4℃로 내원했다. 호흡과 순환은 안정적이고 소변검사는 정상이다. 혈액배양은 채취했고 아직 항생제를 시작하기 전이다. 입원 및 경험적 항생제 투여와 함께 필요한 검사는?

## 선택지

A. 두부 CT를 먼저 촬영한다
B. 다음 날 혈구 수치만 재검한다
C. 요추천자로 뇌척수액을 검사한다
D. 수막 자극 징후가 생길 때까지 중추신경계 검사를 미룬다

## 해설

생후 8–21일 신생아의 발열은 겉보기에 안정적이어도 세균성 수막염을 배제해야 한다. 상태가 허용하면 뇌척수액을 검사하되, 검사 지연이 항생제 투여를 늦추게 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 생후16일 발열·수유불량의 요추천자 D 유지. 없는 저혈압·의식저하 소견 창작 제거.
- https://www.nice.org.uk/guidance/ng195/chapter/Meningitis-babies-with-early-onset-or-late-onset-infection-in-neonatal-units

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002571
- https://doi.org/10.1542/peds.2021-052228
