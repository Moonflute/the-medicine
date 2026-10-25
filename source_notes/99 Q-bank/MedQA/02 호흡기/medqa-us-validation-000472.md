---
type: qbank
schema_version: 1
id: medqa-us-validation-000472
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:ec1f64fcb5f8052d030f5bcd1195398d5fe9e670faa616e0ad2fd4aca19ca919
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "중등도 COPD"
  - "기관지확장제 치료"
  - "티오트로피움"
  - "Chronic obstructive pulmonary disease"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-unjOyEsSDtj5Dsh4TshLEg7Y-Q7KeI7ZmYIChDT1BEKSAoQ2hyb25pYyBPYnN0cnVjdGl2ZSBQdWxtb25hcnkgRGlzZWFzZSkubWQ
question_type: management
difficulty: complex
answer: B
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
  - ZHJ1ZzowMiDtmLjtnaHquLAvUm9mbHVtaWxhc3QubWQ
  - ZHJ1ZzowMiDtmLjtnaHquLAvVGlvdHJvcGl1bS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

52세 남성이 경도의 COPD로 필요할 때 알부테롤을 사용해 왔지만 최근 호흡곤란, 천명, 생산성 기침이 악화되었다. FEV1은 예측값의 60%이다. COPD 관리의 다음 단계는?

## 선택지

A. 치료에 로플루밀라스트 추가
B. 치료에 티오트로피움 추가
C. 티오트로피움과 플루티카손 추가
D. 치료에 카르보시스테인 추가

## 해설

지속 증상이 있는 COPD에서 B의 티오트로피움은 장기작용 무스카린 길항제로 적합한 유지치료 선택지이다. 실제 약제 조합은 증상 부담과 악화력에 따라 정하며 FEV1 60%만으로 모든 단계를 결정하지 않는다. 로플루밀라스트는 경구 PDE4 억제제이지 LABA/ICS 복합제가 아니며, ICS도 모든 환자에게 자동으로 추가하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 로플루밀라스트를 LABA/ICS로 분류한 오류와 FEV1만으로 유지치료를 정하는 설명을 교정.
- https://goldcopd.org/2026-gold-report-and-pocket-guide/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000472
