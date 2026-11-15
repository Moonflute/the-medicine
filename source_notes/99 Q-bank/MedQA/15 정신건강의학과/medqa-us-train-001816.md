---
type: qbank
schema_version: 1
id: medqa-us-train-001816
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:c1ff02202e90f172eb584c56b3885ded530f66e92e4215caeca28cd61ee80b03
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "lipoma"
  - "autonomous adult patient"
  - "informed consent"
question_type: management
related_disease_slugs: []
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
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

의사결정능력이 있는 21세 환자가 증상이 있는 지방종을 계획 수술로 제거하기 원한다. 부모는 수술에 반대한다. 충분한 설명 후 누가 수술에 동의해야 하는가?

## 선택지

A. 부모 중 한 명
B. 환자 본인
C. 환자와 부모 모두
D. 의료기관 윤리위원회

## 해설

의사결정능력이 있는 성인이라면 수술의 이익과 위험을 이해한 환자 본인이 동의한다. 부모의 동의가 이를 대신하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001816
- https://www.law.go.kr/법령/의료법/제24조의2
- https://www.law.go.kr/법령/민법/제4조

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 성인 자율성·절제 원정답 유지. 나이만으로 결정능력이 자동 충분하거나 서명만으로 수술 가능·위험 거의 없음이라는 설명 교정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://code-medical-ethics.ama-assn.org/sites/default/files/2022-08/2.1.1.pdf
