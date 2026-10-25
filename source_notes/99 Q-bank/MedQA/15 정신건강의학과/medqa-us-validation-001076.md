---
type: qbank
schema_version: 1
id: medqa-us-validation-001076
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:045b75600e7a2ac04e16f25b5b88009f207854e38a2c7184a3378d4ebc7ec0e6
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "경계성 성격장애"
  - "분열"
  - "자해 행동"
  - "Borderline personality disorder"
question_type: diagnosis
related_disease_slugs: []
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 여성이 급성 충수염으로 진단받고 수술 동의 과정에서 의사를 믿지 못한다며 수술을 거부한다. 모든 의사는 나쁘고 돈만 생각하지만 간호사는 천사라며 자신을 돌봐야 한다고 말한다. 이러한 행동이 특징적인 상태는 다음 중 무엇과 가장 흔히 연관되는가?

## 선택지

A. 특정 행동의 반복 수행
B. 물질사용장애
C. 사회적 상황에 대한 공포
D. 자해 행동

## 해설

의사는 모두 나쁘고 간호사는 모두 천사라고 극단적으로 나누는 분열 양상은 경계성 성격장애에서 관찰할 수 있다. 질문은 그 상태와 관련된 특징을 묻고 있어 제시된 선택지 중 반복 자해가 적절하다. 원문에 실제 자해 충동이 관찰된 것은 아니고 수술 거부나 의료진 불신 한 가지로 성격장애를 확진하지 않는다. 의사결정능력과 수술에 대한 걱정도 별도로 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001076

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 수술 거부만으로 BPD·실제 자해 충동을 확정한 설명을 흑백 분열이라는 방어기제와 연관 특징 질문으로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
