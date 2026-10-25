---
type: qbank
schema_version: 1
id: medqa-us-validation-000719
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:84fe88edf68462a818bd07d7b91fb4ee46ac741e763e5bd80470de8a4db0ec91
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "국소 진행성 비소세포폐암"
  - "림프절 전이"
  - "동시 항암화학방사선요법"
related_disease_slugs:
  - MDIg7Zi47Z2h6riwL-2PkOyVlCAoTHVuZyBDYW5jZXIpLm1k
question_type: management
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

60세 남성이 1년간 지속되는 기침과 6.35 kg 체중감소로 진료를 받으러 왔다. 비소세포폐암이 왼쪽 주기관지를 침범하고 동측 폐문·기관분기하·사각근 림프절에 전이되었으며 원격전이는 없다. 초기 치료로 가장 적절한 것은?

## 선택지

A. 수술 후 보조 화학요법
B. 화학요법만 시행
C. 동시 항암화학방사선요법
D. 방사선 치료만 시행

## 해설


사각근 또는 쇄골상 림프절 전이는 동측·반대측 모두 N3에 해당한다. 따라서 이 환자의 병기를 단순히 동측 종격동 N2로만 설명하면 안 된다. 원격전이는 없지만 N3 국소진행성 비소세포폐암에서 전신 상태가 양호하면 선택지 C의 동시 항암방사선치료가 적절한 초기 접근이다. 이후 치료는 진행 여부·분자표적·면역치료 적격성 등에 따라 결정하며 단순 폐엽절제술만으로 치료하는 상황은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000719 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 사각근 림프절은 N2가 아닌 N3. 선택지 C 동시항암방사선의 초기치료 의도는 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.cancer.gov/types/lung/hp/non-small-cell-lung-treatment-pdq

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000719
