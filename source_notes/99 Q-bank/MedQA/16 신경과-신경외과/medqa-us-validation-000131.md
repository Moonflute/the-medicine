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
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9BbHRlcGxhc2UubWQ
  - ZHJ1ZzowOSDtmIjslaHCt-ydkeqzoC9XYXJmYXJpbi5tZA
  - ZHJ1ZzoxMiDsi6Dqsr3Ct-ygleyLoC9Eb25lcGV6aWwubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

64세 남성이 2주간 점점 심해지는 혼돈과 기억력 저하로 진료를 받으러 왔다. 과거 낙상과 두피 멍, 와파린 복용력이 있으며 INR 2.5였다. 가장 가능성 높은 진단의 치료는?

## 선택지

A. 알테플라제
B. 천공배액술
C. 도네페질
D. 티아민 보충

## 해설

항응고제 복용 고령자에서 낙상 뒤 수주에 걸친 두통·구토·인지변화는 경막하혈종을 의심하게 한다. 영상으로 확인한 증상성 만성 경막하혈종의 치료 선택지에는 천공 배액술(B)이 있다. INR 2.5는 심방세동에서 치료범위일 수 있지만 두개내출혈 위험을 없애지는 않는다. 실제 수술 결정과 항응고 역전은 영상, 증상, 출혈 중증도에 맞춰 신경외과와 긴급 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 경막하혈종 치료 선택 B 유지. 치료범위 INR 자체를 비정상 수치로 오인하지 않도록 영상/응고관리 전제 보완.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf
- 공식/학회 근거: https://www.jacc.org/doi/10.1016/j.jacc.2020.04.053

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-validation-000131
