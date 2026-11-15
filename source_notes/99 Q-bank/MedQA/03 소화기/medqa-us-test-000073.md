---
type: qbank
schema_version: 1
id: medqa-us-test-000073
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:7c3c8335c1d1c487bbde336104fcb1f4f1aee2c5df90a73605f234ff1c5c91b8
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "간신증후군"
  - "자발성 세균성 복막염"
  - "간경변"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITsi6Ag7Kad7ZuE6rWwIChIZXBhdG9yZW5hbCBTeW5kcm9tZSkubWQ
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_snpDrsJzshLEg7IS46regIOuzteunieyXvCAoU3BvbnRhbmVvdXMgQmFjdGVyaWFsIFBlcml0b25pdGlzKS5tZA
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_qsITqsr3rs4Dspp0gKExpdmVyIENpcnJob3NpcykubWQ
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRG9wYW1pbmUubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2Vmb3RheGltZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

56세 남성이 간경변성 복수가 있으며 자발성 세균성 복막염 치료 후 감염과 혈압이 안정됐다. 혈관 내 용적이 적절하고 이뇨제와 신독성 약을 중단했는데도 크레아티닌이 0.9에서 2.2 mg/dL로 상승한 상태가 지속된다. 쇼크, 요로 폐쇄 또는 뚜렷한 구조적 콩팥손상 소견은 없다. 간신증후군에 의한 급성 신손상으로 판단했을 때 이식 평가와 병행할 치료는?

## 선택지

A. 저용량 도파민 단독
B. 리시노프릴 추가
C. 테를리프레신과 체액 상태에 맞춘 알부민
D. 고용량 이뇨제 증량

## 해설

간신증후군에 의한 급성 신손상에는 간이식 평가와 병행해 혈관수축제인 테를리프레신과 알부민을 사용할 수 있다. 알부민은 체액과 호흡 상태를 보며 조절하고, 과부하나 저산소증에 주의한다. 단순히 소변 나트륨이 낮다는 이유로 진단하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 간신증후군 의심과 확진을 구별하고 dopamine을 표준 혈관수축제라 한 오류 교정; C는 제시된 선택지 중 근본 치료.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11193657/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000073
- https://doi.org/10.3350/cmh.2026.0281
- https://doi.org/10.1016/j.jhep.2024.03.031
