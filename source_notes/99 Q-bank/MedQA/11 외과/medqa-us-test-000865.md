---
type: qbank
schema_version: 1
id: medqa-us-test-000865
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:1e5838038df257277033a75e6d8c93fde6bba84efe73f19e665f3414084bdd2f
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "복강내출혈"
  - "비장 손상"
  - "외상성 출혈성 쇼크"
related_disease_slugs:
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

26세 남성이 교통사고 후 응급실에 왔다. 내원 시 체온 99.0°F, 혈압 100/60 mmHg, 심박수 125회/분, 호흡 16회/분, 산소포화도 98%였다. 왼쪽 상복부의 극심한 복통이 있었고 지난 30분 동안 악화되었다. 복벽 경직, 불수의적 방어 및 가벼운 타진에도 압통이 있었다. 침상 초음파에서 복강 내 혈액이 확인되었다. 정맥 수액을 더 투여했지만 체온 98.9°F, 혈압 82/50 mmHg, 심박수 180회/분, 호흡 20회/분, 산소포화도 97%로 악화되었다. 다음 중 가장 적절한 처치는?

## 선택지

A. 생리식염수 일시주입 후 수액 주입 뒤 혈역학을 재평가한다
B. 복부 및 골반 CT
C. 모르핀
D. 시험적 개복술

## 해설


복부 초음파에서 복강 내 혈액이 확인된 급성 복강내출혈은 외상성 쇼크이며, 혈역학적 불안정이 진행 중이므로 즉시 개복술을 통해 출혈원을 탐색·제어해야 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000865 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 외상 후 복강내 혈액·복막자극징후·수액에도 악화되는 쇼크는 CT 지연 없이 응급 개복술 D를 지지하며 원문과 해설이 일치한다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC8896237/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000865
