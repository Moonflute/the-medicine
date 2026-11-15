---
type: qbank
schema_version: 1
id: medqa-us-validation-000981
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e38d1c6346c423d25d32929f6284f74229b5d75fb1d80870559802bd776f3ec2
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "담석증"
  - "담낭 산통"
  - "콜레시스토키닌"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_sk7jqsJzrj4wgKEdhbGxzdG9uZSkubWQ
question_type: diagnosis
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Nb3JwaGluZS5tZA
---

# MedQA US 임상문제

## 문제

39세 여성이 식사 후 갑자기 생긴 오른쪽 윗배 통증이 오른쪽 어깨로 뻗친다고 한다. 비슷한 통증이 이전에도 있었으며 이번 통증은 3시간 만에 완전히 사라졌다. 열과 황달은 없고 빌리루빈과 리파아제는 정상이다. 초음파에서 담석이 보이지만 담낭벽 비후나 총담관 확장은 없다. 가장 가능성 높은 진단은?

## 선택지

A. 급성 결석성 담낭염
B. 단순 담도산통
C. 급성 담관염
D. 담석성 췌장염

## 해설


담석과 반복되는 단시간의 우상복부 통증은 일시적 담낭관 폐쇄로 인한 담도산통에 합당하다. 발열, 지속 통증, 담낭벽이나 담도의 이상이 동반되면 담낭염·담관염 등 합병증을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000981 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 식후 담낭 수축을 일으키는 CCK B와 담도산통의 기초 생리 연결을 원문 대조하여 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000981
- https://pmc.ncbi.nlm.nih.gov/articles/PMC12285291/
