---
type: qbank
schema_version: 1
id: medqa-us-train-008177
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d7df5843578b3e7ac907a45732f79d912a6590300a3c99b64a8589da2c55533b
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "nephrolithiasis"
  - "renal colic"
  - "noncontrast CT"
  - "Nephrolithiasis"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "조영제는 항상 신장을 손상시킨다는 일반화 없이 비조영 CT의 목적 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

43세 남성이 갑작스러운 옆구리 산통과 혈뇨로 내원했다. 초음파에 수신증이 있지만 결석이 보이지 않아 위치와 크기를 정해야 한다. 혈압은 안정적이고 발열은 없다. 다음 영상검사는?

## 선택지

A. 조영증강 복부·골반 CT
B. 같은 초음파를 계속 반복한다
C. 복부·골반 비조영 CT
D. 복부 단순촬영만 한다

## 해설

초음파가 불명확한 성인에서 비조영 CT로 결석의 위치·크기와 폐색 정도를 평가할 수 있다. 일반적 결석 확인에는 조영제가 필요하지 않다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008177
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 조영제는 항상 신장을 손상시킨다는 일반화 없이 비조영 CT의 목적 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://acsearch.acr.org/docs/69362/narrative/
