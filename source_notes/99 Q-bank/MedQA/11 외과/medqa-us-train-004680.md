---
type: qbank
schema_version: 1
id: medqa-us-train-004680
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bd3b25405ae26f0b03d17031a0bbbba07a6e69cf317d5dbec0caa94d2db52d0a
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "간 열상"
  - "복부 둔상"
  - "모리슨 주머니 혈액"
  - "splenic injury"
related_disease_slugs:
  - MTEg7Jm46rO8L-u5hOyepSDshpDsg4EgKFNwbGVuaWMgSW5qdXJ5KS5tZA
question_type: investigation
difficulty: standard
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUm9zdXZhc3RhdGluLm1k
  - ZHJ1ZzowMyDshoztmZTquLAvTGFuc29wcmF6b2xlLm1k
---

# MedQA US 임상문제

## 문제

66세 남성이 교통사고로 복부 둔상을 입었다. FAST에서 복강 내 액체가 보이지만 반복 혈압은 124/78 mmHg이고 복막 자극 징후가 없다. 혈역학적으로 안정된 상태에서 손상 장기와 출혈을 평가할 검사는?

## 선택지

A. 복부 단순 X선
B. 복부 비조영 CT
C. 정맥 조영 복부·골반 CT
D. 즉시 진단적 개복술

## 해설


혈역학적으로 안정된 둔상 환자에서 FAST가 양성이면 조영 CT로 장기 손상, 조영제 유출과 다른 손상을 확인해 치료를 결정한다. 쇼크나 범복막염이 생기면 CT 때문에 수술을 늦추지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004680 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비장 손상에 의한 횡격막 자극·연관통을 횡격막 파열과 흉강내 혈액 이동으로 잘못 설명한 기전을 교체했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004680
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7106618/
