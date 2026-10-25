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

69세 남성이 3개월간의 마른기침으로 진료를 받으러 왔다. 최근 짙은 붉은 줄무늬가 섞인 가래를 기침으로 배출한 적이 있고, 식욕부진과 5 kg 체중감소, 악화되는 등 통증이 있다. 30년간 매일 담배 한 갑을 피웠으며, 혈청 칼슘은 12.3 mg/dL이다. 흉부 X선이 제시되어 있다. 가장 가능성 높은 진단은?

## 선택지

A. 결핵
B. 대엽성 폐렴
C. 소세포폐암
D. 편평세포 폐암

## 해설

흡연력, 객혈, 체중 감소와 고칼슘혈증은 편평세포 폐암(D)을 시사한다. 이 종양은 PTHrP 분비로 고칼슘혈증을 일으킬 수 있다. 다만 영상의 중심부 종괴나 폐 과팽창을 실제 확인했다고 단정하지 않으며, 골전이 등 다른 고칼슘 원인과 조직 진단을 평가해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 폐암 유형 D를 지지하는 임상 단서와 누락 영상의 실제 판독을 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001097
