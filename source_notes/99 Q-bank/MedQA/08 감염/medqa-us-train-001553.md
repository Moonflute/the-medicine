---
type: qbank
schema_version: 1
id: medqa-us-train-001553
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8ec5a5923e382338cbb4de75f57731dadd644711806f0dba5ca4defe760867fd
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "progressive multifocal leukoencephalopathy"
  - "JC virus"
  - "HIV/AIDS"
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

치료받지 않은 HIV 환자가 발열 없이 6주 동안 보행장애와 오른쪽 다리 위약이 심해졌다. MRI에서 종괴 효과와 뚜렷한 조영증강이 없는 비대칭 백질 병변이 여러 개 보인다. 의심되는 진행성 다초점 백질뇌병증을 뒷받침할 검사는?

## 선택지

A. 뇌척수액 JC 바이러스 PCR
B. 혈청 톡소포자충 IgG 단독
C. 뇌척수액 크립토코쿠스 항원 단독
D. 혈청 HIV 항체만 반복

## 해설


종괴 효과 없이 진행하는 다초점 백질 병변은 진행성 다초점 백질뇌병증을 시사한다. 뇌척수액 JC 바이러스 PCR이 진단을 뒷받침하며, 음성이더라도 판단에 따라 민감한 검사로 재검하거나 다른 진단을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-001553 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 진행성 국소 신경증상·고도면역저하·종괴효과 없는 비조영 백질병변과 JC 바이러스 PML B의 부합을 확인. Toxo IgG 양성만으로 활성뇌염은 아님.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001553
- https://clinicalinfo.hiv.gov/en/guidelines/hiv-clinical-guidelines-adult-and-adolescent-opportunistic-infections/progressive
