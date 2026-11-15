---
type: qbank
schema_version: 1
id: medqa-us-validation-000610
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:a61328402c436ea695d6f106bf9e79a5b9c53ad540f2ec546ca9925f3a4935f7
exam: USMLE Step 2/3
language: ko
specialty: 12 산과
related_diseases:
  - "임신 중 신우신염"
  - "조산 위험"
  - "요로감염"
question_type: management
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
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
related_drug_slugs:
  - ZHJ1ZzowOCDqsJDsl7wvQ2VmdHJpYXhvbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

임신 33주 산모가 38.8°C 발열, 배뇨통과 오른쪽 옆구리 통증으로 왔다. 늑골척추각 압통과 농뇨가 있다. 신우신염이 의심될 때 초기 치료는?

## 선택지

A. 니트로푸란토인만 처방하고 귀가
B. 입원해 소변배양을 채취하고 신장 조직으로 도달하는 정맥 항생제를 신속히 시작
C. 배양이 양성으로 확인될 때까지 항생제 없이 관찰
D. 경구 포스포마이신 1회만 투여하고 추적하지 않음

## 해설

임신 중 신우신염은 우선 입원해 정맥 항생제로 치료하고 패혈증과 조기진통을 감시한다. 니트로푸란토인과 포스포마이신은 신장 실질 감염 치료에 적합하지 않다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 33주 이후에만 조산 위험이 증가한다는 불필요한 한정 삭제.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000610
- https://pubmed.ncbi.nlm.nih.gov/37473414/
