---
type: qbank
schema_version: 1
id: medqa-us-validation-000130
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a85a5bd5c60f5e454f8ce4e5fa1f919e83a7920f5b1d43eff659e4e7927c29a0
exam: USMLE Step 2/3
language: ko
specialty: 09 혈액
related_diseases:
  - "본태성 혈소판혈증"
  - "JAK2 돌연변이"
  - "고요산혈증"
  - "Essential thrombocythemia"
related_disease_slugs:
  - MDkg7ZiI7JWhL-uzuO2DnOyEsSDtmIjshoztjJDspp3qsIDspp0gKEVUKSAoRXNzZW50aWFsIFRocm9tYm9jeXRoZW1pYSAoRVQpKS5tZA
question_type: investigation
difficulty: complex
answer: A
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

50세 흑인 여성이 오른쪽 팔꿈치의 급성 통증과 발열로 진료를 받으러 왔다. 3개월 전 혈전성 정맥염이 있었고 이부프로펜·압박요법으로 호전되었다. 혈소판 853,000/mm³, 요산 10.5 mg/dL였고 피부가 붉고 심한 압통이 있었다. 추가 평가에서 가장 가능성 높은 소견은?

## 선택지

A. JAK2 유전자 돌연변이
B. 하웰-졸리 소체
C. 시트룰린화 펩타이드 항체
D. 항인지질 항체

## 해설


현저한 혈소판증가와 혈전성 정맥염 병력은 본태성 혈소판증가증 등 골수증식종양을 의심하게 한다. 선택지 중 JAK2 변이(A)가 가장 부합한다. JAK2가 모든 ET에서 양성인 것은 아니며 지속적 혈소판증가·골수 형태와 반응성 원인 배제가 필요하다. 고요산혈증과 급성 팔꿈치 통증은 통풍 가능성을 시사하나 감염성 관절염도 별도 감별한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-validation-000130 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 혈소판853k·혈전병력에서 ET/JAK2 A 의도는 적절하나 한국어가 thrombophlebitis 병력을 생략. 원문 복원 및 단일 혈소판수만으로 ET 확진하지 않음.
- 범위: content-reviewed. 전수 진료지침 승인으로 해석하지 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000130
