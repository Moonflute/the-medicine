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

8세 남아가 단신으로 진료를 받으러 왔다. 1년간 옷과 신발 크기가 변하지 않았고 가구에 자주 부딪히며 밤에 두통이 있다. 차가운 물을 계속 마시고 소변을 자주 보며 키와 체중이 모두 5백분위수였다. TSH 0.3 μU/mL, 티록신 3.9 μg/dL, IGF-1 24 ng/mL로 낮았다. 가장 가능성 높은 진단은?

## 선택지

A. 라트케열낭종
B. 두개인두종
C. 다발성 내분비 종양
D. 뇌하수체 선종

## 해설

정답은 B이다. 성장 정지와 낮은 IGF-1, 낮은 T4에 비해 부적절하게 낮은 TSH, 시야장애 의심 행동 및 다뇨·다갈은 시상하부-뇌하수체 주변 병변을 시사한다. 소아에서는 두개인두종이 제시된 선택지 중 가장 합당하다. 원문에 영상 결과는 없으므로 종양이 이미 보였다고 설명하지 않으며 영상과 내분비 평가로 확인해야 한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 제시되지 않은 영상 소견을 관찰했다고 한 설명 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-001229
