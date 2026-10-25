---
type: qbank
schema_version: 1
id: medqa-us-train-005403
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f0ff1e37aa1946292ac397de41c2447824e46470aebeb6072efda2ee2be95da1
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "금연"
  - "바레니클린"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: prevention
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
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

65세 남자가 정원 청소 중 시작된 호흡곤란으로 내원했다. 40년간 하루 2갑을 흡연했고 산소포화도는 86%, 양쪽 폐의 공기 유입 감소, 천명과 양쪽 폐기저부 수포음이 있다. 치료 후 산소포화도는 실내 공기에서 90%로 회복되었다. 사망률을 가장 크게 낮출 수 있는 중재는?

## 선택지

A. 알부테롤
B. 마그네슘
C. 가정 산소요법
D. 바레니클린

## 해설

금연은 장기 예후를 개선하며 varenicline D는 금연 성공을 돕는 약이다. 급성 악화의 기관지확장/구조치료가 아니다. 회복후 SpO2 90만으로 LTOT 생존이득 적응증이 확정되지 않아 안정시 혈액가스 등 별도 평가가 필요하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: Varenicline D를 급성 COPD 악화치료라 한 오류를 금연치료로 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005403
