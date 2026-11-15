---
type: qbank
schema_version: 1
id: medqa-us-train-007420
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e37a7aced92deb8f7d25f8d94f9185c001ce04b00c112b34a5725dc586fae997
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "지속성 우울장애"
  - "기분저하증"
  - "만성 우울"
  - "Persistent depressive disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 환자가 3년째 거의 매일 기분이 가라앉아 있다. 피곤하고 잠이 잘 오지 않으며 집중이 어렵다. 이 기간 중 기분이 괜찮았던 가장 긴 때는 3주였다. 뚜렷한 조증·경조증은 없다. 이 장기 경과를 가장 잘 설명하는 진단은?

## 선택지

A. 우울 기분을 동반한 적응장애
B. 순환성장애
C. 지속성 우울장애
D. 일시적 정상 애도

## 해설

성인의 지속성 우울장애는 우울한 기분과 관련 증상이 적어도 2년 지속되고, 이 기간에 증상 없이 지낸 때가 2개월을 넘지 않는 양상이다. 주요우울 삽화가 겹치는지도 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 지속성우울장애를 반드시 경미한 우울의 간헐 반복이라고 정의한 해설을 만성 경과와 짧은 무증상 간격으로 교정했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007420
- https://www.ncbi.nlm.nih.gov/books/NBK541052/
