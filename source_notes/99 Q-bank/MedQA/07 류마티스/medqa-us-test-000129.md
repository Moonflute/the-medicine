---
type: qbank
schema_version: 1
id: medqa-us-test-000129
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:875397b9c41e359e8aba398c42e7470e5ea4d877775046daa3d7546f715be9e6
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "다발근육염"
  - "염증성 근병증"
  - "근육 생검"
related_disease_slugs:
  - MDcg66WY66eI7Yuw7IqkL-yXvOymneyEsSDqt7zrs5Hspp0gKEluZmxhbW1hdG9yeSBNeW9wYXRoeSkubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRmx1dmFzdGF0aW4ubWQ
---

# MedQA US 임상문제

## 문제

47세 여성이 스타틴을 중단한 지 6주가 지났는데도 대칭성 근위부 근력저하가 진행하고 CK가 8,800 U/L다. 피부 발진은 없다. 면역매개 괴사성 근병증과 단순 스타틴 근육 부작용을 구별하는 데 도움이 되는 검사는?

## 선택지

A. 항HMG-CoA 환원효소 항체
B. 항아세틸콜린 수용체 항체
C. 항이중가닥 DNA 항체
D. 항갑상선 과산화효소 항체

## 해설


스타틴을 중단해도 심한 근력저하와 CK 상승이 지속되면 면역매개 괴사성 근병증을 의심한다. 항HMG-CoA 환원효소 항체는 그 아형을 뒷받침하며 전문 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 `medqa-us-test-000129` 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 근위부 약화와 A의 근섬유속 내 염증 패턴 연결 유지. CK가 정상이면 다발근염을 확진한다는 해설 및 근섬유 내부 침윤 표현 교정.
- 범위: content-reviewed. 기초 내용 대조와 해당 쟁점의 근거 확인을 구별하며 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000129
- https://doi.org/10.1093/rheumatology/keac115
