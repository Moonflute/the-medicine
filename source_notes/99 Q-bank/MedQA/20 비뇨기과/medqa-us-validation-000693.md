---
type: qbank
schema_version: 1
id: medqa-us-validation-000693
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:494652affb21b1b2b071a5741a5c002251add3715f1eaf85b73e3ff1b87f00ae
exam: USMLE Step 2/3
language: ko
specialty: 20 비뇨기과
related_diseases:
  - "수술 후 요폐"
  - "방광 팽창"
  - "급성 신손상"
question_type: investigation
related_disease_slugs:
  - MDUg7Iug7J6lL-q4ieyEsSDsvantjKUg7IaQ7IOBIChBS0kpIChBY3V0ZSBLaWRuZXkgSW5qdXJ5KS5tZA
difficulty: complex
answer: B
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

자궁근종으로 복강경 자궁절제술을 받은 지 2일 된 52세 여성이 하복부 통증과 불편감으로 진료를 받으러 왔다. 수술은 전신마취하에 시행되었고 출혈은 적었으며 수술 중 합병증은 없었다. 오크렐리주맙으로 잘 조절되는 다발성경화증(MS)이 있으며 마지막 재발은 약 7년 전 상지 감각이상·근력저하였다. 수술 후 크레아티닌은 3.1 mg/dL이고 치골상부 압통이 있다. 가장 적절한 다음 단계는?

## 선택지

A. 베타네콜 투여
B. 방광 스캔
C. 정맥 수액
D. 요역동학검사

## 해설

수술 후 치골상부 불편감과 크레아티닌 상승이 있어 요정체에 의한 폐쇄성 신손상 가능성을 우선 확인한다. 방광스캔(B)은 잔뇨를 비침습적으로 평가하는 적절한 다음 단계이다. 마취·수술 영향과 기존 MS에 따른 배출장애 가능성을 고려한다. 잔뇨가 없거나 신손상이 지속되면 요관 손상/상부요로폐쇄 등 다른 술후 원인도 평가해야 하며, 스캔만으로 모든 원인이 확진되는 것은 아니다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 한국어 요약이 누락한 MS/ocrelizumab 및 안정경과 병력을 원문대로 복원. 술후요정체 감별의 방광스캔 B 유지.
- 공식/학회 근거: https://www.niddk.nih.gov/health-information/urologic-diseases/urinary-retention/diagnosis

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000693
