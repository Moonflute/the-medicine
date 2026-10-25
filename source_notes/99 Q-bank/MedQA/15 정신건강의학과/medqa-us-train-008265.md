---
type: qbank
schema_version: 1
id: medqa-us-train-008265
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:00920fd98839376cf0b2e86df0723f38dd76da5ca4581981f9bd3dcf403af324
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "anorexia nervosa"
  - "orthostatic hypotension"
  - "functional hypothalamic amenorrhea"
question_type: diagnosis
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yLoOqyveyEseyLneyaleu2gOynhOymnSAoQW5vcmV4aWEgTmVydm9zYSkubWQ
  - MDEg7Iic7ZmY6riwL-q4sOumveyEsSDsoIDtmIjslZUgKE9ydGhvc3RhdGljIEh5cG90ZW5zaW9uKS5tZA
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

21세 여성이 임신을 걱정해 내원했다. 마지막 월경은 4개월 전이며 남자친구와 무방비 성관계를 했지만 이후 헤어졌다. 매우 마르고 매일 몇 시간씩 체육관에서 운동하며 체중이 늘지 않도록 식이에서 벗어나면 더 오래 운동한다고 한다. BMI 17 kg/m²이고 소변 임신검사는 음성이다. 다음 중 추가로 나타날 가능성이 높은 소견은?

## 선택지

A. 기립성 저혈압
B. 일차성 무월경
C. 저콜레스테롤혈증
D. 저칼륨성 알칼리증

## 해설


과도한 체중 감량과 저체중은 기능성 무월경을 일으키며, 저혈압(기립성)도 흔히 동반된다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008265

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 영문·한국어 본문·모든 선지·답·해설 대조. 저체중·과운동·이차성 무월경의 제한형 섭식장애 맥락에서 기립성 저혈압 선택 타당; 구토가 명시되지 않아 저칼륨성 알칼리증을 자동 가정하지 않음.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
