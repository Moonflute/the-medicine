---
type: qbank
schema_version: 1
id: medqa-us-validation-000671
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:905d622d33ce99a4d089a21e13e518899da164841312012162900f3156c8706f
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "소장폐색"
  - "공기-액체층"
  - "장폐색 방사선 소견"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_shozsnqUg7Y-Q7IeEIChTbWFsbCBCb3dlbCBPYnN0cnVjdGlvbikubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

69세 여성이 48시간 동안 대변과 가스를 배출하지 못하고 복통, 복부팽만, 타진상 고음, 압통으로 응급실에 왔다. 다음 중 복부 방사선촬영에서 가장 가능성 높은 소견은?

## 선택지

A. 하부 위장관 조영술에서 사과심 병변
B. 하부 위장관 조영술에서 장막을 통과하는 다발성 점막 돌출
C. 복부 방사선촬영에서 공기-액체층을 동반한 팽창된 장고리의 사다리 모양 배열
D. 하행결장의 하스트라 소실과 납관 모양

## 해설


소장 폐색 시 복부 X‑ray에서 확장된 장고리가 공기‑액체층을 보이며 사다리 모양(‘스텝‑ladder’)으로 배열되는 것이 전형적인 소견이다. 이는 폐색 부위 위의 장이 가스와 액체가 교대로 존재함을 나타낸다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000671 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 tympany to percussion을 고장음 청진으로 오역한 본문만 타진상 고음으로 정정; 기계적 폐색의 방사선 C 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000671
