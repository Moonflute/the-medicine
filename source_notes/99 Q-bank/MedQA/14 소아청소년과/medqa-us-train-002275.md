---
type: qbank
schema_version: 1
id: medqa-us-train-002275
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8c01514348a0fbed29f9c7c5519937a37550cfd32283d70a0c94e1f82dc55966
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "ventricular septal defect"
  - "pulmonary hypertension"
  - "Eisenmenger syndrome"
  - "secondary polycythemia"
question_type: risk_factor
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7Ius7IukIOykkeqyqSDqsrDshpAgKFZlbnRyaWN1bGFyIFNlcHRhbCBEZWZlY3QpLm1k
  - MDIg7Zi47Z2h6riwL-2PkOqzoO2YiOyVlSAoUHVsbW9uYXJ5IEh5cGVydGVuc2lvbikubWQ
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

3세 남아가 2일간 악화된 호흡곤란으로 응급실에 왔다. 키는 30백분위수, 체중은 25백분위수이다. 체온 37.1°C, 맥박 144회/분, 호흡 40회/분, 혈압 80/44 mmHg이다. 양쪽 폐기저부에서 수포음이 들리고 왼쪽 하부 흉골 경계에서 3/6등급 범수축기 잡음, 왼쪽 네 번째 늑간에서 2/6등급 중기 이완기 잡음이 들린다. 치료하지 않으면 다음 중 어떤 합병증이 발생할 위험이 있는가?

## 선택지

A. 적혈구증가증
B. 이차성 고혈압
C. 혈소판증가증
D. 심근 허혈

## 해설

큰 VSD를 치료하지 않으면 과도한 폐혈류와 폐혈관 재형성으로 폐고혈압이 진행할 수 있다. 이후 우좌 단락/아이젠멩거 생리가 발생해 만성 저산소혈증이 생기면 이차성 적혈구증가증(A)이 나타날 수 있다. 단순한 초기 좌우 단락이나 좌심부전 자체가 곧 청색증을 만든다는 뜻이 아니며 이 합병증이 모든 환자에게 가장 흔하다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 단순 VSD의 좌심부전 자체가 만성 저산소증/적혈구증가증을 일으킨다는 설명에 필요한 폐혈관 질환·단락 역전 단계를 복원했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002275
