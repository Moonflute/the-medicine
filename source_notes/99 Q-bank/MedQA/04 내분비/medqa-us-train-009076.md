---
type: qbank
schema_version: 1
id: medqa-us-train-009076
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a6b3d66b7640153ecabea6663564e0d29f7f8bfe97000cb432457c776586c7a1
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hyperkalemia"
  - "acute kidney injury"
  - "rhabdomyolysis"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
  - MDUg7Iug7J6lL-2aoeusuOq3vOycte2VtOymnSAoUmhhYmRvbXlvbHlzaXMpLm1k
question_type: investigation
difficulty: complex
answer: B
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
---

# MedQA US 임상문제

## 문제

급성 신손상으로 내원한 54세 남성의 혈청 칼륨이 6.3 mmol/L이다. 검체 용혈은 없고 활력징후는 안정적이다. 고칼륨혈증이 심장 전도에 미치는 영향을 바로 확인할 검사는?

## 선택지

A. 심장초음파
B. 12유도 심전도
C. 운동부하 심전도
D. 혈청 심근 트로포닌

## 해설


심전도로 뾰족한 T파, QRS 연장 등 전도 변화를 즉시 확인하고 상태에 맞게 심장 모니터링과 치료를 진행한다. 정상 심전도만으로 고칼륨혈증의 위험이 없다고 판단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009076 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: K6.3 AKI의 ECG B는 심근손상 검사가 아닌 전기적 독성 평가. 정상ECG도 위험 배제 못하며 CK정상범위라는 원문 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009076
- https://guidelines.ukkidney.org/hyperkalaemia/
