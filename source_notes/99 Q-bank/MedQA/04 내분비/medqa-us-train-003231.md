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

68세 여성이 지난 6개월 동안 약 5 kg의 설명되지 않는 체중감소로 내원했다. 1년 동안 반복되는 구내염과 설사가 있고 1년 전 당뇨병을 진단받았다. 사지, 입 주위, 생식기 주위에 서로 융합된 홍반성 구진·판·수포성 병변이 여러 개 있으며 구강검사에서 구각염, 설염, 구내염이 보인다. 다음 중 정확한 진단에 가장 도움이 되는 검사는?

## 선택지

A. 혈청 가스트린
B. 혈청 글루카곤
C. 혈청 인슐린
D. 혈청 혈관활성 장 펩타이드

## 해설

새 당뇨병·체중감소와 입주위/회음부의 괴사성 이동성 홍반(necrolytic migratory erythema), 설염·구각염은 glucagonoma를 시사한다. 혈청 glucagon B가 선택지 중 가장 직접적인 생화학검사이며 임상상·영상·병리 등과 함께 확진한다. 피부 병변만으로 종양을 확정하거나 상승 glucagon을 단독 해석하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 괴사성 이동성 홍반의 음역 오류와 glucagon 하나만으로 무조건 확진하는 표현 교정.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003231
