---
type: qbank
schema_version: 1
id: medqa-us-test-000556
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:9cb43be0bf2668d5156dc7e82bd083b2c9e01b64a904f7f4e069ad225a1ca14d
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "청소년 주요우울장애"
  - "자살 위험"
  - "비자의 입원"
question_type: ethics
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전에 건강했던 14세 남아가 3주 동안 식욕부진, 불면, 극심한 과민성으로 병원에 왔다. 최근 연습에 너무 많이 빠져 학교 미식축구팀에서 퇴출되었고 가족과 친구를 피하지만 외롭다고 인정한다. 이틀 동안 방을 나오지 않아 아버지가 데려왔다. 질환이나 복용약은 없고 술이나 기분전환용 약물도 사용하지 않는다. 아버지가 대기실에 있는 동안 정신상태검사를 시행했으며 정동은 제한되어 있었고 인지기능은 정상이었다. 죽는 편이 낫다고 말하며 치료를 거부하고 주말에 부모가 교회에 간 사이 아버지의 합법적인 총으로 ‘고통을 끝내고 싶다’고 했다. 다음 중 가장 적절한 처치는?

## 선택지

A. 추가 치료를 원하지 않는다는 의사를 따른다
B. 부모에게 알린 뒤 비자의 입원시킨다
C. 곧 좋아질 것이라고 안심시킨다
D. 외래 정신치료를 시작한다

## 해설

자살 의도뿐 아니라 구체적 계획, 총기에 대한 접근성, 실행 시점이 있고 치료도 거부하므로 즉각적인 안전 확보와 응급 정신과 평가가 필요하다. 제시된 선택지 중 부모에게 알리고 비자의 입원을 진행하는 것이 적절하다. 단순한 안심이나 외래 치료만으로 귀가시키지 않는다. 실제 비자의 입원 절차는 관할 법규에 따르며 모든 자살사고가 자동으로 비자의 입원 요건이 되는 것은 아니다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000556

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 정답 유지. '비자(위험도)' 오기와 선지 문자 제거, 구체적 계획·수단 접근성·치료 거부가 있는 긴급 위험 상황으로 설명.
- 의학 검수 수준: content-reviewed (최신 지침 전수 검증을 뜻하지 않음).
