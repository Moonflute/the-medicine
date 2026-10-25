---
type: qbank
schema_version: 1
id: medqa-us-train-005431
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8d1629de76676c54aa09adcba9c96409ef4a6f247fc5a660bfd605822fc496e4
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "두부백선"
  - "족부백선"
  - "피부사상균 감염"
question_type: investigation
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

천식이 있는 28세 노숙자 남자가 1년 동안 두피와 발의 건조하고 비늘성인 발진과 심한 가려움으로 내원했다. 두피에 비늘성 탈모반, 후경부 림프절병증, 발가락 사이와 발뒤꿈치·발 측면의 인설이 있다. 의심되는 질환을 확인하는 가장 정확한 검사는?

## 선택지

A. 우드등 검사
B. 사부로 액체배지 배양
C. 두피 찰과물 KOH 검사
D. 전혈구검사와 총 혈청 IgE

## 해설

두피 인설성 탈모·후경부 림프절과 발 인설은 피부사상균증을 시사한다. 선지 중 Sabouraud 배양(B)은 진균을 확인하고 균종을 규명하는 확진 검사다. KOH 직접검사는 빠르게 균사를 확인하는 데 유용하며 배양도 검체·선행 치료 등에 따라 위음성이 가능하다. 모든 감염·검체에서 배양이 언제나 가장 민감하다고 일반화하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 진균 배양 B는 균종 확인에 유용하지만 모든 상황에서 KOH보다 가장 민감하다고 단정한 설명을 제한한다.
- 공식/학회 근거: https://www.bad.org.uk/pils/tinea-capitis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005431
