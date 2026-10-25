---
type: qbank
schema_version: 1
id: medqa-us-train-007533
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:81dff02c0c6a6a1fdd15134f41e4ad37a813314fccdc909981cceed5103828d5
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "외상후스트레스장애"
  - "전투 외상"
  - "인지행동치료"
  - "악몽"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yZuOyDgSDtm4Qg7Iqk7Yq466CI7IqkIOyepeyVoCAoUFRTRCkubWQ
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yVheuqvSAoTmlnaHRtYXJlKS5tZA
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9WZW5sYWZheGluZS5tZA
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

35세 남자가 2개월 동안 지속된 불안으로 보훈병원에 내원했다. 전투 의무병으로 이라크에 세 번째 파병을 다녀온 뒤 최근 귀국했다. 민간 생활에 적응하기 어렵고 택시 운전사로 일하지만 운전에 어려움이 있어 휴직했다. 지난주 길에 있던 비닐봉지를 피하려다 표지판을 들이받았다. 악몽 때문에 잠을 잘 수 없고 부대원들의 죽음이 떠올라 ‘내 잘못이다. 그들을 구할 수도 있었다. 도와달라’고 말한다. 정신상태검사에서 우울한 기분과 제한된 정동이 보이며 자살사고는 없다. 다음 중 가장 적절한 초기 치료는 무엇인가?

## 선택지

A. 동기강화면담
B. 프라조신 치료
C. 벤라팍신 치료
D. 인지행동치료

## 해설

전투 외상 후 재경험·회피/과각성과 기능장애가 지속되어 PTSD를 시사한다. 제시된 선택지 중 외상 중심 인지행동치료가 적절한 초기 선택이다. CPT·지속노출 등 근거 기반 외상 중심 치료를 고려한다. 벤라팍신도 근거가 있는 약물이며 환자 선호·접근성에 따라 논의할 수 있고 프라조신은 악몽 표적 치료이다. 현재 자살사고가 관찰되지 않는다고 위험이 없다는 뜻은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007533

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 자살사고 부인으로 위험이 없다는 단정 삭제. 초기 CBT를 외상 중심 치료로 명확히 하고 벤라팍신의 유효성도 인정.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://www.ptsd.va.gov/professional/treat/txessentials/clinician_guide_meds.asp
