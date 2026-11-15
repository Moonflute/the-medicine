---
type: qbank
schema_version: 1
id: medqa-us-train-003696
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d4dd97170f839430d1e15e8fd775b4f255fbd986d6bdabbbaa2b6339f359bea3
exam: USMLE Step 2/3
language: ko
specialty: 03 소화기
related_diseases:
  - "hepatic adenoma"
  - "oral contraceptive exposure"
  - "benign liver tumor"
  - "glycogen and lipid accumulation"
related_disease_slugs:
  - MDQg64K067aE67mEL-ydtOyDgeyngOyniO2YiOymnSAoRHlzbGlwaWRlbWlhKS5tZA
question_type: management
difficulty: simple
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
medical_review_status: content-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

에스트로겐 함유 피임약을 복용하는 45세 여성의 MRI에서 3.2 cm 간세포선종이 확인됐다. 무증상이고 출혈이나 악성 고위험 소견은 없다. 우선 할 일은?

## 선택지

A. 즉시 간 절제술
B. 피임약을 유지하고 추적 영상을 하지 않는다.
C. 에스트로겐 함유 피임약을 중단하고 영상으로 추적한다.
D. 예방적 간동맥 색전술

## 해설


고위험 소견이 없는 여성의 5 cm 미만 간세포선종은 에스트로겐 노출을 중단하고 크기 변화를 영상으로 추적할 수 있다. 크기가 커지거나 고위험 소견이 나타나면 치료 방침을 다시 정한다.

## 검수 근거

- 검수일: 2026-10-25
- 검수 범위: 현재 한국어 본문·4개 선지·정답·해설을 읽고 eligible.jsonl의 동일 ID 영어 원문·선지·정답과 대조. 휴리스틱 플래그는 판정 근거로 자동 적용하지 않음.
- 판정: 담관/portal tract 없는 간선종 병리와 장기 경구피임약 노출 C의 연관이 타당.
- 외부 임상 근거를 확인한 판정이 아님. 영어 원문과 현재 본문·선지·정답·해설의 내용 대조 및 자료 완전성만 검토.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-003696
- https://doi.org/10.14309/ajg.0000000000002857
