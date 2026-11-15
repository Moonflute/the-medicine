---
type: qbank
schema_version: 1
id: medqa-us-train-002592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d969f318bbc93567f13978184e898294bdc7f94e0d486dfed9d839b3b354ce91
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "thrombotic thrombocytopenic purpura"
  - "microangiopathic hemolytic anemia"
  - "plasma exchange"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
  - MDkg7ZiI7JWhL-uvuOyEuO2YiOq0gOuzkeyEsSDsmqntmIgg67mI7ZiIIChNaWNyb2FuZ2lvcGF0aGljIEhlbW9seXRpYyBBbmVtaWEsIE1BSEEpLm1k
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9UcmFuZXhhbWljQWNpZC5tZA
---

# MedQA US 임상문제

## 문제

혈소판이 19,000/μL이고 분열 적혈구와 용혈 소견이 있는 환자에게 새 혼돈이 생겼다. PT와 aPTT는 정상이고 혈액 진료팀이 면역성 혈전성 혈소판감소성 자반증 가능성이 높다고 판단했다. ADAMTS13 검체를 확보한 뒤 바로 할 처치는?

## 선택지

A. 결과가 확정될 때까지 혈장교환을 미룬다
B. 혈소판 수만 보고 예방적 혈소판 수혈을 한다
C. 치료적 혈장교환과 전신 스테로이드를 신속히 시작한다
D. 아스피린만 투여하고 경과를 본다

## 해설


면역성 혈전성 혈소판감소성 자반증이 강하게 의심되면 검사 결과를 기다리지 않고 혈장교환과 스테로이드를 시작한다. 전문팀이 카플라시주맙·리툭시맙 등의 추가 치료를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002592 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 급성 iTTP 혈장교환 B 유지하되 단독 완결 요법으로 오해하지 않게 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC13470878/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002592
- https://pubmed.ncbi.nlm.nih.gov/40533296/
