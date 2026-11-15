---
type: qbank
schema_version: 1
id: medqa-us-train-005953
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:234cdec3f949d80b236b135fd592e60f3af4fb637d24dc0cb42d55b8708bc530
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "외음부 편평세포암"
  - "경화태선"
  - "외음부 악성종양"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-2OuO2PiSDshLjtj6zslZQgKFNxdWFtb3VzIENlbGwgQ2FyY2lub21hKS5tZA
difficulty: simple
answer: C
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

국소 스테로이드로 안정적이던 외음부 경화태선 환자에게 6주째 낫지 않는 단단한 가장자리의 궤양이 생겼다. 가장 적절한 처치는?

## 선택지

A. 스테로이드 도포 횟수만 늘린다
B. 외음부 HPV 검사만 한다
C. 궤양 가장자리의 의심 병변을 생검한다
D. 항진균제로 치료하고 수개월 후 확인한다

## 해설

경화태선에서 새로 생긴 지속 궤양, 결절 또는 비후는 외음부 상피내종양이나 편평세포암을 시사할 수 있어 조직검사가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 새 외음부 궤양성 결절과 기존 경화태선의 관련성을 설명하고 근거 없는 바르톨린 병변 해설을 제거했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005953
- https://pubmed.ncbi.nlm.nih.gov/38822578/
