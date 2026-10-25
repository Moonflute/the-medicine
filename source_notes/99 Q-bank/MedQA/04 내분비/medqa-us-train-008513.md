---
type: qbank
schema_version: 1
id: medqa-us-train-008513
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:8dc8892081a335632cf5373817b4871e8332f5a8d8023df023cc0df41db81349
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 1 diabetes mellitus"
  - "rapid-acting insulin"
  - "insulin lispro"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDHtmJUg64u564eo67ORIChUeXBlIDEgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: complex
answer: B
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluR2xhcmdpbmUubWQ
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluTGlzcHJvLm1k
---

# MedQA US 임상문제

## 문제

14세 남아가 집에서 방향감각을 잃은 뒤 응급실로 급히 이송되었다. 부모는 2일 전까지 잘 지냈으나 병이 나서 여러 차례 구토했다고 한다. 회복 중이라고 생각했지만 오늘 아침부터 방향감각이 없어 보였다. 활력징후는 분당 33회의 얕고 빠른 호흡을 제외하면 정상이다. 혈당은 654mg/dL이고 소변에서 케톤체가 검출된다. 당뇨병성 케톤산증으로 진단되어 수액과 인슐린 치료를 받았고 잘 반응했다. 부모에게 제1형 당뇨병이며 인슐린 치료 방법을 논의한다고 설명했다. 다음 중 식사 시간에 필요한 빠른 작용을 위해 사용할 수 있는 인슐린은 무엇인가?

## 선택지

A. NPH 인슐린
B. 인슐린 리스프로
C. 인슐린 글라진
D. NPH 인슐린과 속효성 인슐린

## 해설


정답 B. Lispro는 빠르게 작용하는 insulin 유사체로 식사 관련 혈당 상승을 조절한다. 허가사항상 식전 15분 이내 또는 식사 직후 투여할 수 있다. NPH는 중간형, glargine은 장시간 작용 기저 인슐린이지 초속효성·중간형 혼합제가 아니다. 제1형 당뇨병에서는 식사 인슐린과 기저 인슐린을 적절히 조합한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008513 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: glargine을 혼합제로 설명한 오류 교정; lispro 식사 시 사용 B 유지.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c8ecbd7a-0e22-4fc7-a503-faa58c1b6f3f

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008513
