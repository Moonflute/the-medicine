---
type: qbank
schema_version: 1
id: medqa-us-test-000439
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:211a9ddf1d9b4e25607786877443a9c538c292504da449f3cc50009bb90409c7
exam: USMLE Step 2/3
language: ko
specialty: 05 신장
related_diseases:
  - "티아지드 이뇨제"
  - "약물 유발 변비"
  - "원위곡세관"
related_disease_slugs: []
question_type: mechanism
difficulty: standard
answer: C
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 고혈압 약을 바꾼 지 한 달 뒤 변비와 피로로 내원했다. 교정 혈청 칼슘은 11.2 mg/dL이고 새로 시작한 약은 히드로클로로티아지드이다. 이 약의 작용 표적은?

## 선택지

A. 혈관 평활근 세포막의 안지오텐신 II 수용체
B. 안지오텐신 전환효소
C. 원위곡세관 상피세포막의 Na⁺/Cl⁻ 공동수송체
D. 헨레고리 상행각 상피세포막의 Na⁺/K⁺/2Cl⁻ 수송체

## 해설

히드로클로로티아지드는 원위곡세관의 Na⁺/Cl⁻ 공동수송체를 억제한다. 소변으로 배출되는 칼슘을 줄여 혈중 칼슘을 높이거나 기존 부갑상샘 질환을 드러낼 수 있다. 약을 복용한다는 이유만으로 고칼슘혈증의 다른 원인을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 원정답 C 유지. NaCl 공동수송체 억제가 장 평활근을 자극하여 변비를 일으킨다는 오류를 티아지드의 칼슘 배설 감소/고칼슘혈증 가능성으로 교정.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=8bc8d5e2-a974-64ed-e053-2a95a90a8340&type=display

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000439
