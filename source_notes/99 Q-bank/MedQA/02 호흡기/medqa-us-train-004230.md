---
type: qbank
schema_version: 1
id: medqa-us-train-004230
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:e2b433fb708abb99893a806a7a35cd87b96e533b39d30b0c6e8048993b931e80
exam: USMLE Step 2/3
language: ko
specialty: 02 호흡기
related_diseases:
  - "천식"
  - "운동 유발 기관지수축"
  - "메타콜린 유발검사"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-yynOyLnS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

21세 여성이 운동과 밤에 반복되는 천명과 가슴 답답함을 호소한다. 증상이 없는 날 시행한 기관지확장제 전후 폐활량검사는 두 차례 정상이고 변동성을 확인하지 못했다. 천식이 여전히 의심될 때 기도 과민성을 확인할 검사는?

## 선택지

A. 메타콜린 기관지유발검사
B. 피부단자검사
C. 저선량 흉부 CT
D. 흉부 MRI

## 해설


증상이 없는 때는 천식 환자도 폐활량검사가 정상일 수 있다. 전후 검사에서 가역적 기류제한을 확인하지 못했는데 의심이 남으면 기관지유발검사로 기도 과민성을 평가할 수 있다. 피부검사는 감작을 확인하지만 천식의 가변적 기류제한을 입증하지는 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 천식의심이나 정상spirometry에서 기관지과민성 유발검사 A로 객관화.
- https://ginasthma.org/reports/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004230
- https://new.lungkorea.org/board/guide/view/14959
- https://ginasthma.org/2026-gina-strategy-report/
