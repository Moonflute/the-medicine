---
type: qbank
schema_version: 1
id: medqa-us-validation-000771
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b8ba8d1232cb8a2f041bd68e740d4399cdeba6ae618a264aca451e426f1a4255
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "분열성 인격장애"
  - "사회적 고립"
  - "정서적 냉담"
  - "Schizoid personality disorder"
question_type: diagnosis
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
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

37세 남성이 만성 설사로 진료를 받으러 왔다. 농부로 혼자 살며 몇 년 만에 처음 시내에 왔다. 유제품을 피하라는 지시를 받고 다시 예약을 잡는 동안 감정이 거의 없고 비상연락처로 적을 사람이 없다고 한다. 가장 가능성 높은 진단은?

## 선택지

A. 회피성 인격장애
B. 주요우울장애
C. 분열성 인격장애
D. 분열형 인격장애

## 해설

오랫동안 혼자 지내고 가까운 관계가 거의 없으며 정서 표현이 제한된 양상은 제시된 선택지 중 조현성 성격장애에 가장 가깝다. 설사 자체가 진단 근거는 아니다. 실제 진단에는 지속적 대인관계 양상과 다른 기분·정신병적 원인 등을 확인하고, 거절을 두려워하지만 관계를 원하는 회피성 성격과 구별한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000771

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 극도로 축약되어 사회 고립의 지속성이 사라진 번역에 원문 거주·대인생활 맥락 복원. 조현성 성격장애 원정답 유지.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
