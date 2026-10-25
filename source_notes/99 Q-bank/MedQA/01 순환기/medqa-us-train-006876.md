---
type: qbank
schema_version: 1
id: medqa-us-train-006876
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:aadbbfdd387152c71cf95d70e6067ea119ed88c7f9bb3428b9e9e6cc3df9fc2d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "혈관미주신경성 실신"
  - "경련성 실신"
  - "상황성 실신"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-2YiOq0gOuvuOyjvOyLoOqyveyEsSDsi6Tsi6AgKFZhc292YWdhbCBTeW5jb3BlKS5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

23세 여성이 야구 경기장에서 실신하여 응급실에 내원했다. 화장실에서 일어설 때 따뜻하고 저린 느낌이 든 후 약 5초간 의식이 소실되었다. 의식이 없는 동안 주변 사람들은 상지의 경련과 수축을 보았다고 한다. 깨어난 뒤 넘어졌던 일과 실신 전 상황을 기억하고 혼돈은 없었다. 다른 질환은 없고 활력징후는 정상이다. 신체진찰에서 건강한 젊은 여성으로 보이며 뇌신경, 소뇌 기능, 보행 및 사지 근력은 정상이다. 심전도는 정상 축과 전압을 동반한 정상 동율동이다. 다음 중 관리의 다음 단계로 가장 적절한 것은?

## 선택지

A. 안심시키고 퇴원
B. 심초음파
C. 뇌파검사
D. 혈청 독성검사

## 해설

기립/화장실유발·전구온감·매우짧은실신·빠른명료회복과 정상ECG는 반사성실신을 지지해 제시중 안심/퇴원 A가 합리적이다. 짧은근간대운동은 실신에도 가능하다. 병력·기립혈압·위험평가후 적절한안전교육/재내원기준을 제공하며 모든실신에서 추가평가가 불필요한 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 저위험상황실신 A는 유지하되 짧은경련이간질확진이라는오해와 모든실신추가검사불요의일반화 방지.
- https://academic.oup.com/eurheartj/article/39/21/1883/4939241

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006876
