---
type: qbank
schema_version: 1
id: medqa-us-train-006667
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:08291f42dfb952c3e8544ee839ac9ecd7c23f94882f93b2e461a96965a8c4fd2
exam: USMLE Step 2/3
language: ko
specialty: 18 안과
related_diseases:
  - "일과성 흑암시"
  - "경동맥 협착"
  - "망막 색전"
question_type: management
related_disease_slugs:
  - MTgg7JWI6rO8L-yViOqzvC5tZA
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_qsr3rj5nrp6Ug7ZiR7LCp7KadIChDYXJvdGlkIGFydGVyeSBzdGVub3NpcykubWQ
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_tl4jtmIjshLEg64eM7KG47KSRIChJc2NoZW1pYyBzdHJva2UpLm1k
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
related_drug_slugs:
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXNwaXJpbi5tZA
  - ZHJ1ZzowMSDsi6ztmIjqs4QvQXRvcnZhc3RhdGluLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGFiZXRhbG9sLm1k
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTGlzaW5vcHJpbC5tZA
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

76세 환자의 오른눈에 검은 커튼이 내려온 듯 시야가 가려졌다가 5분 만에 회복됐다. 안저에 망막 색전이 의심되고 오른쪽 경동맥에 잡음이 있다. 다음 조치는?

## 선택지

A. 증상이 없어졌으므로 일상 추적만 한다
B. 망막 일과성 허혈로 보고 응급 뇌졸중·두경부 혈관 평가를 진행한다
C. 안구 윤활제를 쓰고 다시 나타나면 진찰한다
D. 편두통으로 확정하고 트립탄을 처방한다

## 해설

갑작스럽고 일과성인 무통 단안 시력소실은 망막 허혈로 취급한다. 회복됐어도 뇌졸중 위험과 경동맥·심장 색전원을 신속히 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경동맥 duplex D는 유지하며 일과성 망막 허혈의 응급 뇌·혈관 평가를 해당 검사 하나로 축소하지 않도록 보완.
- 공식/학회 근거: https://www.strokebestpractices.ca/recommendations/acute-stroke-management/triage-and-initial-diagnostic-evaluation-of-transient-ischemic-attack-and-non-disabling-stroke

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-006667
- https://pubmed.ncbi.nlm.nih.gov/33677974/
- https://www.aao.org/education/preferred-practice-pattern/retinal-ophthalmic-artery-occlusions-ppp
