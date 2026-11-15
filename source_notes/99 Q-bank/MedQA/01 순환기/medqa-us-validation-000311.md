---
type: qbank
schema_version: 1
id: medqa-us-validation-000311
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:fd3f01f2c1fee8cf5c1eab96f377447db85373ba40428d832142a71d03cc012d
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "울혈성 심부전 악화"
  - "신기능 저하"
  - "메트포르민 관련 젖산산증"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-yLrOu2gOyghC5tZA
question_type: management
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvSHlkcm9jaGxvcm90aGlhemlkZS5tZA
  - ZHJ1ZzowOCDqsJDsl7wvVmFuY29teWNpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

77세 남성이 급성 심부전 악화와 저산소혈증으로 입원했다. 기존 크레아티닌은 0.9 mg/dL였으나 오늘 2.1 mg/dL로 상승했다. 제2형 당뇨병으로 복용 중인 메트포르민은 어떻게 조절할까?

## 선택지

A. 일시 중단하고 저산소증과 신장기능이 안정된 뒤 재개 여부를 평가한다
B. 현재 용량을 두 배로 늘린다
C. 저산소증이 있어도 신기능과 무관하게 계속 투여한다
D. 회복 여부와 무관하게 이후 평생 금지한다

## 해설

저산소증과 급성 신손상은 메트포르민 관련 젖산산증 위험을 높인다. 급성기에는 일시 중단하고, 상태가 안정되면 신장기능을 보고 재개를 판단한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 영어 원문의 메트포르민 복용을 복원하고 급성 심부전·신기능 저하에서 일시 중단하는 안전 맥락을 명시.
- https://dailymed.nlm.nih.gov/dailymed/fda/fdaDrugXsl.cfm?setid=583dac53-65e7-4710-912a-ecd89d07ad03

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000311
