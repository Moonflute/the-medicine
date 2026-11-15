---
type: qbank
schema_version: 1
id: medqa-us-validation-000376
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a8f115cb82f6a7946dabaa6615cc41a5935880a5e91bdb7ff4eb65ea15efe3fe
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "만성 기관지염"
  - "알부테롤"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
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
related_drug_slugs:
  - ZHJ1ZzowMiDtmLjtnaHquLAvRmx1dGljYXNvbmUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvRG94eWN5Y2xpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

57세 여성이 안정기 COPD로 가래와 일상생활 중 호흡곤란을 호소한다. 기관지확장제 후 FEV₁/FVC는 0.65, FEV₁은 예측치의 83%이고 CAT 점수는 19점이다. 지난 1년 동안 악화로 입원하거나 항생제·스테로이드를 받은 적은 없다. 천식 병력도 없다. 매일 쓸 유지 흡입제로 적절한 것은?

## 선택지

A. 장기작용 베타₂작용제/장기작용 항무스카린제 병용 흡입제
B. 흡입 스테로이드 단독
C. 속효성 살부타몰만 매일 정해진 시간에 사용
D. 경구 프레드니솔론을 장기 투여

## 해설

증상 부담이 큰 안정기 COPD에서는 장기작용 기관지확장제 치료가 필요하다. 국내 지침에서 장기작용 베타₂작용제와 장기작용 항무스카린제 병용을 초기 유지치료로 권고한다. 속효성 흡입제는 필요시 증상 완화에 쓰고, 흡입 스테로이드 단독은 기본 유지치료가 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 안정기 COPD의 현재 증상 완화를 급성 악화 치료로 바꾼 해설을 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000376
- https://new.lungkorea.org/board/guide/view/13792
