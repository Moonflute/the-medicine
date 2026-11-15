---
type: qbank
schema_version: 1
id: medqa-us-train-003522
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9c681376118a73ba58c92f999feb8bc7c48b474c0f3e9c082d275ab97672f1ee
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "giardiasis"
  - "motile protozoa"
  - "untreated stream water"
  - "metronidazole"
  - "Giardiasis"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_sp4DrsKnrs4AgKFN0ZWF0b3JyaGVhKS5tZA
question_type: management
difficulty: standard
answer: B
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VwaGFsZXhpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvQ2lwcm9mbG94YWNpbi5tZA
  - ZHJ1ZzowOCDqsJDsl7wvTWV0cm9uaWRhem9sZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
---

# MedQA US 임상문제

## 문제

21세 남성이 캠핑 중 처리하지 않은 개울물을 마신 뒤 복부팽만과 기름지고 악취 나는 설사가 지속되어 내원했다. 대변 현미경검사에서 운동성이 있는 편모 원충이 확인됐다. 제시된 약제 중 원인 치료에 적절한 것은?

## 선택지

A. 시프로플록사신
B. 메트로니다졸
C. 반코마이신
D. 세팔렉신

## 해설


처리하지 않은 물을 마신 뒤 지속되는 지방성 설사와 대변의 편모 원충은 지아르디아증을 시사한다. 보기 중 메트로니다졸이 유효하다. 탈수가 있으면 함께 교정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003522 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비처리 개울물 후 지방성 설사·원충의 Giardia에서 metronidazole B 유지; 유일한 현행 일차약이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/giardia/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003522
