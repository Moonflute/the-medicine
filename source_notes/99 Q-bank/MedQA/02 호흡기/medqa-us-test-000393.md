---
type: qbank
schema_version: 1
id: medqa-us-test-000393
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:03752623a03c546235d711f702e5cf5a0e2e75202f89cd0a33752dfce78c5133
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "만성폐쇄성폐질환"
  - "폐기종"
  - "폐쇄성 환기장애"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 40갑년 흡연력이 있고 수년간 악화된 운동 시 호흡곤란을 호소한다. 안정기에 시행한 기관지확장제 투여 후 폐활량검사에서 FEV₁/FVC는 0.62이고 FEV₁은 예측치의 60%다. 확산능도 감소했다. 가장 가능성 높은 진단은?

## 선택지

A. 특발성 폐섬유증
B. 기침형 천식
C. 만성폐쇄성폐질환
D. 신경근질환에 의한 환기장애

## 해설


흡연력과 만성 호흡곤란이 있는 성인에서 기관지확장제 투여 후 FEV₁/FVC가 0.70 미만이면 지속적 기류제한으로 COPD를 지지한다. 경계 범위이거나 검사 변동이 의심되면 별도의 날에 재확인한다. FEV₁의 예측치 비율이나 확산능만으로는 COPD를 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 한·영 본문/4선지/정답 C/해설 읽음. 장기 흡연, 호기성 천명, 낮은 FEV1/FVC, 과팽창과 낮은 DLCO는 폐기종 양상의 COPD에 일치. 최신 치료 검증 아닌 진단/생리 내용 검토.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000393
- https://new.lungkorea.org/board/guide/view/13792
