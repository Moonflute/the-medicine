---
type: qbank
schema_version: 1
id: medqa-us-validation-001248
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:3f2a232dc7f215b95126decbf93dd699c56d35584ddef933a10cef9fbfcf4eaa
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "요관결석"
  - "신장 산통"
  - "하이드로코돈"
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOyEnSAoVXJpbmFyeSB0cmFjdCBzdG9uZSkubWQ
question_type: management
difficulty: standard
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
  - ZHJ1ZzowMyDshoztmZTquLAvT25kYW5zZXRyb24ubWQ
curation_status: "revised"
curation_reason: "Opioid 조합을 신산통 보편적 일차 치료로 가르치지 않고 선택지 내 진통의 우선순위를 설명."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

41세 비임신 여성이 4mm 요관결석에 의한 심한 산통으로 내원했다. 감염 소견이 없고 신기능은 정상이다. 소화성 궤양, 출혈 위험, NSAID 알레르기는 없다. 우선 사용할 진통제는?

## 선택지

A. 경구 모르핀
B. 정맥 펜타닐
C. 경구 구연산칼륨
D. NSAID 계열 진통제

## 해설

금기가 없는 급성 신산통에는 NSAID가 우선 진통제다. 진통이 충분하지 않거나 금기가 있으면 다른 약제를 검토한다. 감염성 폐색이나 지속되는 조절 불능 통증에는 추가 처치가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001248
- https://pmc.ncbi.nlm.nih.gov/articles/PMC10330415/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: Opioid 조합을 신산통 보편적 일차 치료로 가르치지 않고 선택지 내 진통의 우선순위를 설명.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://uroweb.org/guidelines/urolithiasis/chapter/guidelines
