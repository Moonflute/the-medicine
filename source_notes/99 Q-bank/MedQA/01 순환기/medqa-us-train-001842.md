---
type: qbank
schema_version: 1
id: medqa-us-train-001842
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d47a9a5af160d1160332702e894f8c395d1decc939f9c7895551a62149379283
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "hereditary hemorrhagic telangiectasia"
  - "arteriovenous malformation"
  - "high-output heart failure"
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rj5nsoJXrp6Ug7KeI7ZmYIChBcnRlcmlvdmVub3VzIG1hbGZvcm1hdGlvbikubWQ
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: risk_factor
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

13세 남아가 그날 아침 입술에서 출혈이 있어 내원했다. 어린 시절부터 반복적인 코피가 있었고 아버지도 같은 병력이 있다. 키와 체중은 60백분위수이다. 입술, 코, 손가락에 작고 여러 개의 확장된 모세혈관이 보인다. 다음 중 위험이 증가하는 질환은 무엇인가?

## 선택지

A. 녹내장
B. 신세포암
C. 고박출성 심부전
D. 위장관 용종

## 해설


Hereditary hemorrhagic telangiectasia는 다발성 모세혈관 확장으로 AVM을 유발하고, 고출력 심부전이 흔한 합병증이다. 따라서 고박출성(고출력) 심부전 위험이 증가한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 가족성 코피·입술/비부/손가락 telangiectasia는 HHT. 큰 AV shunt로 high-outputHF C 위험이 증가.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001842
