---
type: qbank
schema_version: 1
id: medqa-us-train-008051
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8a60c0f517e071b5dca1c3af2463fb56b40bf1eccc5b94ba123fdae2183310ca
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "postinfectious cough"
  - "acute bronchitis"
  - "azithromycin"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-q4ieyEsSDquLDqtIDsp4Dsl7wgKEFjdXRlIEJyb25jaGl0aXMpLm1k
question_type: management
difficulty: complex
answer: "B"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQW1veGljaWxsaW4ubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQXppdGhyb215Y2luLm1k
  - ZHJ1ZzowOCDqsJDsl7wvTGV2b2Zsb3hhY2luLm1k
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 단순 급성 기관지염의 불필요한 항생제 정답 교정."
curation_status: "revised"
curation_reason: "단순 급성 기관지염의 불필요한 항생제 정답 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

37세 남자가 2주 전 시작되어 지난 2일 동안 빈도와 중증도가 증가한 기침으로 내원했다. 계속 기침해 잠들기 어렵다. 저열, 콧물, 피로가 있었지만 기침만 남고 모두 호전되었다. 고지혈증으로 심바스타틴을 복용한다. 활력징후는 정상이며 두경부, 부비동, 공막, 결막, 콧구멍에는 이상이 없다. 인두 점막은 홍반성이지만 삼출물은 없고 양측 폐 청진은 깨끗하다. 흉부 X선에서 경화, 혈관 과다, 삼출은 없다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 레보플록사신
B. 항생제 없이 증상 완화 치료와 경과 관찰을 시행한다
C. 아지스로마이신과 아목시실린-클라불라네이트
D. 아목시실린

## 해설

약 2주의 기침은 만성 기침으로 분류하지 않는다. 정상 활력·폐 청진·흉부 X선과 호전된 상기도 증상은 단순 급성 기관지염에 부합하며, 이 자료만으로 항생제를 처방할 근거가 없다. 증상 완화와 경과 관찰을 시행하고 악화·새 발열·호흡곤란 또는 백일해 노출 등 새로운 단서가 생기면 재평가한다. Azithromycin의 항염 효과를 항생제 처방 근거로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 단순 급성 기관지염의 불필요한 항생제 정답 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/adult-outpatient.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008051

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
