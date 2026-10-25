---
type: qbank
schema_version: 1
id: medqa-us-train-004939
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a0a474761369e17f6c0c72cfb3dedd1c8566a190b623a8c09aba09ebcd2ab706
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "허혈성 지속발기증"
  - "트라조돈"
  - "약물 유발 지속발기증"
  - "Priapism"
question_type: mechanism
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남자가 5시간 동안 지속된 통증성 발기 때문에 응급실에 왔다. 겸상적혈구 형질, 골관절염, 불면증, 사회불안장애, 통풍, 제2형 당뇨병, 주요우울장애, 고혈압이 있다. 프로프라놀롤, 시탈로프람, 트라조돈, 라스부리카제, 메트포르민, 글리부라이드, 리시노프릴 등을 복용한다. 외상이나 주사, 보형물 없이 단단한 발기가 지속된다. 다음 중 이 상태를 유발했을 가능성이 가장 높은 약물은?

## 선택지

A. 트라조돈
B. 대마 사용
C. 시탈로프람
D. 프로프라놀롤

## 해설

정답은 A, 트라조돈이다. 트라조돈은 지속발기증을 일으킬 수 있는 알려진 약물이며 α1-아드레날린 수용체 길항작용이 발기 소실 장애에 기여할 수 있다. 모든 지속발기증의 가장 흔한 약물 원인으로 단정할 필요는 없다. 통증성 단단한 발기가 5시간 지속되어 허혈성 지속발기증을 우려하므로 원인약 중단과 별도로 즉각적인 비뇨의학과 응급치료가 필요하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. trazodone의 α2 차단이라는 수용체 기전 오류를 α1 차단으로 수정, priapism 오역/최빈약제 단정 제거. A 유지.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7baa8eef-3a5c-43b3-a5fe-0c449aacda2e

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004939
