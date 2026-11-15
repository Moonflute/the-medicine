---
type: qbank
schema_version: 1
id: medqa-us-validation-000093
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b68d1850ae29bac68a14464156b8005056bb0ab3ebba9d3cc99742a15e907b36
exam: USMLE Step 2/3
language: ko
specialty: 07 류마티스
related_diseases:
  - "마르팡 증후군"
  - "수정체 탈구"
  - "FBN1"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-uniOultO2MoSDspp3tm4TqtbAgKE1hcmZhbiBTeW5kcm9tZSkubWQ
question_type: investigation
difficulty: standard
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

19세 여성이 키와 팔다리가 길고 수정체가 위가쪽으로 어긋나 마르팡증후군이 의심된다. 현재 가슴 통증은 없다. 주요 심혈관 합병증을 평가할 초기 검사는?

## 선택지

A. 폐기능검사
B. 24시간 홀터검사만 시행
C. 하지정맥 도플러 초음파
D. 경흉부 심장초음파로 대동맥 뿌리와 상행대동맥 평가

## 해설


마르팡증후군에서는 대동맥 뿌리 확장과 박리 위험을 평가해야 한다. 심초음파로 기저 대동맥 직경을 확인하고 필요하면 CT 또는 MRI를 추가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000093 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수정체 아탈구를 결막탈구로 부르고 갈색모반을 Marfan 핵심징후라 한 오류 교정.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000093
- https://doi.org/10.1161/CIR.0000000000001106
