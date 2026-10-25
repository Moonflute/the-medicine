---
type: qbank
schema_version: 1
id: medqa-us-validation-000963
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fc1ff91c32882f5fd1baedf81eb3571e66244cc5edaec3620bd5439fde4417e0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "HIV 감염"
  - "감염병 신고"
  - "환자 비밀보장"
question_type: ethics
related_disease_slugs:
  - MDgg6rCQ7Je8L-2bhOyynOyEsSDrqbTsl63qsrDtlY0g7Kad7ZuE6rWwIChBSURTKSAoQWNxdWlyZWQgSW1tdW5vZGVmaWNpZW5jeSBTeW5kcm9tZSAoQUlEUykpLm1k
difficulty: complex
answer: D
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

51세 남성이 교도소에서 출소한 지 한 달 후, 무료 진료소에서 일주일 전 받은 HIV 양성 진단에 대해 주치의를 방문했다. 교도소에서 남성 수감자들과 보호되지 않은 성관계를 여러 차례 했지만 아내와 두 자녀에게 진단 사실을 알리지 않았다. 아내가 자신을 떠나거나 자녀를 못 만나게 할까 두려워 비밀을 유지한 채 치료받기를 원하며, 가족에게 전파되지 않도록 예방수칙을 지키겠다고 한다. 이 경우 가장 적절한 의사의 대응은?

## 선택지

A. 환자의 뜻을 존중하여 아내에게 알리거나 보건부에 보고하지 않고 치료한다
B. 환자의 뜻을 존중하겠다고 말하되 보건부에 보고하여 보건부가 아내에게 알리게 한다
C. 보건부 보고 여부를 결정하기 위해 윤리위원회에 의뢰한다
D. 양성 진단은 보건당국에 보고해야 한다고 알리고, 가족과 직접 상의하도록 권고한다

## 해설

미국 원문 상황에서는 HIV 진단의 공중보건 신고 절차를 환자에게 정직하게 설명하고, 아내 등 노출 가능 파트너에 대한 안전한 공개·검사와 보건당국의 파트너 서비스를 상담하는 답이 적절하다. 신고 사실을 숨긴 채 비밀 보장을 약속하지 않는다. 실제 신고·파트너 통지 절차는 관할 법규에 따르며 모든 가족·자녀에게 진단을 자동 공개한다는 뜻은 아니다. 비난 없이 치료와 전파 예방·관계 안전을 함께 지원한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000963

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 미국 원문 공중보건 보고와 파트너 알림을 모든 국가·모든 가족 공개 의무로 일반화하지 않도록 교정. 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.cdc.gov/hivnexus/hcp/partner-services/index.html
