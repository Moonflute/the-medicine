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
question_type: management
difficulty: complex
answer: C
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

한쪽 오금정맥에 급성 심부정맥혈전이 확인된 비임신 환자다. 신기능은 정상이고 항인지질증후군이나 약물 상호작용, 출혈 금기는 없다. 주사 항응고제를 먼저 쓰지 않고 시작할 수 있는 적절한 치료는?

## 선택지

A. 와파린 단독으로 바로 시작
B. 다비가트란 단독으로 즉시 시작
C. 아픽사반을 급성기 치료 용량으로 시작
D. 항응고 대신 하대정맥 필터를 우선 삽입

## 해설


적절한 환자에서 아픽사반이나 리바록사반은 초기 비경구 항응고제 없이 시작할 수 있다. 다비가트란이나 와파린을 선택하는 경우에는 초기 비경구 항응고가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004015 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 선택지 A의 heparin-warfarin 중첩은 유효하나 모든 현행 DVT의 유일 표준이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7556153/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004015
- https://www.nice.org.uk/guidance/NG158/chapter/recommendations
