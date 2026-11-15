---
type: qbank
schema_version: 1
id: medqa-us-train-008026
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:437cac979114ab8697fea3d2c79f766885c15d7095519a89a1282e4c8c1f65a4
exam: USMLE Step 2/3
language: ko
specialty: 11 외과
related_diseases:
  - "postoperative ileus"
  - "opioid-induced ileus"
  - "bowel motility"
  - "Postoperative ileus"
related_disease_slugs: []
question_type: management
difficulty: complex
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
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

복부 수술 4일째인 여성이 오피오이드 진통제 사용 중 복부팽만을 호소한다. CT에서 소장과 대장이 고르게 늘었지만 이행점이나 누출은 없다. 전해질은 정상이고 활력도 안정적이다. 장 운동 회복을 돕는 조치는?

## 선택지

A. 기존 오피오이드 용량을 올린다
B. 마비성 장폐색에 곧바로 네오스티그민을 정맥투여한다
C. 오피오이드를 줄이고 다른 진통법과 조기 보행을 병행한다
D. 소장폐색으로 보고 유착을 풀기 위해 개복한다

## 해설


뚜렷한 이행점 없이 장 전체가 늘어나면 수술 후 마비성 장폐색을 고려한다. 가능한 범위에서 오피오이드를 줄이고 보행과 전해질 관리를 병행한다. 악화하면 기계적 폐색이나 수술 합병증을 다시 확인한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문 medqa-us-train-008026 및 본문·선택지·정답·해설을 직접 대조했다.
- 판정: 수술4일째 전장관 가스·장음소실·hydromorphone 사용은 수술후 ileus에 부합하고 opioid 감소 B가 적절하다. 장폐색/합병증 평가와 진통 대체를 병행하는 범위에서 원문·해설 일치.
- 범위: evidence-reviewed. 전수 진료지침 승인으로 해석하지 않는다.
- https://fascrs.org/ascrs/media/files/Education/2023-Enhanced-Recovery-CPG.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-008026
- https://doi.org/10.1007/s00464-022-09758-x
