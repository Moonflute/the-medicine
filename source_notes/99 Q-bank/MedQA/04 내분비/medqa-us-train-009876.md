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

27세 여성이 두근거림으로 일차진료의에게 내원했다. 지난 2개월 동안 불안했고 심장이 ‘빨리 뛰는’ 느낌이 자주 든다고 한다. 발한과 의도하지 않은 체중 감소도 있다. 진찰에서 대칭적이고 압통이 없는 갑상선 비대와 안구 돌출이 보인다. 추가 검사 후 적절한 치료를 받았다. 2주 후 이전보다 안구 증상이 악화되었다고 호소한다. 다음 중 환자가 받았을 가능성이 가장 높은 치료는?

## 선택지

A. 메티마졸
B. 프로프라놀롤
C. 프로필티오우라실
D. 방사성 요오드

## 해설


정답 D. 방사성요오드 치료는 Graves 안병증을 새로 유발하거나 악화시킬 수 있으며 선택지 중 이 합병증과 가장 관련된다. 흡연·높은 TRAb·활동성 안병증 등은 위험을 높인다. 모든 환자에게 흔히 또는 반드시 생긴다는 뜻은 아니며 안병증의 활동도/중증도에 따라 RAI 회피나 예방요법을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009876 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RAI D 후 안병증 악화 가능성 유지하되 흔히 필연 발생이라는 과장·치료 적절성 일반화 제거.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pubmed.ncbi.nlm.nih.gov/34297684/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009876
