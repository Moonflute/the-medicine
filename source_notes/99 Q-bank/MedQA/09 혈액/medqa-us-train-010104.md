---
type: qbank
schema_version: 1
id: medqa-us-train-010104
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:41e7399a91d2488e1b3de0db7e946d7b9c98e1cb513e4d1c873878b9efed4d64
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "급성 백혈병"
  - "다운증후군"
  - "골수 생검"
related_disease_slugs:
  - MDkg7ZiI7JWhL-q4ieyEsSDrsLHtmIjrs5EgKEFjdXRlIExldWtlbWlhKS5tZA
  - MTIg7IKw6rO8L-uLpOyatOymne2bhOq1sCAoRG93biBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: complex
answer: C
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
---

# MedQA US 임상문제

## 문제

다운증후군이 있는 6세 아이가 발열과 뼈 통증으로 왔다. 빈혈, 혈소판감소와 말초혈액 모세포가 확인됐다. 급성 백혈병의 계열과 치료에 필요한 분자 소견을 확인할 다음 검사는?

## 선택지

A. 혈청 단백 전기영동
B. 림프절 초음파만 시행
C. 골수 흡인·생검과 유세포분석 및 유전검사
D. 말초혈액 일반검사만 한 달 뒤 반복

## 해설


혈구감소와 모세포가 보이면 급성 백혈병을 평가한다. 골수 형태, 유세포 면역표현형과 유전검사를 종합해 계열과 아형을 정한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-010104 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: Down 소아 급성 백혈병 의심에서 골수 C 유지. 계열 정보 없이 AML이라고 확정한 설명 수정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/leukemia/hp/child-all-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010104
