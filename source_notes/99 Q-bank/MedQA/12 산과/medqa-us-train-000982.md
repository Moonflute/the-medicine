---
type: qbank
schema_version: 1
id: medqa-us-train-000982
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d995c700be01e2bd837250fbef1b088309920df6445cb69f65c26511a6f4f74e
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "hyperemesis gravidarum"
question_type: investigation
related_disease_slugs:
  - MTIg7IKw6rO8L-yehOyLoCDsnoXrjacgKEh5cGVyZW1lc2lzIEdyYXZpZGFydW0pLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMyDshoztmZTquLAvTWlzb3Byb3N0b2wubWQ
  - ZHJ1ZzoxMSDsgrDrtoDsnbjqs7zCt-yGjOyVhC9PeHl0b2Npbi5tZA
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 37주 산모가 파수 뒤 진통이 진행해 경부가 6 cm 열렸다. 태아 심박은 안정적이지만 진찰만으로 두위인지, 둔위인지 확인하기 어렵다. 다음 조치는?

## 선택지

A. 초음파로 태위와 선진부를 확인한다
B. 태위를 모르는 상태로 옥시토신부터 올린다
C. 확인하지 않고 곧바로 외회전술을 시도한다
D. 태아 머리를 확인하지 않고 흡입분만을 준비한다

## 해설

분만 중 진찰만으로 태위가 불확실하면 침상 초음파로 확인한 뒤 분만 방법을 정한다. 양막이 파열되고 진통이 진행하는 상황에서 태위를 모르고 촉진이나 기구분만을 시작하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 경부 소실 50%를 개대 50%로 잘못 설명한 해설 수정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000982
- https://www.nice.org.uk/guidance/NG235/chapter/recommendations
