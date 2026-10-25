---
type: qbank
schema_version: 1
id: medqa-us-train-009347
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:22ea0ec058dbb4112e12da1c1e70f0927fd8d6c64d935510560b05b83fb7e9f1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "cirrhosis"
  - "간경변"
  - "hypersplenism"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: mechanism
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
---

# MedQA US 임상문제

## 문제

44세 남자가 7년 만에 처음으로 정기 건강검진을 받으러 내원했다. 쉽게 피로한 것 외에는 호소가 없다. 반 파인트의 증류주를 매일 마시며 과거력은 특이사항이 없다. 체온 98.7°F(37.1°C), 맥박 65회/분, 호흡수 15회/분, 혈압 120/70 mmHg이다. 양쪽 손바닥이 붉고 복부는 국소 압통이 없지만 팽창으로 평가가 어렵다. 혈색소 11.0 g/dL, 헤마토크릿 33%, 백혈구 5,000/mm³, 혈소판 60,000/mm³, Na⁺ 135, K⁺ 4.5, Cl⁻ 100, HCO₃⁻ 24 mEq/L, BUN 15 mg/dL, 크레아티닌 1.3 mg/dL, 총 빌리루빈 3.0 mg/dL, AST 112 U/L, ALT 80 U/L, ALP 130 U/L이다. 혈소판감소증의 가장 가능성 높은 설명은 무엇인가?

## 선택지

A. 골수 침윤
B. 요독증
C. 비장기능항진증
D. 자가면역 항체

## 해설


만성 과음, 손바닥 홍반, 복부팽만과 간수치·빌리루빈 이상은 진행 간질환을 시사한다. 문맥고혈압에 따른 비장 내 혈소판 격리, 즉 비장기능항진증(C)이 선택지 중 가장 적절하다. 실제 간경변의 혈소판감소에는 thrombopoietin 감소나 알코올의 골수 억제 등도 기여할 수 있다. 요독증은 보통 혈소판 수보다 기능을 저하시킨다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009347 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 간경변 단서와 혈소판감소의 비장기능항진 C 유지. 단순 파괴 증가만이 아닌 문맥고혈압에 의한 비장 격리 및 다른 간질환 기여를 구분.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009347
