---
type: qbank
schema_version: 1
id: medqa-us-test-000430
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:79e879bd4e194ad03befe50bc3961f12192a39400235223fc57d5484b5c2ec93
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "식도주위 탈장"
  - "위식도역류병"
  - "위고정술"
  - "Hiatal hernia"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sl7Tqs7Ug7YOI7J6lIChIaWF0YWwgSGVybmlhKS5tZA
question_type: management
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMyDshoztmZTquLAvT21lcHJhem9sZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

63세 남성이 진행하는 연하곤란과 식후 가슴 압박감으로 내원했다. 바륨 검사에서 위식도 접합부는 횡격막 아래에 있지만 위저부가 흉강으로 올라가 있다. 약물치료에도 증상이 지속되는 제2형 식도곁열공탈장이다. 다음 조치는?

## 선택지

A. 증상이 심해도 생활습관 교정만 계속한다
B. 제산제 용량만 계속 늘린다
C. 위저부가 내려올 때까지 추적 없이 관찰한다
D. 탈장 환원과 열공 복원을 위해 수술 적합성을 평가한다

## 해설

식도곁열공탈장은 위 일부가 흉강으로 들어가는 구조적 문제다. 연하곤란 등 기계적 증상이 지속되면 수술적 교정을 검토한다. 위고정이나 항역류술의 추가 여부는 환자와 수술 조건에 따라 달라진다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 체부백선 해설을 증상성 식도곁열공탈장 해설로 교체. 원정답 D 유지; 위고정술만이 모든 환자의 표준 술식이라는 오해 방지.
- https://www.sages.org/publications/guidelines/guidelines-for-the-surgical-treatment-of-hiatal-hernias/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000430
