---
type: qbank
schema_version: 1
id: medqa-us-train-004518
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e1e1ec5f4d65682a3f014a83986235d5b0a11ccfe6712ba3cc0a16755bb80ac2
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "경계성 인격장애"
  - "반복적 자해"
  - "변증법적 행동치료"
  - "Borderline personality disorder"
question_type: management
related_disease_slugs: []
difficulty: standard
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
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

경계성 성격장애로 진단받은 환자가 반복되는 자해에 대한 장기 치료를 원한다. 응급 안전 평가는 마쳤다. 정서 조절과 자해 감소를 함께 목표로 하는 심리치료는?

## 선택지

A. 노출 및 반응방지 치료
B. 수면 제한에 초점을 둔 치료
C. 변증법적 행동치료
D. 이완 훈련만 하는 상담

## 해설


변증법적 행동치료는 정서 조절, 위기 대처, 대인관계 기술을 다루는 구조화된 심리치료다. 반복 자해 감소가 우선 목표일 때 근거가 있는 선택이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004518
- https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines/borderline-personality-disorder
- https://www.nice.org.uk/guidance/cg78/chapter/Recommendations

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영한 본문·선지·답·해설 대조. 반복 자해와 분열·불안정 관계 양상에서 DBT를 선택한 원정답 유지; 다른 구조화 정신치료가 전부 무효라는 주장으로 확장하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
