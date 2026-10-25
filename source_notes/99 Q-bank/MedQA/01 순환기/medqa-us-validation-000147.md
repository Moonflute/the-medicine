---
type: qbank
schema_version: 1
id: medqa-us-validation-000147
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:8d3e7fe33078016528f1d68994e84e0f208ff9eddcbe68426e1532ca9036edac
exam: USMLE Step 2/3
language: ko
specialty: 01 순환기
related_diseases:
  - "심장 아밀로이드증"
  - "제한성 심근병증"
  - "심근 생검"
related_disease_slugs:
  - MDEg7Iic7ZmY6riwL-ygnO2VnOyEsSDsi6zqt7zrs5Hspp0gKFJlc3RyaWN0aXZlIENhcmRpb215b3BhdGh5KS5tZA
question_type: investigation
difficulty: standard
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

59세 여성이 운동 후 호흡곤란, 기좌호흡, 하지부종과 실신 병력으로 응급실에 왔다. 심전도에서 저전압, 심초음파에서 심실벽의 과립상 반점과 동심성 비후가 보였다. 가장 적절한 확진검사는?

## 선택지

A. 폐기능검사
B. 심장조직 생검
C. 흉부 X선
D. 추가 검사가 필요 없다

## 해설

저전압 ECG와 심실벽 비후·과립상 반점은 심장 아밀로이드증을 의심하게 한다. 선택지 중 심장조직 생검(B)은 아밀로이드 침착과 유형 확인을 위한 확진 방법이다. 반점은 미세 석회화를 뜻하지 않는다. 실제로는 단클론단백 검사와 핵의학 검사 등을 먼저 평가하며, 조건을 충족한 ATTR은 비침습적으로 진단할 수 있어 모든 환자에게 심장생검이 필수인 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 과립상 반점을 미세 석회화로 오역하고 모든 아밀로이드증에 심장생검이 필수라 단정한 설명을 교정.
- https://www.jacc.org/doi/10.1016/j.jacc.2022.11.022

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000147
