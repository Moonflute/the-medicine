---
type: qbank
schema_version: 1
id: medqa-us-train-008482
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d66ed39f08dce86ec3e48f70e06e05b1f6a40d7e5b8401ea27cf9f9085de69a7
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "anterior cerebral artery stroke"
  - "right ACA occlusion"
  - "abulia"
question_type: diagnosis
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC9BQ0Eg6rK97IOJIChBQ0EgaW5mYXJjdGlvbikubWQ
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvRW5hbGFwcmlsLm1k
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 환자가 갑자기 왼쪽 다리를 들지 못하고 말과 행동을 거의 시작하지 않는다. 얼굴과 양팔의 근력은 거의 정상이고 왼쪽 바빈스키 징후가 양성이다. 가장 가능성이 높은 폐색 혈관은?

## 선택지

A. 왼쪽 전대뇌동맥
B. 오른쪽 전대뇌동맥
C. 오른쪽 중대뇌동맥 주줄기
D. 왼쪽 후대뇌동맥

## 해설

얼굴·팔에 비해 반대쪽 다리 위약이 두드러지고 의욕·행동 개시가 떨어지면 내측 전두엽을 공급하는 전대뇌동맥 영역을 시사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 우측 ACA 폐색이 양쪽 하지 결손을 만든다는 좌우 오류를 좌측 하지 우세 결손으로 교정.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008482
- https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
