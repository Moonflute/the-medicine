---
type: qbank
schema_version: 1
id: medqa-us-train-009429
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6a681f20e66d08ebd63c48e0452a17f65a0a1e8ffc049d5aadaa523dba12d8a
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "NSAID-induced acute kidney injury"
  - "NSAID 유발 급성 신손상"
  - "medication toxicity"
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL05hcHJveGVuLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
curation_status: "revised"
curation_reason: "없는 ACE억제제 복용을 삭제하고 모든 약물 무차별 중단이라는 위험한 선지를 원인 약물 재평가로 한정."
curation_reviewed_at: "2026-10-25"
medical_review_status: "evidence-reviewed"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

72세 남성이 구토로 식사와 수분 섭취가 줄었는데 이부프로펜을 계속 복용했다. 혈압과 체액 상태를 교정한 뒤 검사에서 크레아티닌이 기저치 0.9에서 2.7 mg/dL로 올랐고 대사성 산증이 동반됐다. 제2형 당뇨병으로 메트포르민을 복용 중이다. 약물에 대한 우선 조치는?

## 선택지

A. 이부프로펜과 메트포르민을 그대로 유지한다
B. 이부프로펜 대신 나프록센을 쓰고 메트포르민을 증량한다
C. 메트포르민은 유지하고 스테로이드를 추가한다
D. NSAID를 중단하고 신기능과 산증이 안정될 때까지 메트포르민을 보류한다

## 해설

NSAID는 탈수 상황에서 신장 관류를 떨어뜨릴 수 있다. 급성 신손상과 산증에서는 메트포르민 축적 위험도 있으므로 일시 보류하고 원인과 신기능을 재평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009429
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12270580/

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->

## 검수 근거

- 검수일: 2026-10-25
- 판정: 없는 ACE억제제 복용을 삭제하고 모든 약물 무차별 중단이라는 위험한 선지를 원인 약물 재평가로 한정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b8004451-7b26-425b-b5ea-cbb1b08e30e3
