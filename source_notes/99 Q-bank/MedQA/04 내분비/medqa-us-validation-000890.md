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

임신 8주인 34세 초임부가 3일간의 발열과 인후통, 전신 근육통과 피로로 진료를 받으러 왔다. 6개월 전 그레이브스병을 진단받아 임신 전 메티마졸에서 프로필티오우라실로 변경했다. 혀 옆에 통증과 홍반을 동반한 1×1 cm 궤양이 있고, 백혈구 2,500/mm³, 분절호중구 5%이다. 가장 적절한 처치는?

## 선택지

A. 발열 조절을 위해 아세트아미노펜
B. 프로필티오우라실 중단
C. 경구 암피실린
D. 직장 체온 측정

## 해설


정답 B. 백혈구2500/mm³의 호중구5%는 ANC 약125/mm³로 심한 무과립구증이며 발열·구강궤양이 동반된다. PTU를 즉시 중단하고 발열성 호중구감소에 대한 긴급 입원 평가·경험적 항균치료 등 전문관리를 시행해야 한다. 임신 중이라도 단순 약 중단 후 기다리지 않으며 다른 thionamide로 임의 교체하지 않는다. 직장 체온 측정은 점막손상 위험 때문에 피한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000890 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: ANC 약125의 발열성 무과립구증에서 PTU 중단 B는 필수이나 중단 후 단순 호전 대기 아닌 긴급 감염치료/전문관리 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a032648a-a6e4-4356-a483-8eee03779030

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000890
