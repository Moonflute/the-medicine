---
type: qbank
schema_version: 1
id: medqa-us-validation-000118
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:84fc36333ab22e64797cb0947efda7b3bbbb45c846dfb13a1e523747ee948a86
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "항콜린성 부작용"
  - "아미트립틸린"
  - "요폐"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_quLTsnqXtmJXrkZDthrUgKFRlbnNpb24tdHlwZSBoZWFkYWNoZSkubWQ
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvU2FsbWV0ZXJvbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BbWl0cmlwdHlsaW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 여성이 한 달간 배뇨 시 힘주기와 지연된 소변 흐름으로 진료를 받으러 왔다. 천식으로 알부테롤과 살메테롤/플루티카손을 사용하고 우울증으로 아미트립틸린 용량을 최근 늘렸다. 구강 점막은 건조했다. 약물치료를 어떻게 변경하는 것이 가장 적절한가?

## 선택지

A. 이프라트로피움 흡입기를 추가한다
B. 알부테롤 용량을 줄인다
C. 아미트립틸린을 플루옥세틴으로 바꾼다
D. 현재 변경이 필요 없다

## 해설

아미트립틸린 증량 후 구강건조·배뇨곤란이 생겨 항콜린성 부작용을 의심한다. 제시된 선택지 중 항콜린성 부담이 상대적으로 적은 플루옥세틴으로 전환하는 방안이 적절하다. 갑자기 임의로 교체하거나 겹쳐 복용하지 않고 감량·전환 계획과 CYP2D6 상호작용을 검토한다. 소변 정체 등 다른 원인도 평가하며 어떤 SSRI도 모든 부작용이 없다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000118

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 항콜린성 부작용으로 SSRI 전환 답 유지. 교체하면 부작용을 완전히 피한다는 단정과 전환 상호작용 누락 보완.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
