---
type: qbank
schema_version: 1
id: medqa-us-train-005653
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bb3e7401ee63a9dfd95633541185e2176f7595068938ee7dca26824831004bed
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "연쇄상구균 감염 후 사구체신염"
  - "A군 연쇄상구균"
  - "항생제 예방"
related_disease_slugs:
  - MDUg7Iug7J6lL-yXsOyHhOyDgeq1rOq3oCDqsJDsl7wg7ZuEIOyCrOq1rOyytOyLoOyXvCAoUFNHTikgKFBvc3QtU3RyZXB0b2NvY2NhbCBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: prevention
difficulty: standard
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "예방 효과 불충분을 절대 예방 불가능으로 단정하던 선지·해설을 CDC 표현에 맞춰 좁혀 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

13세 남아가 하루 동안 지속된 거품 섞인 갈색 소변으로 소아과를 방문했다. 몇 주 전 연쇄상구균 인두염을 앓았던 것 같지만 부모가 부작용을 걱정하여 항생제 치료를 받지 않았다고 한다. 혈압은 148/96 mmHg, 심박수는 분당 84회, 호흡수는 분당 15회이다. 검사에서 혈청 크레아티닌 상승, 적혈구 원주를 동반한 혈뇨, 현성 단백뇨 없이 증가한 요단백이 확인된다. 항스트렙톨리신 O 역가가 상승하여 연쇄상구균 감염 후 사구체신염(PSGN)으로 진단되었다. 어머니는 진단에 크게 걱정하며 항생제를 받았더라면 예방할 수 있었는지 묻는다. 다음 중 가장 적절한 답변은 무엇인가?

## 선택지

A. 항생제 치료로 PSGN 발생을 예방할 수 있습니다.
B. 항생제 치료가 PSGN 발생을 예방하는지 판단할 근거는 충분하지 않습니다.
C. 항생제 치료는 면역억제 환자에서만 PSGN을 예방합니다.
D. 항생제 치료는 PSGN의 중증도를 감소시킵니다.

## 해설

항생제가 PSGN 발생을 예방하는지 판단할 근거는 충분하지 않다. 따라서 치료를 받았으면 확실히 예방되었을 것이라고 말하지 않는다. 이것이 연쇄상구균 감염 치료가 불필요하다는 뜻은 아니며 잔존 감염 제거·전파 감소를 위해 적절한 항생제 치료가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005653

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 예방 효과 불충분을 절대 예방 불가능으로 단정하던 선지·해설을 CDC 표현에 맞춰 좁혀 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/post-streptococcal-glomerulonephritis.html
