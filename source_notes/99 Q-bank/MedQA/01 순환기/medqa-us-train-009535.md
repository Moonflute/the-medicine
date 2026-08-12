---
type: qbank
schema_version: 1
id: medqa-us-train-009535
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9bee345f9a7a5d405a76f473d411e6914b0f8a5a7e667fd218d4ba486c47459d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ventricular septal defect"
  - "심실중격결손"
  - "left-to-right shunt"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv67Cp7IukIOykkeqyqSDqsrDshpAgKEF0cmlvdmVudHJpY3VsYXIgU2VwdGFsIERlZmVjdCkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

생후 4주 된 남아가 건강검진을 위해 내원했다. 임신 40주에 3300 g(7 lb 4 oz)으로 태어났고 현재 체중은 4300 g(9 lb 1 oz)이다. 키와 체중은 50백분위수이다. 활력징후는 정상이고 왼쪽 하부 흉골연에서 3/6등급 거친 범수축기 잡음과 심첨부에서 부드러운 중간 이완기 잡음이 들린다. 폐는 깨끗하고 나머지 진찰은 정상이다. 신체 소견의 가장 가능성 높은 설명은 무엇인가?

## 선택지

A. 폐동맥과 흉부 대동맥 사이의 연결
B. 심방중격을 통한 우좌 단락
C. 심실중격을 통한 좌우 단락
D. 우심실 유출로 폐색

## 해설


청진에서 거친 수축기 잡음(좌하흉골연)과 부드러운 중간 이완기 잡음(심첨부)은 좌우 단락을 일으키는 심실중격결손(VSD)을 시사한다. VSD는 좌심실에서 우심실로 혈액이 흐르는 좌우 단락을 만들며, 폐동맥과 대동맥 사이의 연결(PDA)이나 심방중격결손은 다른 청진 소견을 보인다. 따라서 정답은 C이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009535
