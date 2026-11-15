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
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
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

생후 2일 신생아의 정맥 헤마토크릿이 73%다. 저혈당을 교정했는데도 처짐과 청색증·관류 저하가 지속되고, 신생아팀이 과점도증을 의심한다. 고려할 처치는?

## 선택지

A. 빈혈이 없어도 농축 적혈구 수혈
B. 하이드록시우레아로 적혈구 생성을 억제
C. 신생아 전문팀에서 부분 교환수혈을 고려
D. 모든 증상이 사라질 때까지 외래에서 추적

## 해설

정맥 헤마토크릿이 높고 과점도증을 설명할 증상이 지속되면 부분 교환수혈을 고려할 수 있다. 증상이 없는 신생아를 수치만으로 모두 치료하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 증상 동반 높은 헤마토크릿의 부분교환 적응증과 정맥 검체 확인·저혈당 동시 처치를 명확화.
- https://medconnection.ucsfbenioffchildrens.org/polycythemia-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004082
