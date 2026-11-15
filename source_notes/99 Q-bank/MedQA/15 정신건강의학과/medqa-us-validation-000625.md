---
type: qbank
schema_version: 1
id: medqa-us-validation-000625
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e97733d52087bd9c66ea3df01b6aef4a3880edb1b5290a7ed7cabe363227d70e
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "급성 정신병"
  - "명령환청"
  - "자·타해 위험"
  - "Acute psychotic disorder"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-2LsSDsnqXslaAgKFRpYyBEaXNvcmRlcikubWQ
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9BcmlwaXByYXpvbGUubWQ
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

급성 정신병 증상이 있는 환자가 다른 사람을 해치라는 목소리를 듣고 실행에 옮기려 했다. 지금도 타해 위험이 크고 치료와 입원을 거부한다. 다른 입원 절차를 밟을 시간적 여유가 없다. 안전을 확보하며 국내에서 검토할 조치는?

## 선택지

A. 가족 한 명의 구두 동의만으로 기간 제한 없이 입원시킨다
B. 퇴원시킨 뒤 외래 예약만 잡는다
C. 의사와 경찰관의 동의를 받아 정신의료기관에 응급입원을 의뢰한다
D. 환자가 나중에 자의입원에 동의할 때까지 보호 조치를 하지 않는다

## 해설


정신건강복지법 제50조는 위해 위험이 크고 다른 입원 절차를 밟을 여유가 없을 때 의사와 경찰관의 동의로 응급입원을 의뢰할 수 있도록 한다. 정신병 진단만으로 응급입원 요건이 충족되는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000625
- https://www.law.go.kr/lsLinkCommonInfo.do?lsJoLnkSeq=1030469067

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 최근 실제 방화 시도·명령환청·치료 거부라는 영한 본문과 선지·답·해설 확인. 즉시 보호 및 입원 평가 선택 타당.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
