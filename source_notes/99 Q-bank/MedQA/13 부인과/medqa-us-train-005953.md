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
question_type: diagnosis
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

63세 여성이 심한 외음부 가려움으로 외래를 방문했다. 가려움은 1년 전 시작되어 최근 몇 달 동안 악화되었다. 일반의약품 국소 스테로이드를 사용했으나 호전되지 않았다. 현재 성생활은 하지 않는다. 오래된 경화태선 병력이 있다. 신체검사에서 우측 대음순에 궤양성 작은 결절과 생식기 및 항문 주위를 둘러싼 건조하고 얇은 흰색 병변이 보인다. 다음 중 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 바르톨린샘 낭종
B. 바르톨린샘 암
C. 편평세포암
D. 외음부 파제트병

## 해설

장기간의 외음부 경화태선 병력에 새로 생긴 궤양성 결절은 외음부 편평세포암을 의심하게 하므로 C가 가장 적절하다. 경화태선의 백색 위축성 변화 자체와 새 악성 의심 결절은 구분해야 한다. 원문에 없는 바르톨린샘 질환 병력을 만들어 진단 근거로 삼지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 새 외음부 궤양성 결절과 기존 경화태선의 관련성을 설명하고 근거 없는 바르톨린 병변 해설을 제거했다.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005953
