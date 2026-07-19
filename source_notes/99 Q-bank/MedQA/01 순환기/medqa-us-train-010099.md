---
type: qbank
schema_version: 1
id: medqa-us-train-010099
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:f1616b3665b53e9983fe1e07651b1a9d4ee31d1f1920aa3b979d8117f7837b77
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심실세동"
  - "급성 심근경색"
  - "심장 돌연사"
question_type: prognosis
difficulty: simple
answer: D
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

78세 남성이 35갑년 흡연력, 고지혈증, 말초혈관질환이 있다. 집에서 아내와 저녁을 먹던 중 갑자기 짓누르는 듯한 심한 흉통이 발생했다. 외딴 시골에 살아 구급대가 30분 후 도착했을 때 사망이 확인되었다. 이 환자 사망의 가장 가능성 높은 원인은?

## 선택지

A. 심실중격 파열
B. 심장눌림증
C. 심장 차단
D. 심실세동

## 해설


갑작스러운 심한 압박성 흉통은 급성 심근경색에 동반되는 치명적인 부정맥을 시사한다. 심실세동은 대동맥 혈류를 차단해 몇 분 내에 사망을 초래한다. 따라서 사망 원인으로 가장 가능성이 높은 것은 심실세동이다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010099
