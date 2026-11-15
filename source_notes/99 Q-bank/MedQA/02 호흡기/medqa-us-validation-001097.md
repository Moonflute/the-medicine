---
type: qbank
schema_version: 1
id: medqa-us-validation-001097
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7e6caeb583df382e242e5c831b34032e2c8161c98fe850256d1148a7bb8dff12
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "편평세포 폐암"
  - "고칼슘혈증"
  - "흡연"
related_disease_slugs:
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
  - MDIg7Zi47Z2h6riwL-2PkCDtjrjtj4nsg4HtlLzslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

69세 남성이 체중 감소와 반복되는 객혈로 내원했다. 흉부 CT에 중심부 폐종괴가 있다. 혈청 칼슘은 12.3 mg/dL로 높고 PTH는 억제됐으며 PTH 관련 단백(PTHrP)은 상승했다. 이 부종양증후군과 전형적으로 연관된 폐암은?

## 선택지

A. 폐 카르시노이드
B. 폐선암
C. 소세포폐암
D. 폐 편평세포암

## 해설

일부 폐 편평세포암은 PTHrP를 분비해 고칼슘혈증을 일으킨다. PTH가 억제되고 PTHrP가 높으면 이 기전을 지지한다. 조직형은 조직검사로 확진한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐암 유형 D를 지지하는 임상 단서와 누락 영상의 실제 판독을 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001097
