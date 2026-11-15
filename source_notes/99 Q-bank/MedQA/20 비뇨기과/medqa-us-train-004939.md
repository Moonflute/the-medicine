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
question_type: management
related_disease_slugs: []
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvUHJvcHJhbm9sb2wubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

60세 남성이 트라조돈을 시작한 뒤 매우 아픈 발기가 5시간째 계속돼 내원했다. 음경해면체가 단단하고 외상은 없다. 허혈성 지속발기증이 의심될 때 가장 적절한 조치는?

## 선택지

A. 진통제를 처방하고 다음 날 재진한다
B. 응급 비뇨의학과 치료를 진행한다
C. 약만 중단하고 자연 해소를 기다린다
D. 따뜻한 목욕으로 호전되는지 관찰한다

## 해설

4시간 넘게 지속되는 통증성 발기는 허혈성 지속발기증을 의심해야 한다. 원인약 중단만으로 기다리지 말고 즉시 비뇨의학과에서 혈류 회복을 위한 처치를 진행한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. trazodone의 α2 차단이라는 수용체 기전 오류를 α1 차단으로 수정, priapism 오역/최빈약제 단정 제거. A 유지.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7baa8eef-3a5c-43b3-a5fe-0c449aacda2e

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004939
- https://uroweb.org/guidelines/sexual-and-reproductive-health/chapter/priapism
