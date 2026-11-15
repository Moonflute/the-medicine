---
type: qbank
schema_version: 1
id: medqa-us-train-009385
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:240d7f503b7059d16bbed2a25b4786c7f67d6605219726c865cf62f8c41843ba
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "hemophilia"
  - "혈우병"
  - "hemarthrosis"
related_disease_slugs:
  - MDkg7ZiI7JWhL-2YiOyasOuzkSAoSGVtb3BoaWxpYSkubWQ
question_type: prevention
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9EZXNtb3ByZXNzaW4ubWQ
---

# MedQA US 임상문제

## 문제

중증 혈우병 B 청소년이 자발적인 무릎 관절 출혈을 반복한다. 출혈할 때에만 제IX인자를 투여해 왔고 제IX인자 억제항체는 없다. 앞으로 관절 손상을 줄일 치료는?

## 선택지

A. 출혈할 때에만 데스모프레신을 투여한다
B. 진통제와 휴식만 계속한다
C. 정기적 제IX인자 보충 예방요법을 시작한다
D. 혈우병 A용 에미시주맙으로 바꾼다

## 해설


중증 혈우병 B에서 정기적 제IX인자 보충은 반복 관절 출혈과 관절 손상을 줄인다. 에미시주맙은 혈우병 A에 사용되며 제IX인자를 대신하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009385 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원정답 C 응고인자 농축제와 달리 해설이 D 휴식을 정답으로 주장한 명백한 불일치. 반복 관절출혈 예방은 정기 지혈 예방요법이며 휴식 단독이 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www1.wfh.org/publication/files/pdf-1863.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009385
- https://doi.org/10.1111/hae.14046
