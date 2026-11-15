---
type: qbank
schema_version: 1
id: medqa-us-train-009343
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:a622adb386884f69140f49d8eb9c15d65d42d1851d3f12c3a188544ca043961e
exam: USMLE Step 2/3
language: ko
specialty: 08 감염
related_diseases:
  - "dengue fever"
  - "뎅기열"
  - "Aedes mosquito"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uOheq4sOyXtCAoRGVuZ3VlIEZldmVyKS5tZA
question_type: investigation
difficulty: complex
answer: D
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

동남아에서 돌아온 환자가 발열 3일째 근육통, 안구 뒤 통증과 혈소판 감소로 내원했다. 다른 중증 여행자 감염도 평가하면서 뎅기열을 확인하려 한다. 이 시기에 적절한 검사 조합은?

## 선택지

A. 뎅기 IgG 단독
B. 회복기 혈청을 받을 때까지 검사하지 않는다
C. 혈액배양만으로 뎅기열을 확인한다
D. 뎅기 바이러스 핵산증폭검사와 뎅기 IgM

## 해설


증상 첫 7일에는 뎅기 핵산증폭검사 또는 NS1 항원검사에 IgM을 함께 시행할 수 있다. 초기에 결과가 음성이라고 모두 배제되는 것은 아니며 필요하면 회복기에 다시 검사한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009343 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 여행 후 후안와통·발진·백혈구/혈소판감소의 뎅기 예방에서 모기 기피제 B 유지. 미국 성인 여행자에게 일률 뎅기 백신을 권하는 선지와 구분.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/dengue.html

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009343
- https://www.cdc.gov/dengue/hcp/diagnosis-testing/
