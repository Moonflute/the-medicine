---
type: qbank
schema_version: 1
id: medqa-us-train-007372
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:623cc2ab3c33abaf6f496aa536171bcf02b414241f093c75cbd0a089c0a698de
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "주의력결핍 과잉행동장애"
  - "자극제 치료"
  - "혈압 상승"
question_type: investigation
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOydmOugpSDqsrDtlY0g6rO864ukIO2WieuPmSDsnqXslaAgKEFESEQpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

11세 아이가 ADHD로 메틸페니데이트를 복용하기 시작했다. 집중은 나아졌지만 점심을 덜 먹는다. 치료를 조절하면서 정기 추적할 항목은?

## 선택지

A. 간초음파와 담도 효소
B. 키·체중·식욕과 혈압·맥박
C. 소변 약물 선별검사만
D. 매 방문 뇌파 및 뇌 MRI

## 해설

메틸페니데이트는 식욕을 줄이고 체중 증가에 영향을 줄 수 있으며 맥박과 혈압도 변할 수 있다. 증상 효과와 함께 성장곡선 및 심혈관 지표를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: ADHD 자극제의 혈압상승 D는 맞으나 가장높은위험은 고혈압이라는 불필요한 빈도 단정 제거. 부작용 감시 범위 설명.
- https://www.dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=1a88218c-5b18-4220-8f56-526de1a276cd&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007372
- https://www.nice.org.uk/guidance/ng87/chapter/recommendations
- https://doi.org/10.1542/peds.2019-2528
