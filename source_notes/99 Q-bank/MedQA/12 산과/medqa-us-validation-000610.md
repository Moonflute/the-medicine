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
question_type: prognosis
related_disease_slugs:
  - MDUg7Iug7J6lL-yalOuhnOqwkOyXvC5tZA
difficulty: standard
answer: D
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

임신 33주 4일인 32세 여성(임신 2회, 출산 2회)이 미열, 가벼운 요통, 배뇨통으로 응급실에 왔다. 우측 늑골척추각 압통, 소변검사에서 백혈구 에스터레이스와 아질산염 양성이며 세프트리악손 정맥주사를 위해 입원했다. 이 상태에서 위험이 증가하는 것은?

## 선택지

A. 저체중아
B. 전자간증
C. 산후출혈
D. 조산

## 해설

늑골척추각 압통·발열·농뇨는 임신 중 신우신염에 합당하다. 염증 반응은 조기 자궁수축/조산(D) 위험을 높이며 특정33주 이후에만 나타나는 현상은 아니다. 임신 UTI는 저체중 등 다른 불량 임신 결과와도 연관되지만 본문이 강조하는 급성 합병증은 조산이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 본문·선지·정답과 대조.
- 검수 판단: 33주 이후에만 조산 위험이 증가한다는 불필요한 한정 삭제.
- https://www.acog.org/clinical/clinical-guidance/clinical-consensus/articles/2023/08/urinary-tract-infections-in-pregnant-individuals

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000610
