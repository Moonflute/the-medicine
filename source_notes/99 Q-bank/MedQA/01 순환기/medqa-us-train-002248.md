---
type: qbank
schema_version: 1
id: medqa-us-train-002248
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:87685e6ffc392ae4b18a585a65e3637a861fb3aaf14684d10181252a43cbf558
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "cardiac tamponade"
  - "pericardial effusion"
  - "electrical alternans"
  - "low voltage"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOyepSDriIzrprzspp0gKENhcmRpYWMgVGFtcG9uYWRlKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

54세 남성이 호흡곤란과 저혈압으로 내원했다. 경정맥이 팽창하고 심음이 작다. 심초음파에서 큰 심낭삼출과 우심실 이완기 허탈이 보인다. 심전도에서 큰 심낭삼출을 뒷받침하는 소견은?

## 선택지

A. 여러 유도의 오목한 ST분절 상승과 PR분절 하강
B. I유도의 S파와 III유도의 Q파·T파 역전
C. 우축편위와 우심실 비대 소견
D. 낮은 QRS 전압과 박동마다 번갈아 바뀌는 QRS 진폭

## 해설


큰 심낭삼출에서 심장이 심낭액 안에서 움직이면 QRS 진폭이 교대로 변하는 전기적 교대가 나타날 수 있다. 저전압도 동반될 수 있지만, 이러한 소견이 없다고 심낭압전을 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저혈압·JVD·심음 감소에 echo 심낭액/심장압박이 이미 명시되어 흉부영상 없이도 전기교대 D 판단 가능.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002248
- https://doi.org/10.1093/eurheartj/ehaf192
