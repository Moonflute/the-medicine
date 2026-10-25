---
type: qbank
schema_version: 1
id: medqa-us-validation-000444
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:aa485237e4ffeb0a265ff2a9f52ec9a9d2b73a9c634c9666878d3355b42dced3
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "혈전성 혈소판감소성 자반증"
  - "미세혈관병성 용혈성 빈혈"
  - "분열적혈구"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uvuOyEuO2YiOq0gOuzkeyEsSDsmqntmIgg67mI7ZiIIChNaWNyb2FuZ2lvcGF0aGljIEhlbW9seXRpYyBBbmVtaWEsIE1BSEEpLm1k
  - MDkg7ZiI7JWhL-2YiOyghOyEsSDtmIjshoztjJDqsJDshowg7J6Q7IOJ67CYIChUaHJvbWJvdGljIFRocm9tYm9jeXRvcGVuaWMgUHVycHVyYSwgVFRQKS5tZA
question_type: diagnosis
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: machine-generated
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

27세 여성이 갑자기 시작된 피로, 흐린 시야, 발진, 의식 변화, 말하기 곤란으로 응급실에 왔다. 점상출혈, 창백함, 왼쪽 상지 약화가 있고 혈소판 22,000/μL, 정상 PT·INR·PTT, 음성 쿰스검사, 크레아티닌 3.7 mg/dL, 간접 빌리루빈 3.8 mg/dL, LDH 1,000 IU/L이다. 말초혈액도말에서 예상되는 소견은?

## 선택지

A. 구형적혈구
B. 비정형 림프구
C. 분열적혈구
D. 연전형성

## 해설


TTP/HUS와 같은 미세혈관성 용혈성 빈혈·혈소판 감소증에서는 파편적 적혈구(분열적혈구)가 말초혈액 도말에 나타난다. 이는 혈소판 감소와 함께 흔히 관찰된다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000444 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 정상 PT/aPTT의 혈소판감소·신경/신장 이상·DAT음성 용혈은 TMA이며 schistocytes C. TTP/HUS 세부확진 이전에도 도말 정답은 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000444
