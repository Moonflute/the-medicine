---
type: qbank
schema_version: 1
id: medqa-us-train-009564
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:96d8024e014c9740245643c4769abbae7c67081d4ca085d1c3a2089425058cf0
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "hypothyroidism"
  - "갑상선기능저하증"
  - "phenytoin-induced hypothyroidism"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv6rCR7IOB7ISgIOq4sOuKpSDsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: diagnosis
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9QaGVueXRvaW4ubWQ
---

# MedQA US 임상문제

## 문제

49세 여성이 경련성 질환 병력과 함께 피로, 체중 증가, 탈모로 내원했다. 증상은 한 달 동안 점점 악화되었고 호전되지 않았다. 10년 전 진단받은 경련성 질환으로 최근 약을 변경했으며 현재 페니토인 300 mg/일과 종합비타민을 복용한다. 식욕 감소, 변비, 추위 불내성이 있다. 체온 37.0°C, 혈압 100/80 mmHg, 맥박 60회/분, 호흡수 16회/분, 산소포화도 98%이다. 반응이 느리지만 협조적이고 피부가 거칠고 건조하며 전신에 경도~중등도 탈모와 부서지는 모발이 있다. 추가로 예상되는 소견은 무엇인가?

## 선택지

A. 반사항진
B. 경직
C. 기억력 저하
D. 지연성 운동이상증

## 해설


정답 C. 피로·체중증가·변비·추위 불내성, 건조한 피부와 부서지는 모발은 갑상선기능저하를 의심하게 하며 기억력 저하가 동반될 수 있다. 체온37°C는 저체온이 아니다. Phenytoin은 갑상선검사 결과와 호르몬 대사에 영향을 줄 수 있으나 투약 사실만으로 임상 갑상선기능저하의 원인으로 확진하지 않는다. TSH 등과 전체 약물/신경학적 상태를 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009564 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: phenytoin 복용만으로 갑상선억제/저체온을 확정한 설명 대신 제시된 hypothyroid 표현형의 기억력 저하 C 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009564
