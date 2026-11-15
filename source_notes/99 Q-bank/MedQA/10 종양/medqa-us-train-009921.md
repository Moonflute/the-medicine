---
type: qbank
schema_version: 1
id: medqa-us-train-009921
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:220d70aaea6b89127dcabda25955c5b21906e28df7e8e899cc321b9a8a65e4de
exam: USMLE Step 2/3
language: ko
specialty: 10 종양
related_diseases:
  - "갑상선 수질암"
  - "칼시토닌"
  - "반데타닙"
related_disease_slugs:
  - MDQg64K067aE67mEL-qwkeyDgeyDmCDsho3sp4jslZQgKFRoeXJvaWQgTWVkdWxsYXJ5IENhcmNpbm9tYSkubWQ
question_type: investigation
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: manual-reviewed
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: manual-reviewed
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzoxMCDsooXslpEvVGFtb3hpZmVuLm1k
---

# MedQA US 임상문제

## 문제

갑상선 수질암으로 확진된 54세 환자에게 갑상선암이나 갈색세포종 가족력은 없다. 가족성 종양증후군 여부와 가족 검사 필요성을 평가할 검사는?

## 선택지

A. 갑상선글로불린만 재측정
B. BRAF V600E 체세포 검사만 시행
C. 생식세포 RET 유전자 검사
D. 방사성 요오드 전신스캔

## 해설


갑상선 수질암은 가족력이 없어도 유전성일 수 있다. 생식세포 RET 검사로 유전성 여부를 확인하고 양성이면 다른 내분비종양 위험과 가족 검사를 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-009921 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 전이성 증상성 MTC에서 vandetanib D는 유효한 선택지이나 모든 MTC의 RET 변이 및 유일 최선 치료로 단정한 오류 교정.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022405s023lbl.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009921
- https://doi.org/10.1089/thy.2014.0335
