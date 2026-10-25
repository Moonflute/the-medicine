---
type: qbank
schema_version: 1
id: medqa-us-train-005492
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0151be8f2aea2d30ec2608d684733ee2de1043986e4210aa7484559bbd4b8fd8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간경변"
  - "문맥고혈압"
  - "비장 내 혈소판 격리"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: mechanism
difficulty: complex
answer: B
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

64세 남자가 피로와 복부팽만으로 응급실에 왔다. 과거 정맥주사 약물 사용력이 있고 황달, 단단한 간, 간 표면 결절, 중등도 비장비대, 문맥 직경 증가, 혈소판 50,000/mm³가 있다. 낮은 혈소판 수의 기전은?

## 선택지

A. 골수 질환
B. 혈소판 격리
C. 혈소판 제거 증가
D. 유전 질환

## 해설

문맥고혈압·비장비대에서 혈소판의 비장격리 B가 중요한 기전이다. 간경변에는 thrombopoietin 감소 등의 생산저하도 기여할 수 있어 격리만 유일한 기전이라 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 비장격리 B는 유지하되 간경변 혈소판감소에 생산저하가 전혀 없다는 배타적 단정 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005492
