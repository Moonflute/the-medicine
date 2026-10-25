---
type: qbank
schema_version: 1
id: medqa-us-validation-000873
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:6102003141b461cf662470b5bc62a41f1e054791257d4f2f4fac784ce2ad1e07
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "위식도역류질환"
  - "야간 속쓰림"
  - "양성자펌프억제제"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-ychOyepeq0gC_snITsi53rj4Qg7Jet66WYIOyniO2ZmCAoR0VSRCkgKEdhc3Ryb2Vzb3BoYWdlYWwgUmVmbHV4IERpc2Vhc2UpLm1k
question_type: management
difficulty: complex
answer: B
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

37세 남성이 한 달간 누워 있거나 과식 후 악화되는 흉부 작열감과 아침 구취로 진료를 받으러 왔다. 체질량지수는 32.9 kg/m²이고 신체진찰은 정상이다. 가장 적절한 다음 단계는?

## 선택지

A. 요소호기검사
B. 양성자펌프억제제
C. H2 수용체 차단제
D. 바륨 연하검사

## 해설


정답 B. 경고 증상 없는 전형적 역류 증상에서는 PPI 경험치료와 체중/식사·취침 관련 생활조절을 시작할 수 있다. PPI는 위벽세포 proton pump를 억제해 산분비를 줄이는 약이지 위내압을 직접 낮추는 약이 아니다. 반응이 있다고 모든 경우 진단이 확정되는 것은 아니며 불응 또는 경고 증상 발생 시 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000873 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: PPI는 위내압 감소제가 아닌 산분비 억제제이며 경험치료가 확진 자체는 아님.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/8754510/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000873
