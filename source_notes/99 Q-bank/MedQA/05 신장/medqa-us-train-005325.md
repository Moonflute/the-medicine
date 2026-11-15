---
type: qbank
schema_version: 1
id: medqa-us-train-005325
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:605adbf3c03bca375b464017e51ef0bb9764230a0e146cb03986a6949a6bec8c
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "굿파스처 증후군"
  - "항사구체기저막 항체"
  - "폐신장 증후군"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyGjSDsp4Ttlokg7Yag66as7L2p7Yyl7Je8IChSYXBpZGx5IFByb2dyZXNzaXZlIEdsb21lcnVsb25lcGhyaXRpcykubWQ
  - MDUg7Iug7J6lL-2PkOyLoOyepSDspp3tm4TqtbAgKFB1bG1vbmFyeS1SZW5hbCBTeW5kcm9tZSkubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
curation_status: "revised"
curation_reason: "신염을 신증후군으로 오기하고 면역복합체 질환으로 설명한 오류 수정."
curation_reviewed_at: "2026-10-25"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

32세 남성에게 폐포출혈과 사구체신염이 있고 항사구체기저막 항체가 양성이다. 글루코코르티코이드와 사이클로포스파미드를 시작했다. 순환 항체를 빠르게 제거하기 위해 병행할 치료는?

## 선택지

A. 혈액투석
B. 정맥 면역글로불린
C. 혈장교환
D. 흡입 스테로이드

## 해설

항사구체기저막 질환에서 폐포출혈이 있으면 면역억제에 혈장교환을 병행해 순환 항체를 제거한다. 투석은 신부전의 합병증을 관리하지만 항체 제거 목적의 혈장교환을 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 신염을 신증후군으로 오기하고 면역복합체 질환으로 설명한 오류 수정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://kdigo.org/wp-content/uploads/2017/02/KDIGO-2021-Glomerular-Diseases-Guideline_English_LN-2024-Update.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005325
- https://kdigo.org/guidelines/gd/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
