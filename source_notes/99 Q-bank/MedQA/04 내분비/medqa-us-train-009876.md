---
type: qbank
schema_version: 1
id: medqa-us-train-009876
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:2a037a43bd47751ed3e9e446cba2839ad5357488efcbb3d20186e9b82b1d1625
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "그레이브스병"
  - "갑상선안병증"
  - "방사성 요오드 치료"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: management
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
---

# MedQA US 임상문제

## 문제

그레이브스병이 있는 27세 여성이 최근 안구 통증, 결막 충혈과 새 복시를 보인다. 진찰에서 중등도 이상의 활동성 갑상선안병증으로 판단했다. 갑상선기능항진 치료를 정할 때 피할 방법은?

## 선택지

A. 메티마졸
B. 전문 진료 후 갑상선절제술
C. 빈맥에 대한 베타차단제 보조 치료
D. 방사성요오드 치료

## 해설


대한갑상선학회는 중등도 이상 활동성 안병증이 있는 환자에서 방사성요오드를 권하지 않는다. 경증 안병증은 활동도와 위험인자에 따라 별도로 판단한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009876 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RAI D 후 안병증 악화 가능성 유지하되 흔히 필연 발생이라는 과장·치료 적절성 일반화 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/34297684/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009876
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12230266/
