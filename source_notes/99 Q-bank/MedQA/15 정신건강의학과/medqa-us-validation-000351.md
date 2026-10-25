---
type: qbank
schema_version: 1
id: medqa-us-validation-000351
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b018437cf4dae9e54ffc5b79aa05f8e409ea8c861439feaa1861dd934b67aecb
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "조현병"
  - "피해망상"
  - "음성증상"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yhsO2YhOuzkSAoU2NoaXpvcGhyZW5pYSkubWQ
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
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

19세 남성이 어머니와 함께 정신과에 왔다. 고등학교 때는 우수한 학생이었지만 대학 2학년이 되면서 성적이 떨어지고 친구들과 어울리지 않는다. 친구들이 자신의 위치를 알고 침실 창문에서 지켜본다고 말하며 왜 모두 자신을 미쳤다고 생각하는지 이해하지 못한다. 면담 중 자발적 움직임이 줄어 있고 단조롭고 작은 목소리로 말하며 의심스럽고 방어적이다. 기분은 대체로 평탄하고 우울증이나 정신병 증상은 부인한다. 가장 가능성 높은 진단은?

## 선택지

A. 편집성 인격장애
B. 조현병
C. 약물남용
D. 뇌종양

## 해설

학업·사회 기능 저하에 비현실적인 감시 믿음과 둔화 정동·말과 자발성 감소가 동반되어 제시된 진단 중 조현병이 가장 가깝다. 원문에 환각이나 사고방출이 명시된 것은 아니다. 실제 진단에서는 전체 기간·활성 증상과 기분·물질·의학적 원인을 확인하며, 당사자가 정신병을 부인한다는 이유만으로 증상이 없다고 판단하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000351

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 원문에 없는 환각·사고방출 감소를 실제 음성증상·피해 믿음·기능 저하로 교정.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
