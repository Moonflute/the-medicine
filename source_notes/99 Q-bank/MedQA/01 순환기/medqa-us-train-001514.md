---
type: qbank
schema_version: 1
id: medqa-us-train-001514
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:3f9edd7f5555e84e3f8db99915eb0a7969fbb334c51585cd75787681af2ba871
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "deep vein thrombosis"
  - "Wells score"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gCDsoJXrp6Ug7ZiI7KCE7KadIChEZWVwIFZlaW4gVGhyb21ib3NpcykubWQ
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 여성이 폐렴으로 입원해 4일 동안 침상 안정을 한 뒤 오른쪽 종아리 통증과 부종이 생겼다. 오른쪽 종아리 둘레가 왼쪽보다 4 cm 크고 오금의 깊은 정맥을 따라 압통이 있다. 더 가능성 높은 다른 진단은 없다. 다음 검사는?

## 선택지

A. 하지 정맥 압박 초음파
B. D-dimer 단독 검사
C. 발목–상완지수
D. 조영증강 흉부 CT

## 해설


최근 침상 안정, 반대쪽보다 3 cm 이상 큰 종아리, 심부정맥을 따른 압통으로 심부정맥혈전증의 검사 전 확률이 높다. 압박 초음파를 우선 시행하며, 가능성이 높은 상황에서 D-dimer 하나로 배제하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 최근 입원/부동과 편측종아리4cm증가·정맥확장은 DVT 의심. 첫 사전확률 평가 Wells A를 검사/확진과 구별.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001514
- https://doi.org/10.3348/jksr.2016.75.4.233
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6258916/
