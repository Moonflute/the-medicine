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
explanation_status: "manual-reviewed"
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

중증 두부 외상 환자의 의식이 급격히 떨어지고 한쪽 동공이 커졌다. 기도는 확보했고 혈압이 낮아 순환 소생 중이다. 신경외과 수술을 준비하며 두개내압을 일시적으로 낮출 약은?

## 선택지

A. 정맥 덱사메타손
B. 고장성 식염수
C. 정맥 푸로세미드 단독
D. 저장성 수액

## 해설

뇌탈출이 임박했다면 신경외과적 원인 치료를 준비하면서 고삼투압 치료를 고려한다. 저혈압이 있으면 삼투성 이뇨로 혈압을 더 떨어뜨릴 수 있는 만니톨보다 고장성 식염수가 유리할 수 있다.

## 검수 근거

- 검수일: 2026-10-25. 영어 원문과 한국어 본문·네 선지·정답·해설을 개별 대조하였다. 쿠싱 삼징을 동반한 급성 악화에서 B의 일시적 뇌압 구조조치를 유지하되 예방적·지속적 과호흡을 보편적 치료로 권하지 않도록 수정했다.
- 공식/학회 근거: https://ww2.facs.org/media/vgfgjpfk/best-practices-guidelines-traumatic-brain-injury.pdf

## 출처

- MedQA-US (GBaker/MedQA-USMLE-4-options, CC BY 4.0)
- 원본 ID: medqa-us-train-001694
- https://pmc.ncbi.nlm.nih.gov/articles/PMC7272487/
