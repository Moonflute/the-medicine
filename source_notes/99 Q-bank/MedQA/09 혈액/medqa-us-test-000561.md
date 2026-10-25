---
type: qbank
schema_version: 1
id: medqa-us-test-000561
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:a828f4e82da4f177bdfebab9a2a3c0fa155f9a28208deaa932804c199a126844
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "와파린과 비타민 K 상호작용"
  - "완전 채식"
  - "INR 감소"
related_disease_slugs: []
question_type: mechanism
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

55세 남성이 일반 건강검진을 받으러 왔다. 당뇨병, 고혈압, 심방세동이 있어 와파린, 인슐린, 리시노프릴, 메토프롤롤을 복용 중이다. 최근 형이 심장마비로 사망하여 건강을 개선하려고 완전 채식으로 바꾸었다. 체온 98.6°F(37.0°C), 혈압 167/108 mmHg, 맥박 90회/분, 호흡 17회/분, 산소포화도 98%였다. 신체진찰은 정상이었다. 혈색소 12 g/dL, 헤마토크릿 36%, 백혈구 7,550/mm³, 혈소판 197,000/mm³, INR 1.0, 혈청 나트륨 139 mEq/L, 염소 100 mEq/L, 칼륨 4.3 mEq/L, 중탄산염 25 mEq/L, BUN 20 mg/dL, 포도당 99 mg/dL, 크레아티닌 1.1 mg/dL, 칼슘 10.2 mg/dL였다. 이 검사 결과를 가장 잘 설명하는 것은?

## 선택지

A. 식단 변화
B. 간 대사 증가
C. 신장 청소율 증가
D. 약물 복용 불이행

## 해설


채식 전환으로 비타민 K가 많은 녹색 채소 섭취가 증가했다면 와파린 효과가 감소해 INR이 낮아질 수 있어 A가 가장 타당하다. 비타민 K 섭취 감소는 오히려 INR을 올리는 방향이다. 모든 채식이 같은 함량인 것은 아니므로 실제 섭취와 복약을 확인하고 비타민 K 섭취를 일정하게 유지한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000561 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 채식 변경 후 INR 저하 A 유지. 비타민K 감소가 와파린 효과를 낮춘다는 정반대 기전 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cuh.nhs.uk/patient-information/oral-anticoagulant-therapy-with-warfarin-phenindione-or-acencoumarol/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000561
