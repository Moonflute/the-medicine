---
type: qbank
schema_version: 1
id: medqa-us-validation-000350
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:e107208e4ae56d019a0282dea2cee4266f75095848139b0f5e2cd7e9e47687f1
exam: USMLE Step 2/3
language: ko
specialty: 14 소아청소년과
related_diseases:
  - "메켈 게실"
  - "무통성 혈변"
  - "이소성 위점막"
question_type: diagnosis
related_disease_slugs:
  - MTQg7IaM7JWE7LKt7IaM64WE6rO8L-yGjOyVhOqzvCDqsIHroaAv66mU7LyIIOqyjOyLpCAoTWVja2VsJ3MgRGl2ZXJ0aWN1bHVtKS5tZA
difficulty: simple
answer: D
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

8개월 남아가 5일간 지속된 혈변으로 진료를 받으러 왔다. 부모에 따르면 복통은 없고 과거력과 신체진찰도 특이사항이 없다. 검사에서 경도의 철결핍이 보인다. 이 환자의 진단에 특징적인 것은?

## 선택지

A. 신생아에게도 생길 수 있지만 청소년에서 더 흔하다
B. 인구의 1% 미만에 발생하는 드문 질환이다
C. 남녀가 동일하게 영향을 받는다
D. 진단검사로 이소성 위 조직의 위치를 확인한다

## 해설

무통성 소아 혈변·철결핍에서 Meckel 게실을 의심한다. Tc-99m pertechnetate 스캔은 이소성 위점막을 검출하므로 D가 맞다. 원문의 '기술튬'은 테크네튬의 오기이며, 모든 게실이 스캔에 양성이거나 항상 산분비 조직을 갖는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 테크네튬의 잘못된 음역을 교정하고 이소성 위점막 검출의 D 근거 명확화.
- https://tech.snmjournals.org/content/42/3/163

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000350
