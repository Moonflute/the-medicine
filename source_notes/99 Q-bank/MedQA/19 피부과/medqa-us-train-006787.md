---
type: qbank
schema_version: 1
id: medqa-us-train-006787
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1a2cf9ae999747b7ea3d86c01e2678ab5514dd3a7e9c2c6c79a348dd29ca5505
exam: USMLE Step 2/3
language: ko
specialty: 19 피부과
related_diseases:
  - "손발톱진균증"
  - "피부사상균 감염"
  - "터비나핀"
question_type: management
related_disease_slugs:
  - MTkg7ZS867aA6rO8L-uwseyEoCAoVGluZWEpLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzowOCDqsJDsl7wvRmx1Y29uYXpvbGUubWQ
  - ZHJ1ZzowOCDqsJDsl7wvVGVyYmluYWZpbmUubWQ
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0JldGFtZXRoYXNvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

67세 남성의 여러 발톱이 두꺼워지고 변색됐다. KOH 검사에서 균사가 보이고 배양에서 피부사상균이 확인됐다. 간질환이나 주요 약물 상호작용이 없을 때 우선 선택할 경구 약은?

## 선택지

A. 테르비나핀
B. 플루코나졸
C. 그리세오풀빈
D. 케토코나졸

## 해설

피부사상균에 의한 발톱진균증에서 경구 치료가 필요하면 테르비나핀이 우선 선택이다. 치료 전 간질환과 약물 상호작용을 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 확인된 조갑진균증의 terbinafine A를 유지하고 triazole 계열이라는 약리 오류를 allylamine·squalene epoxidase 억제로 수정한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=294bc1af-50e3-4bff-8d48-321e673033ce
- 공식/학회 근거: https://www.bad.org.uk/pils/fungal-nail-infections

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006787
- 영국피부과학회 2026 발톱진균증 진료지침: https://pubmed.ncbi.nlm.nih.gov/42910426/
