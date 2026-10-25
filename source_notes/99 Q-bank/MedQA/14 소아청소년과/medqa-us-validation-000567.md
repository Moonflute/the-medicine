---
type: qbank
schema_version: 1
id: medqa-us-validation-000567
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a09d8e22673782989edc1591c3495ec4e43033f24511a76a20d9692ac12fe4bc
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "백일해"
  - "Bordetella pertussis"
  - "발작성 기침"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cx7J287ZW0IChQZXJ0dXNzaXMpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

2세 남아가 심하게 기침하다가 구토하고, 기침 발작 뒤 들이쉴 때 '흡' 소리가 나는 증상으로 진료를 받으러 왔다. 예방접종력이 확인되지 않고 얼굴에 점상출혈이 있다. 비인두 배양과 PCR을 시행 중이다. 권장 항생제는?

## 선택지

A. 세프트리악손
B. 세포탁심
C. 에리트로마이신
D. 암피실린

## 해설

발작성 기침·흡기 whoop·기침 후 구토는 백일해를 시사한다. 2세에서 보기 중 erythromycin(C)은 권장 macrolide 중 하나이다. Azithromycin·clarithromycin도 상황에 따라 사용하며 지역·여행 관련 내성을 고려한다. 생후1개월 미만에서는 유문협착 위험과 중증 백일해 위험을 고려해 azithromycin이 우선이라는 별도 원칙이 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 2세 사례를1세 이하로 바꾼 오류와 macrolide 선택·내성 일반화를 교정.
- https://www.cdc.gov/pertussis/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000567
