---
type: qbank
schema_version: 1
id: medqa-us-test-000403
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2ef8004d2f3773fa2634f3ce7ff8e3fcaab14bf8b7c596821459be835c1e605b
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "스티븐스-존슨증후군"
  - "라모트리진"
  - "양극성 장애"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-q4sOu2hCDsnqXslaAgKEJpcG9sYXIgYW5kIFJlbGF0ZWQgRGlzb3JkZXJzKS5tZA
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yWkeq3ueyEsSDsnqXslaAgKEJpcG9sYXIgRGlzb3JkZXIpLm1k
  - MTkg7ZS867aA6rO8L-yKpO2LsOu4kOyKpC3sobTsiqgg7Kad7ZuE6rWwLeuPheyEsSDtkZztlLwg6rS07IKsIChTdGV2ZW5zLUpvaG5zb24gU3luZHJvbWUgLSBUb3hpYyBFcGlkZXJtYWwgTmVjcm9seXNpcykubWQ
difficulty: standard
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9GbHVveGV0aW5lLm1k
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9MYW1vdHJpZ2luZS5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9PbGFuemFwaW5lLm1k
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

양극성장애 치료로 라모트리진을 시작한 지 2주 됐다. 발열 뒤 몸통에 통증성 수포가 생겼고 입안이 헐었다. 가장 적절한 조치는?

## 선택지

A. 라모트리진을 즉시 중단하고 중증 약물 피부반응으로 응급 평가한다
B. 용량만 줄이고 발진이 호전되는지 기다린다
C. 피부에 연고를 바르면서 같은 용량을 계속 복용한다
D. 약을 하루 쉬었다가 발진이 옅어지면 바로 재시작한다

## 해설

발열과 통증성 수포, 점막 침범은 스티븐스–존슨증후군 등 중증 약물 피부반응의 경고 신호다. 의심 약을 즉시 중단하고 피부와 점막 침범을 응급 평가한다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000403
- https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=200611060
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d7e3572d-56fe-4727-2bb4-013ccca22678

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 라모트리진 정답 유지. 비특이적인 광감수성 설명을 제거하고 초기 중증 약물성 발진 위험에 연결; 선지 문자 참조 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=44670496-41ea-36a1-c435-32e359766a74&type=display
