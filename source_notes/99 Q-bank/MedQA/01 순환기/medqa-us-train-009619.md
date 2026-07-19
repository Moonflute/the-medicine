---
type: qbank
schema_version: 1
id: medqa-us-train-009619
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a0eaaf792345c2eea05b7e7b52aa97eb86c5b8c1bb59ea7ef2dc20d83d9356ce
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "niacin-induced flushing"
  - "나이아신 유발 홍조"
  - "aspirin mechanism"
question_type: mechanism
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

64세 남자가 심근경색 6개월 후 추적검사를 받으러 왔다. 현재 증상은 없고 제2형 당뇨병, 비만, 고혈압, 순환기분열증 병력이 있다. 히드로클로로티아지드, 메토프롤롤, 메트포르민, 인슐린, 플루옥세틴, 어유를 복용한다. 심전도에서 S4가 들리고 검사에서 HDL 11 mg/dL, LDL 149 mg/dL이다. 약물을 조정한 뒤 2주 후 혈당 평균은 167 mg/dL이고 간헐적 홍조를 호소한다. 이 증상을 가장 잘 완화할 기전은 무엇인가?

## 선택지

A. 세포막에 GLUT-4 삽입
B. 안지오텐신 II 생성 억제
C. 시클로옥시게나제의 비가역적 불활성화
D. HMG-CoA 환원효소 억제 감소

## 해설


니아신 복용 시 홍조는 시클로옥시게나제(COX) 억제로 프로스타글란딘 E2 생성이 증가하면서 발생한다. COX를 비가역적으로 억제하면 이 기전이 차단되어 홍조가 완화된다. 따라서 시클로옥시게나제의 비가역적 불활성화가 증상 완화에 가장 적절한 설명이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009619
