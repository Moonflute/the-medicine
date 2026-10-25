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

21세 남성이 며칠간 지속된 복부팽만과 기름지고 악취 나는 설사로 내원했다. 캠핑 여행에서 개울물을 끓이거나 화학적으로 처리하지 않고 마신 뒤 증상이 시작되었다. 대변 현미경검사에서 운동성 원충이 양성이었다. 다음 중 시작해야 할 항생제는?

## 선택지

A. 시프로플록사신
B. 메트로니다졸
C. 반코마이신
D. 세팔렉신

## 해설


비처리 개울물 노출 뒤 복부팽만·기름지고 악취 나는 설사와 대변의 원충 소견은 giardiasis에 부합한다. 선택지 중 metronidazole B는 유효한 치료다. CDC는 tinidazole·nitazoxanide 등 다른 유효 약제도 제시하므로 metronidazole만이 모든 환자의 유일한 일차약이라는 의미는 아니다. 탈수의 교정도 함께 한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003522 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 비처리 개울물 후 지방성 설사·원충의 Giardia에서 metronidazole B 유지; 유일한 현행 일차약이라는 일반화 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/giardia/hcp/clinical-care/index.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003522
