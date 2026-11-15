---
type: qbank
schema_version: 1
id: medqa-us-validation-000131
source: MedQA-US
source_split: validation
source_meta: step2&3
source_hash: sha256:b05a8e946365047335a4d2ca7a90962659a31bcb73529e949009bd8b7e3ba201
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "만성 경막하혈종"
  - "와파린"
  - "두부 외상"
  - "Chronic subdural hematoma"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rp4zshLEg6rK966eJ7ZWYIOy2nO2YiCAoQ2hyb25pYyBzdWJkdXJhbCBoZW1hdG9tYSkubWQ
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
related_drug_slugs:
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

와파린을 복용하는 70세 환자가 가벼운 낙상 한 달 뒤부터 혼돈과 한쪽 위약이 점점 심해졌다. CT에서 얇은 막을 따라 넓게 퍼진 만성 경막하혈종과 정중선 이동이 보인다. 항응고 관리를 병행할 때 대표적인 수술은?

## 선택지

A. 천공 배액술
B. 응급 뇌실복강 단락술
C. 경동맥 내막절제술
D. 증상과 종괴 효과가 있어도 영상 추적만 시행

## 해설

증상과 종괴 효과가 있는 만성 경막하혈종은 신경외과 수술이 필요할 수 있다. 천공을 통한 혈종 배액은 대표적인 방법이다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경막하혈종 치료 선택 B 유지. 치료범위 INR 자체를 비정상 수치로 오인하지 않도록 영상/응고관리 전제 보완.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000131
- https://pubmed.ncbi.nlm.nih.gov/39523882/
