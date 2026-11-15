---
type: qbank
schema_version: 1
id: medqa-us-train-003231
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f86840dfe089882d582567267efcf946cb1bbf20754827db2cbe8dbf7a849056
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "glucagonoma"
  - "necrolytic migratory erythema"
  - "glucagon level"
  - "pancreatic neuroendocrine tumor"
  - "Glucagonoma"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: investigation
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
  - ZHJ1ZzoxNSDsoITtlbTsp4jCt-yYgeyWkcK364-F7ISxwrfquLDtg4AvR2x1Y2Fnb24ubWQ
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

54세 여성이 최근 당뇨병이 생기고 3개월 동안 7kg이 빠졌다. 회음부와 허벅지에 가장자리가 물집을 이루고, 낫는 듯하다 다른 부위에 다시 생기는 홍반이 있다. 괴사성 이동성 홍반이 의심될 때 우선 확인할 혈액검사는?

## 선택지

A. 공복 가스트린
B. 공복 글루카곤
C. 공복 인슐린
D. 혈관활성 장 펩타이드

## 해설

괴사성 이동성 홍반, 체중 감소, 새로 발생한 당뇨병의 조합은 글루카곤종을 의심하게 한다. 공복 글루카곤으로 뒷받침하고, 의심이 높으면 영상으로 종양의 위치와 범위를 평가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 괴사성 이동성 홍반의 음역 오류와 glucagon 하나만으로 무조건 확진하는 표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003231
- https://doi.org/10.1111/jne.13318
