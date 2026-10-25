---
type: qbank
schema_version: 1
id: medqa-us-test-000729
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:2da3bccf503ea09399ca362e2a2c3c752404b00f73586c0b3ec4746dae1438b6
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 초기 초음파"
  - "머리-엉덩이 길이"
  - "재태연령 평가"
related_disease_slugs: []
question_type: investigation
difficulty: simple
answer: C
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

25세 여성이 2주 동안 지속된 메스꺼움으로 병원에 왔다. 빈뇨와 피로가 있고 비혈성 구토를 두 번 했다. 과거력은 특이사항이 없으며 마지막 월경은 6주 전이었다. 양측 유방 압통이 있었고 나머지 진찰은 정상이었다. 소변 임신검사는 양성이었다. 재태연령을 가장 정확하게 예측하는 지표는?

## 선택지

A. 머리둘레와 복부둘레 비율
B. 대퇴골 길이
C. 머리-엉덩이 길이
D. 양두정골 길이

## 해설

임신 1기 초음파의 머리–엉덩이 길이(crown–rump length, CRL)가 재태연령 추정에 가장 정확하다(C). 대퇴골 길이·양두정경 등은 주로 임신 중기 이후 생체계측에 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: CRL을 HR로 잘못 표기한 해설 수정.
- https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000729
