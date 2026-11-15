---
type: qbank
schema_version: 1
id: medqa-us-train-008244
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:9be520501bfccaaa0a77be16beebce11dac7f5a76ceb665f993c1e3d0c6e70c2
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "medullary thyroid carcinoma"
  - "RET mutation"
  - "MEN2"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: investigation
difficulty: standard
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
---

# MedQA US 임상문제

## 문제

45세 남성이 갑상선 수질암으로 처음 진단됐다. 부모와 형제 중 알려진 갑상선암이나 내분비 종양 환자는 없다. 가족의 위험 평가에도 영향을 주는 다음 조치는?

## 선택지

A. 혈연가족 모두에게 갑상선 예방절제 권유
B. 환자에게 유전상담 후 생식세포 RET 검사
C. 환자의 종양 BRAF 검사로 유전 위험 배제
D. 가족력이 없으므로 유전검사 없이 종료

## 해설


가족력이 없어도 유전성 갑상선 수질암이 배제되지 않는다. 수질암을 진단받으면 생식세포 RET 검사를 고려하고, 병적 변이가 확인되면 혈연가족의 단계적 검사를 안내한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008244 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: RET 원발성이 아닌 원암유전자 기능획득 변이. 초음파만으로 냉결절 판정 불가·calcitonin 단위 원문 이상을 명시, MEN2 수술 전 갈색세포종 평가 보완.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC4490627/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008244
