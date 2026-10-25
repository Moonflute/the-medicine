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
question_type: risk_factor
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

임신 14주인 30세 초임부가 첫 산전 진료를 받으러 왔다. 오심과 피로가 있고 양극성장애로 리튬을 복용한다. 12주 전 세균성 질염으로 클린다마이신 치료를 마쳤다. 교사로 일하고 12년 동안 하루 한 갑의 담배를 피웠지만 임신을 알게 된 후 중단했다. 다음 중 태아가 발생할 위험이 가장 높은 합병증은?

## 선택지

A. 우심실의 심방화
B. 태아 히단토인 증후군
C. 골 손상
D. 맥락망막염

## 해설

임신 초기 리튬 노출은 선천 심장기형, 특히 엡스타인 기형의 위험 증가와 관련될 수 있어 A가 적절하다. 삼첨판의 아래쪽 전위로 우심실 일부가 기능적으로 우심방에 포함되는 것이 우심실의 심방화다. 노출이 곧 기형 발생을 뜻하지 않고, 이 문항을 근거로 기분안정제를 임의 중단해야 한다는 의미도 아니다. 공식 허가정보는 임신 중 위험과 치료 필요성을 개별적으로 고려하도록 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 리튬 임신 노출의 심장기형 연관성을 현행 허가정보로 확인하고 우심실 심방화라는 해부학적 의미를 명확히 했다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=63b3790f-a9b5-47f4-bae1-ddf8b43c13c1
- https://www.medicines.org.uk/emc/product/10828/smpc

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003019
