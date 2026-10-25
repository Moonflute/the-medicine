---
type: qbank
schema_version: 1
id: medqa-us-validation-000392
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:07b943ccb9d1872b9fb1997df894422c0410e3ccf4b73bbc30efa9c279ab2a6a
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "ACE 억제제 유발 기침"
  - "고칼륨혈증"
  - "리시노프릴"
related_disease_slugs:
  - MDUg7Iug7J6lL-qzoOy5vOulqO2YiOymnSAoSHlwZXJrYWxlbWlhKS5tZA
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTG9zYXJ0YW4ubWQ
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMyDslYjqs7zCt-ydtOu5hOyduO2bhMK37ZS867aAL0xvcmF0YWRpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

66세 남성이 약국에서 측정한 혈당 169 mg/dL로 진료를 받으러 왔다. 수십 년간 의사를 보지 않은 앨라배마 시골 농부이며, 딸을 방문하기 전 건강을 확인하고 싶어 한다. 메트포르민과 리시노프릴을 시작했고 운동 프로그램을 시행했다. 여행 후 기침이 생겼지만 다른 증상은 없다. 반복검사에서 칼륨 5.3 mEq/L, 크레아티닌 1.2 mg/dL이었다. 다음 관리 단계는?

## 선택지

A. 혈압약을 로사르탄으로 변경
B. 혈압약을 히드로클로로티아지드로 변경
C. 아지트로마이신
D. 로라타딘

## 해설

리시노프릴 시작 뒤 새 기침은 ACE억제제 관련 이상반응을 시사하여 A의 로사르탄 변경을 고려할 수 있다. 다만 로사르탄 역시 RAAS 억제제로 칼륨을 올릴 수 있으므로, K 5.3 mEq/L를 무시하고 안전한 대체약으로 단정하지 않는다. 반복 칼륨과 신기능, 식이 및 동반약을 확인하고 필요하면 다른 계열로 조정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: ACE기침의 ARB 변경 A는 지지하되 로사르탄도 고칼륨혈증을 일으킬 수 있음을 명시.
- https://www.ahajournals.org/doi/10.1161/CIR.0000000000001356

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000392
