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
  - "Niacin-induced flushing"
related_disease_slugs: []
question_type: mechanism
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTWV0b3Byb2xvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남자가 심근경색 6개월 후 추적검사를 받으러 왔다. 현재 증상은 없고 제2형 당뇨병, 비만, 고혈압, 기분순환장애 병력이 있다. 히드로클로로티아지드, 메토프롤롤, 메트포르민, 인슐린, 플루옥세틴, 어유를 복용한다. 심장 진찰에서 S4가 들리고 검사에서 HDL 11 mg/dL, LDL 149 mg/dL이다. 약물을 조정한 뒤 2주 후 혈당 평균은 167 mg/dL이고 간헐적 홍조를 호소한다. 이 증상을 가장 잘 완화할 기전은 무엇인가?

## 선택지

A. 세포막에 GLUT-4 삽입
B. 안지오텐신 II 생성 억제
C. 시클로옥시게나제의 비가역적 불활성화
D. HMG-CoA 환원효소 억제 감소

## 해설

약물 변경 뒤 홍조와 혈당 상승은 니아신의 부작용을 시사한다. 니아신 홍조는 프로스타글란딘 매개 피부 혈관확장으로 발생하며, 아스피린의 비가역적 COX 억제(C)가 프로스타글란딘 생성을 줄여 증상을 완화한다. COX 억제가 프로스타글란딘 생성을 증가시켜 홍조를 일으킨다는 설명은 반대이다. 이 기전 문항이 니아신을 현행 심근경색 후 표준 지질치료로 권고한다는 뜻은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 니아신 홍조의 COX 기전 방향과 진찰·기분순환장애의 번역을 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009619
