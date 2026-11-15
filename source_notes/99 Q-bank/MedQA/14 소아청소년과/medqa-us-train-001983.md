---
type: qbank
schema_version: 1
id: medqa-us-train-001983
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:47e9ebb7de44d02e57b08d780a76b8bf4fc9080665217ac769a28787879dd32f
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "pneumococcal pneumonia"
  - "conjugate vaccine"
  - "Streptococcus pneumoniae"
question_type: prevention
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-ygle2YlSDtj5DroLQgKFR5cGljYWwgUG5ldW1vbmlhKS5tZA
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
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

4세 아이가 국내에서 이번 절기 인플루엔자 백신을 처음 맞으러 왔다. 과거에 인플루엔자 백신을 맞은 적이 없다. 이번 절기의 접종 계획은?

## 선택지

A. 첫 접종은 9세부터 한다
B. 최소 4주 간격으로 2회 접종한다
C. 이번 절기에는 1회만 접종한다
D. 6개월 간격으로 2회 접종한다

## 해설

국내 지침에서 인플루엔자 예방접종을 처음 받는 생후 6개월 이상 9세 미만 어린이는 같은 절기에 최소 4주 간격으로 2회 접종한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 겨울철 근육통 전구의 인플루엔자 의도와 IIV B를 연결. 폐렴구균 백신을 불활화 2가로 설명한 오류 교정 및 원문 1월 복원.
- https://www.cdc.gov/flu/hcp/vax-summary/seasonal-influenza-vaccines.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001983
- https://www.kdca.go.kr/bbs/kdca/55/310104/download.do
