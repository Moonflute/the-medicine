---
type: qbank
schema_version: 1
id: medqa-us-test-000975
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:91b6ba32eee99c28f86b0ad3535bbfb201fd360d21997ff917e7c54122c9a232
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "금연 행동변화 단계"
  - "흡연 재발"
  - "만성폐쇄성폐질환"
question_type: prognosis
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMiDtmLjtnaHquLAvSXByYXRyb3BpdW0ubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 3일 동안 점점 악화되는 호흡곤란, 기침, 피로로 진료를 받으러 왔다. 만성폐쇄성폐질환과 골관절염이 있고 알부테롤, 이프라트로피움, 아스피린을 복용한다. 하루 2.5갑을 26년간 피우다가 1년 금연 후 최근 다시 흡연을 시작했다. 혈압 138/88 mmHg, 호흡 12회/분, 맥박 76회/분, 실내공기 산소포화도 87%였고 지남력이 떨어져 말을 알아듣기 어려웠다. 양쪽 폐기저부에서 수포음이 들렸다. 이 임상 상황에 따른 행동변화 단계는?

## 선택지

A. 숙고 전 단계
B. 숙고 단계
C. 유지 단계
D. 재발 단계

## 해설

1년간 금연을 유지하다가 흡연을 다시 시작했으므로 제시된 행동변화 단계 중 재발에 해당한다. 재발은 금연을 다시 시작했다는 뜻이 아니라 중단했던 흡연 행동이 다시 나타났다는 뜻이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000975

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 재발을 '금연을 다시 시작한 상태'로 잘못 설명한 반대 의미의 문장 수정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
