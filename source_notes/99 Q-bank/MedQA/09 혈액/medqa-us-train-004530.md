---
type: qbank
schema_version: 1
id: medqa-us-train-004530
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:027e1a9e6667fdb1770e7f57e02ae70d171e7ef3bde8e8520a7873a6854bc137
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "다발골수종"
  - "골용해성 병변"
  - "고칼슘혈증"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uLpOuwnOqzqOyImOyihSAoTU0pIChNdWx0aXBsZSBNeWVsb21hIChNTSkpLm1k
  - MDQg64K067aE67mEL-qzoOy5vOyKmO2YiOymnSAoSHlwZXJjYWxjZW1pYSkubWQ
question_type: investigation
difficulty: standard
answer: B
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

70세 남성이 4개월 동안 진행하는 피로와 요통으로 내원했다. 전날 정원일을 하다 가볍게 넘어져 요통이 크게 악화되었다. 1년 동안 소변을 본 뒤 방광이 완전히 비워지지 않는 느낌이 있었다. 활력징후는 정상 범위이다. 신체검사에서 양측 척추주위 근육 경련, 제2요추의 심한 압통과 하부 흉추의 경한 압통이 보인다. 신경학적 검사는 정상이다. 헤모글로빈은 10.5 g/dL, 알칼리성 인산분해효소는 110 U/L, 혈청 칼슘은 11.1 mg/dL이다. 두개골 X선 사진이 제시되어 있다. 진단을 위한 다음 단계로 가장 적절한 것은 무엇인가?

## 선택지

A. 골수 생검
B. 혈청 단백 전기영동
C. 혈청 비타민 D 수치
D. 전립선 생검

## 해설


빈혈·고칼슘혈증·지속 골통/경미 외상 후 통증은 다발골수종을 의심하게 하므로 선택지 B의 혈청단백전기영동으로 단클론단백을 평가하는 것이 적절하다. 면역고정·혈청 유리경쇄 및 소변 검사 등도 필요하고 단백 결과만으로 최종 확진하지 않는다. ALP110U/L는 흔한 검사실 기준에서 뚜렷한 상승이라 할 수 없고 MM의 용해성 병변은 ALP가 정상일 수도 있다. 누락된 두개골 그림의 punched-out 병변을 직접 보았다고 단정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-004530 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 빈혈·고칼슘·골통의 MM 평가 SPEP B 유지; ALP110을 상승으로, 없는 두개골 그림을 확인한 것처럼 설명한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004530
