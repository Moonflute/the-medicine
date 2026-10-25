---
type: qbank
schema_version: 1
id: medqa-us-train-001512
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:ee9948900276ab2d3a7a5d43b113803c00747bf86cf437d0fd6339c816bb9ca0
exam: USMLE Step 2/3
language: ko
specialty: 15 정신건강의학과
related_diseases:
  - "major depressive disorder"
  - "SSRI perioperative management"
  - "suicidal ideation"
question_type: management
related_disease_slugs:
  - MTUg7KCV7Iug6rG06rCV7J2Y7ZWZ6rO8L-yjvOyalCDsmrDsmrgg7J6l7JWgIChNYWpvciBEZXByZXNzaXZlIERpc29yZGVyKS5tZA
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
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Fc2NpdGFsb3ByYW0ubWQ
medical_review_status: evidence-reviewed
clinical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

30세 남성이 2개월 추적진료를 위해 내원했다. 10년간 함께한 남성 파트너와 최근 헤어졌고 새 스타트업 회사의 업무를 감당하며 체중을 유지하기 어려워했다. 처음 방문에서 에스시탈로프람을 처방받았다. 2주 후 더 우울해졌지만 계속 복용하라고 했다. 자살 생각을 실행하려는 욕구가 커져 단기간 입원했다. 이번에 훨씬 나아졌지만 주말에 선택적 서혜부 탈장수술이 예정되어 있다. 외과의가 수술 전 아무것도 먹지 말라고 했고 매일 에스시탈로프람을 복용할 필요가 없다고 느낀다. 가장 적절한 답변은 무엇인가?

## 선택지

A. 수술 당일 에스시탈로프람을 계속 복용하고 이후 관해 후 최소 6개월간 유지하고 재평가한다
B. 에스시탈로프람을 중단한다
C. 수술 전날 중단하고 이후 관해 후 최소 6개월간 유지하고 재평가한다
D. 수술 당일 중단하고 이후 관해 후 최소 6개월간 유지하고 재평가한다

## 해설

제시된 수술에서 에스시탈로프람은 보통 수술 당일에도 계속하며, 금식이 약물의 임의 중단을 뜻하지 않도록 수술·마취팀과 복용 방법을 확인한다. 출혈·저나트륨혈증·QT 연장과 세로토닌성 약물 상호작용 등은 개별 평가한다. 호전됐다는 이유로 갑자기 중단하지 않으며 항우울제는 일반적으로 관해 후 최소 6개월 유지하고 재발 위험·자살위험·부작용에 따라 더 긴 치료를 논의한다. 원문 선지의 일률적인 추가 4개월은 현재 유지 기간 안내로 충분하지 않아 공통 기간을 교정했다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001512

## 검수 근거

- 검수일: 2026-10-25
- 범위: 영문 eligible.jsonl 동일 ID와 한국어 본문·선지·정답·해설 대조. 수술 당일 SSRI 지속 정답 유지. 무조건 안전·수술 후 4개월 자동 중단 설명 교정하고 관해 후 최소 6개월 유지로 선지의 공통 기간만 현행화.
- 의학 검수 수준: evidence-reviewed (아래 출처의 명시된 주장에 한정).
- https://periop-handbook.ukclinicalpharmacy.org/drug/escitalopram/
- https://www.nice.org.uk/guidance/ng222/chapter/Recommendations
