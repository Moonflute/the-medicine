---
type: qbank
schema_version: 1
id: medqa-us-validation-000890
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:1114f939e1d2a939acea6290d1ee436245516a883a6c4e376f8836fd3a632dd3
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "프로필티오우라실"
  - "무과립구증"
  - "그레이브스병"
related_disease_slugs:
  - MDQg64K067aE67mEL-q3uOugiOydtOu4jOyKpOuzkSAoR3JhdmVzJyBEaXNlYXNlKS5tZA
question_type: management
difficulty: complex
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
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9NZXRoaW1hem9sZS5tZA
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9Qcm9weWx0aGlvdXJhY2lsLm1k
  - ZHJ1ZzowOCDqsJDsl7wvQW1waWNpbGxpbi5tZA
---

# MedQA US 임상문제

## 문제

그레이브스병으로 프로필티오우라실을 복용 중인 임신 8주 여성이 발열과 인후통으로 왔다. 절대호중구수는 125/μL다. 발열성 호중구감소증 응급 치료와 함께 항갑상선제를 어떻게 하는가?

## 선택지

A. 프로필티오우라실을 유지한다.
B. 프로필티오우라실을 즉시 중단한다.
C. 메티마졸로 바로 바꾼다.
D. 열이 떨어질 때까지 같은 용량을 유지한다.

## 해설


발열과 중증 호중구감소가 있으면 항갑상선제 유발 무과립구증을 의심해 약을 즉시 중단한다. 다른 티오나마이드로 곧바로 대체하지 않고 내분비·산과 협진으로 후속 치료를 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000890 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANC 약125의 발열성 무과립구증에서 PTU 중단 B는 필수이나 중단 후 단순 호전 대기 아닌 긴급 감염치료/전문관리 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a032648a-a6e4-4356-a483-8eee03779030

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000890
- https://doi.org/10.1089/thy.2016.0229
