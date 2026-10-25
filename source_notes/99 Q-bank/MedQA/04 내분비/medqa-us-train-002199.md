---
type: qbank
schema_version: 1
id: medqa-us-train-002199
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:0bc0667729585b59d2250aaa0020701310fc9a1a84c55d47a74abf2aa5f35e47
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "type 2 diabetes mellitus"
  - "basal insulin"
  - "insulin glargine"
related_disease_slugs:
  - MDQg64K067aE67mEL-ygnDLtmJUg64u564eo67ORIChUeXBlIDIgRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
question_type: management
difficulty: simple
answer: A
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9JbnN1bGluQXNwYXJ0Lm1k
  - ZHJ1ZzowNSDrgrTrtoTruYTCt-uMgOyCrC9TaXRhZ2xpcHRpbi5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

45세 남성이 제2형 당뇨병으로 가정의학과 추적 진료를 받으러 왔다. 메트포르민, 시타글립틴, 글리피지드의 3제 요법을 사용 중이지만 최근 HbA1c가 8.1%이다. 다음 중 이 환자에게 가장 적절한 다음 단계는?

## 선택지

A. 글리피지드를 중단하고 취침 전 인슐린 글라르진 10단위를 시작한다
B. 메트포르민을 중단하고 식사 때 인슐린 아스파트를 시작한다
C. 시타글립틴을 중단하고 기저-식사 인슐린 요법을 시작한다
D. 메트포르민을 중단하고 취침 전 인슐린 글라르진 10단위를 시작한다

## 해설

제시된 선택지 중 A는 metformin을 유지하면서 저혈당 위험이 있는 glipizide를 중단하고 기저 인슐린을 추가하므로 합리적이다. 기저 인슐린 10 U/일은 가능한 시작 방식이며 이후 혈당·저혈당에 따라 조절한다. 그러나 A1c 8.1%만으로 반드시 인슐린을 시작해야 하는 것은 아니다. 중증 고혈당이나 인슐린 결핍이 없다면 GLP-1 기반 치료 등도 환자별로 검토하며, 이 문항에는 해당 선택지가 없다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: A1c 8.1만으로 인슐린 필수라고 단정하지 않고 선택지상 SU 중단·기저인슐린 A의 근거 및 대안을 명시.
- https://diabetesjournals.org/care/article/49/Supplement_1/S183/163934/9-Pharmacologic-Approaches-to-Glycemic-Treatment

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-002199
