---
type: qbank
schema_version: 1
id: medqa-us-train-010023
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:d18ce9c421ae92eaf32bc0750fdf784d337b193e3d019b09104d63407cf3863c
exam: USMLE Step 2/3
language: ko
specialty: 04 내분비
related_diseases:
  - "당뇨병성 케톤산증"
  - "음이온차"
  - "치료 종료 기준"
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkeyEsSDsvIDthqTsgrDspp0gKERLQSkgKERpYWJldGljIEtldG9hY2lkb3NpcykubWQ
question_type: management
difficulty: complex
answer: "A"
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: "manual-reviewed"
medical_review_status: "evidence-reviewed"
medical_reviewed_at: 2026-10-25
publication_status: "published"
publication_reason: "직접 재검수 후 복구: 음이온차 단독 대신 DKA 해소 기준 교정."
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
curation_status: "revised"
curation_reason: "음이온차 단독 대신 DKA 해소 기준 교정."
curation_reviewed_at: "2026-10-25"
curation_disposition: "selected"
wrong_notes_review_status: "reviewed"
---

# MedQA US 임상문제

## 문제

27세 남성이 전날부터 시작된 복통, 다뇨, 졸림으로 가족과 함께 응급실에 내원했다. 2년 전 제1형 당뇨병을 진단받았고 2일 전 인슐린이 떨어졌다. 체온 36.8°C, 혈압 102/69 mmHg, 맥박 분당 121회이다. 기면 상태이며 호흡이 빠르고 깊다. 반발통이나 경직 없이 전반적인 경미한 복부 압통이 있다. 혈당은 480 mg/dL이다. 중환자실에 입원해 치료를 시작했다. 다음 중 이 환자 상태의 호전 기준은?

## 선택지

A. 혈중 beta-hydroxybutyrate <0.6 mmol/L이고, 정맥 pH ≥7.3 또는 HCO3 ≥18 mmol/L
B. 중탄산염 <10 mEq/L
C. 혈액요소질소 증가
D. 혈청 아세톤 소실

## 해설

인슐린 중단, 심한 고혈당, 탈수와 깊은 호흡은 DKA를 시사하며 ketone과 산염기 상태 확인이 필요하다. DKA의 해소 기준은 혈중 beta-hydroxybutyrate <0.6 mmol/L와 산증의 회복(pH ≥7.3 또는 HCO3 ≥18 mmol/L)이다. 수액 후 고염소성 산증이 남을 수 있어 음이온차만으로 판단하지 않는다. 소변·혈청 아세톤 검사 음성만으로 회복을 확정하지 않는다.

## 검수 근거

- 검수일: 2026-10-25
- 판정: 음이온차 단독 대신 DKA 해소 기준 교정.
- 검수 범위: evidence-reviewed. 근거 링크가 없는 항목을 최신 가이드라인 전면 대조 완료로 간주하지 않는다.
- https://pmc.ncbi.nlm.nih.gov/articles/PMC11272983/

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-010023

## 오답 포인트

<!-- No separate wrong-option notes: explanation covers the tested distinction. -->
