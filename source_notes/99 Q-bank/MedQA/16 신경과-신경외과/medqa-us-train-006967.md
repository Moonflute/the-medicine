---
type: qbank
schema_version: 1
id: medqa-us-train-006967
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:346e57a780bdd72cadc36d596fb4d156cab42012cd3aeb62874cde5d8b5dc7a3
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "소뇌 뇌졸중"
  - "척추동맥 박리"
  - "소뇌성 운동실조"
  - "지시점 과오증"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
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
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

25세 환자가 갑작스러운 목 통증 뒤 6시간째 현훈과 구토를 겪는다. 도움 없이 서지 못하고 왼손 손가락–코 검사에서 목표를 계속 지나친다. 가장 적절한 대응은?

## 선택지

A. 후반고리관 이석증으로 판단하고 이석정복술만 시행한다
B. 후순환 뇌졸중을 의심해 응급 뇌·두경부 혈관영상 평가를 진행한다
C. 청력검사만 시행한 뒤 외래 추적한다
D. 말초 현훈으로 보고 전정억제제를 투여한 뒤 귀가시킨다

## 해설

지속성 급성 현훈에 심한 보행 불안정과 팔다리 겨냥이상이 있으면 중추 원인을 의심한다. 새 목 통증까지 있으면 후순환 허혈과 척추동맥 박리 가능성을 응급 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 소뇌 조정장애에서 past-pointing C 유지. 단독 특이징후라는 과장 제거하고 급성 경부통·중추성 현훈 맥락을 반영.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006967
- https://pubmed.ncbi.nlm.nih.gov/37166022/
- https://pubmed.ncbi.nlm.nih.gov/38299330/
