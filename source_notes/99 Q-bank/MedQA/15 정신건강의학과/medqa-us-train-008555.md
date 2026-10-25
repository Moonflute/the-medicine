---
type: qbank
schema_version: 1
id: medqa-us-train-008555
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:b1688eb110b09351c1ae8e71a4cb890035685b050ea1b70550156301457ac008
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "generalized anxiety disorder"
  - "selective serotonin reuptake inhibitor"
  - "fluoxetine"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-uylCDrtojslYgg7J6l7JWgIChHZW5lcmFsaXplZCBBbnhpZXR5IERpc29yZGVyKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9DbG9uYXplcGFtLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 남성이 반복되는 두통으로 일차진료를 받으러 왔다. 두통은 일주일 동안 지속되었고 암일까 봐 걱정된다고 한다. 증상에 근거해 추가 진단검사가 필요하다고 강하게 믿는다. 지역 병원에서 간호사로 일하며 직장을 잃을까 걱정한다. 여자친구와의 성기능과 가족과의 관계도 걱정해 성관계를 중단했다. 이러한 문제에 대한 걱정이 1년 동안 지속되었다. 과거력으로 비만, 당뇨병, 고혈압, 과민성장증후군이 있다. 현재 메트포르민, 인슐린, 리시노프릴, 히드로클로로티아지드를 복용한다. 할아버지와 아버지에게 대장암 가족력이 있다. 신경학적 검사는 정상이고 현재 두통은 부인한다. 다음 중 가장 적절한 초기 처치는 무엇인가?

## 선택지

A. 부스피론
B. 클로나제팜
C. 플루옥세틴
D. 수마트립탄

## 해설

건강뿐 아니라 직장·성생활·가족 관계까지 여러 영역의 과도한 걱정이 1년간 지속되어 범불안장애 양상을 시사한다. 제시된 약물 중 SSRI인 플루옥세틴이 원문 선택이다. 부스피론도 범불안장애에 사용할 수 있으므로 불안에 부적절한 약으로 설명하지 않는다. 클로나제팜은 장기 기본 치료로 삼지 않으며 현재 두통만을 대상으로 수마트립탄을 선택할 상황은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008555

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 건강염려만을 진단 근거로 삼고 부스피론도 불안에 부적절하다고 배제한 설명 교정. 다영역 걱정의 범불안 맥락과 SSRI 답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.nice.org.uk/guidance/cg113/chapter/Recommendations
