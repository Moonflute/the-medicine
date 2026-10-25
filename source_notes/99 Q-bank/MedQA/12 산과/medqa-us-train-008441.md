---
type: qbank
schema_version: 1
id: medqa-us-train-008441
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:4f7262f3c68d80647bcf2df096391ffd5de9f9d176530a7d17c180dca780e7d9
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "chronic hypertension in pregnancy"
  - "preeclampsia risk"
  - "antihypertensive therapy"
question_type: management
related_disease_slugs:
  - MTIg7IKw6rO8L-yghOyekOqwhOymnSAoUHJlZWNsYW1wc2lhKS5tZA
  - MTIg7IKw6rO8L-yehOyLoOyEseqzoO2YiOyVlSAoR2VzdGF0aW9uYWwgSHlwZXJ0ZW5zaW9uKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRm9zaW5vcHJpbC5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
original_answer: D
answer_change_reason: "CHAP 이후 만성고혈압 치료 기준 140/90 반영; D에서 C로 정답 교정."
---

# MedQA US 임상문제

## 문제

37세 여성이 임신이 확인되어 첫 산전 진료를 위해 내원했다. G3P2이며 첫 임신에서 전자간증 병력이 있다. 1년 전 진단받은 동맥성 고혈압이 있지만 약은 복용하지 않았다. 8갑년 흡연력이 있고 1년 전에 금연했다고 한다. 혈압 140/90mmHg, 심박수 69회/분, 호흡수 14회/분, 체온 36.6°C(97.9°F)이다. 신체검사는 정상이다. 다음 중 이 여성의 관리에서 가장 적절한 선택은 무엇인가?

## 선택지

A. 포시노프릴
B. 황산마그네슘
C. 라베탈롤
D. 약물은 필요하지 않다

## 해설

기존 만성고혈압에서 140/90 mmHg가 지속되면 현행 ACOG는 치료 시작/증량을 권고한다. 따라서 반복 확인 후 선택지 중 라베탈롤(C)이 적절하며 약물이 필요 없다는 D는 구 권고에 근거한 답이다. ACE 억제제 포시노프릴은 피하고 이전 전자간증 병력에 따른 저용량 아스피린 예방 등도 별도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CHAP 이후 만성고혈압 치료 기준 140/90 반영; D에서 C로 정답 교정.
- https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2022/04/clinical-guidance-for-the-integration-of-the-findings-of-the-chronic-hypertension-and-pregnancy-chap-study

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008441
