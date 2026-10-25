---
type: qbank
schema_version: 1
id: medqa-us-validation-000967
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:05bf1a8d5227d8130688ffd68701710715ec75ebafa45c6d9b8f7a452c8ff9cd
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "회피성 성격장애"
  - "사회적 억제"
  - "부적절감"
  - "Avoidant personality disorder"
question_type: diagnosis
related_disease_slugs: []
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

29세 남성이 기침으로 주치의를 방문해 항생제가 필요한지 묻는다. 대화 중 차갑고 타인을 불신하며 감정 표현이 적어 보인다. 직장에서 발표 중 실수한 뒤 동료들이 자신을 낮게 평가한다고 느껴 창피해서 재택근무로 옮겼고, 동료들과 더 잘 지내고 싶었다고 한다. 현재 마을 외곽의 헛간에서 많은 고양이와 함께 산다. 바이러스성 상기도 감염이라고 설명하자 휴식과 수분 섭취를 안내받고 귀가했다. 이 환자의 성격장애는?

## 선택지

A. 회피성 성격장애
B. 조현성 성격장애
C. 조현형 성격장애
D. 편집성 성격장애

## 해설

동료와 더 잘 지내고 싶었지만 실수 뒤 부정적 평가와 창피함을 두려워해 직장 대면을 피한 양상은 회피성 성격장애에 가장 가깝다. 가까운 관계 자체에 관심이 없어 고립을 선호한다는 뜻은 아니며 조현성 성격장애와 구별하는 단서이다. 실제로는 여러 상황에서 오래 지속된 패턴인지 추가 확인한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000967

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 회피성 성격장애를 고립 선호로 잘못 설명한 오류 교정. 타인과 관계를 원하지만 부정적 평가 두려움으로 회피한다는 원문 단서 명시.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
