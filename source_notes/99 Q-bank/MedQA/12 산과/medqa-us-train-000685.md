---
type: qbank
schema_version: 1
id: medqa-us-train-000685
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:37bb3ee21bbff5e4878400eca6d2637022881bae5847c63162e4ffb2156e25ee
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "iron deficiency anemia"
  - "active labor"
question_type: management
related_disease_slugs:
  - MDkg7ZiI7JWhL-yyoCDqsrDtlY0g67mI7ZiIIChJcm9uIERlZmljaWVuY3kgQW5lbWlhKS5tZA
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: gemini-3.1-flash-lite
translation_prompt_version: medqa-ko-v1
translated_at: 2026-07-17
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 40주, 초임부(gravida 1, para 0)인 30세 여성이 활동기 분만으로 입원하였다. 임신 중 철분 보충제로 치료받은 철결핍성 빈혈이 있었다. 분만 1기 초기에 약 10분마다 발생하는 고강도의 조율되고 규칙적이며 리듬감 있는 수축이 있었다. 4시간 후, 자궁경부는 100% 거상되었고 10cm 개대되었으며, 태아 선진부는 -1 station에 위치하였다. 이후 2시간 동안 태아 하강에 거의 변화가 없었으며, 선진부는 여전히 -1 station에 머물러 있다. 태아 예상 체중은 75백분위수이다. 태아 심박수는 145회/분이며 반응성(reactive)을 보이고 감퇴(deceleration)는 없다. 수축은 적절한 압력으로 약 2분마다 발생하고 있다. 환자가 통증을 잘 견디고 있어 경막외 마취는 시행하지 않았다. 다음 중 가장 적절한 다음 관리 단계는 무엇인가?

## 선택지

A. 제왕절개술
B. 진공 흡입 분만
C. 1시간 더 관찰
D. 경막외 마취

## 해설

완전 개대 후는 분만 2기이며 초산부의 연장된 2기는 일반적으로 3시간 넘는 힘주기로 정의한다. 태아 상태가 양호한 2시간 시점에서는 C의 추가 관찰이 가능하나, -1 station에서 하강이 없으므로 태위·회전·힘주기·폐쇄 가능성을 재평가해야 한다. 충분한 수축과 힘주기에도 회전·하강이 없으면 더 이른 정지 진단도 가능하다. 무조건 3시간을 기다려야 한다는 의미는 아니며 높은 station에서 진공분만은 부적절하다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 완전 개대 후 분만 2기임을 바로잡고 무진행 시 개별 평가 명시.
- https://www.acog.org/clinical/clinical-guidance/clinical-practice-guideline/articles/2024/01/first-and-second-stage-labor-management

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-000685
