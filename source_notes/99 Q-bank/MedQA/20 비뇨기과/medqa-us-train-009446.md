---
type: qbank
schema_version: 1
id: medqa-us-train-009446
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fd8be17b94a8c9c4a83091ed79e3ae212efefcbc477481f934201f6219780c11
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "urethral injury"
  - "요도 손상"
  - "pelvic fracture"
question_type: investigation
related_disease_slugs:
  - MjAg67mE64eo6riw6rO8L-yalOuPhCDshpDsg4EgKFVyZXRocmFsIGluanVyeSkubWQ
difficulty: complex
answer: A
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

67세 남자가 교통사고 후 응급실에 왔다. 양쪽 고관절 통증을 호소하지만 활력징후는 정상이고 혈역학적으로 안정적이다. 골반 압박검사는 양성이다. 외부 생식기는 정상이나 요도구에 피가 묻어 있고 음낭 기저부에 멍이 있다. 직장수지검사에서 전립선이 상방 전위되어 가동성 있게 만져진다. X선에서 골반골절이 보인다. 초기로 가장 적절한 조치는 무엇인가?

## 선택지

A. 주사 전 신장·요관·방광 촬영을 포함한 역행성 요도조영술
B. 폴리 카테터 삽입
C. 치골상 방광창냄술
D. 응급 수술실에서 IV 인디고 카민으로 요도 손상 확인

## 해설

골반골절에 요도구 출혈과 음낭 멍이 있어 요도 손상을 의심한다. 안정된 상태에서 A, 역행성 요도조영술로 요도 손상을 평가하고 맹목적인 Foley 삽입을 먼저 하지 않는다. DRE의 높은 전립선 위치는 보조 단서일 뿐 정확도가 제한되어 그 소견만으로 진단하지 않는다. Ballotable은 가동성 있는 촉지감을 뜻하며 농양의 파동을 확인했다는 의미가 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 혈역학 안정 골반골절·요도구 출혈의 RUG A 유지; ballotable을 농양의 파동으로 오역한 진찰 문구 교정.
- 공식/학회 근거: https://uroweb.org/guidelines/urological-trauma/chapter/urogenital-trauma-guidelines

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009446
