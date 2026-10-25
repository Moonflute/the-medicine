---
type: qbank
schema_version: 1
id: medqa-us-train-005106
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68141de2eb2bbc15f41b4b1a890d816c2bfe397b865f5f39a6fe79ae0a02d22c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "겸상적혈구병"
  - "재생불량성 위기"
  - "파보바이러스 B19"
  - "Parvovirus B19 infection"
related_disease_slugs:
  - MDkg7ZiI7JWhL-qyuOyDgeygge2YiOq1rOuzkSAoU2lja2xlIENlbGwgRGlzZWFzZSkubWQ
  - MTIg7IKw6rO8L-yehOyLoCDspJEg6rCQ7Je8Lm1k
question_type: association
difficulty: complex
answer: C
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

45세 노숙자 남자가 공원에서 의식 없이 발견되어 응급실에 왔다. 과거 심한 통증으로 두 차례 입원해 하이드로모르폰을 투여받은 적이 있다. 술 냄새와 구토물이 있고 혈색소 6 g/dL, 헤마토크릿 20%, 망상적혈구 0.4%이다. 다음 중 가장 가능성 높은 진단과 관련된 소견은?

## 선택지

A. 양성 유전적 보인자 상태
B. 철결핍
C. 파보바이러스 B19 감염
D. 비타민 B12 결핍

## 해설


이전 반복 통증 위기로 SCD 같은 만성 용혈질환을 추정하는 맥락에서, 심한 빈혈에 망상적혈구0.4%는 평소 용혈의 보상 반응과 달라 일시적인 적혈구 생성 억제를 시사한다. Parvovirus B19 C는 적혈구 전구세포를 감염시켜 일시적 aplastic crisis를 유발할 수 있다. 백혈구·혈소판은 보존되어 전 골수 재생불량성빈혈과 구분한다. SCD가 본문에 확진되었다거나 원문 SpO₂99%를 저산소증이라고 쓰지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-005106 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 원문 SpO₂99%인데 저산소증을 추가하고 일시 적혈구계 무형성을 범혈구 재생불량성빈혈로 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-005106
