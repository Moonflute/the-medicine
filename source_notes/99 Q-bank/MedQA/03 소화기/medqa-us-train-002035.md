---
type: qbank
schema_version: 1
id: medqa-us-train-002035
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:bbd35dea7942ae34562d7e5183ea63fd64e84847d897aebf20de0d2622919f74
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "esophageal variceal bleeding"
  - "recurrent variceal hemorrhage"
  - "TIPS"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_si53rj4Qg7KCV66el66WYIChFc29waGFnZWFsIFZhcmljZXMpLm1k
question_type: management
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

간경변 환자가 식도정맥류 출혈로 입원했다. 과거 출혈 이후 비선택적 베타차단제와 반복 내시경 결찰을 충실히 받았지만 이번에 다시 출혈했다. 이번 출혈은 결찰로 멎었고 쇼크나 뇌증은 없다. 재출혈을 줄이기 위해 어떤 처치를 검토하는가?

## 선택지

A. 같은 치료만 반복하고 다른 중재는 고려하지 않음
B. 경경정맥 간내 문맥전신 단락술(TIPS)
C. 상시 옥트레오타이드 정맥 주입
D. 예방적 반복 수혈

## 해설

표준 이차예방을 적절히 했는데도 재출혈하면 TIPS를 검토한다. 간 기능, 심장 기능과 간성뇌증 위험을 평가해 적합성을 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 반복 정맥류 출혈의 TIPS 상담 B인데 기존 해설이 장기 octreotide·4주 항생제 C를 권고한 오류.
- https://www.esge.com/assets/downloads/pdfs/guidelines/2022_a-1939-4887.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002035
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7160350/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11090185/
