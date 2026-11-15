---
type: qbank
schema_version: 1
id: medqa-us-train-004464
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:169892a8a112c3d8aaf4c6577f6848083c4b7fb4e67868026ae0fb08f53b2da0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "장중첩증"
  - "소아 급성 복통"
  - "혈성 점액변"
question_type: investigation
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7J6l7KSR7LKp7KadIChJbnR1c3N1c2NlcHRpb24pLm1k
difficulty: standard
answer: B
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

18개월 아이가 갑자기 다리를 배 쪽으로 끌어당기며 심하게 울다가 잠잠해지기를 반복한다. 두 번 토했고, 통증 사이에는 비교적 편안하다. 활력징후는 안정적이고 복막 자극 소견은 없다. 가장 적절한 첫 영상검사는?

## 선택지

A. 단순 복부 X선
B. 복부 초음파
C. 조영증강 복부 CT
D. 상부위장관 조영검사

## 해설

발작처럼 반복되는 통증과 구토는 장중첩증을 시사한다. 복부 초음파가 일차 검사이며 혈성 점액변이 나올 때까지 기다리지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 공기관장을 최고 민감도 초기 진단검사로 단정한 설명을 초음파 우선·관장 정복의 역할로 교정.
- https://www.rch.org.au/clinicalguide/guideline_index/intussusception_guideline/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004464
- https://www.rch.org.au/clinicalguide/guideline_index/Intussusception/
