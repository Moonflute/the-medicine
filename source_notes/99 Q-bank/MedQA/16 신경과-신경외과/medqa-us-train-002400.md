---
type: qbank
schema_version: 1
id: medqa-us-train-002400
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a4d82db91682393bde46897828a3beaa8df567b8256bec4f3c7a30dc1a85f430
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "Becker muscular dystrophy"
  - "dystrophin mutation"
  - "cardiac conduction abnormality"
question_type: investigation
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

17세 남학생이 계단을 오를 때 허벅지 힘이 빠진다. 초등학교 때는 운동이 가능했고 현재도 보행은 유지된다. 종아리 가성비대와 근위부 위약이 있고 CK가 크게 상승했다. 베커 근이영양증이 의심될 때 확진에 우선할 검사는?

## 선택지

A. DMD 유전자의 결실·중복 및 필요 시 염기서열 검사
B. HTT 반복 확장 검사
C. PMP22 중복 검사
D. 혈청 아세틸콜린수용체 항체 검사

## 해설

디스트로핀병은 DMD 유전자 검사로 확인한다. 베커형은 뒤센형보다 늦게 나타나고 진행이 느린 경우가 많지만 심근병증은 별도로 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. Becker를 frameshift변이라고 한 reading-frame 오류수정. 비정상dystrophin A 유지.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002400
- https://www.ncbi.nlm.nih.gov/books/NBK1119/
