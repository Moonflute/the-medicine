---
type: qbank
schema_version: 1
id: medqa-us-test-000519
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:97e79be0a125bc9702e7ebaece6d64b7298932a059d7a815faebaa878f5e9a9a
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈전성 혈소판감소성 자반증"
  - "미세혈관병성 용혈성 빈혈"
  - "임신 합병증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uvuOyEuO2YiOq0gOuzkeyEsSDsmqntmIgg67mI7ZiIIChNaWNyb2FuZ2lvcGF0aGljIEhlbW9seXRpYyBBbmVtaWEsIE1BSEEpLm1k
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

임신 12주 환자에게 새 두통, 점상출혈과 혈소판 1.8만/μL가 확인됐다. 혈액도말에는 분열 적혈구가 많고 용혈 지표가 상승했지만 PT와 간효소는 정상이다. 혈전성 혈소판감소성 자반증을 의심할 때 혈장 치료 전에 채취해야 하는 검사는?

## 선택지

A. ADAMTS13 활성과 억제항체 검사
B. 혈소판 응집 검사
C. 혈청 태아성 헤모글로빈
D. 자궁동맥 도플러만 시행

## 해설


임신 초기에도 혈전성 미세혈관병증이 생길 수 있다. 치료 전 검체로 ADAMTS13을 평가하며, 임상 가능성이 높으면 검사 결과를 기다리느라 치료를 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000519 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 임신 초기 용혈·심한 혈소판감소·정상 응고/간효소에서 TTP B 지지. 임신 TMA의 가장 흔한 원인이라고 일반화한 해설 교정. 도말 그림 없어도 본문 검사로 선지 비교 가능.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000519
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8146131/
