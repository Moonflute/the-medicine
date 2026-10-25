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

양극성 장애 병력이 있는 27세 여성이 리튬 치료 시작 후 3개월 추적 진료를 받으러 왔다. 약을 잘 복용했지만 호전이 없다고 한다. 다른 병력이나 복용약, 알려진 알레르기는 없다. 발열은 없고 활력징후와 신체진찰은 정상이었다. 다른 약으로 변경했으며 2주 후 몸통에 중심에 수포가 있는 표적 모양 병변이 갑자기 발생해 내원했다. 발진은 2일 전 시작해 점점 악화되었고, 1주 전 발열, 기면, 근육통, 오한이 발생했으나 3일 만에 호전되었다. 다음 중 처방받았을 가능성이 가장 높은 약물은?

## 선택지

A. 라모트리진
B. 발프로산
C. 올란자핀-플루옥세틴 복합제
D. 파록세틴

## 해설

라모트리진 시작 2주 후 전신 전구증상과 수포성 표적 모양 발진이 생긴 것은 중증 약물성 피부반응을 의심하게 한다. 라모트리진은 스티븐스-존슨증후군/독성표피괴사용해를 포함한 중증 발진 위험이 있으며 초기 수 주에 특히 주의한다. 따라서 제시된 약물 중 라모트리진이 가장 적절하다. 실제로는 점막 침범 등도 확인하고 중증 약물발진에 대한 즉각적인 평가가 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000403

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 라모트리진 정답 유지. 비특이적인 광감수성 설명을 제거하고 초기 중증 약물성 발진 위험에 연결; 선지 문자 참조 제거.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=44670496-41ea-36a1-c435-32e359766a74&type=display
