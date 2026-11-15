---
type: qbank
schema_version: 1
id: medqa-us-train-003019
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e6cc1b16d9d92997bbe08fe50829e4ed6d7068afe53a9342618dacb753f33be4
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "lithium exposure in pregnancy"
  - "Ebstein anomaly"
  - "fetal cardiac malformation"
  - "teratogenic medication"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Jeh7Iqk7YOA7J24IOq4sO2YlSAoRWJzdGVpbiBBbm9tYWx5KS5tZA
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2xpbmRhbXljaW4ubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 14주 산모가 양극성장애로 임신 첫 삼분기에 리튬을 복용했다. 현재 기분은 안정적이고 정신건강의학과와 약을 조정 중이다. 태아 평가로 권할 검사는?

## 선택지

A. 임신 중기 정밀 초음파로 태아 심장 구조를 자세히 확인
B. 양수천자로 리튬에 의한 심장기형을 확진
C. 산모 혈중 리튬 농도가 정상이면 태아 구조 평가는 생략
D. 출산 후 신생아 심전도만 시행

## 해설

임신 초기 리튬 노출은 일부 심장기형 위험을 높일 수 있어 임신 중기 정밀 초음파로 심장 구조를 확인한다. 노출이 기형을 뜻하지 않으며, 리튬 지속·조정은 산모의 재발 위험과 함께 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 리튬 임신 노출의 심장기형 연관성을 현행 허가정보로 확인하고 우심실 심방화라는 해부학적 의미를 명확히 했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63b3790f-a9b5-47f4-bae1-ddf8b43c13c1
- https://www.medicines.org.uk/emc/product/10828/smpc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003019
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2023/06/treatment-and-management-of-mental-health-conditions-during-pregnancy-and-postpartum
