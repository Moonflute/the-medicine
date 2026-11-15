---
type: qbank
schema_version: 1
id: medqa-us-train-005172
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e37ea85edb4b220233317d79020c3bf0b3e3e8113e78d503e4c8ab4bb41096fe
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 35주 조기진통"
  - "후기 조산"
  - "자궁수축 억제제 적응증 없음"
question_type: management
related_disease_slugs: []
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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주 2일 단태임신 산모의 진통이 진행되고 자궁경부가 5 cm 열렸다. 감염은 없고 이전에 산전 스테로이드를 맞은 적이 없으며 임신 전 당뇨병도 없다. 조산이 임박한 상황에서 적절한 방침은?

## 선택지

A. 분만을 인위적으로 늦추지 않되 조건에 맞으면 태아 폐성숙 스테로이드를 고려한다
B. 스테로이드 전체 일정을 마칠 때까지 자궁수축을 반드시 억제한다
C. 태아 신경보호를 위해 이 주수에도 황산마그네슘을 일률적으로 투여한다
D. 임신 35주라는 이유로 산과 평가 없이 바로 퇴원시킨다

## 해설

선별된 후기 조산 위험 산모에게는 산전 스테로이드를 고려할 수 있다. 다만 스테로이드 일정을 맞추려고 임박하거나 필요한 분만을 지연하지 않는다. 이 주수에는 신경보호 목적의 황산마그네슘이나 자궁수축억제를 일률 사용하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 35주 D는 제시된 수축억제/촉진 약물 불필요라는 뜻; 모든 약물 불필요로 일반화 금지.
- https://www.acog.org/womens-health/faqs/preterm-labor-and-birth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005172
- https://pubmed.ncbi.nlm.nih.gov/34363784/
