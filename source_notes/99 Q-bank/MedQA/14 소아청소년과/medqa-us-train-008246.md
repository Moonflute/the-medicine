---
type: qbank
schema_version: 1
id: medqa-us-train-008246
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3907abf3dbc10a80b862882b4e60389f00e2499d5932c74e0b388f7e86bdd9a0
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "necrotizing enterocolitis"
  - "pneumatosis intestinalis"
  - "prematurity"
question_type: management
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDstJ3roaAv7Iug7IOd7JWEIOq0tOyCrOyEsSDsnqXsl7wgKE5lb25hdGFsIE5lY3JvdGl6aW5nIEVudGVyb2NvbGl0aXMpLm1k
difficulty: standard
answer: D
publication_status: "withheld"
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

재태 27주 출생아가 수유를 늘리던 중 복부가 팽만하고 혈변을 봤다. X선에서 장벽 안 가스가 보이지만 복강 내 유리공기는 없다. 현재 혈역학적으로 안정적이다. 적절한 초기 처치는?

## 선택지

A. 경관 수유량만 줄이고 계속 먹인다
B. 장중첩으로 판단하고 공기 관장을 한다
C. 장벽 내 가스만으로 즉시 장절제술을 한다
D. 수유를 중단해 위를 감압하고 정맥 항생제를 시작하며 소아외과와 함께 경과를 본다

## 해설

미숙아의 혈변·복부팽만과 장벽 내 가스는 괴사성 장염을 시사한다. 천공이 없으면 금식, 감압, 수액과 항생제 및 반복 평가가 기본이며, 천공이나 상태 악화 시 수술을 검토한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: Pneumatosis intestinalis를 폐쇄성 장벽 공기로 잘못 명명한 해설 교정.


## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008246
- https://pubmed.ncbi.nlm.nih.gov/39925108/
