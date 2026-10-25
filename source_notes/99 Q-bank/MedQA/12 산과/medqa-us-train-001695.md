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
answer: C
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

27세 여성이 임신 전 상담을 위해 산부인과에 내원했다. 과거력과 수술력은 없고 현재 건강하며 예방접종도 최신이다. 한 달 안에 임신을 시도하려 하고 술은 일주일에 와인 2잔을 마신다. 다음 중 임신 전 관리의 다음 단계로 권장되지 않는 것은 무엇인가?

## 선택지

A. 엽산 400 mcg 보충 시작
B. 불활성화 인플루엔자 백신 권고
C. 홍역·유행성이하선염·풍진(MMR) 백신 투여
D. 수두-대상포진 항체 역가 측정

## 해설

MMR은 임신 전 비면역 여성에게 오히려 권고되는 생백신이며 접종 뒤 28일간 임신을 피한다. 이 환자는 예방접종이 최신이고 한 달 내 임신을 계획하므로 추가 MMR(C)을 즉시 반복할 이유가 없다. 임신 전 모든 MMR을 금기라고 설명해서는 안 된다. 수두 면역도 기존 접종 기록으로 확인할 수 있어 모든 접종 완료자에게 항체검사가 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 임신 전 MMR 자체 금기라는 오류 수정; 접종 최신·임신 시도 전 간격으로 설명.
- https://www.cdc.gov/vaccines-pregnancy/hcp/vaccination-guidelines/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001695
