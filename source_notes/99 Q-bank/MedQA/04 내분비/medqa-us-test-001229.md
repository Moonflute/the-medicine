---
type: qbank
schema_version: 1
id: medqa-us-test-001229
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2e27ac09f4b07a828e009f32adddda3a81b31e6f17f8a17bd27a6b1678debd02
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "두개인두종"
  - "성장호르몬 결핍"
  - "시야장애"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsnbjrkZDsooUgKENyYW5pb3BoYXJ5bmdpb21hKS5tZA
question_type: diagnosis
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

8세 남아가 1년간 키가 거의 자라지 않았고 밤에 머리가 아프며 옆 물건에 자주 부딪힌다. 갈증과 다뇨도 있다. 영상에서 안장 위에 석회화를 동반한 고형·낭성 종괴가 보인다. 가장 가능성 높은 진단은?

## 선택지

A. 라트케열낭종
B. 두개인두종
C. 뇌하수체 거대선종
D. 시신경 경로 교종

## 해설

성장 저하와 시야 증상은 시상하부·뇌하수체와 시신경교차 주변의 병변을 시사한다. 소아의 안장 위 고형·낭성 종괴에 석회화가 있으면 두개인두종이 가장 합당하다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시되지 않은 영상 소견을 관찰했다고 한 설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001229
- https://www.cancer.gov/types/brain/hp/child-cranio-treatment-pdq
