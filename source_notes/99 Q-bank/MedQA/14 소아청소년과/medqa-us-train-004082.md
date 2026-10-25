---
type: qbank
schema_version: 1
id: medqa-us-train-004082
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:7060fdc104ad2e7bdebb57afa05a1d403acc052ce8a41d8832c9e3ff03f509dd
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "신생아 적혈구증가증"
  - "증상성 고점도 증후군"
  - "부분 교환수혈"
question_type: 임상증례 객관식
related_disease_slugs: []
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

생후 2일 된 여아를 검사하니 무기력하고 청색증이 있으며 오른팔에 거친 떨림이 있다. 어머니는 방에 들어오기 직전에 발작처럼 보이는 움직임을 관찰했다고 한다. 산모는 제2형 당뇨병이 있고 분만 중 탯줄 절단이 지연되었다. 전해질과 전혈구검사를 시행했더니 경미한 저혈당과 헤마토크릿 72%가 확인되었다. 이 상태에 가장 효과적인 치료는 무엇인가?

## 선택지

A. 수액과 부분 교환수혈
B. 수액 소생
C. 하이드록시우레아
D. 인터페론 알파

## 해설

청색증·떨림·경련 등 증상과 Hct 72%는 신생아 다혈구혈증/과점도증을 시사한다. 정맥 헤마토크릿으로 확인하고 저혈당 등 다른 원인도 즉시 교정하면서 전문 신생아 관리하에 부분교환수혈과 수액(A)을 고려한다. 무증상 또는 모세혈관 수치만 높은 모든 신생아에게 교환을 시행한다는 의미는 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 증상 동반 높은 헤마토크릿의 부분교환 적응증과 정맥 검체 확인·저혈당 동시 처치를 명확화.
- https://medconnection.ucsfbenioffchildrens.org/polycythemia-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004082
