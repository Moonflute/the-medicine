---
type: qbank
schema_version: 1
id: medqa-us-train-003991
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e25699938bf2df4f6e8f0be21390856838a19fc7c5fceb4b2fb4b3648bb7f576
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "두개인두종"
  - "안장위 종괴"
  - "중추성 갑상샘기능저하증"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsnbjrkZDsooUgKENyYW5pb3BoYXJ5bmdpb21hKS5tZA
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDquLDriqXsoIDtlZjspp0gKEh5cG90aHlyb2lkaXNtKS5tZA
question_type: 임상증례 객관식
difficulty: complex
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

65세 백인 여자가 한 달간 지속된 피로와 두통으로 내원했다. 두통은 머리 전체를 둔하게 조이며 최근 악화되었다. 복시와 점점 감소하는 주변 시야도 있다. 식이 조절과 규칙적인 운동을 하는데도 체중이 잘 빠지지 않으며, 현재 91kg이고 지난 한 달 동안 9kg이 증가했다. 과거력은 특이사항이 없다. 혈압 110/70 mmHg, 맥박 60회/분, 호흡수 12회/분, 체온 36.5°C이다. 양측 시신경유두부종, 약간의 발부종, 느린 심부건반사가 관찰된다. CT에서 안장위 석회화가 보인다. Na+ 140, K+ 3.8 mEq/L, 혈청 칼슘 9.5 mg/dL, TSH 0.05 U/mL, 유리 T4 0.2 ng/mL이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 두개인두종
B. 일차성 갑상샘기능저하증
C. 시신경 위축
D. 뇌하수체 선종

## 해설

안장위 석회화, 시야결손과 중추성 갑상샘저하의 조합은 선택지 중 두개인두종 A를 지지한다. 정상/낮은 TSH와 낮은 freeT4는 뇌하수체/시상하부 기능저하와 맞는다. 원발성 저하라면 보통 TSH가 상승하며, 모든연령에서 두개인두종이 가장 흔한 안장위종양인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 두개인두종 A의 석회화/시야결손 근거는 맞지만 모든연령 최다안장위종양이라는 단정 제거.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003991
