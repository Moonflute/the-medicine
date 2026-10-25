---
type: qbank
schema_version: 1
id: medqa-us-train-009101
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:68e794123d19948a98a8d124a81f07f1f20cc2925cc756200adfef96e869c3c6
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "vestibular neuritis"
  - "acute vestibular syndrome"
  - "horizontal nystagmus"
question_type: diagnosis
related_disease_slugs:
  - MTcg7J2067mE7J247ZuE6rO8L-yghOygleyLoOqyveyXvCAoVmVzdGlidWxhciBuZXVyaXRpcykubWQ
difficulty: complex
answer: D
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

33세 남성이 어지럼으로 응급실에 내원했다. 2일 동안 지속적인 불균형감을 느끼고 바닥이 불안정하거나 움직이는 것 같다. 그 외에는 건강하고 다른 진단은 없다. 가족들이 아파 감염되지 않으려고 비타민 C를 복용한다. 체온 98.1°F(36.7°C), 혈압 120/83mmHg, 맥박 73회/분, 호흡수 16회/분, 산소포화도 98%이다. 신체검사에서 수평 안진이 보인다. Dix-Hallpike 수기에서 증상이 유발되지 않고 뇌신경검사도 정상이다. 가장 가능성 높은 진단은 무엇인가?

## 선택지

A. 양성 돌발성 체위성 현훈
B. 메니에르병
C. 척추기저동맥 뇌졸중
D. 전정신경염

## 해설

수일간 지속되는 현훈/불균형감과 수평안진, 청력 증상 부재는 전정신경염(D)에 합당하다. 체위 변화로 수초간만 유발되는 BPPV와는 시간 양상이 다르다. 다만 정상 일반 뇌신경검사나 수평안진만으로 후순환 뇌졸중을 배제하지 못한다. 급성 전정증후군은 숙련된 진찰자가 안구운동·보행 등을 평가하고 중추성 또는 불명확한 소견이면 추가 검사를 해야 한다. 본문은 구역 유무를 명시하지 않았다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전정신경염 D의 임상적 개연성은 유지. 구역이 없다는 invented 소견 및 수평안진만으로 중추성 배제 오류 교정.
- 공식/학회 근거: https://www.saem.org/publications/grace/grace-3

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-009101
