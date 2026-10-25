---
type: qbank
schema_version: 1
id: medqa-us-train-004318
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:396d4c8378cdc3b954b74ee6f8f3188f87d2f587221616453db77d2c0cbedf5b
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "철결핍성 빈혈"
  - "반응성 혈소판증가증"
  - "소구성 빈혈"
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv7LKgIOqysO2VjeyEsSDruYjtmIggKElyb24gRGVmaWNpZW5jeSBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-u5iO2YiCAoQW5lbWlhKS5tZA
question_type: 임상증례 객관식
difficulty: complex
answer: A
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

47세 여자가 정기 건강검진을 받으러 왔다. 6개월간 전신 피로와 무기력이 있고 특별한 병력과 복용약은 없다. 일주일에 6일 밤 ‘사교적으로’ 술을 마시며 매일 밤 자기 전에 와인 1~2잔을 마신다. 약물이나 흡연력은 없다. 신체검사에서 점막이 창백하고 평균적혈구용적 72 fL, 백혈구 5,300/µL, 헤모글로빈 11.0 g/dL, 혈소판 420,000/µL이다. 이 환자의 혈소판증가증 원인으로 가장 가능성 높은 것은 무엇인가?

## 선택지

A. 철결핍성 빈혈
B. 만성 알코올 남용
C. 만성 골수성 백혈병
D. 재생불량성 빈혈

## 해설


MCV72fL의 소구성 빈혈에서는 철결핍 A가 선택지 중 경계성 혈소판 증가의 가장 가능한 관련 원인이다. 철결핍은 반응성 혈소판 증가를 동반할 수 있다. 혈소판420,000/µL는 검사실 기준에 따라 경계 수준이고 흔히 쓰는450,000/µL의 명백한 혈소판증가증 기준에는 미달하므로 수치만으로 골수증식종양을 진단하지 않는다. Ferritin·염증 지표 등으로 원인을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004318 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문의 잘못된 mL 혈구단위를 /µL로 교정;420,000의 경계 수준과 미세소구성 빈혈의 반응성 기전 설명.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004318
