---
type: qbank
schema_version: 1
id: medqa-us-validation-001096
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:7892b3cbc89b74b6f956ec45d136b36749f4981a2ee83b7d1ee442757eb31e28
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "수혈 후 용혈"
  - "비포합 고빌리루빈혈증"
  - "빌리루빈 생성 증가"
related_disease_slugs:
  - MDMg7IaM7ZmU6riwL-qwhOuLtOy3jC_ri7Trj4Tqs4Qg7KeI7ZmYLm1k
question_type: mechanism
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

자동차 충돌 사고로 응급 개복술과 농축적혈구 7단위 수혈을 받은 28세 남성이 10일 후 황달이 생겼다. 총 빌리루빈은 3.9 mg/dL이고 간접 빌리루빈은 3.7 mg/dL, 직접 빌리루빈은 0.2 mg/dL이다. CT에서 복강 내 혈종이 흡수 중인 소견이다. 이 환자의 황달을 일으킨 가장 가능성 높은 원인은?

## 선택지

A. 담도 폐쇄
B. 간세포 손상
C. 빌리루빈 생성 증가
D. 비포합 빌리루빈의 간 섭취 감소

## 해설


주로 간접 bilirubin이 증가하고 외상 후 흡수 중인 복강 내 혈종이 있어 혈종의 적혈구 분해와 수혈 적혈구 turnover에 따른 bilirubin 생성 증가(C)가 적절하다. 수혈 10일 뒤이므로 지연성 용혈성 수혈반응도 감별하지만 원문만으로 면역용혈을 확정하지 않는다. 담도 폐쇄에서는 보통 직접 bilirubin 증가와 담즙정체 소견이 더 두드러진다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-001096 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수혈/혈종 분해 후 간접bilirubin 증가의 생산 증가 C 유지. 원문 복강 내 흡수 중 혈종을 복원하고 지연성 면역용혈을 확인 없이 확정하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-001096
