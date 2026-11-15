---
type: qbank
schema_version: 1
id: medqa-us-test-000432
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e6b3f5fd2cf57fa44ad184b2de99055a588b1b69e427bacc88fdcbbe02b8df20
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "다발성경화증"
  - "뇌간 병변"
  - "신경인성 방광"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_ri6TrsJzshLEg6rK97ZmU7KadIChNdWx0aXBsZSBzY2xlcm9zaXMpLm1k
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNyDrqbTsl63Ct-yXvOymncK366WY66eI7Yuw7IqkL0lidXByb2Zlbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

24세 환자가 왼쪽을 볼 때 오른눈이 코 쪽으로 움직이지 못하고 왼눈은 바깥쪽으로 떨린다. 양안 모음은 유지되고 동공은 정상이다. 병변의 위치는?

## 선택지

A. 왼쪽 외전신경
B. 오른쪽 동안신경 전체
C. 왼쪽 안쪽세로다발
D. 오른쪽 안쪽세로다발

## 해설

오른눈의 내전 장애와 왼눈의 외전 안진은 오른쪽 핵간안근마비다. 내전이 안 되는 쪽의 안쪽세로다발(MLF)에 병변이 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 좌측 주시 시 우안 내전장애를 외전마비로 한 해설 오류 수정. 다발성 중추 증상의 MRI B 유지.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng220/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000432
- https://pubmed.ncbi.nlm.nih.gov/40975101/
