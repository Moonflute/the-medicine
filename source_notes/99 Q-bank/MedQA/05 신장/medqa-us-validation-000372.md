---
type: qbank
schema_version: 1
id: medqa-us-validation-000372
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5faaa847b56cd7e932b4b04b4e24c4118bd12d9a997087115396bf9edcde0391
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "루푸스 신염"
  - "미만성 증식성 사구체신염"
  - "면역억제 치료"
related_disease_slugs:
  - MDUg7Iug7J6lL-ujqO2RuOyKpCDsvantjKXsl7wgKEx1cHVzIE5lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-unieymneyLnSDthqDrpqzsvantjKXsl7wgKE1lbWJyYW5vcHJvbGlmZXJhdGl2ZSBHbG9tZXJ1bG9uZXBocml0aXMpLm1k
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9QcmVkbmlzb2xvbmUubWQ
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL01ldGhvdHJleGF0ZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "증식성 루푸스 신염에서 cyclophosphamide 조합만이 유일 표준이라는 인상 수정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

47세 여성이 전신홍반루푸스 치료 중 혈뇨·단백뇨와 신기능 저하가 생겼다. 생검에서 활동성 IV형 루푸스신염이 확인됐다. 신장 침범을 치료할 초기 요법으로 적절한 것은?

## 선택지

A. 히드록시클로로퀸 단독
B. 메토트렉세이트와 엽산
C. 안지오텐신수용체차단제 단독
D. 글루코코르티코이드와 마이코페놀레이트를 포함한 유도 치료

## 해설

활동성 증식성 루푸스신염에는 글루코코르티코이드와 면역억제제가 필요하다. 마이코페놀레이트 기반 요법은 한 선택지이며, 저용량 정맥 사이클로포스파미드나 추가 약제는 신기능·임신 계획·질병 위험에 따라 선택한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000372
- https://kdigo.org/guidelines/lupus-nephritis/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 증식성 루푸스 신염에서 cyclophosphamide 조합만이 유일 표준이라는 인상 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2021-Glomerular-Diseases-Guideline_English_LN-2024-Update.pdf
