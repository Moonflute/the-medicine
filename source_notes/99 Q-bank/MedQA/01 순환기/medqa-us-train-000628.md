---
type: qbank
schema_version: 1
id: medqa-us-train-000628
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8093b3c650e36d90122a5e7edfb19da6a6d061537e5ac4b41bdafea294b7451f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "chest pain"
  - "hypertension"
  - "type 2 diabetes mellitus"
question_type: mechanism
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

65세 남성이 2주 전부터 시작된 흉통으로 내원하였다. 흉통은 빠른 걸음으로 2블록을 걸은 후 시작된다. 통증은 어디로도 방사되지 않으며 위치를 특정하기 어렵다. 환자는 지난 6개월 동안 유사한 증상을 겪었으며 설하 니트로글리세린(sublingual nitroglycerin)을 처방받았고, 이는 통증 완화에 도움이 되었다. 환자는 고혈압과 제2형 당뇨병이 있다. 매일 리시노프릴(lisinopril)과 메트포르민(metformin)을 복용한다. 환자의 상태는 양호해 보인다. 체온은 37°C, 맥박은 분당 75회, 혈압은 145/90 mm Hg이다. 진찰상 심장 박동은 규칙적이다. S1과 S2는 정상이다. 폐 청진상 깨끗하다. 말초 부종은 없다. 이 환자의 흉통이 호전되는 기전으로 가장 가능성이 높은 것은 무엇인가?

## 선택지

A. 정맥 울혈 감소
B. 관상동맥 혈관 확장
C. 죽상경화반 안정성 증가
D. 이완기말 압력 감소

## 해설


니트로글리세린은 관상동맥을 확장시켜 협심증성 흉통을 완화한다. 환자의 흉통이 니트로글리세린에 반응한다는 점은 혈관 확장이 통증 완화의 주된 메커니즘임을 보여준다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000628
