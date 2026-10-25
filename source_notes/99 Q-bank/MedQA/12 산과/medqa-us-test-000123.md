---
type: qbank
schema_version: 1
id: medqa-us-test-000123
source: MedQA-US
source_split: test
source_meta: step2&3
source_hash: sha256:e7a29d9e2b333773ac590fe6110bd1165f4832e502373d3bed671cec88b703b9
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "지카 바이러스"
  - "선천성 지카 증후군"
  - "태아 소두증"
related_disease_slugs:
  - MDgg6rCQ7Je8L-uwlOydtOufrOyKpC5tZA
question_type: diagnosis
difficulty: standard
answer: D
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 32주인 28세 G1 여성이 태아 소두증을 보인 이상 초음파로 평가받았다. 임신 1분기 초기에 일주일 동안 발열과 두통이 있었고 근육통, 관절통, 가려운 반구진 발진도 있었지만 약물 없이 호전되었다. 증상 일주일 전 브라질을 여행하며 저녁 대부분 하이킹을 했고 모기기피제는 사용하지 않았다. 만성·선천성 질환 가족력은 없고 철분과 종합비타민을 복용하며 예방접종은 모두 받았다. 음주와 흡연은 하지 않는다. 톡소플라스마 IgM과 IgG 역가는 음성이다. 다음 중 가장 가능성 높은 병원체는?

## 선택지

A. 뎅기 바이러스
B. 풍진 바이러스
C. 톡소플라스마
D. 지카 바이러스

## 해설

임신 초기 브라질 여행과 모기 노출 후 발열·관절통·가려운 반구진 발진이 있었고 이후 태아 소두증이 확인되어, 제시된 선택지 중 지카 바이러스(D)가 가장 적합하다. 임신 중 지카 감염은 태아 뇌와 눈의 손상 및 소두증을 포함한 선천성 지카증후군을 유발할 수 있다. 이를 모든 태아 소두증의 가장 흔한 원인이라고 일반화하지 않으며, 근거가 제시되지 않은 미세소관 형성 억제라는 단일 기전으로 설명하지 않는다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 미표시 실제 검수. 지카가 모든 소두증의 가장흔한 원인이라는 일반화와 미세소관 형성억제 단정 삭제. 브라질노출·발진·태아소두증으로 D 유지.
- https://www.cdc.gov/zika/hcp/clinical-signs/index.html
- https://www.who.int/news-room/fact-sheets/detail/zika-virus

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-test-000123
