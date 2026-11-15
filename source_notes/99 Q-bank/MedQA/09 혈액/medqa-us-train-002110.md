---
type: qbank
schema_version: 1
id: medqa-us-train-002110
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:052c775c18805244d9a829467ffa7494f7f3f04a8c971b8abf89286145bef3e3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "immune thrombocytopenia"
  - "immune thrombocytopenic purpura"
  - "antiplatelet IgG"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2KueuwnOyEsSDtmIjshoztjJDqsJDshozshLEg7J6Q67CY7KadIChJZGlvcGF0aGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgSVRQKS5tZA
question_type: management
difficulty: complex
answer: B
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

33세 환자에게 새로 일차 면역성 혈소판감소증이 확인됐다. 혈소판은 16,000/μL이고 잇몸에서 소량의 출혈이 반복되지만 위중한 출혈은 없고 혈압은 안정적이다. 금기가 없다면 적절한 초기 면역치료는?

## 선택지

A. 장기간 리툭시맙 단독 투여부터 시작한다
B. 단기간 전신 글루코코르티코이드를 투여한다
C. 즉시 비장절제술을 시행한다
D. 증상과 관계없이 매일 예방적 혈소판 수혈을 한다

## 해설


새로 진단된 성인이 혈소판 30,000/μL 미만이고 점막출혈이 있으면 단기간 스테로이드를 초기 치료로 고려한다. 빠른 상승이 필요하거나 출혈이 중하면 면역글로불린 등 추가 치료를 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-002110 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고립된 중증 혈소판감소·점막출혈·정상 응고검사와 ITP의 IgG 매개 혈소판 파괴 D를 직접 대조해 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002110
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8958378/
- https://doi.org/10.1182/bloodadvances.2026021269
