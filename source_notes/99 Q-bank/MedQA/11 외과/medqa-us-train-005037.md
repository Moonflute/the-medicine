---
type: qbank
schema_version: 1
id: medqa-us-train-005037
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8be9639bae64bda03c9ec901aae512f7e9a1feaf7a84c164ce7d9cc9b64809f8
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "손가락 절단"
  - "절단지 보존"
  - "미세혈관 재접합술"
related_disease_slugs: []
question_type: management
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

54세 남성의 엄지가 작업 중 완전히 절단됐다. 지혈한 뒤 환자와 절단 부위를 재접합 가능한 병원으로 이송한다. 절단 부위를 어떻게 보관할까?

## 선택지

A. 절단 부위를 생리식염수에 바로 담근다
B. 절단 부위를 얼음에 직접 댄다
C. 살짝 적신 멸균 거즈로 싸서 밀봉한 뒤 봉지 바깥을 냉각한다
D. 절단 부위를 물로 계속 씻으며 상온으로 운반한다

## 해설


절단 부위는 생리식염수를 살짝 적신 멸균 거즈로 감싸 방수 봉지에 넣고 간접 냉각한다. 조직을 얼음에 직접 대거나 물에 잠기게 하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005037 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 절단지 운반 C의 습윤·밀봉 이후 간접 냉각과 즉시 운반을 명확히 했다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.orthoinfo.org/diseases--conditions/fingertip-injuries-and-amputations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005037
- https://assh.my.site.com/handcare/condition/hand-arm-finger-replantation
