---
type: qbank
schema_version: 1
id: medqa-us-test-000986
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:19c41604f22bc8be91478cfc3194f5058caf0b01fac422add3e554a910d29688
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "만성 림프구성 백혈병"
  - "림프구증"
  - "B세포 악성종양"
related_disease_slugs:
  - MDkg7ZiI7JWhL-unjOyEsSDrprztlITrqqjqtazshLEg67Cx7ZiI67ORIChDTEwpIChDaHJvbmljIEx5bXBob2N5dGljIExldWtlbWlhKS5tZA
question_type: diagnosis
difficulty: complex
answer: D
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

73세 환자의 말초혈액에서 CD5·CD23을 발현하는 동일한 단클론 B세포가 3개월 넘게 9,000/μL로 유지된다. 혈색소와 혈소판은 정상이다. 가장 가능성 높은 진단은?

## 선택지

A. 단클론 B세포 림프구증
B. 반응성 림프구증
C. 다발골수종
D. 만성 림프구성 백혈병

## 해설


특징적인 면역표현형을 가진 클론성 B세포가 말초혈액에 5,000/μL 이상으로 지속되면 만성 림프구성 백혈병에 부합한다. 수가 그보다 적고 혈구감소·장기 침범이 없으면 단클론 B세포 림프구증을 고려한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-test-000986 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 고령의 매우 큰 절대 림프구증에서 CLL A 유지. 본문에 없는 CD5/CD20 결과를 생성한 해설 제거.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000986
- https://doi.org/10.1002/hem3.70403
