---
type: qbank
schema_version: 1
id: medqa-us-train-004015
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:35a304ec141b2e97855875d740dc7a0678cde58a3bf0f8452dc3cf87af052842
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "심부정맥혈전증"
  - "혈전성 소인"
  - "단백질 C 결핍"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: 임상증례 객관식
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
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9IZXBhcmluLm1k
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
---

# MedQA US 임상문제

## 문제

35세 여자가 왼쪽 하지의 재발성 심부정맥혈전증(DVT)으로 일차의료기관을 방문했다. 채식주의자이며 동물성 단백질이 아닌 식품으로 충분한 단백질 섭취를 유지하는 데 어려움이 있다. 현재 하루 한 갑을 흡연하고 하루 한 잔의 와인을 마신다. 불법 약물은 부인하지만 과거 헤로인 주사 사용력이 있다. 하지 부종과 통증으로 입원하여 DVT 진단을 받은 적이 4회 있다. 체온 36.7°C, 혈압 126/74 mmHg, 심박수 87회/분, 호흡수 16회/분이다. 맥박은 강하게 뛰고 안색은 창백하며 호흡음과 심음은 정상이고 비장은 약간 커져 있다. DVT 치료와 전체 혈전성 소인 검사를 위해 입원했다. 가장 적절한 초기 관리는 무엇인가?

## 선택지

A. 헤파린과 와파린 시작
B. 와파린 시작, 목표 INR 2.0~3.0
C. 와파린 시작, 목표 INR 2.5~3.5
D. 중재영상의학과에 하대정맥 필터 삽입 의뢰

## 해설


급성 DVT에 금기가 없으면 항응고를 시작한다. 이 선택지에서는 warfarin 단독 초기투여보다 heparin과 함께 시작하는 A가 적절하다. VKA를 선택하면 heparin/LMWH와 최소5일 및 치료 INR 확보까지 중첩한다. 그러나 적격 환자에서는 DOAC가 흔히 선호되며 신기능·임신·APS·약물상호작용 등으로 개별화한다. 금기 없는 환자에게 항응고 대신 하대정맥 필터를 일률 삽입하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004015 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지 A의 heparin-warfarin 중첩은 유효하나 모든 현행 DVT의 유일 표준이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7556153/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004015
