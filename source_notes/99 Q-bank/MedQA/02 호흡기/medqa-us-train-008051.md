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

37세 남성이 상기도 감염을 앓은 지 5주째 마른기침이 조금 남아 있다. 기침은 점차 줄고 발열·객혈·호흡곤란은 없다. 활력징후와 폐 진찰, 흉부 X선은 정상이다. 적절한 관리는?

## 선택지

A. 세균성 폐렴으로 보고 정맥 항생제를 시작한다
B. 감염 후 기침으로 보고 증상을 완화하며 경과를 관찰한다
C. 흉부 CT를 바로 촬영해 폐색전증을 찾는다
D. 객담이 없어도 폐결핵 치료를 시작한다

## 해설

상기도 감염 뒤 3–8주 동안 기침이 남을 수 있다. 호전 추세이고 경고 증상나 이상 소견이 없으면 항생제를 일률적으로 쓰지 않는다. 악화하거나 8주를 넘겨 지속되면 다른 원인을 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 단순 급성 기관지염의 불필요한 항생제 정답 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://www.cdc.gov/antibiotic-use/hcp/clinical-care/adult-outpatient.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008051
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8497763/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
