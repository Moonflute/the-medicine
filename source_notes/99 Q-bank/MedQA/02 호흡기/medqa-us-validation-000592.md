---
type: qbank
schema_version: 1
id: medqa-us-validation-000592
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:5d90e2122f99c8cbe6fd318e99fcb39830c115376d9e28d1ad61dffb3c367c8d
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "우연히 발견된 폐결절"
  - "폐암 선별"
  - "흉부 CT"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyDieyghOymnSAoUHVsbW9uYXJ5IEVtYm9saXNtKS5tZA
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

50세 남성이 계단에서 넘어져 왼쪽 가슴을 난간에 부딪힌 뒤 발생한 흉벽 압통으로 진료를 받으러 왔다. 흉부 X선에서 골절은 없지만 오른쪽 상폐야에 5 mm 병변이 보인다. 과거 X선은 없다. 과거 하루 한 갑씩 10년간 흡연했고 18년 전에 금연했다. 가장 적절한 다음 처치는?

## 선택지

A. 12개월 후 흉부 X선 추적
B. 양전자방출단층촬영
C. 흉부 CT
D. 안심시키기

## 해설

이 병변은 이미 CT로 평가된 5 mm 결절이 아니라 흉부 단순촬영에서 처음 발견된 불명확한 병변이다. 비교할 과거 영상도 없으므로 C, 흉부 CT로 병변의 실제 존재와 크기·형태·밀도 등을 평가하는 것이 적절하다. 일반적으로 정맥 조영제 없는 흉부 CT를 사용한다.

작은 결절이라는 이유만으로 바로 안심시키거나 단순촬영을 12개월 뒤에만 추적하는 것은 초기 특성 평가를 대신하지 못한다. CT는 악성 가능성을 평가하고 이후 추적을 정하는 검사이지 악성을 확정적으로 배제하는 검사는 아니다. 이미 CT에서 확인된 6 mm 미만 결절의 추적 권고를 이 초기 평가 단계에 그대로 적용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. CXR에서 발견된 5 mm 결절과 이미 CT로 확인된 작은 결절 추적기준을 구별하고 CT가 악성을 완전히 배제한다는 과장 수정. 원문 흡연력 복원.
- https://www.radiologyinfo.org/en/info/acs-incidental-pulmonary-nodule

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000592
