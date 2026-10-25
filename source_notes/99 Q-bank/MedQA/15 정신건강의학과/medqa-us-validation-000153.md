---
type: qbank
schema_version: 1
id: medqa-us-validation-000153
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a44522c7f53d605622d1b0315376b306ce176e5a72bd064f49bd4a7621cb9a4b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "환자 비밀보호"
  - "약물 과다복용"
  - "의료윤리"
question_type: ethics
related_disease_slugs: []
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

36세 여성이 알코올, 벤조디아제핀, 바르비투르산염 양성의 약물 과다복용으로 입원했다. 3일 후 치료한 의사의 동료가 병원 로비에서 이웃이자 친구라며 무슨 일이 있었는지 물었다. 가장 적절한 의사의 답변은?

## 선택지

A. “직접 물어보세요. 지금 정신과 병동에 있어요.”
B. “소변검사에서 알코올, 벤조디아제핀, 바르비투르산염이 양성이었어요.”
C. “제가 답할 사람이 아니니 주치의에게 물어보세요.”
D. “걱정되시는 건 이해하지만 이 상황에 대한 정보를 드릴 수 없습니다.”

## 해설

이 동료는 진료 목적이 아니라 이웃·친구로서 개인 정보를 묻고 있고 환자의 공개 동의도 제시되지 않았다. 걱정에는 공감하되 정보를 제공할 수 없다고 답하는 것이 적절하다. 입원 병동이나 약물검사 결과도 임의로 밝히지 않는다. 실제 정보 공유에는 환자의 동의, 치료상 필요와 법적 허용·요구 등 별도 근거가 있을 수 있으므로 본인과 대리인 외에는 언제나 공개 불가라고 일반화하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000153

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 치료 정보는 본인·법정대리인에게만 공개 가능하다는 과도한 개인정보 규칙을 교정. 비치료 동료의 사적 호기심에는 비공개 원정답 유지.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정하며 최신 지침 전수 검증을 뜻하지 않음).
- https://www.hhs.gov/hipaa/for-professionals/faq/when-does-hipaa-allow-a-health-care-provider-to-dicuss-information-with-family/index.html
