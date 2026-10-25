---
type: qbank
schema_version: 1
id: medqa-us-train-008864
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:368a59dfbc7279459c668b9e0e7d8fcad0171d74f0d1eeb097007103c1eee791
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "acute pericarditis"
  - "pericardial friction rub"
  - "pleuritic chest pain"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q4ieyEsSDsi6zrp4nsl7wgKEFjdXRlIFBlcmljYXJkaXRpcykubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

특별한 질환이 없는 31세 남성이 며칠 동안 지속된 날카로운 중앙 흉통으로 응급실에 내원했다. 통증은 지속적이고 운동과 무관하며 누우면 악화되고 앞으로 앉으면 감소한다. 7년 동안 매일 10~15개비를 피웠다. 혈압 120/50mmHg, 맥박 92회/분, 체온 37.1°C(98.7°F)이다. 환자가 앞으로 몸을 기울일 때 호기 말에 마찰음이 들린다. 심전도 사진이 제시되어 있고 혈청 트로포닌은 경미하게 상승했다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. ST분절 상승 심근경색
B. 늑연골염
C. 급성 심낭염
D. 세균성 폐렴

## 해설


앞으로 몸을 기울일 때 호흡기 말에 마찰음이 들리고 흉통이 누워서 악화되는 것은 급성 심낭염의 특징이다. 심전도와 경미한 트로포닌 상승은 흔히 동반된다. 따라서 급성 심낭염이 가장 가능성 높은 진단이다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 체위성 흉통과 명시된 심낭 마찰음으로 심낭염 C를 지지하며 ECG 영상의 구체적 형태는 임의 판단하지 않음.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008864
