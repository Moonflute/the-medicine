---
type: qbank
schema_version: 1
id: medqa-us-train-006794
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37170ff26b8bfea64c80ebe2a6de9a9c6c28e45b2db4f93da3e86178ed210cc5
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "장폐색"
  - "기계적 소장폐색"
  - "비위관 감압"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snqXtj5Dsg4kubWQ
  - MTEg7Jm46rO8L-yepSDtj5Dsg4kgKEJvd2VsIE9ic3RydWN0aW9uKS5tZA
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
---

# MedQA US 임상문제

## 문제

47세 여성이 복통으로 응급실에 내원했다. 어젯밤 저녁 식사 중 통증이 시작되었고 이후 복부 팽만, 변비 및 구토가 생겼다. 메트포르민, 인슐린, 레보티록신 및 이부프로펜을 복용한다. 체온은 99.0°F(37.2°C), 혈압은 139/79 mmHg, 맥박은 분당 95회, 호흡수는 분당 12회, 실내 공기 산소포화도는 98%이다. 불편해 보이고 복부에 장음 감소, 팽만 및 네 사분면의 전반적인 압통이 있다. 심장과 폐 진찰은 정상이다. 다음 중 처치로 가장 적절한 다음 단계는?

## 선택지

A. 응급 수술
B. 정맥 항생제와 스테로이드
C. 비위관 삽입, 금식 및 정맥 수액
D. 대변 잠혈검사

## 해설


팽만·구토·배변 감소는 장폐색 또는 ileus를 의심하게 한다. 복막염·쇼크 등 즉각 수술 적응증이 제시되지 않은 현재는 금식·비위관 감압과 정맥 수액/전해질 교정(C)이 적절한 초기 처치이다. 동시에 원인·정도·허혈 여부를 평가해야 하며 장음 감소만으로 기계적 폐색을 확진하지 않는다. 복막자극징후·교액·허혈 등이 확인되면 보존치료만 지속하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006794 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 장음 감소·구토만으로 기계적 소장폐색을 확진한 표현을 초기 폐색/ileus 관리로 수정했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6006983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006794
