---
type: qbank
schema_version: 1
id: medqa-us-train-004341
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f12ccd19ca412f87ea3868263e888880915b3b0d18b118936aceb46b9b1d2507
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "임신성 고혈압"
  - "단백뇨 없는 고혈압"
  - "산전 관찰"
question_type: 임상증례 객관식
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTmlmZWRpcGluZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 31주인 24세 초임부가 정기 산전관리를 위해 내원했다. 증상은 없고 임신 경과는 합병증이 없었다. 임신 전 BMI 30.5kg/m²이고 임신 중 총 10kg, 최근 4주 동안 2kg이 증가했다. 혈압 145/90 mmHg, 맥박 87회/분, 호흡수 14회/분, 체온 36.7°C이며 태아 심박수는 153회/분이다. 부종은 없고 심첨부에서 2/6등급 수축기 심잡음이 들린다. 24시간 소변 단백질은 음성이다. 가장 적절한 관리 전략은 무엇인가?

## 선택지

A. 관찰을 위해 입원
B. 외래에서 라베타롤 치료
C. 외래 관찰
D. 외래에서 니페디핀 치료

## 해설

31주에 새로 발견된 145/90 mmHg는 중증 범위가 아니며 현재 증상과 단백뇨가 없어, 반복 측정과 장기 손상 평가로 비중증 임신성 고혈압이 확인되고 추적이 보장된다면 USMLE/ACOG 맥락에서 외래 관찰(C)이 가능하다. 관찰은 무처치가 아니라 빈번한 혈압·증상·검사 및 태아 상태 평가를 포함한다. 단백뇨가 없다고 전자간증이 항상 배제되지는 않으며, 단백뇨 자체가 항고혈압제 시작의 단독 기준도 아니다. 중증 혈압이나 장기 손상, 모체·태아 상태 악화가 있으면 입원·치료를 재평가한다. 만성 고혈압의 약물 시작 기준이나 다른 국가 지침을 이 사례에 그대로 혼용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- https://kansaspqc.kdhe.ks.gov/wp-content/uploads/2025/09/ACOG-Gestation-HTN-and-Preeclampsia-Practice-Bulletin.pdf
- https://www.ahajournals.org/doi/10.1161/HYP.0000000000000249

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004341
