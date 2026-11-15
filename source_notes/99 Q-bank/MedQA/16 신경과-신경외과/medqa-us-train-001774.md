---
type: qbank
schema_version: 1
id: medqa-us-train-001774
source: MedQA-US
source_split: train
source_meta: step2&3
source_hash: sha256:fbf67f166760287733577bfa89208944ff0fedfebc5d781fa40aebce2045b3a0
exam: USMLE Step 2/3
language: ko
specialty: 16 신경과-신경외과
related_diseases:
  - "basilar skull fracture"
  - "cerebrospinal fluid rhinorrhea"
  - "halo sign"
question_type: investigation
related_disease_slugs:
  - MTYg7Iug6rK96rO8LeyLoOqyveyZuOqzvC_rkZDqsJzsoIAg6rOo7KCIIChCYXNhbCBza3VsbCBmcmFjdHVyZSkubWQ
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

24세 환자가 두부외상 뒤 맑은 콧물을 흘리고 양쪽 눈 주위에 멍이 생겼다. 의식은 명료하지만 두개저골절과 뇌척수액 누출이 의심된다. 초기 영상은?

## 선택지

A. 두개골 단순 X선
B. 경동맥 도플러
C. 외래 뇌 MRI만 예약
D. 두개저를 포함하는 응급 비조영 두부 CT

## 해설

외상 뒤 맑은 비루와 양쪽 눈둘레 멍은 두개저골절의 단서다. 의식이 명료해도 CT로 골절과 두개내 손상을 확인한다. 필요하면 뇌척수액 누출 자체를 추가 평가한다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 전두개저 외상성 CSF 비루와 눈둘레 멍 B를 유지하되 halo sign 단독 확진 및 Battle sign 무관이라는 오류를 제거한다.
- 공식/학회 근거: https://www.nice.org.uk/guidance/ng232/chapter/Recommendations

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001774
- https://www.nice.org.uk/guidance/ng232/chapter/recommendations
- https://acsearch.acr.org/docs/69481/Narrative/
