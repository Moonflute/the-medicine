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

67세 남성이 한 달 동안 점점 커지는 발톱의 증식으로 주치의를 방문했다. 당뇨병, 고지혈증 및 고혈압이 있어 메트포르민, 아토르바스타틴 및 리시노프릴을 복용한다. 45년 동안 하루 두 갑을 피웠다. 혈압은 132/88 mm Hg, 심박수는 분당 78회, 호흡수는 분당 12회, 체온은 37.1°C(98.8°F)이다. 의식이 명료하고 특별한 고통은 없어 보인다. 모세혈관 재충만 시간은 3초이고 양쪽 하지에서 중간 경골 아래의 둔감 및 날카로운 감각이 감소되어 있다. 발톱 사진이 제시되어 있다. 발톱 일부의 수산화칼륨(KOH) 검사에서 균사가 확인되었다. 다음 중 가장 효과적인 치료는?

## 선택지

A. 터비나핀
B. 베타메타손과 비타민 D 유사체
C. 플루코나졸
D. 그리세오풀빈

## 해설

KOH에서 균사가 확인된 조갑진균증에서 선지 중 경구 terbinafine(A)이 적절한 선택이다. 이 약은 allylamine 계열로 squalene epoxidase를 억제하며 triazole이 아니다. Fluconazole도 일부 상황에서 대안이 될 수 있지만 피부사상균성 손발톱감염의 통상 우선 경구제는 terbinafine이다. 치료 전 간질환·상호작용 등 안전성을 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 확인된 조갑진균증의 terbinafine A를 유지하고 triazole 계열이라는 약리 오류를 allylamine·squalene epoxidase 억제로 수정한다.
- 공식/학회 근거: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=294bc1af-50e3-4bff-8d48-321e673033ce
- 공식/학회 근거: https://www.bad.org.uk/pils/fungal-nail-infections

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006787
