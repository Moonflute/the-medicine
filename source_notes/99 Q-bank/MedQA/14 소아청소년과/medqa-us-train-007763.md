---
type: qbank
schema_version: 1
id: medqa-us-train-007763
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:990ab576b06ea73c4ed7be5055093bd9ef7cd3f38f7b8ca055eea127b70644fe
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "hand-foot-and-mouth disease"
  - "Coxsackievirus"
  - "enterovirus"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7IiY7KGx6rWs67ORIChIYW5kLUZvb3QtTW91dGggRGlzZWFzZSkubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
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

2세 아이가 입안 수포와 손발 발진으로 수족구병을 진단받았다. 이틀 뒤 갑자기 한쪽 다리에 힘이 빠지고 혼자 서지 못한다. 가장 적절한 조치는?

## 선택지

A. 신경계 합병증 등 급성 마비 원인을 응급 평가한다
B. 다리 통증을 동반한 흔한 경과이므로 해열제만 준다
C. 열이 모두 내린 뒤에 근력을 확인한다
D. 발진이 사라지면 물리치료만 시작한다

## 해설

새로운 국소 근력 저하는 전형적인 수족구병 증상이 아니다. 신경계 합병증이나 다른 급성 이완마비 원인을 확인해야 하며 발진이 사라질 때까지 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Coxsackievirus와 EV-A71을 동의어로 쓴 오류 교정 및 근력저하 경고 명시.
- https://www.cdc.gov/hand-foot-mouth/causes/
- https://www.paho.org/sites/default/files/2025-03/2025-mar-26-phe-epidemiological-alert-hand-foot-mouth-disease.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007763
- https://health.kdca.go.kr/healthinfo/biz/health/gnrlzHealthInfo/gnrlzHealthInfoView.do?cntnts_sn=6768
