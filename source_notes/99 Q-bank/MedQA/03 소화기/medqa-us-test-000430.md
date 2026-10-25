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

63세 남성이 지난 1년 동안 점점 심해진 연하곤란과 ‘속쓰림’으로 외래에 왔다. 고혈압과 위식도역류병 병력이 있고 고혈압에 리시노프릴을 복용한다. 여러 GERD 치료에 실패했다. 상복부 촉진에서 약간의 압통이 있었다. 바륨 삼킴검사에서 횡격막 아래에 위식도 접합부가 있고 위저부가 왼쪽 흉곽으로 탈장되어 있었다. 다음 중 기저 질환의 가장 적절한 처치는?

## 선택지

A. 생활습관 교정
B. 제산제 병용요법
C. 오메프라졸을 계속 복용
D. 수술적 위고정술

## 해설

위식도 접합부는 횡격막 아래에 남아 있고 위저부만 흉강으로 올라간 소견은 제2형 식도곁열공탈장에 합당하다. 진행성 연하곤란이 있고 여러 약물치료에도 증상이 지속되므로, 제시된 선택지 중에서는 D의 수술적 치료가 가장 적절하다. 제산제나 PPI를 계속하는 것만으로 탈장된 위의 기계적 문제를 교정할 수 없다.

선지의 '수술적 위고정술'은 수술적 교정이라는 출제 의도로 해석한다. 실제 수술은 탈장 환원과 열공 복원, 환자에 따른 항역류술 또는 위고정술 등을 고려하며, 모든 환자에서 위고정술 단독이 표준이라는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 체부백선 해설을 증상성 식도곁열공탈장 해설로 교체. 원정답 D 유지; 위고정술만이 모든 환자의 표준 술식이라는 오해 방지.
- https://www.sages.org/publications/guidelines/guidelines-for-the-surgical-treatment-of-hiatal-hernias/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000430
