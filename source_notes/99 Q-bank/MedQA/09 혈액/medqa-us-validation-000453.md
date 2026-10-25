---
type: qbank
schema_version: 1
id: medqa-us-validation-000453
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b47ec75b756fa9f2377c4738bddfb74ee086d138e71fa376772910e41e0c3ff1
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "온난형 자가면역 용혈성 빈혈"
  - "혈관외 용혈"
  - "합토글로빈 감소"
related_disease_slugs:
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
  - MDkg7ZiI7JWhL-2YiOq0gCDsmbgg7Jqp7ZiIIChFeHRyYXZhc2N1bGFyIEhlbW9seXNpcykubWQ
question_type: investigation
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
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

19세 여성이 일주일간의 피로와 눈의 황변으로 진료를 받으러 왔다. 4주 전 인후통과 바이러스 감염이 있었으나 저절로 호전되었다. 공막 황달, 간비대와 비장비대가 있고 혈색소는 9.5 g/dL, 직접 항글로불린검사는 양성이다. 추가로 가장 가능성 높은 검사 소견은?

## 선택지

A. 혈청 C3 보체 농도 증가
B. 직접 빌리루빈 수치 증가
C. 합토글로빈 수치 감소
D. 평균 적혈구 용적 감소

## 해설


빈혈·황달·DAT 양성은 면역성 용혈을 시사하며 haptoglobin 감소(C)가 예상된다. Haptoglobin은 혈장 내 유리 hemoglobin과 결합해 제거되면서 소모되는 단백질이지 적혈구 표면 보체를 차단하는 물질이 아니다. 바이러스 후 용혈은 온난형뿐 아니라 보체 관련 한랭형 등도 가능하므로 DAT 양성 하나로 아형을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000453 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: DAT양성 용혈에서 haptoglobin 감소 C 유지. Haptoglobin이 보체를 차단한다는 잘못된 기전 교체; 바이러스 후면 warm으로만 한정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000453
