---
type: qbank
schema_version: 1
id: medqa-us-test-000230
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:ee99b753b895bbe8bbe9ab4b1506af4288b8c36b8a33ff2fb0e81d467f0a727f
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "비갑상샘 질환 증후군"
  - "패혈성 쇼크"
  - "중증 질환"
related_disease_slugs:
  - MTEg7Jm46rO8L-2MqO2YiOyEsSDsh7ztgawgKFNlcHRpYyBTaG9jaykubWQ
  - MDQg64K067aE67mEL-uzkeyggSDqsJHsg4Hsg5gg6riw64qlIOygleyDgSDspp3tm4TqtbAgKFNpY2sgRXV0aHlyb2lkIFN5bmRyb21lKS5tZA
question_type: management
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9MZXZvdGh5cm94aW5lLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

이전 갑상선질환이 없던 여성이 패혈성 쇼크로 중환자실에 있다. 검사에서 유리 T3는 낮지만 TSH 1.8 mIU/L와 유리 T4는 정상 범위다. 갑상선 검사 결과에 대한 적절한 대응은?

## 선택지

A. 레보티록신을 바로 시작
B. 리오티로닌을 바로 시작
C. 무기 요오드를 투여
D. 기저 중증 질환을 치료하고 회복 뒤 필요시 다시 확인

## 해설

중증 질환에서 일시적으로 T3가 낮아질 수 있다. 이전 갑상선질환을 시사하는 근거가 없다면 이 검사만으로 갑상선호르몬을 보충하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 낮은 free T3를 정상 갑상샘검사라고 한 해설 교체; 패혈증 관련 NTIS의 임상 맥락 설명.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4267409/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000230
- https://doi.org/10.1089/thy.2014.0028
