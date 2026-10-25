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
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvTWFnbmVzaXVtU3VsZmF0ZS5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 35주인 24세 초임부가 5시간 동안 규칙적인 자궁수축과 골반 압박감으로 입원했다. 자궁경부는 60% 소실되고 5 cm 열렸으며 양막은 온전하다. 10분 동안 수축 강도는 220 MVU이다. 현재 가장 적절한 약물치료는?

## 선택지

A. 황산마그네슘
B. 옥시토신
C. 테르부탈린
D. 현재 약물치료는 필요하지 않다

## 해설

35주에는 일반적으로 조산 억제를 위한 테르부탈린·황산마그네슘을 사용하지 않으며 수축이 충분해 옥시토신 촉진도 필요하지 않으므로 제시된 선택지 중 D가 적절하다. 이는 후기 조산 스테로이드나 GBS 예방 등 별도의 적응증까지 모두 부정하는 뜻은 아니다. 실제로 태아·산모 상태와 임박한 분만을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 35주 D는 제시된 수축억제/촉진 약물 불필요라는 뜻; 모든 약물 불필요로 일반화 금지.
- https://www.acog.org/womens-health/faqs/preterm-labor-and-birth

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005172
