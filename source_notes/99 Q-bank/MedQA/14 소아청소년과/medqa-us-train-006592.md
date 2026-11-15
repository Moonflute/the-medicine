---
type: qbank
schema_version: 1
id: medqa-us-train-006592
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bf29f227ca70193610b33ab99b304497ab26c992e965c85f203371e332f46361
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "완전 방실중격결손"
  - "공통 방실판막"
  - "좌축편위"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cp7IukIOykkeqyqSDqsrDshpAgKEF0cmlvdmVudHJpY3VsYXIgU2VwdGFsIERlZmVjdCkubWQ
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

생후 2개월 영아가 수유 중 숨이 차고 땀을 흘린다. 심초음파에서 일차공 심방중격결손, 유입부 심실중격결손과 하나의 공통 방실판이 보인다. 진단은?

## 선택지

A. 완전 방실중격결손
B. 일차공 심방중격결손만 있는 부분형
C. 삼첨판 폐쇄
D. 대동맥폐동맥 창

## 해설

공통 방실판에 심방과 심실 양쪽 수준의 중격결손이 있으면 완전 방실중격결손에 해당한다. 부분형은 일반적으로 심실 수준의 단락이 없다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 三尖판 폐쇄 사례에 완전 방실중격결손 해설이 연결된 오류를 교체.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006592
- https://www.acc.org/Latest-in-Cardiology/Articles/2025/02/03/12/17/Clinical-Practice-Algorithm-For-the-Follow-Up-of-Repaired-and-Unrepaired-Atrioventricular-Septal-Defects
