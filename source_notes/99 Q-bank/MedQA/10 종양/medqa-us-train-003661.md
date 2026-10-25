---
type: qbank
schema_version: 1
id: medqa-us-train-003661
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:852cc1374c57813466528264f00f5c364146a71caa2217f29e0b5ca3369adbee
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "breast implant-associated anaplastic large-cell lymphoma"
  - "BIA-ALCL"
  - "periprosthetic fluid collection"
  - "CD30"
related_disease_slugs:
  - MDkg7ZiI7JWhL-u5hO2YuOyngO2CqCDrprztlITsooUgKE5vbi1Ib2Rna2luIEx5bXBob21hKS5tZA
question_type: diagnosis
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: machine-generated
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

50세 여성이 오른쪽 유방의 부종과 확대를 주소로 내원했다. 15년 전 표면이 거친 유방 보형물을 삽입했고 MRI에서 보형물 주위에 액체가 고여 있지만 보형물 자체는 온전했다. 다음 중 가장 적절한 다음 처치는?

## 선택지

A. 표면이 거친 보형물을 매끈한 보형물로 수술 교체한다
B. 유방촬영술
C. CD30과 ALK에 대한 세포검사
D. 항암화학요법

## 해설


보형물 주변에 액체가 고여 있으면서 보형물 자체는 온전한 경우, 보형물 관련 대형 세포 림프종(BIA‑ALCL)이 의심된다. 이 림프종은 CD30 양성이고 ALK 음성인 세포표현을 보이므로 CD30·ALK 세포검사가 진단에 필수적이다. 따라서 가장 적절한 다음 처치는 CD30과 ALK에 대한 세포검사이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003661 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 오래된 textured implant의 지연성 주위 삼출은 BIA-ALCL 평가가 필요하며 seroma 세포검사/CD30·ALK C가 FDA 진단 권고와 일치한다. 즉시 미용 교체나 경험적 항암치료가 아니라 검체 진단 단계이다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.fda.gov/medical-devices/breast-implants/questions-and-answers-about-breast-implant-associated-anaplastic-large-cell-lymphoma-bia-alcl

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003661
