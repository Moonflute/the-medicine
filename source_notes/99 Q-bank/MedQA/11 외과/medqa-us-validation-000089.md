---
type: qbank
schema_version: 1
id: medqa-us-validation-000089
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1ec8b9598ff8e6851e60fcbe71498e2f1e947b955b53f1ad8e482b7726866e09
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "모소낭종 농양"
  - "모소동"
  - "절개배농"
  - "Pilonidal abscess"
related_disease_slugs: []
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

24세 남성이 일주일간 엉덩이 위쪽의 통증성 부종으로 진료를 받으러 왔다. 오래 앉기 어렵다. 폐쇄수면무호흡과 제2형 당뇨병이 있고 metformin만 복용한다. 키175cm, 체중114kg, BMI37kg/m²이며 불안해 보인다. 맥박96회/분, 혈압124/86 mmHg이고 얼굴에 여드름이 보인다. 체온 38.1°C(100.6°F), 엉덩이 주름 위에 따뜻하고 홍반성인 압통성 낭종이 있었다. 가장 적절한 처치는?

## 선택지

A. 미골절제술
B. 절개 및 배농
C. 레티노이드 치료
D. 수술적 절제와 일차 상처 봉합

## 해설


피부에 발생한 따뜻하고 통증성 홍반성 낭종은 모소동(피부 농양)이며, 절개 및 배농이 표준 치료이다. 따라서 가장 적절한 처치는 절개 및 배농이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000089 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 모소농양 진단·절개배농 B는 유지하고 원문 위험요인과 진찰 맥락을 복원했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.idsociety.org/practice-guideline/skin-and-soft-tissue-infections/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000089
