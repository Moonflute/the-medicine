---
type: qbank
schema_version: 1
id: medqa-us-train-004096
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:28fa044ef9f3d71a9b870fe2678946dc90fb5def1239624f33dcda34a38da3d3
exam: USMLE Step 2/3
language: ko
specialty: 13 부인과
related_diseases:
  - "저등급 편평상피내병변"
  - "HPV"
  - "질확대경검사"
  - "Low-grade squamous intraepithelial lesion"
question_type: management
related_disease_slugs: []
difficulty: standard
answer: C
translation_status: machine-verified
explanation_status: "manual-reviewed"
translation_model: codex-direct
translation_prompt_version: codex-direct-ko-v1
translated_at: 2026-07-18
review_status: machine-verified
explanation_model: openai/gpt-oss-120b
explanation_prompt_version: explanation-ko-v1
---

# MedQA US 임상문제

## 문제

56세 여성이 추적 없이 지내다 다시 검사를 받았다. 2년 전 세포검사는 LSIL이었고 이번에도 LSIL이며 고위험 HPV 양성이다. 최근 음성 HPV 기반 검사나 정상 질확대경 결과는 없다. 다음 처치는?

## 선택지

A. 3년 뒤 국가검진만 시행
B. 즉시 자궁경부 절제 치료
C. 질확대경검사로 의심 부위를 평가하고 필요시 표적생검
D. 질 에스트로겐만 사용하고 병변 평가는 하지 않음

## 해설


최근 위험도를 낮출 검사 결과가 없는 지속 LSIL과 고위험 HPV 양성은 질확대경 평가가 필요한 조합이다. 현재 결과만으로 침윤암을 확진하거나 즉시 절제하지는 않는다.

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-004096
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7147428/
- https://www.ejgo.org/DOIx.php?id=10.3802%2Fjgo.2026.37.e90
