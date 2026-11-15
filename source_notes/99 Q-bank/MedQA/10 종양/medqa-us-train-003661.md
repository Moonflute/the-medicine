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
question_type: investigation
difficulty: standard
answer: B
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

50세 여성이 표면이 거친 유방 보형물을 삽입한 지 15년 만에 한쪽 유방이 커졌다. 초음파에서 보형물 주변에 새로 액체가 고여 있다. 보형물 관련 역형성 대세포 림프종을 평가하기 위한 다음 검사는?

## 선택지

A. 보형물 교체 후 경과 관찰
B. 초음파 유도 액체 흡인 후 세포검사와 CD30 면역염색
C. 유방촬영술로 림프종 확진
D. 액체의 세균배양만 시행

## 해설


수술 후 오랜 시간이 지나 생긴 일측 보형물 주변 삼출액은 검체를 채취해 세포 형태, CD30 및 ALK 등을 확인한다. CD30 양성만으로 진단하지 않고 형태와 면역표현형을 함께 해석한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-003661 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 오래된 textured implant의 지연성 주위 삼출은 BIA-ALCL 평가가 필요하며 seroma 세포검사/CD30·ALK C가 FDA 진단 권고와 일치한다. 즉시 미용 교체나 경험적 항암치료가 아니라 검체 진단 단계이다.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.fda.gov/medical-devices/breast-implants/questions-and-answers-about-breast-implant-associated-anaplastic-large-cell-lymphoma-bia-alcl

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003661
