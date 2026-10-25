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
question_type: management
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

30세 남성이 6시간 동안 진행된 근력 약화로 내원했다. 이날 철인3종 경기를 마친 직후 양쪽 발목에 심한 통증이 생겼고, 아침에 일어나 양쪽 상·하지가 점점 약해졌다고 한다. 과거력과 복용약은 없다. 체온 37.0℃(98.6℉), 맥박 66회/분, 호흡수 21회/분, 혈압 132/83mmHg이다. 근육 촉진에서 중등도에서 중증의 광범위한 통증이 있고 근력은 5/5, 심부건반사는 양측 2+이다. 나트륨 141mEq/L, 칼륨 6.3mEq/L, 크레아티닌 6.1mg/dL, 칼슘 6.3mg/dL, CK 90mcg/L이다. 다음 중 가장 적절한 다음 처치는 무엇인가?

## 선택지

A. 혈액투석
B. 심전도
C. 폴리스티렌 설폰산나트륨(Kayexalate)
D. 정맥 염화칼슘

## 해설


정답 B. K6.3mEq/L와 심한 신기능 이상이면 즉시 ECG 및 심장 감시로 고칼륨의 전기적 영향을 평가한다. 이는 심근 괴사를 확인하는 검사가 아니며 정상 ECG가 고칼륨 위험을 배제하지 않는다. ECG 변화/불안정이면 신속한 칼슘 등 응급치료를 병행하고 K를 낮추는 치료를 검토한다. 운동 뒤 통증만으로 횡문근융해를 확진할 수 없으며 제시 CK는 원문 참고범위 내다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009076 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: K6.3 AKI의 ECG B는 심근손상 검사가 아닌 전기적 독성 평가. 정상ECG도 위험 배제 못하며 CK정상범위라는 원문 한계 명시.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.ukkidney.org/health-professionals/guidelines/treatment-acute-hyperkalaemia-adults-0

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009076
