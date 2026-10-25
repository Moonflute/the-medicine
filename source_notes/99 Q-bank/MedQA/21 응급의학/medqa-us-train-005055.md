---
type: qbank
schema_version: 1
id: medqa-us-train-005055
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7eb662b569434b90388f87a63805af909884dbf7ad4a8cc41688bb30205dcc17
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "출혈성 저혈량"
  - "생리적 ADH 분비"
  - "저나트륨혈증"
question_type: mechanism
related_disease_slugs:
  - MDUg7Iug7J6lL-yggOuCmO2KuOulqO2YiOymnSAoSHlwb25hdHJlbWlhKS5tZA
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvVmFzb3ByZXNzaW4ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

44세 남자가 고속 교통사고 45분 후 응급실에 왔다. 개방성 골반골절과 왼쪽 경골 골절로 출혈성 쇼크가 있어 대량수혈을 시작하고 혈관조영술과 동맥색전술을 시행했다. 혈청 나트륨은 125 mEq/L이다. 다음 중 저나트륨혈증의 가장 가능성 높은 설명은?

## 선택지

A. 병적 알도스테론 분비
B. 부신 위기
C. 병적 ADH(바소프레신) 분비
D. 생리적 ADH(바소프레신) 분비

## 해설

출혈성 저혈량은 삼투질농도와 별개로 ADH 분비를 자극해 유효 순환량을 보존한다. 따라서 보기 중 생리적 ADH 분비(D)가 맞고 이를 곧바로 SIADH라 부르지 않는다. 실제 저나트륨혈증의 정도는 기존 상태와 섭취/수액 및 배설의 균형도 고려해야 하며 ADH만으로 모든 수치를 설명했다고 단정할 수 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 출혈성 저혈량에서 ADH D는 적절한 비삼투 자극이며 모든 저나트륨혈증의 가장 흔한 원인이라고 한 과장 제거.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005055
