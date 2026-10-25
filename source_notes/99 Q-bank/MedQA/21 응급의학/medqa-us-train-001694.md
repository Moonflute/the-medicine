---
type: qbank
schema_version: 1
id: medqa-us-train-001694
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:189b037d461e224384a4266fd5b2b30d4199210b9690b81d0d1391ef515e8f8b
exam: USMLE Step 2/3
language: ko
specialty: 21 응급의학
related_diseases:
  - "increased intracranial pressure"
  - "Cushing triad"
  - "traumatic brain injury"
question_type: management
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzrgrTslZXtla3sp4QgKEluY3JlYXNlZCBpbnRyYWNyYW5pYWwgcHJlc3N1cmUpLm1k
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rh4zsp4Ttg5UgKENvbmN1c3Npb24pLm1k
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
  - ZHJ1ZzowMSDsi6ztmIjqs4QvTm9yZXBpbmVwaHJpbmUubWQ
medical_review_status: evidence-reviewed
medical_reviewed_at: 2026-10-25
---

# MedQA US 임상문제

## 문제

27세 남성이 자전거를 타다 차에 치여 응급실에 내원했다. 기도는 유지되고 활력징후는 안정적이며 경추보호대를 착용했다. 머리 멍과 혼란, 글래스고 혼수척도 11점, 매우 불규칙한 호흡이 있다. 체온은 97.5°F (36.4°C), 혈압은 172/102 mmHg, 맥박은 55회/분, 호흡수는 22회/분으로 불규칙하고 산소포화도는 94%이다. 다음 중 활력징후를 호전시킬 가능성이 가장 높은 중재는 무엇인가?

## 선택지

A. 머리 올리기, 노르에피네프린, 만니톨, 과호흡
B. 머리 올리기, 진정, 만니톨, 과호흡
C. 머리 내리기, 진정, 고장성 식염수, 과호흡
D. 머리 내리기, 진정, 고장성 식염수, 저환기

## 해설

고혈압·서맥·불규칙 호흡은 외상 후 위험한 두개내압 상승과 뇌탈출 가능성을 시사한다. 주어진 선지 중 머리 올리기·적절한 진정·고삼투압 치료와 과호흡을 포함한 B가 구조치료 조합에 가장 가깝다. 기도·산소화·혈압을 확보하고 신경외과적 원인 치료를 긴급히 진행한다. 과호흡은 뇌혈류를 줄여 허혈을 악화시킬 수 있으므로 뇌탈출 임박 또는 급성 악화 때 잠시 사용하는 교량조치이며, 모든 TBI에 예방적으로 오래 시행하는 치료가 아니다. 혈압·혈량을 확인하며 만니톨을 사용한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 쿠싱 삼징을 동반한 급성 악화에서 B의 일시적 뇌압 구조조치를 유지하되 예방적·지속적 과호흡을 보편적 치료로 권하지 않도록 수정했다.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001694
