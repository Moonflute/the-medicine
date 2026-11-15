---
type: qbank
schema_version: 1
id: medqa-us-train-008389
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ffd092b21eccc8650b09a70b85cab23d1f6f2e345ed646316275b512e3f62b2f
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "constrictive pericarditis"
  - "radiation-induced constrictive pericarditis"
  - "Hodgkin lymphoma"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-q1kOywqSDsi6zrp4nsl7wgKENvbnN0cmljdGl2ZSBQZXJpY2FyZGl0aXMpLm1k
  - MDkg7ZiI7JWhL-2YuOyngO2CqCDrprztlITsooUgKEhvZGdraW4gTHltcGhvbWEpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 복부팽만과 다리 부종으로 내원했다. 20년 전 종격동 방사선치료를 받았다. 흡기 때 경정맥압이 올라가고, 조기 이완기 심낭 타진음이 들린다. 만성 수축성 심낭염으로 진단됐고, 울혈을 조절해도 활동 제한이 지속된다. 활동성 심낭 염증이나 큰 삼출은 없다. 수술이 가능한 환자에서 근본 치료는?

## 선택지

A. 이뇨제 증량
B. 심낭절제술
C. 콜히친 단독 치료
D. 심낭천자

## 해설

활동성 염증이 없는 만성 수축성 심낭염에서 증상이 지속되면 심낭절제술을 고려한다. 이뇨제는 울혈을 줄이지만 수축을 해결하지 못하며, 배액할 삼출도 없다. 방사선치료 병력이 있으면 동반 심근 손상과 수술 위험을 함께 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 방사선 후 수축성 심낭염을 흉막질환·제한성 심근질환과 혼동한 설명을 교정.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008389
- https://doi.org/10.1093/eurheartj/ehaf192
