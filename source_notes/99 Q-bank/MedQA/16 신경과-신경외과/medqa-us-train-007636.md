---
type: qbank
schema_version: 1
id: medqa-us-train-007636
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:acd1c4cdb83e5d9566b9fe47f02ad215d7f83a04c2f2fed5dcef754f91eafb66
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "당뇨병성 동안신경 마비"
  - "동공 보존 제3뇌신경 마비"
  - "복시"
  - "눈꺼풀처짐"
question_type: investigation
related_disease_slugs:
  - MDQg64K067aE67mEL-uLueuHqOuzkSAoRGlhYmV0ZXMgTWVsbGl0dXMpLm1k
difficulty: complex
answer: A
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: @cf/openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
---

# MedQA US 임상문제

## 문제

당뇨병이 있는 68세 환자에게 갑자기 복시와 한쪽 눈꺼풀처짐이 생겼다. 해당 눈은 가쪽과 아래를 향하지만 양쪽 동공 크기와 빛반사는 정상이다. 급성 제3뇌신경마비 평가에서 다음으로 할 일은?

## 선택지

A. 동공이 보존돼도 동맥류를 배제하도록 신속히 CTA 또는 MRA를 시행한다
B. 당뇨병성 마비로 확정하고 영상 없이 추적한다
C. 동공이 커지는 경우에만 혈관영상을 시행한다
D. 시야검사만 하고 수개월 뒤 재평가한다

## 해설


동공 보존은 미세혈관성 마비의 단서가 될 수 있지만 동맥류를 완전히 배제하지 못한다. 새로 생긴 제3뇌신경마비에서 신속한 혈관영상이 필요하다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-007636
- https://pubmed.ncbi.nlm.nih.gov/33323979/
