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

52세 남성이 3주 전부터 피로, 복부 팽만, 양쪽 다리 부종이 있어 응급실에 내원했다. 아내는 최근 체중이 약간 줄었다고 말한다. 제2형 당뇨병을 12년째 앓고 있으며 메트포르민과 시타글립틴을 복용 중이다. 20년 전 종격동 방사선 치료로 성공적으로 치료받은 호지킨 림프종 병력이 있다. 흡연과 음주는 하지 않는다. 아버지와 누나에게 제2형 당뇨병 가족력이 있다. 혈압은 100/70mmHg, 체온은 36.9°C, 요골 맥박은 규칙적으로 분당 90회이다. 신체검사에서 특히 흡기 시 두드러지는 경정맥 팽창이 관찰된다. 양측 발목에 압흔성 부종이 있고, 복부는 팽만되어 타진 시 이동성 둔탁음이 있다. 심장에서 초기 이완기 ‘knock’ 소리가 들린다. 흉부 X선은 제시된 그림과 같다. 다음 중 이 환자에게 가장 적절한 치료는 무엇인가?

## 선택지

A. 심낭천자
B. 심낭절제술
C. 흉막유착술
D. 고유량 산소를 이용한 경피적 흡인

## 해설

과거 종격동 방사선 치료, 우심부전 소견, 쿠스마울 징후와 조기 이완기 심낭 타진음은 수축성 심낭염을 시사한다. 지속되는 증상성 만성 수축에서 B의 심낭절제술을 평가한다. 이는 흉막 석회화나 제한성 심근병증을 뜻하지 않으며, 방사선 관련 심근 침범과 수술 위험도 함께 확인해야 한다. 누락된 흉부 X선의 모양을 임의로 기술하지 않았다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 방사선 후 수축성 심낭염을 흉막질환·제한성 심근질환과 혼동한 설명을 교정.
- https://academic.oup.com/eurheartj/article/46/40/3952/8234483

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008389
