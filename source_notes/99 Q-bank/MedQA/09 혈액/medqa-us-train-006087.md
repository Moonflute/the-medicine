---
type: qbank
schema_version: 1
id: medqa-us-train-006087
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:1704ec4625db3df67b706679909e93b36504cae18bbc3dfadb0e2b3b3eb9b92c
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 림프구성 백혈병"
  - "자가면역 용혈성 빈혈"
  - "간접 고빌리루빈혈증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
  - MDkg7ZiI7JWhL-yekOqwgOuptOyXrSDsmqntmIjshLEg67mI7ZiIIChBdXRvaW1tdW5lIEhlbW9seXRpYyBBbmVtaWEpLm1k
question_type: investigation
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

만성 림프구성 백혈병 환자의 혈색소가 갑자기 7g/dL로 떨어졌다. 혈소판은 정상이고 간접 빌리루빈과 LDH는 높으며 합토글로빈은 낮다. 면역 용혈 여부를 확인할 다음 검사는?

## 선택지

A. 직접항글로불린검사
B. 혈청 철과 총철결합능만 측정
C. 분변 잠혈검사
D. 림프절 조직검사

## 해설


만성 림프구성 백혈병에 면역성 용혈이 동반될 수 있다. 용혈 소견이 있는 상황에서 직접항글로불린검사는 적혈구에 붙은 항체나 보체를 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-006087 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: CLL 배경의 급성 빈혈·간접 bilirubin/LDH 상승에서 AIHA A가 가장 가능함을 원문 대조 유지.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006087
- https://doi.org/10.1002/hem3.70403
