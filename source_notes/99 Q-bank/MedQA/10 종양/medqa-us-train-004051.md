---
type: qbank
schema_version: 1
id: medqa-us-train-004051
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c5d57c54f4191f496571031198e21397189ef706dc584dbcac4efe9fa12af4a
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "랑게르한스세포 조직구증"
  - "버벡 소체"
  - "골 병변"
  - "Langerhans cell histiocytosis"
related_disease_slugs:
  - MTAg7KKF7JaRL-uekeqyjOultO2VnOyKpCDshLjtj6wg7KGw7KeB6rWs7KadIChMYW5nZXJoYW5zIENlbGwgSGlzdGlvY3l0b3NpcykubWQ
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

2세 아이에게 치아가 흔들릴 정도로 잇몸이 붓고 얼굴뼈와 두개골의 골용해 병변이 여러 개 보인다. 생검 조직에 핵이 패인 세포와 호산구가 많다. 랑게르한스세포 조직구증을 확인하는 면역염색은?

## 선택지

A. CD3와 CD20
B. CD1a와 랑게린(CD207)
C. 데스민과 미오제닌
D. 사이토케라틴과 TTF-1

## 해설


랑게르한스세포 조직구증은 조직의 특징적 세포와 CD1a·랑게린 발현으로 진단한다. 전자현미경으로 버벡 과립을 확인하는 것은 일반적인 필수 검사가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004051 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Langerhans 세포 조직구증을 Graves병으로 잘못 연결한 질환명을 교정했다.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004051
- https://doi.org/10.1002/pbc.24367
