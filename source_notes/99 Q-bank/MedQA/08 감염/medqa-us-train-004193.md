---
type: qbank
schema_version: 1
id: medqa-us-train-004193
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3765c9e53e29a9aed3c53547e4b2e6f2535573da5b21866da542977565b14c1a
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "C형 간염"
  - "간경변"
  - "혈소판감소증"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsl7wgKEhlcGF0aXRpcykubWQ
question_type: 임상증례 객관식
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

61세 남자가 수년간 진료를 받지 않다가 일차의료기관에 등록하러 왔다. 특별한 호소는 없지만 추가 문진에서 막연한 복부 불편감이 있다. 알려진 과거력과 복용약은 없다. 10대 후반과 20대에 헤로인을 주사했지만 10년 넘게 약물과 술을 끊고 지냈다. 활력징후는 심박수 90회/분, 호흡수 17회/분, 혈압 110/65 mmHg, 체온 37.0°C이다. 복부가 약간 팽만하고 혈소판 77,000/μL, INR 1.7이다. 진단을 위한 다음 단계는 무엇인가?

## 선택지

A. 항핵항체 검사
B. C형 간염 항체 검사
C. HIV ELISA
D. 혈소판 응집검사

## 해설


주사약물 병력과 혈소판감소·INR 상승은 만성 간질환/문맥고혈압 가능성을 시사한다. 선택지 B의 anti-HCV로 평가하되 양성이면 reflex HCV RNA로 현재 감염을 확인한다. 항체만으로 활동성 감염을 확정하지 않으며 간 기능·섬유화·다른 바이러스 등도 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004193 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: HCV antibody B는 선별이며 현재 감염 확진은 RNA가 필요함을 보강.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/hepatitis-c/hcp/diagnosis-testing/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004193
