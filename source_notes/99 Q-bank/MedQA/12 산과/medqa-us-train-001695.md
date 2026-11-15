---
type: qbank
schema_version: 1
id: medqa-us-train-001695
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1cf060d36ca1e31919777659d837b3e0a27aedcedf8008c1f8c4762e10821399
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "preconception counseling"
  - "vaccination"
  - "folic acid"
question_type: prevention
related_disease_slugs: []
difficulty: standard
answer: A
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

임신을 준비하는 27세 여성에게 풍진 항체가 없다. 현재 임신하지 않았고 MMR 접종에 금기도 없다. 어떤 계획이 적절한가?

## 선택지

A. 지금 MMR을 접종하고 최소 28일 뒤 임신을 시도한다
B. 풍진항체가 없어도 임신 중 20주에 MMR을 맞는다
C. 불활성화 인플루엔자 백신으로 풍진을 예방한다
D. MMR 접종 당일부터 제한 없이 임신을 시도한다

## 해설

풍진에 면역이 없으면 임신 전에 MMR을 접종한다. 생백신이므로 접종 후 최소 28일간 임신을 피하고, 이미 임신 중이면 출산 후 접종을 계획한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 전 MMR 자체 금기라는 오류 수정; 접종 최신·임신 시도 전 간격으로 설명.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001695
- https://nip.kdca.go.kr/irhp/infm/goVcntInfo.do?menuCd=1122&menuLv=1
